'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Sparkles,
    Calendar,
    Code,
    Server,
    Gamepad2,
    Globe,
    FileCode,
    Mail,
    ExternalLink,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate, onScroll } from 'animejs';

export default function Home() {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        // 카드들 애니메이션
        animate('.animated-card', {
            translateY: [40, 0],
            opacity: [0, 1],
            delay: (_, i) => i * 50,
            duration: 400,
            easing: 'outExpo',
        });

        // 기술 스택 아이콘 애니메이션
        animate('.tech-icon', {
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: (_, i) => 200 + i * 20,
            duration: 300,
            easing: 'outBack(1.7)',
        });

        // 포트폴리오 항목들 애니메이션
        animate('.portfolio-item', {
            translateX: [-30, 0],
            opacity: [0, 1],
            delay: (_, i) => 250 + i * 40,
            duration: 400,
            easing: 'outCubic',
        });

        // 개발 여정 타임라인 애니메이션 - 각 항목별로 개별 설정
        
        // 2019 - 개발 시작
        animate('.timeline-2019', {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'outExpo',
            autoplay: onScroll({
                enter: 'bottom-=50 top',
                leave: 'top+=50 bottom'
            })
        });

        // 2020-2021 - 웹 개발 시작
        animate('.timeline-2020', {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'outExpo',
            autoplay: onScroll({
                enter: 'bottom-=50 top',
                leave: 'top+=50 bottom'
            })
        });

        // 2022-2023 - 게임 개발
        animate('.timeline-2022', {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'outExpo',
            autoplay: onScroll({
                enter: 'bottom-=50 top',
                leave: 'top+=50 bottom'
            })
        });

        // 2024 - 서버 운영
        animate('.timeline-2024', {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'outExpo',
            autoplay: onScroll({
                enter: 'bottom-=50 top',
                leave: 'top+=50 bottom'
            })
        });

        // 2025 - 현재
        animate('.timeline-2025', {
            translateY: [50, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            easing: 'outBack(1.4)',
            autoplay: onScroll({
                enter: 'bottom-=50 top',
                leave: 'top+=50 bottom'
            })
        });

        // 타임라인 선 애니메이션
        animate('.timeline-line', {
            scaleY: [0, 1],
            duration: 2000,
            easing: 'outQuart',
            autoplay: onScroll({
                enter: 'bottom-=100 top',
                leave: 'top+=300 bottom',
                sync: true
            })
        });

        // GitHub 통계 카드 애니메이션
        animate('.github-stats-card', {
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: (_, i) => i * 100,
            easing: 'outCubic',
            autoplay: onScroll({
                enter: 'bottom-=100 top',
                leave: 'top+=100 bottom'
            })
        });

        // 연락처 카드 애니메이션 (stagger 효과)
        animate('.contact-card', {
            translateY: [40, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 700,
            delay: (_, i) => i * 150,
            easing: 'outBack(1.7)',
            autoplay: onScroll({
                enter: 'bottom-=80 top',
                leave: 'top+=80 bottom'
            })
        });
    }, []);

    return (
        <div
            ref={rootRef}
            className="min-h-screen bg-background text-foreground"
        >
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6">
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

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="animated-card">
                        <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="w-5 h-5" />
                                    <span>기술 스택</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-yellow-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Python.svg"
                                                alt="Python"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Python
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2019~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/20 hover:border-yellow-500/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/JavaScript.svg"
                                                alt="JavaScript"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            JavaScript
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2020~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-700/10 border border-green-500/20 hover:border-green-500/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Nodejs.svg"
                                                alt="Node.js"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Node.js
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2020~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Java.svg"
                                                alt="Java"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Java
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2022~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Kotlin.svg"
                                                alt="Kotlin"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Kotlin
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2024~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/React.svg"
                                                alt="React"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            React
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2024~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-gray-800/10 to-black/10 border border-gray-600/20 hover:border-gray-600/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Nextjs.svg"
                                                alt="Next.js"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Next.js
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2024~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 hover:border-blue-600/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/TypeScript.svg"
                                                alt="TypeScript"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            TypeScript
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2024~
                                        </span>
                                    </div>

                                    <div className="tech-icon flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-600/10 to-pink-600/10 border border-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all duration-300 group">
                                        <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                            <img
                                                src="/icon/Nestjs.svg"
                                                alt="Nest.js"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-center">
                                            Nest.js
                                        </span>
                                        <span className="text-xs text-muted-foreground text-center mt-1">
                                            2025~
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

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
                                    {/* Discord Bot Development */}
                                    <div className="portfolio-item">
                                        <Card className="hover:bg-muted/50 transition-colors p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                                    <Code className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-foreground">Discord Bot Development</h3>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        Python과 Node.js로 디스코드 봇 개발
                                                    </p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline" className="text-xs">Python</Badge>
                                                        <Badge variant="outline" className="text-xs">Node.js</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Web Development */}
                                    <div className="portfolio-item">
                                        <Card className="hover:bg-muted/50 transition-colors p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                                    <Globe className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-foreground">Web Development</h3>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        JavaScript와 Node.js를 활용한 웹사이트 제작
                                                    </p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline" className="text-xs">JavaScript</Badge>
                                                        <Badge variant="outline" className="text-xs">Node.js</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Minecraft Server Management */}
                                    <div className="portfolio-item">
                                        <Card className="hover:bg-muted/50 transition-colors p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                                    <Gamepad2 className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-foreground">Minecraft Server Management</h3>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        Kotlin으로 플러그인 개발 및 서버 운영 (최대 110명 동접)
                                                    </p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline" className="text-xs">Kotlin</Badge>
                                                        <Badge variant="outline" className="text-xs">Spigot</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Fullstack Development */}
                                    <div className="portfolio-item">
                                        <Card className="hover:bg-muted/50 transition-colors p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                                                    <Sparkles className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-foreground">Fullstack Development</h3>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mb-2">
                                                        Next.js와 Nest.js를 활용한 풀스택 웹 애플리케이션 개발
                                                    </p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline" className="text-xs">Next.js</Badge>
                                                        <Badge variant="outline" className="text-xs">Nest.js</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

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
                                {/* 타임라인 중앙선 */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border timeline-line origin-top"></div>
                                
                                <div className="space-y-12">
                                    {/* 2019 - 개발 시작 */}
                                    <div className="timeline-item timeline-2019 relative flex items-center">
                                        <div className="w-1/2 pr-8 text-right">
                                            <Card className="bg-card border border-border hover:bg-muted/50 transition-colors p-4">
                                                <div className="flex items-center justify-end gap-3 mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">2019</h4>
                                                        <p className="text-sm text-muted-foreground">개발 시작</p>
                                                    </div>
                                                    <FileCode className="w-6 h-6 text-muted-foreground" />
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Python을 배우며 프로그래밍에 처음 입문, 디스코드 봇 개발 시작
                                                </p>
                                                <div className="flex flex-wrap gap-2 justify-end">
                                                    <Badge variant="outline" className="text-xs">Python</Badge>
                                                    <Badge variant="outline" className="text-xs">Discord Bot</Badge>
                                                </div>
                                            </Card>
                                        </div>
                                        {/* 타임라인 포인트 */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                                        <div className="w-1/2 pl-8"></div>
                                    </div>

                                    {/* 2020-2021 - 웹 개발 시작 */}
                                    <div className="timeline-item timeline-2020 relative flex items-center">
                                        <div className="w-1/2 pr-8"></div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                                        <div className="w-1/2 pl-8">
                                            <Card className="bg-card border border-border hover:bg-muted/50 transition-colors p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Globe className="w-6 h-6 text-muted-foreground" />
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">2020-2021</h4>
                                                        <p className="text-sm text-muted-foreground">웹 개발 시작</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Node.js와 JavaScript를 배워 디스코드 봇과 웹사이트 제작 입문
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                                                    <Badge variant="outline" className="text-xs">JavaScript</Badge>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    {/* 2022-2023 - 게임 개발 */}
                                    <div className="timeline-item timeline-2022 relative flex items-center">
                                        <div className="w-1/2 pr-8 text-right">
                                            <Card className="bg-card border border-border hover:bg-muted/50 transition-colors p-4">
                                                <div className="flex items-center justify-end gap-3 mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">2022-2023</h4>
                                                        <p className="text-sm text-muted-foreground">게임 개발</p>
                                                    </div>
                                                    <Gamepad2 className="w-6 h-6 text-muted-foreground" />
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Java 언어로 마인크래프트 플러그인 개발
                                                </p>
                                                <div className="flex flex-wrap gap-2 justify-end">
                                                    <Badge variant="outline" className="text-xs">Java</Badge>
                                                    <Badge variant="outline" className="text-xs">Minecraft</Badge>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                                        <div className="w-1/2 pl-8"></div>
                                    </div>

                                    {/* 2024 - 서버 운영 */}
                                    <div className="timeline-item timeline-2024 relative flex items-center">
                                        <div className="w-1/2 pr-8"></div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                                        <div className="w-1/2 pl-8">
                                            <Card className="bg-card border border-border hover:bg-muted/50 transition-colors p-4">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Server className="w-6 h-6 text-muted-foreground" />
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">2024</h4>
                                                        <p className="text-sm text-muted-foreground">서버 운영</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Kotlin으로 마인크래프트 플러그인 제작 및 서버 오픈 (최대 110명 동접)
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge variant="outline" className="text-xs">Kotlin</Badge>
                                                    <Badge variant="outline" className="text-xs">서버 관리</Badge>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>

                                    {/* 2025 - 현재 */}
                                    <div className="timeline-item timeline-2025 relative flex items-center">
                                        <div className="w-1/2 pr-8 text-right">
                                            <Card className="bg-card border-2 border-primary hover:bg-muted/50 transition-colors p-4 relative">
                                                <div className="flex items-center justify-end gap-3 mb-2">
                                                    <div>
                                                        <h4 className="font-semibold text-primary">2025</h4>
                                                        <p className="text-sm text-muted-foreground">현재</p>
                                                    </div>
                                                    <Sparkles className="w-6 h-6 text-primary" />
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    Next.js, Nest.js 풀스택 웹사이트 제작 공부중
                                                </p>
                                                <div className="flex flex-wrap gap-2 justify-end">
                                                    <Badge variant="outline" className="text-xs border-primary/50">Next.js</Badge>
                                                    <Badge variant="outline" className="text-xs border-primary/50">Nest.js</Badge>
                                                </div>
                                            </Card>
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse"></div>
                                        <div className="w-1/2 pl-8"></div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* GitHub 통계 섹션 */}
                <div className="animated-card mt-6 md:col-span-2">
                    <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                GitHub 활동
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {/* GitHub Contributions */}
                                <div className="github-stats-card flex justify-center">
                                    <img
                                        src="https://github-readme-activity-graph.vercel.app/graph?username=JUNGBOGEON&theme=react-dark&hide_border=true&bg_color=00000000&color=888888&line=3b82f6&point=ffffff&area=true&area_color=3b82f6"
                                        alt="GitHub Contributions Graph"
                                        className="w-full rounded-lg"
                                        loading="lazy"
                                    />
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="animated-card mt-6 md:col-span-2">
                    <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                연락처 & 소셜
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* GitHub 카드 */}
                                <div className="contact-card group">
                                    <a
                                        href="https://github.com/JUNGBOGEON?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group-hover:scale-105 p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-white transition-colors shadow-sm border border-border/50">
                                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                        GitHub
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                      github.com/JUNGBOGEON
                                                    </p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                        </Card>
                                    </a>
                                </div>

                                {/* Instagram 카드 */}
                                <div className="contact-card group">
                                    <a
                                        href="https://www.instagram.com/jb0x.xyz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group-hover:scale-105 p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                        Instagram
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                      instagram.com/jb0x.xyz
                                                    </p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            </div>
                                        </Card>
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
