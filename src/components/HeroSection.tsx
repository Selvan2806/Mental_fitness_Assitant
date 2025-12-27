import { Heart, MessageCircle, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onStartChat: () => void;
}

export function HeroSection({ onStartChat }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full gradient-glow animate-breathe opacity-60" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full gradient-glow animate-breathe opacity-40" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Logo/Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-sage-light shadow-glow animate-float">
          <Heart className="w-10 h-10 text-sage" />
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Your Safe Space for
            <span className="block text-sage mt-2">Mental Wellness</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A compassionate AI companion here to listen, support, and guide you through life's challenges. Available 24/7, completely confidential.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onStartChat}
            size="xl"
            variant="sage"
            className="group"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            Start a Conversation
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-coral-deep" />
            </div>
            <h3 className="font-display font-semibold text-foreground">Evidence-Based</h3>
            <p className="text-sm text-muted-foreground text-center">
              Grounded in mental health research and therapeutic techniques
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center">
              <Heart className="w-6 h-6 text-sage" />
            </div>
            <h3 className="font-display font-semibold text-foreground">Compassionate</h3>
            <p className="text-sm text-muted-foreground text-center">
              Non-judgmental support when you need it most
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground">Private & Safe</h3>
            <p className="text-sm text-muted-foreground text-center">
              Your conversations stay completely confidential
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground">
          Not a replacement for professional mental health care. In crisis? Call 988 (US).
        </p>
      </div>
    </div>
  );
}
