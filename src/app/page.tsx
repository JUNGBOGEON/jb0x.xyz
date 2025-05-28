'use client';

import { useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
    const rootRef = useRef<HTMLDivElement>(null);
    useAnimations();

    return (
        <div
            ref={rootRef}
            className="min-h-screen bg-background text-foreground"
        >
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6">
                <HeroSection />
                <div className="grid gap-6 lg:grid-cols-2">
                    <TechStackSection />
                    <PortfolioSection />
                </div>
                <TimelineSection />
                <GitHubSection />
                <ContactSection />
            </div>
        </div>
    );
}
