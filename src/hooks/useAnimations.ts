import { useEffect } from 'react';
import { animate, onScroll } from 'animejs';

export function useAnimations() {
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        animate('.animated-card', {
            translateY: [40, 0],
            opacity: [0, 1],
            delay: (_, i) => i * 50,
            duration: 400,
            easing: 'outExpo',
        });

        animate('.tech-icon', {
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: (_, i) => 200 + i * 20,
            duration: 300,
            easing: 'outBack(1.7)',
        });

        animate('.portfolio-item', {
            translateX: [-30, 0],
            opacity: [0, 1],
            delay: (_, i) => 250 + i * 40,
            duration: 400,
            easing: 'outCubic',
        });

        if (isMobile) {
            animate('.mobile-timeline-2019', {
                translateX: [-30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'outExpo',
                autoplay: onScroll({
                    enter: 'bottom-=20 top',
                    leave: 'top+=20 bottom'
                })
            });

            animate('.mobile-timeline-2020', {
                translateX: [-30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'outExpo',
                autoplay: onScroll({
                    enter: 'bottom-=20 top',
                    leave: 'top+=20 bottom'
                })
            });

            animate('.mobile-timeline-2022', {
                translateX: [-30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'outExpo',
                autoplay: onScroll({
                    enter: 'bottom-=20 top',
                    leave: 'top+=20 bottom'
                })
            });

            animate('.mobile-timeline-2024', {
                translateX: [-30, 0],
                opacity: [0, 1],
                duration: 600,
                easing: 'outExpo',
                autoplay: onScroll({
                    enter: 'bottom-=20 top',
                    leave: 'top+=20 bottom'
                })
            });

            animate('.mobile-timeline-2025', {
                translateX: [-30, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 800,
                easing: 'outBack(1.2)',
                autoplay: onScroll({
                    enter: 'bottom-=20 top',
                    leave: 'top+=20 bottom'
                })
            });
        } else {
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
        }

        animate('.timeline-line', {
            scaleY: [0, 1],
            duration: isMobile ? 1500 : 2000,
            easing: 'outQuart',
            autoplay: onScroll({
                enter: isMobile ? 'bottom-=50 top' : 'bottom-=100 top',
                leave: isMobile ? 'top+=200 bottom' : 'top+=300 bottom',
                sync: true
            })
        });

        animate('.github-stats-card', {
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: (_, i) => i * 100,
            easing: 'outCubic',
            autoplay: onScroll({
                enter: isMobile ? 'bottom-=50 top' : 'bottom-=100 top',
                leave: isMobile ? 'top+=50 bottom' : 'top+=100 bottom'
            })
        });

        animate('.contact-card', {
            translateY: [40, 0],
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 700,
            delay: (_, i) => i * 150,
            easing: 'outBack(1.7)',
            autoplay: onScroll({
                enter: isMobile ? 'bottom-=40 top' : 'bottom-=80 top',
                leave: isMobile ? 'top+=40 bottom' : 'top+=80 bottom'
            })
        });
    }, []);
}