import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { timelineData } from '@/constants/timeline';
import { AceternityTimeline, AceternityTimelineMobile } from '@/components/ui/aceternity-timeline';

export function TimelineSection() {
    return (
        <div className="animated-card mt-6 md:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        개발 여정
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Desktop Timeline */}
                    <div className="hidden md:block">
                        <AceternityTimeline data={timelineData} />
                    </div>
                    
                    {/* Mobile Timeline */}
                    <AceternityTimelineMobile data={timelineData} />
                </CardContent>
            </Card>
        </div>
    );
}