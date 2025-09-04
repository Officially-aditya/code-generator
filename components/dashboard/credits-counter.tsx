'use client';

import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CreditsCounterProps {
  credits: number;
  maxCredits: number;
  onUpgrade: () => void;
}

export function CreditsCounter({ credits, maxCredits, onUpgrade }: CreditsCounterProps) {
  const percentage = useMemo(() => (credits / maxCredits) * 100, [credits, maxCredits]);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Credits</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold">{credits.toFixed(1)} / {maxCredits}</div>
        <Progress value={percentage} aria-label={`${credits} of ${maxCredits} credits used`} />
        <Button 
          size="sm" 
          className="w-full" 
          onClick={onUpgrade}
        >
          Upgrade
        </Button>
      </CardContent>
    </Card>
  );
}