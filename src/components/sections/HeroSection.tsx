import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
    return (
        <div className="animated-card mb-12">
            <Card className="border-2 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                            <AvatarImage
                                src="/image.png"
                                alt="정보건"
                            />
                            <AvatarFallback>정보</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">
                                정보건
                            </CardTitle>
                            <p className="text-primary font-medium mb-2">
                                Frontend Developer
                            </p>
                            <p className="text-muted-foreground text-base sm:text-lg mb-4">
                                사용자에게 항상 가치를 주는 서비스를
                                만드는 것을 좋아합니다.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <Badge
                                    variant="secondary"
                                    className="flex items-center gap-1"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    JUNGBOGEON
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}