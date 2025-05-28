import { FileCode, Globe, Gamepad2, Server, Sparkles } from 'lucide-react';

export const timelineData = [
  {
    year: "2019",
    title: "개발 시작",
    description: "Python을 배우며 프로그래밍에 처음 입문, 디스코드 봇 개발 시작",
    icon: FileCode,
    technologies: ["Python", "Discord Bot"],
    side: "left",
    className: "timeline-2019",
    mobileClassName: "mobile-timeline-2019"
  },
  {
    year: "2020-2021",
    title: "웹 개발 시작",
    description: "Node.js와 JavaScript를 배워 디스코드 봇과 웹사이트 제작 입문",
    icon: Globe,
    technologies: ["Node.js", "JavaScript"],
    side: "right",
    className: "timeline-2020",
    mobileClassName: "mobile-timeline-2020"
  },
  {
    year: "2022-2023",
    title: "게임 개발",
    description: "Java 언어로 마인크래프트 플러그인 개발",
    icon: Gamepad2,
    technologies: ["Java", "Minecraft"],
    side: "left",
    className: "timeline-2022",
    mobileClassName: "mobile-timeline-2022"
  },
  {
    year: "2024",
    title: "서버 운영",
    description: "Kotlin으로 마인크래프트 플러그인 제작 및 서버 오픈 (최대 110명 동접)",
    icon: Server,
    technologies: ["Kotlin", "서버 관리"],
    side: "right",
    className: "timeline-2024",
    mobileClassName: "mobile-timeline-2024"
  },
  {
    year: "2025",
    title: "현재",
    description: "Next.js, Nest.js 풀스택 웹사이트 제작 공부중",
    icon: Sparkles,
    technologies: ["Next.js", "Nest.js"],
    side: "left",
    className: "timeline-2025",
    mobileClassName: "mobile-timeline-2025",
    current: true
  }
];