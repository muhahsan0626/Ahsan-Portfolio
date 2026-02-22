import { useLocation } from 'react-router-dom';
import { Home, Terminal } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background relative overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 tech-grid-bg opacity-20"></div>

            <div className="max-w-md w-full relative z-10">
                <div className="text-center space-y-5 sm:space-y-6">
                    {/* Terminal Icon */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                            <Terminal className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
                        </div>
                    </div>

                    {/* 404 Error Code */}
                    <div className="space-y-2">
                        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-primary font-mono">404</h1>
                        <div className="h-px w-20 sm:w-24 bg-primary/30 mx-auto"></div>
                    </div>

                    {/* Main Message */}
                    <div className="space-y-3 sm:space-y-4 bg-card/50 border border-primary/20 rounded-xl p-5 sm:p-6 backdrop-blur-sm">
                        <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            The page <span className="font-medium text-primary font-mono break-all">"/{pageName}"</span> does not exist in this application.
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 sm:pt-4">
                        <button
                            onClick={() => window.location.href = '/'}
                            className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-background bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background glow-cyan-sm"
                        >
                            <Home className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" />
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
