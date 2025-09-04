'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppPreview } from "@/components/dashboard/app-preview";
import { Plus, Search, Filter, Grid3X3, List } from "lucide-react";

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data from the original component
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "A streaming video platform with authentication",
      status: "ready" as const,
      createdAt: "2 hours ago",
      thumbnail: null
    },
    {
      id: 2,
      title: "Admin Dashboard", 
      description: "Analytics dashboard with charts and tables",
      status: "generating" as const,
      createdAt: "5 minutes ago",
      thumbnail: null
    },
    {
      id: 3,
      title: "Kanban Board",
      description: "Task management with drag and drop",
      status: "ready" as const,
      createdAt: "1 day ago", 
      thumbnail: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage your AI-generated applications</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <div className="flex border border-border rounded-md">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="rounded-r-none"
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="rounded-l-none border-l"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className={`grid gap-4 ${viewMode === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
        {projects.map((project) => (
          <AppPreview
            key={project.id}
            title={project.title}
            description={project.description}
            status={project.status}
            onPreview={() => console.log("Preview", project.id)}
            onViewCode={() => console.log("View code", project.id)}
            onDeploy={() => console.log("Deploy", project.id)}
          />
        ))}
      </div>
    </div>
  );
}