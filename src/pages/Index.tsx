import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MentalHealthChat } from "@/components/MentalHealthChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Back button for mobile */}
        <div className="md:hidden p-2 border-b border-border">
          <Button variant="ghost" size="sm" onClick={() => setShowChat(false)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <div className="flex-1 flex">
          {/* Sidebar - Desktop only */}
          <aside className="hidden md:flex w-64 border-r border-border bg-card/30 flex-col">
            <div className="p-4 border-b border-border">
              <Button variant="ghost" size="sm" onClick={() => setShowChat(false)} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Home
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center">
                  <Heart className="w-4 h-4 text-sage" />
                </div>
                <span className="font-display font-semibold text-foreground">Serenity</span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Quick Topics
              </h3>
              <div className="space-y-2">
                {["Anxiety", "Stress", "Sleep", "Mindfulness", "Self-Care"].map((topic) => (
                  <button
                    key={topic}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                In crisis? Call 988 (US) or your local crisis line.
              </p>
            </div>
          </aside>

          {/* Chat area */}
          <main className="flex-1">
            <MentalHealthChat />
          </main>
        </div>
      </div>
    );
  }

  return <HeroSection onStartChat={() => setShowChat(true)} />;
};

export default Index;
