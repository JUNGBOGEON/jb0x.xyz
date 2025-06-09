"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface TimelineData {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  current?: boolean;
}

export const AceternityTimeline = ({
  data,
  className,
}: {
  data: TimelineData[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScrollProgress, setMaxScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Transform scroll progress to height percentage
  const heightProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Use spring for smooth animation
  const smoothProgress = useSpring(heightProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track the maximum scroll progress to prevent regression
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      setMaxScrollProgress(prev => Math.max(prev, latest));
    });
  }, [smoothProgress]);

  // Use the maximum progress to ensure line doesn't shrink when scrolling up
  const finalProgress = useTransform(() => maxScrollProgress);

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div className="relative">
        {/* Background timeline line (static) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-neutral-100 dark:bg-neutral-800" />
        
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 origin-top"
          style={{
            height: useTransform(finalProgress, (v) => `${v}%`)
          }}
        />
        
        <div className="space-y-16 py-8">
          {data.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = index % 2 === 0;
            
            // Calculate threshold for this item (each item appears at different scroll points)
            const itemThreshold = (index + 1) / data.length * 80; // Complete by 80% instead of 100%
            const itemVisible = maxScrollProgress >= itemThreshold - 15; // Start appearing 15% before threshold
            
            return (
              <motion.div
                key={item.year}
                className="relative flex items-center"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={itemVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                transition={{
                  duration: 0.8,
                  delay: itemVisible ? 0.2 : 0,
                  ease: "easeOut",
                }}
              >
                {/* Content Card */}
                <div className={cn(
                  "w-full flex items-center",
                  isLeft ? "flex-row" : "flex-row-reverse"
                )}>
                  <div className="w-1/2">
                    <motion.div
                      className={cn(
                        "relative p-6 mx-4 rounded-2xl border backdrop-blur-sm transition-all duration-300",
                        item.current 
                          ? "bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-100 dark:shadow-blue-900/20" 
                          : "bg-white/60 dark:bg-black/60 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50/80 dark:hover:bg-neutral-900/80",
                        isLeft ? "mr-8" : "ml-8"
                      )}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        boxShadow: item.current 
                          ? "0 20px 40px rgba(59, 130, 246, 0.15)" 
                          : "0 20px 40px rgba(0, 0, 0, 0.1)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Floating decoration */}
                      <motion.div
                        className={cn(
                          "absolute w-2 h-2 rounded-full",
                          item.current ? "bg-blue-400" : "bg-neutral-300 dark:bg-neutral-600",
                          isLeft ? "-right-1 top-4" : "-left-1 top-4"
                        )}
                        animate={item.current ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      
                      <div className={cn(
                        "flex items-center gap-4 mb-4",
                        isLeft ? "flex-row" : "flex-row-reverse"
                      )}>
                        <motion.div
                          className={cn(
                            "p-3 rounded-xl",
                            item.current 
                              ? "bg-gradient-to-br from-blue-400 to-purple-500 text-white" 
                              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                          )}
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        
                        <div className={isLeft ? "text-left" : "text-right"}>
                          <motion.h3
                            className={cn(
                              "text-xl font-bold",
                              item.current 
                                ? "text-blue-600 dark:text-blue-400" 
                                : "text-neutral-800 dark:text-neutral-200"
                            )}
                            initial={{ opacity: 0, y: 10 }}
                            animate={itemVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: itemVisible ? 0.3 : 0, duration: 0.5 }}
                          >
                            {item.year}
                          </motion.h3>
                          <motion.p
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                            initial={{ opacity: 0, y: 10 }}
                            animate={itemVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: itemVisible ? 0.4 : 0, duration: 0.5 }}
                          >
                            {item.title}
                          </motion.p>
                        </div>
                      </div>
                      
                      <motion.p
                        className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={itemVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: itemVisible ? 0.5 : 0, duration: 0.6 }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div
                        className={cn(
                          "flex flex-wrap gap-2",
                          isLeft ? "justify-start" : "justify-end"
                        )}
                        initial={{ opacity: 0, y: 10 }}
                        animate={itemVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: itemVisible ? 0.6 : 0, duration: 0.5 }}
                      >
                        {item.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={itemVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ 
                              delay: itemVisible ? 0.6 + techIndex * 0.1 : 0,
                              duration: 0.4
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-xs font-medium transition-colors",
                                item.current 
                                  ? "border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/50" 
                                  : "border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
                              )}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="w-1/2" />
                </div>
                
                {/* Center timeline icon marker */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={itemVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: itemVisible ? 0.4 : 0, 
                    duration: 0.6, 
                    type: "spring",
                    stiffness: 140,
                    damping: 10
                  }}
                >
                  {/* Background glow for current item */}
                  {item.current && (
                    <motion.div
                      className="absolute inset-0 w-12 h-12 -translate-x-2 -translate-y-2 rounded-2xl bg-blue-400/20 dark:bg-blue-400/30 blur-md"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.9, 0.4]
                      }}
                      transition={{ repeat: Infinity, duration: 3.5 }}
                    />
                  )}
                  
                  {/* Icon container */}
                  <motion.div
                    className={cn(
                      "relative p-3 rounded-2xl border-2 shadow-xl backdrop-blur-sm",
                      item.current 
                        ? "bg-gradient-to-br from-blue-400 to-purple-500 border-blue-300 dark:border-blue-600 text-white shadow-blue-200 dark:shadow-blue-900/50" 
                        : "bg-white/95 dark:bg-neutral-800/95 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 shadow-neutral-300 dark:shadow-neutral-700"
                    )}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-6 h-6" />
                    
                    {/* Current item pulse effect */}
                    {item.current && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/30 to-purple-500/30"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Mobile version
export const AceternityTimelineMobile = ({
  data,
  className,
}: {
  data: TimelineData[];
  className?: string;
}) => {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [mobileMaxScrollProgress, setMobileMaxScrollProgress] = useState(0);
  
  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start end", "end center"]
  });

  // Transform scroll progress to height percentage for mobile
  const mobileHeightProgress = useTransform(mobileScrollYProgress, [0, 1], [0, 100]);
  
  // Use spring for smooth animation on mobile
  const mobileSmoothProgress = useSpring(mobileHeightProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track the maximum scroll progress to prevent regression on mobile
  useEffect(() => {
    return mobileSmoothProgress.on("change", (latest) => {
      setMobileMaxScrollProgress(prev => Math.max(prev, latest));
    });
  }, [mobileSmoothProgress]);

  // Use the maximum progress to ensure line doesn't shrink when scrolling up on mobile
  const mobileFinalProgress = useTransform(() => mobileMaxScrollProgress);

  return (
    <div ref={mobileContainerRef} className={cn("w-full md:hidden", className)}>
      <div className="relative pl-8">
        {/* Background mobile timeline line (static) */}
        <div className="absolute left-3 top-0 w-0.5 h-full bg-neutral-100 dark:bg-neutral-800" />
        
        {/* Animated mobile timeline line */}
        <motion.div
          className="absolute left-3 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 origin-top"
          style={{
            height: useTransform(mobileFinalProgress, (v) => `${v}%`)
          }}
        />
        
        <div className="space-y-8 py-4">
          {data.map((item, index) => {
            const IconComponent = item.icon;
            
            // Calculate threshold for this item on mobile
            const mobileItemThreshold = (index + 1) / data.length * 80; // Complete by 80% instead of 100%
            const mobileItemVisible = mobileMaxScrollProgress >= mobileItemThreshold - 20; // Start appearing 20% before threshold for mobile
            
            return (
              <motion.div
                key={item.year}
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={mobileItemVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{
                  duration: 0.6,
                  delay: mobileItemVisible ? 0.1 : 0,
                  ease: "easeOut",
                }}
              >
                {/* Mobile timeline icon marker */}
                <motion.div
                  className="absolute -left-10 top-2 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={mobileItemVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: mobileItemVisible ? 0.3 : 0, 
                    duration: 0.5, 
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                >
                  {/* Background glow for current item */}
                  {item.current && (
                    <motion.div
                      className="absolute inset-0 w-8 h-8 -translate-x-1 -translate-y-1 rounded-xl bg-blue-400/20 dark:bg-blue-400/30 blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    />
                  )}
                  
                  {/* Icon container */}
                  <motion.div
                    className={cn(
                      "relative p-2 rounded-xl border-2 shadow-lg backdrop-blur-sm",
                      item.current 
                        ? "bg-gradient-to-br from-blue-400 to-purple-500 border-blue-300 dark:border-blue-600 text-white shadow-blue-200 dark:shadow-blue-900" 
                        : "bg-white/90 dark:bg-neutral-800/90 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 shadow-neutral-200 dark:shadow-neutral-800"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    
                    {/* Current item pulse effect */}
                    {item.current && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/30 to-purple-500/30"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
                
                {/* Mobile card */}
                <motion.div
                  className={cn(
                    "p-4 rounded-xl border backdrop-blur-sm transition-all duration-300",
                    item.current 
                      ? "bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-100 dark:shadow-blue-900/20" 
                      : "bg-white/60 dark:bg-black/60 border-neutral-200 dark:border-neutral-700"
                  )}
                  whileHover={{ scale: 1.01, y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-3">
                    <h3 className={cn(
                      "font-bold text-lg",
                      item.current ? "text-blue-600 dark:text-blue-400" : "text-neutral-800 dark:text-neutral-200"
                    )}>
                      {item.year}
                    </h3>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {item.title}
                    </p>
                  </div>
                  
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={mobileItemVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          delay: mobileItemVisible ? 0.4 + techIndex * 0.05 : 0,
                          duration: 0.3
                        }}
                      >
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            item.current 
                              ? "border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/50" 
                              : "border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
                          )}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};