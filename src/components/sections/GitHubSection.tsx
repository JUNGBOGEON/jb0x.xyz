import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function GitHubSection() {
    return (
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
                        <div className="github-stats-card">
                            <div className="overflow-x-auto pb-2">
                                <div className="min-w-[650px] sm:min-w-[800px] lg:max-w-4xl lg:mx-auto">
                                    <img
                                        src="https://github-readme-activity-graph.vercel.app/graph?username=JUNGBOGEON&theme=react-dark&hide_border=true&bg_color=00000000&color=888888&line=3b82f6&point=ffffff&area=true&area_color=3b82f6"
                                        alt="GitHub Contributions Graph"
                                        className="w-full rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
