'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, Code, Eye, Rocket } from "lucide-react";

interface AppPreviewProps {
  title: string;
  description: string;
  status: "ready" | "generating";
  onPreview: () => void;
  onViewCode: () => void;
  onDeploy: () => void;
}

export function AppPreview({ title, description, status, onPreview, onViewCode, onDeploy }: AppPreviewProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex items-center justify-center bg-muted/40 aspect-video">
        {status === 'generating' ? (
          <div className="text-center text-muted-foreground">
            <p>Generating preview...</p>
          </div>
        ) : (
          <img src="/placeholder.svg" alt={`${title} preview`} className="object-cover w-full h-full" />
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          {status === 'ready' ? (
            <Badge variant="default">Ready</Badge>
          ) : (
            <Badge variant="secondary">Generating</Badge>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={onPreview}>
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm" onClick={onViewCode}>
            <Code className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button size="sm" onClick={onDeploy}>
            <Rocket className="w-4 h-4 mr-2" />
            Deploy
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}