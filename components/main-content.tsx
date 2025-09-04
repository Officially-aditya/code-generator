"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MainContent = () => {
  const [prompt, setPrompt] = useState('');

  const suggestions = [
    { icon: '📺', text: 'Build a Netflix clone', link: '/examples/netflix-clone' },
    { icon: '📊', text: 'Build an admin dashboard', link: '/examples/admin-dashboard' },
    { icon: '📋', text: 'Build a kanban board', link: '/examples/kanban-board' },
    { icon: '📁', text: 'Build a file manager' },
    { icon: '🎬', text: 'Build a YouTube clone' },
    { icon: '🛍️', text: 'Build a store page' },
    { icon: '🏠', text: 'Build an Airbnb clone' },
    { icon: '🎵', text: 'Build a Spotify clone' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      console.log('Building:', prompt);
      // Handle the prompt submission
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setPrompt(suggestionText);
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2L2 22L12 18L22 22L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Build something with Vibe
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create apps and websites by chatting with AI
          </p>
        </div>

        {/* Prompt Input */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <div className="relative bg-card border border-input rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What would you like to build?"
                rows={3}
                className="w-full px-6 py-6 text-lg bg-transparent border-0 rounded-2xl resize-none placeholder:text-muted-foreground focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    handleSubmit(e as any);
                  }
                }}
              />
              
              <div className="flex items-center justify-between px-6 pb-4">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 text-xs bg-muted text-muted-foreground rounded border">⌘</kbd>
                  <span>Enter to submit</span>
                </span>
                
                <button
                  type="submit"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
                  disabled={!prompt.trim()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Suggestion Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {suggestions.map((suggestion, index) => {
            const content = (
              <div
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:bg-accent hover:border-accent-foreground/20 transition-all duration-200 text-left group hover:shadow-sm"
              >
                <span className="text-2xl">{suggestion.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                  {suggestion.text}
                </span>
                {suggestion.link && (
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                )}
              </div>
            );

            if (suggestion.link) {
              return (
                <Link href={suggestion.link} key={index} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                </Link>
              );
            } else {
              return (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="w-full"
                >
                  {content}
                </button>
              );
            }
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Start building your next project with AI assistance
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
