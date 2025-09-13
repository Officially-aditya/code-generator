"use client";

import {ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { MessagesContainer } from "../components/messages-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/lib/generated/prisma";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";
import { CrownIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import { FileExplorer } from "@/components/file-explorer";

interface Props {
    projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
    const [activeFragment, setActiveFragment ] = useState<Fragment | null>(null);
    const [tabState, setTabState] = useState<"preview" | "code">("preview");

    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={35}
                    minSize={20}
                    className="flex flex-col min-h-0"
                >
                    <Suspense fallback={<p>Loading Project...</p>}>
                        <ProjectHeader projectId={projectId} />
                    </Suspense>
                    <Suspense fallback={<p>Loading messages...</p>}>
                        <MessagesContainer
                            projectId={projectId}
                            activeFragment = {activeFragment}
                            setActiveFragment = {setActiveFragment}
                        />
                    </Suspense>
                </ResizablePanel>
                <ResizableHandle className="hover:bg-primary transition-colors" />
                <ResizablePanel
                    defaultSize={65}
                    minSize={50}
                    className="flex flex-col h-full min-h-0"
                    >
                    <Tabs
                        className="h-full flex flex-col"
                        defaultValue="preview"
                        value={tabState}
                        onValueChange={(value) => setTabState(value as "preview" | "code")}
                    >
                        <div className="w-full flex items-center p-2 border-b gap-x-2">
                        <TabsList className="h-8 p-0 border rounded-md">
                            <TabsTrigger value="preview" className="rounded-md">
                            <EyeIcon /> <span>Demo</span>
                            </TabsTrigger>
                            <TabsTrigger value="code" className="rounded-md">
                            <EyeIcon /> <span>Code</span>
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-x-2">
                            <Button asChild size="sm" variant="default">
                            <Link href="/pricing">
                                <CrownIcon /> Upgrade
                            </Link>
                            </Button>
                        </div>
                        </div>

                        <TabsContent value="preview" className="flex-1 overflow-auto min-h-0">
                        {!!activeFragment && <FragmentWeb data={activeFragment} />}
                        </TabsContent>

                        <TabsContent value="code" className="flex-1 overflow-auto min-h-0">
                        {!!activeFragment?.files && (
                            <FileExplorer
                            files={activeFragment.files as { [path: string]: string }}
                            />
                        )}
                        </TabsContent>
                    </Tabs>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}