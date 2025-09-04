"use client"

import React, { useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SignOutButton } from '@clerk/clerk-react';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M12 2L2 22L12 18L22 22L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-lg font-semibold text-foreground">Vibe</span>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* Invite button */}
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              <div className="w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                K
              </div>
              Invite
            </button>

            {/* Lightning/Features button */}
            <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors" aria-label="Features">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
              </svg>
            </button>
            
            {/* GitHub Link */}
            <a 
              href="#" 
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              aria-label="GitHub Repository"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Upgrade button */}
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
              </svg>
              Upgrade
            </button>
            
            {/* Publish button */}
            <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Publish
            </button>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-sm hover:bg-accent hover:text-accent-foreground p-2 rounded-md transition-colors"
              >
                <span className="hidden sm:block text-foreground font-medium">John Doe</span>
                <div className="w-7 h-7 bg-purple-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                  J
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto">
                  {/* Turn Pro Section */}
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                        </svg>
                        Turn Pro
                      </div>
                      <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium hover:bg-primary/90 transition-colors">
                        Upgrade
                      </button>
                    </div>

                    {/* Credits Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-foreground">Credits</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span className="text-lg font-semibold text-foreground">16.8</span>
                          <span className="text-sm">left</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9,18 15,12 9,6"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        Daily credits reset at midnight UTC
                      </div>
                    </div>
                  </div>

                  {/* Settings and Invite */}
                  <div className="p-2 border-b border-border">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setIsSettingsOpen(true);
                          setIsProfileOpen(false);
                        }}
                        className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex-1"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        Settings
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors flex-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        Invite
                      </button>
                    </div>
                  </div>

                  {/* Workspaces Section */}
                  <div className="p-2 border-b border-border">
                    <div className="text-sm font-medium text-muted-foreground px-2 py-1 mb-2">
                      Workspaces (3)
                    </div>
                    
                    {/* My Vibe */}
                    <div className="flex items-center justify-between px-2 py-2 hover:bg-accent rounded-md transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                          M
                        </div>
                        <span className="text-sm font-medium text-foreground">My Vibe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">FREE</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6,9 12,15 18,9"/>
                        </svg>
                      </div>
                    </div>

                    {/* khushi's Vibe */}
                    <div className="flex items-center justify-between px-2 py-2 hover:bg-accent rounded-md transition-colors bg-accent/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                          K
                        </div>
                        <span className="text-sm font-medium text-foreground">khushi's Vibe</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">FREE</span>
                    </div>

                    {/* SHUBHAM's Vibe */}
                    <div className="flex items-center justify-between px-2 py-2 hover:bg-accent rounded-md transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">
                          S
                        </div>
                        <span className="text-sm font-medium text-foreground">SHUBHAM's Vibe</span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">FREE</span>
                    </div>

                    {/* Create new workspace */}
                    <button className="w-full flex items-center gap-3 px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors mt-2">
                      <div className="w-8 h-8 border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" x2="12" y1="5" y2="19"/>
                          <line x1="5" x2="19" y1="12" y2="12"/>
                        </svg>
                      </div>
                      Create new workspace
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      Get free credits
                    </button>

                    <button className="w-full flex items-center gap-3 px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="4"/>
                        <line x1="21.17" x2="12" y1="8" y2="8"/>
                        <line x1="3.95" x2="8.54" y1="6.06" y2="14"/>
                        <line x1="10.88" x2="15.46" y1="21.94" y2="14"/>
                      </svg>
                      Help Center
                    </button>

                    <div className="flex items-center justify-between px-2 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"/>
                          <line x1="12" x2="12.01" y1="8" y2="8"/>
                          <line x1="12" x2="12.01" y1="16" y2="16"/>
                        </svg>
                        <span className="text-sm">Appearance</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6"/>
                      </svg>
                    </div>

                    <div className="border-t border-border my-2"></div>

                      <SignOutButton />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl max-h-[95vh] bg-background border border-border rounded-lg shadow-xl overflow-hidden mx-4">
            {/* Settings Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Settings</h2>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-2 hover:bg-accent rounded-md transition-colors text-foreground"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" x2="6" y1="6" y2="18"/>
                  <line x1="6" x2="18" y1="6" y2="18"/>
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row h-[calc(95vh-80px)] md:h-[calc(95vh-100px)]">
              {/* Settings Navigation */}
              <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-muted/30 overflow-y-auto">
                <nav className="p-4 space-y-1">
                   <div className="space-y-1">
                     <button 
                       onClick={() => setActiveSettingsTab('account')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                         activeSettingsTab === 'account' 
                           ? 'bg-accent text-accent-foreground' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                         <circle cx="12" cy="7" r="4"/>
                       </svg>
                       Account
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('appearance')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'appearance' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <circle cx="12" cy="12" r="3"/>
                         <line x1="12" x2="12.01" y1="8" y2="8"/>
                         <line x1="12" x2="12.01" y1="16" y2="16"/>
                       </svg>
                       Appearance
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('notifications')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'notifications' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                         <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                       </svg>
                       Notifications
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('privacy')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'privacy' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M9 12l2 2 4-4"/>
                         <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                         <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                         <path d="M12.02 21a9 9 0 1 1-.02-18 9 9 0 0 1 .02 18z"/>
                       </svg>
                       Privacy & Security
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('integrations')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'integrations' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                       </svg>
                       Integrations
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('billing')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'billing' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <rect width="20" height="14" x="2" y="5" rx="2"/>
                         <line x1="2" x2="22" y1="10" y2="10"/>
                       </svg>
                       Billing
                     </button>
                     <button 
                       onClick={() => setActiveSettingsTab('general')}
                       className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                         activeSettingsTab === 'general' 
                           ? 'bg-accent text-accent-foreground font-medium' 
                           : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                       }`}
                     >
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <circle cx="12" cy="12" r="3"/>
                         <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                       </svg>
                       General
                     </button>
                   </div>
                </nav>
              </div>
              
               {/* Settings Content */}
               <div className="flex-1 overflow-y-auto bg-background">
                 <div className="p-4 md:p-6 space-y-8">
                   {/* Account Settings */}
                   {activeSettingsTab === 'account' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Account Settings</h3>
                       {/* ... keep existing code (account content) */}
                       <div className="space-y-6">
                         {/* Profile Photo */}
                         <div className="flex items-center gap-4">
                           <div className="w-16 h-16 bg-purple-600 text-white rounded-lg flex items-center justify-center font-semibold text-xl">
                             J
                           </div>
                           <div>
                             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors mr-2">
                               Change Photo
                             </button>
                             <button className="border border-border px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                               Remove
                             </button>
                           </div>
                         </div>
                         
                         {/* Personal Information */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                             <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                             <input 
                               type="text" 
                               defaultValue="John" 
                               className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                             />
                           </div>
                           <div>
                             <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                             <input 
                               type="text" 
                               defaultValue="Doe" 
                               className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                             />
                           </div>
                         </div>
                         
                         <div>
                           <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                           <input 
                             type="email" 
                             defaultValue="john.doe@example.com" 
                             className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                           />
                         </div>
                         
                         <div>
                           <label className="block text-sm font-medium text-foreground mb-2">Username</label>
                           <input 
                             type="text" 
                             defaultValue="johndoe" 
                             className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                           />
                         </div>
                         
                         {/* Password Change */}
                         <div className="pt-6 border-t border-border">
                           <h4 className="text-lg font-medium text-foreground mb-4">Change Password</h4>
                           <div className="space-y-4">
                             <div>
                               <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
                               <input 
                                 type="password" 
                                 className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                 placeholder="Enter current password"
                               />
                             </div>
                             <div>
                               <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
                               <input 
                                 type="password" 
                                 className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                 placeholder="Enter new password"
                               />
                             </div>
                             <div>
                               <label className="block text-sm font-medium text-foreground mb-2">Confirm New Password</label>
                               <input 
                                 type="password" 
                                 className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                                 placeholder="Confirm new password"
                               />
                             </div>
                             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                               Update Password
                             </button>
                           </div>
                         </div>
                         
                         {/* Two-Factor Authentication */}
                         <div className="pt-6 border-t border-border">
                           <div className="flex items-center justify-between">
                             <div>
                               <h4 className="text-lg font-medium text-foreground">Two-Factor Authentication</h4>
                               <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security to your account</p>
                             </div>
                             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                               Enable
                             </button>
                           </div>
                         </div>
                         
                         {/* Save Changes */}
                         <div className="pt-6 border-t border-border">
                           <div className="flex gap-3">
                             <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                               Save Changes
                             </button>
                             <button className="border border-border px-6 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                               Cancel
                             </button>
                           </div>
                         </div>
                         
                         {/* Account Deletion */}
                         <div className="pt-6 border-t border-border">
                           <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                             <h4 className="text-lg font-medium text-destructive mb-2">Danger Zone</h4>
                             <p className="text-sm text-muted-foreground mb-4">
                               Once you delete your account, there is no going back. Please be certain.
                             </p>
                             <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-destructive/90 transition-colors">
                               Delete Account
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Appearance Settings */}
                   {activeSettingsTab === 'appearance' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Appearance</h3>
                       <div className="space-y-6">
                         <div>
                           <h4 className="text-lg font-medium text-foreground mb-3">Theme</h4>
                           <div className="flex gap-4">
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="light" name="theme" className="text-primary" />
                               <label htmlFor="light" className="text-sm font-medium text-foreground">Light</label>
                             </div>
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="dark" name="theme" className="text-primary" />
                               <label htmlFor="dark" className="text-sm font-medium text-foreground">Dark</label>
                             </div>
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="system" name="theme" className="text-primary" defaultChecked />
                               <label htmlFor="system" className="text-sm font-medium text-foreground">System</label>
                             </div>
                           </div>
                         </div>
                         
                         <div>
                           <h4 className="text-lg font-medium text-foreground mb-3">Display Density</h4>
                           <div className="flex gap-4">
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="compact" name="density" className="text-primary" />
                               <label htmlFor="compact" className="text-sm font-medium text-foreground">Compact</label>
                             </div>
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="normal" name="density" className="text-primary" defaultChecked />
                               <label htmlFor="normal" className="text-sm font-medium text-foreground">Normal</label>
                             </div>
                             <div className="flex items-center space-x-2">
                               <input type="radio" id="comfortable" name="density" className="text-primary" />
                               <label htmlFor="comfortable" className="text-sm font-medium text-foreground">Comfortable</label>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Notifications Settings */}
                   {activeSettingsTab === 'notifications' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Notifications</h3>
                       <div className="space-y-6">
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Email Notifications</h4>
                             <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                           </div>
                           <input type="checkbox" className="text-primary" defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Push Notifications</h4>
                             <p className="text-sm text-muted-foreground">Receive push notifications in browser</p>
                           </div>
                           <input type="checkbox" className="text-primary" />
                         </div>
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Marketing Emails</h4>
                             <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                           </div>
                           <input type="checkbox" className="text-primary" />
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Privacy & Security Settings */}
                   {activeSettingsTab === 'privacy' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Privacy & Security</h3>
                       <div className="space-y-6">
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Profile Visibility</h4>
                             <p className="text-sm text-muted-foreground">Make your profile public</p>
                           </div>
                           <input type="checkbox" className="text-primary" defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Analytics Tracking</h4>
                             <p className="text-sm text-muted-foreground">Allow us to collect usage analytics</p>
                           </div>
                           <input type="checkbox" className="text-primary" defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Data Export</h4>
                             <p className="text-sm text-muted-foreground">Download all your data</p>
                           </div>
                           <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                             Export Data
                           </button>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Integrations Settings */}
                   {activeSettingsTab === 'integrations' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Integrations</h3>
                       <div className="space-y-6">
                         <div className="border border-border rounded-lg p-6">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                 <svg width="24" height="24" fill="currentColor" className="text-primary-foreground">
                                   <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0z"/>
                                 </svg>
                               </div>
                               <div>
                                 <h4 className="text-base font-medium text-foreground">GitHub</h4>
                                 <p className="text-sm text-muted-foreground">Connect your GitHub account</p>
                               </div>
                             </div>
                             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                               Connect
                             </button>
                           </div>
                         </div>
                         
                         <div className="border border-border rounded-lg p-6">
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-4">
                               <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                 <svg width="24" height="24" fill="currentColor" className="text-white">
                                   <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                                 </svg>
                               </div>
                               <div>
                                 <h4 className="text-base font-medium text-foreground">Slack</h4>
                                 <p className="text-sm text-muted-foreground">Get notifications in Slack</p>
                               </div>
                             </div>
                             <button className="border border-border px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                               Connect
                             </button>
                           </div>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* Billing Settings */}
                   {activeSettingsTab === 'billing' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">Billing</h3>
                       <div className="space-y-6">
                         <div className="border border-border rounded-lg p-6">
                           <h4 className="text-lg font-medium text-foreground mb-4">Current Plan</h4>
                           <div className="flex items-center justify-between">
                             <div>
                               <p className="text-base font-medium text-foreground">Free Plan</p>
                               <p className="text-sm text-muted-foreground">$0/month</p>
                             </div>
                             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                               Upgrade Plan
                             </button>
                           </div>
                         </div>
                         
                         <div className="border border-border rounded-lg p-6">
                           <h4 className="text-lg font-medium text-foreground mb-4">Payment Method</h4>
                           <p className="text-sm text-muted-foreground mb-4">No payment method on file</p>
                           <button className="border border-border px-4 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                             Add Payment Method
                           </button>
                         </div>
                         
                         <div className="border border-border rounded-lg p-6">
                           <h4 className="text-lg font-medium text-foreground mb-4">Billing History</h4>
                           <p className="text-sm text-muted-foreground">No billing history available</p>
                         </div>
                       </div>
                     </div>
                   )}

                   {/* General Settings */}
                   {activeSettingsTab === 'general' && (
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-6">General</h3>
                       <div className="space-y-6">
                         <div>
                           <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                           <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                             <option>English</option>
                             <option>Spanish</option>
                             <option>French</option>
                             <option>German</option>
                           </select>
                         </div>
                         
                         <div>
                           <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
                           <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                             <option>UTC</option>
                             <option>EST</option>
                             <option>PST</option>
                             <option>GMT</option>
                           </select>
                         </div>
                         
                         <div className="flex items-center justify-between">
                           <div>
                             <h4 className="text-base font-medium text-foreground">Auto-save</h4>
                             <p className="text-sm text-muted-foreground">Automatically save your work</p>
                           </div>
                           <input type="checkbox" className="text-primary" defaultChecked />
                         </div>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
