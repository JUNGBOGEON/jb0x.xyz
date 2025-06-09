import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers } from 'lucide-react';
import { techStackData } from '@/constants/techStack';
import { motion } from 'motion/react';
import { ShineBorder } from '@/components/magicui/shine-border';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';

export function TechStackSection() {

    return (
        <div className="animated-card">
            <Card className="relative overflow-hidden bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors">
                <ShineBorder 
                    shineColor={["#ffffff20", "#ffffff15"]}
                    borderWidth={1}
                    duration={25}
                />
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                        <Layers className="w-5 h-5 text-white" />
                        기술 스택
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                    {/* Languages Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            Languages
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {techStackData.filter(tech => ['Python', 'JavaScript', 'Java', 'Kotlin', 'TypeScript'].includes(tech.name)).map((tech, index) => (
                                <motion.div 
                                    key={tech.name} 
                                    className="group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: index * 0.05,
                                        ease: "easeOut" 
                                    }}
                                >
                                    <div className="flex flex-col items-center p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-200 group-hover:scale-105">
                                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={32}
                                                height={32}
                                                className={`drop-shadow-sm ${['JavaScript', 'TypeScript'].includes(tech.name) ? '!w-8 !h-8' : ''}`}
                                            />
                                        </div>
                                        <h4 className="font-medium text-white text-sm text-center mb-1">{tech.name}</h4>
                                        <span className="text-xs text-muted-foreground">{tech.period}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks & Libraries Section */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Frameworks & Libraries
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {techStackData.filter(tech => ['Node.js', 'React', 'Next.js', 'Nest.js'].includes(tech.name)).map((tech, index) => (
                                <motion.div 
                                    key={tech.name} 
                                    className="group"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: (index + 5) * 0.05,
                                        ease: "easeOut" 
                                    }}
                                >
                                    <div className="flex flex-col items-center p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-200 group-hover:scale-105">
                                        <div className="w-12 h-12 mb-3 flex items-center justify-center">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={32}
                                                height={32}
                                                className={`drop-shadow-sm ${tech.name === 'Node.js' ? '!w-8 !h-8' : ''}`}
                                            />
                                        </div>
                                        <h4 className="font-medium text-white text-sm text-center mb-1">{tech.name}</h4>
                                        <span className="text-xs text-muted-foreground">{tech.period}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Orbiting Circles */}
                    <div className="relative flex h-80 w-full items-center justify-center overflow-hidden">
                        <OrbitingCircles
                            className="size-8 border-none bg-transparent"
                            duration={15}
                            radius={120}
                            iconSize={32}
                        >
                            {techStackData.slice(0, 6).map((tech) => (
                                <img
                                    key={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={24}
                                    height={24}
                                    className="drop-shadow-sm"
                                />
                            ))}
                        </OrbitingCircles>
                        
                        <OrbitingCircles
                            className="size-8 border-none bg-transparent"
                            duration={20}
                            radius={80}
                            iconSize={28}
                            reverse
                        >
                            {techStackData.slice(6).map((tech) => (
                                <img
                                    key={tech.name}
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={20}
                                    height={20}
                                    className="drop-shadow-sm"
                                />
                            ))}
                        </OrbitingCircles>
                        
                        {/* Center element */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border border-border/50">
                            <Layers className="h-8 w-8 text-white" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
