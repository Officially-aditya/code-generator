import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditsCounter } from "@/components/dashboard/credits-counter";
import { ThemeToggle } from "@/components/theme-toggle";
import { Plus, Folder, Star, Clock, LayoutGrid, List } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                    <path d="M12 2L2 22L12 18L22 22L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-semibold">Vibe Dashboard</span>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center gap-2">
                <ThemeToggle />
                <div className="w-8 h-8 bg-avatar rounded-full flex items-center justify-center text-avatar-foreground text-sm font-semibold">
                  U
                </div>
              </nav>
            </div>
          </div>
        </header>

        <div className="container flex">
          <aside className="lg:col-span-1 space-y-6 py-6 pr-6">
            <CreditsCounter 
              credits={16.8} 
              maxCredits={25} 
              onUpgrade={() => console.log("Upgrade clicked")} 
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Folder className="w-4 h-4 mr-2" />
                  Browse Templates
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Star className="w-4 h-4 mr-2" />
                  Favorites
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Built Netflix Clone</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Started Dashboard</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Updated Kanban</span>
                </div>
              </CardContent>
            </Card>
          </aside>
          <main className="flex-1 py-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}