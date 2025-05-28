import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { timelineData } from '@/constants/timeline';

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
                    <div className="relative">
                        <div className="hidden md:block">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border timeline-line origin-top"></div>
                            
                            <div className="space-y-12">
                                {timelineData.map((item) => {
                                    const IconComponent = item.icon;
                                    const isLeft = item.side === 'left';
                                    
                                    return (
                                        <div key={item.year} className={`timeline-item ${item.className} relative flex items-center`}>
                                            {isLeft ? (
                                                <>
                                                    <div className="w-1/2 pr-8 text-right">
                                                        <Card className={`bg-card border ${item.current ? 'border-2 border-primary' : 'border-border'} hover:bg-muted/50 transition-colors p-4 relative`}>
                                                            <div className="flex items-center justify-end gap-3 mb-2">
                                                                <div>
                                                                    <h4 className={`font-semibold ${item.current ? 'text-primary' : 'text-foreground'}`}>{item.year}</h4>
                                                                    <p className="text-sm text-muted-foreground">{item.title}</p>
                                                                </div>
                                                                <IconComponent className={`w-6 h-6 ${item.current ? 'text-primary' : 'text-muted-foreground'}`} />
                                                            </div>
                                                            <p className="text-sm text-muted-foreground mb-3">
                                                                {item.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2 justify-end">
                                                                {item.technologies.map((tech) => (
                                                                    <Badge 
                                                                        key={tech} 
                                                                        variant="outline" 
                                                                        className={`text-xs ${item.current ? 'border-primary/50' : ''}`}
                                                                    >
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </Card>
                                                    </div>
                                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${item.current ? 'animate-pulse' : ''}`}></div>
                                                    <div className="w-1/2 pl-8"></div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="w-1/2 pr-8"></div>
                                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                                                    <div className="w-1/2 pl-8">
                                                        <Card className="bg-card border border-border hover:bg-muted/50 transition-colors p-4">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <IconComponent className="w-6 h-6 text-muted-foreground" />
                                                                <div>
                                                                    <h4 className="font-semibold text-foreground">{item.year}</h4>
                                                                    <p className="text-sm text-muted-foreground">{item.title}</p>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground mb-3">
                                                                {item.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {item.technologies.map((tech) => (
                                                                    <Badge key={tech} variant="outline" className="text-xs">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="md:hidden">
                            <div className="absolute left-3 sm:left-4 top-0 w-0.5 h-full bg-border timeline-line origin-top"></div>
                            
                            <div className="space-y-6 pl-8 sm:pl-12">
                                {timelineData.map((item) => {
                                    const IconComponent = item.icon;
                                    
                                    return (
                                        <div key={item.year} className={`timeline-item ${item.mobileClassName} relative`}>
                                            <div className={`absolute -left-8 sm:-left-12 top-4 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background z-10 ${item.current ? 'animate-pulse' : ''}`}></div>
                                            <Card className={`bg-card border ${item.current ? 'border-2 border-primary' : 'border-border'} hover:bg-muted/50 transition-colors p-4 relative`}>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <IconComponent className={`w-6 h-6 ${item.current ? 'text-primary' : 'text-muted-foreground'}`} />
                                                    <div>
                                                        <h4 className={`font-semibold ${item.current ? 'text-primary' : 'text-foreground'}`}>{item.year}</h4>
                                                        <p className="text-sm text-muted-foreground">{item.title}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {item.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map((tech) => (
                                                        <Badge 
                                                            key={tech} 
                                                            variant="outline" 
                                                            className={`text-xs ${item.current ? 'border-primary/50' : ''}`}
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}