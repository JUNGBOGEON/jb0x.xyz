import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';
import { techStackData } from '@/constants/techStack';

export function TechStackSection() {
    return (
        <div className="animated-card">
            <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        <span>기술 스택</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {techStackData.map((tech) => (
                            <div 
                                key={tech.name}
                                className={`tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br ${tech.gradient} border ${tech.border} hover:scale-105 transition-all duration-300 group`}
                            >
                                <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <span className="text-sm font-medium text-center">
                                    {tech.name}
                                </span>
                                <span className="text-xs text-muted-foreground text-center mt-1">
                                    {tech.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}