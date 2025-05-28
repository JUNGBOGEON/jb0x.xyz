import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';
import { portfolioData } from '@/constants/portfolio';

export function PortfolioSection() {
    return (
        <div className="animated-card">
            <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        포트폴리오 & 제작물
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {portfolioData.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.title} className="portfolio-item">
                                    <Card className="hover:bg-muted/50 transition-colors p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-muted-foreground" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    {item.description}
                                                </p>
                                                <div className="flex gap-2">
                                                    {item.technologies.map((tech) => (
                                                        <Badge key={tech} variant="outline" className="text-xs">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}