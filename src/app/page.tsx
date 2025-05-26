"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, Code, Server, Gamepad2, Globe, FileCode, Instagram } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6">
        <div className="animate-slide-up opacity-0 mb-12 [animation-delay:0.1s]">
          <Card className="border-2 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                  <AvatarImage src="/image.png" alt="정보건" />
                  <AvatarFallback>정보</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-2">정보건</CardTitle>
                  <p className="text-primary font-medium mb-2">Frontend Developer</p>
                  <p className="text-muted-foreground text-base sm:text-lg mb-4">
                    사용자에게 항상 가치를 주는 서비스를 만드는 것을 좋아합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
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
          <div className="animate-slide-up opacity-0 [animation-delay:0.3s]">
            <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span>기술 스택</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-yellow-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Python.svg" alt="Python" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Python</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2019~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 border border-yellow-500/20 hover:border-yellow-500/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/JavaScript.svg" alt="JavaScript" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">JavaScript</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2020~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-700/10 border border-green-500/20 hover:border-green-500/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Nodejs.svg" alt="Node.js" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Node.js</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2020~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Java.svg" alt="Java" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Java</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2022~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Kotlin.svg" alt="Kotlin" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Kotlin</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2024~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/React.svg" alt="React" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">React</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2024~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-gray-800/10 to-black/10 border border-gray-600/20 hover:border-gray-600/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Nextjs.svg" alt="Next.js" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Next.js</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2024~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-600/20 hover:border-blue-600/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/TypeScript.svg" alt="TypeScript" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">TypeScript</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2024~</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-red-600/10 to-pink-600/10 border border-red-600/20 hover:border-red-600/40 hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image src="/icon/Nestjs.svg" alt="Nest.js" width={32} height={32} />
                    </div>
                    <span className="text-sm font-medium text-center">Nest.js</span>
                    <span className="text-xs text-muted-foreground text-center mt-1">2025~</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-up opacity-0 [animation-delay:0.5s]">
            <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  포트폴리오 & 제작물
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Code className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-blue-400">Discord Bot Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Python과 Node.js로 다양한 기능의 디스코드 봇 개발</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Server className="w-4 h-4 text-green-400" />
                      </div>
                      <h4 className="font-semibold text-green-400">Web Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">JavaScript, Node.js를 활용한 웹사이트 제작</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Gamepad2 className="w-4 h-4 text-orange-400" />
                      </div>
                      <h4 className="font-semibold text-orange-400">Minecraft Server Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Kotlin 플러그인 개발 및 최대 110명 동접 서버 운영</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-purple-400">Fullstack Development</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Next.js, Nest.js를 활용한 풀스택 웹 개발 학습 중</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="animate-slide-up opacity-0 mt-6 [animation-delay:0.7s]">
          <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                개발 여정
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-yellow-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <FileCode className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400">2019 - 개발 시작</h4>
                      <p className="text-xs text-muted-foreground">Python 프로그래밍 입문</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Python을 배우며 프로그래밍에 처음 입문, 디스코드 봇 개발 시작
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30">Python</Badge>
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30">Discord Bot</Badge>
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30">첫 프로젝트</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400">2020-2021 - 웹 개발 시작</h4>
                      <p className="text-xs text-muted-foreground">JavaScript & Node.js 학습</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Node.js와 JavaScript를 배워 디스코드 봇과 웹사이트 제작 입문
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30">Node.js</Badge>
                    <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30">JavaScript</Badge>
                    <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30">웹사이트</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400">2022-2023 - 게임 개발</h4>
                      <p className="text-xs text-muted-foreground">Java 마인크래프트 플러그인</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Java 언어로 마인크래프트 플러그인 개발
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30">Java</Badge>
                    <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30">Minecraft</Badge>
                    <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/30">Plugin</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400">2024 - 서버 운영</h4>
                      <p className="text-xs text-muted-foreground">Kotlin 서버 & 최대 접속자 110명 서버 운영</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Kotlin으로 마인크래프트 플러그인 제작 및 서버 오픈 (1시즌, 2시즌, 리턴즈)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30">Kotlin</Badge>
                    <Badge variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30">서버 관리</Badge>
                    <Badge variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30">110명 동접</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-2 border-emerald-500/40 hover:border-emerald-500/60 transition-all duration-300 relative">
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center animate-pulse">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-400">2025 - 현재</h4>
                      <p className="text-xs text-muted-foreground">풀스택 개발 학습 중</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Next.js, Nest.js 풀스택 웹사이트 제작 공부중
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30">Next.js</Badge>
                    <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30">Nest.js</Badge>
                    <Badge variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/30">Fullstack</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-slide-up opacity-0 mt-6 [animation-delay:0.9s] md:col-span-2">
          <Card className="bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
            <CardHeader>
              <CardTitle>연락처</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/JUNGBOGEON?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm p-3 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Image src="/icon/GitHub.svg" alt="GitHub" width={16} height={16} />
                  GitHub
                </a>
                <a 
                  href="https://www.instagram.com/jb0x.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm p-3 rounded-lg bg-muted/30 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
