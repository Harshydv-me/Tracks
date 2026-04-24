import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Map, 
  HelpCircle, 
  Zap, 
  TrendingUp, 
  Code, 
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Lock,
  PlayCircle,
  BookOpen,
  Trophy
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const demoRef = useRef(null);
  const [selectedDemoTopic, setSelectedDemoTopic] = useState(0);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const demoTopics = [
    {
      id: 0,
      title: "React Fundamentals",
      description: "Components, Props, and State basics.",
      tasks: ["JSX Syntax", "Functional Components", "Handling Events"],
      isCompleted: true,
      isCurrent: false,
      isLocked: false,
      progress: 100
    },
    {
      id: 1,
      title: "Hooks Depth",
      description: "Mastering useEffect and custom hooks.",
      tasks: ["Effect Lifecycle", "Dependency Arrays", "Custom Hooks Patterns"],
      isCompleted: false,
      isCurrent: true,
      isLocked: false,
      progress: 40
    },
    {
      id: 2,
      title: "Advanced State",
      description: "Context API and performance patterns.",
      tasks: ["Context Providers", "useMemo & useCallback", "State Reducers"],
      isCompleted: false,
      isCurrent: false,
      isLocked: true,
      progress: 0
    }
  ];

  const features = [
    {
      icon: <Map className="w-6 h-6 text-indigo-500" />,
      title: "Interactive Roadmaps",
      description: "Visual learning paths designed to take you from beginner to expert in any technical skill."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-purple-500" />,
      title: "Smart Quizzes",
      description: "Validate your knowledge with adaptive assessments that identify and fill your learning gaps."
    },
    {
      icon: <Zap className="w-6 h-6 text-fuchsia-500" />,
      title: "AI Recommendations",
      description: "Personalized learning suggestions powered by AI, tailored to your progress and goals."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-500" />,
      title: "Progress Tracking",
      description: "Keep your momentum high with detailed analytics, streaks, and achievement badges."
    }
  ];

  return (
    <div className="min-h-screen bg-main transition-colors duration-200">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-subtle">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">Tracks</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/login?mode=login")}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => navigate("/login?mode=register")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 shadow-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-20 pb-16 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
          <Zap className="w-4 h-4" />
          <span>Supercharge your learning journey</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight leading-[1.1]">
          Master any skill, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
            one track at a time.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one platform to track your learning progress, follow expert-crafted roadmaps, and validate your knowledge with AI-powered insights.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate("/login?mode=register")}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
          >
            Start Learning Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
             onClick={scrollToDemo}
            className="w-full sm:w-auto bg-card border border-subtle hover:border-hover text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
          >
            View Demo
          </button>
        </div>

        {/* Hero Visual Preview */}
        <div className="mt-16 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl border border-subtle bg-card shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[21/10] flex flex-col">
            {/* Mock UI Header */}
            <div className="h-10 border-b border-subtle bg-main/50 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
              </div>
              <div className="mx-auto w-32 h-4 bg-subtle rounded-full opacity-20" />
            </div>
            
            <div className="flex flex-1 overflow-hidden">
              {/* Mock Sidebar */}
              <div className="w-16 md:w-48 border-r border-subtle bg-main/30 p-4 space-y-4 hidden sm:block">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-indigo-600/10' : 'bg-subtle/10'}`} />
                ))}
              </div>
              
              {/* Mock Content */}
              <div className="flex-1 p-6 space-y-6 overflow-hidden">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-primary/10 rounded-lg" />
                    <div className="h-4 w-48 bg-secondary/5 rounded-lg" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-indigo-600/20" />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-24 rounded-xl border border-subtle bg-main/20 p-4 space-y-3">
                      <div className="h-3 w-12 bg-indigo-500/20 rounded" />
                      <div className="h-5 w-20 bg-primary/10 rounded" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="h-40 rounded-xl border border-subtle bg-main/20 p-4 relative overflow-hidden">
                    <div className="h-4 w-24 bg-primary/10 rounded mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded border border-subtle" />
                          <div className={`h-3 rounded bg-secondary/10 ${i === 1 ? 'w-full' : i === 2 ? 'w-3/4' : 'w-1/2'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-40 rounded-xl border border-subtle bg-indigo-600/5 p-4 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-600/20 border-t-indigo-600" />
                    <div className="h-3 w-20 bg-indigo-600/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/5 via-transparent to-purple-600/5 pointer-events-none" />
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Everything you need to grow</h2>
          <p className="text-secondary max-w-xl mx-auto">Built for modern learners who want structure, feedback, and tangible results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-card border border-subtle hover:border-indigo-500/50 transition-all hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-main)] border border-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section ref={demoRef} className="px-6 py-24 max-w-7xl mx-auto border-t border-subtle">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-500/20">
              <PlayCircle className="w-4 h-4" />
              <span>Interactive Preview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              A curriculum that <br />
              <span className="text-indigo-600">adapts to you.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Experience how Tracks breaks down complex subjects into bite-sized, actionable steps. Click on the roadmap nodes to see how we guide your learning journey.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-4 rounded-xl bg-card border border-subtle">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Master Concepts</h4>
                  <p className="text-sm text-secondary">Complete tasks and verify your knowledge through AI assessments.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-card border border-subtle">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Trophy className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Earn Verifications</h4>
                  <p className="text-sm text-secondary">Get scores for each topic to showcase your technical proficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="rounded-3xl border border-subtle bg-main p-8 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg">
                Demo Environment
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
                {/* Mock Roadmap */}
                <div className="space-y-6">
                  {demoTopics.map((topic, index) => (
                    <div key={topic.id} className="relative">
                      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setSelectedDemoTopic(topic.id)}>
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedDemoTopic === topic.id ? 'scale-110 border-indigo-600 bg-indigo-500/10' : 'border-subtle bg-card'
                        }`}>
                          {topic.isCompleted ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : 
                           topic.isLocked ? <Lock className="w-4 h-4 text-muted" /> : 
                           <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                        </div>
                        <div className={`text-sm font-bold transition-colors ${selectedDemoTopic === topic.id ? 'text-indigo-600' : 'text-primary'}`}>
                          {topic.title}
                        </div>
                      </div>
                      {index < demoTopics.length - 1 && (
                        <div className="ml-5 mt-2 h-8 w-0.5 bg-subtle" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Mock Topic Details Panel */}
                <div className="bg-card rounded-2xl border border-subtle p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">
                      Current Topic
                    </span>
                    <div className="text-xs text-secondary font-medium">
                      {demoTopics[selectedDemoTopic].progress}% Progress
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{demoTopics[selectedDemoTopic].title}</h3>
                  <p className="text-sm text-secondary mb-6">{demoTopics[selectedDemoTopic].description}</p>
                  
                  <div className="space-y-3">
                    {demoTopics[selectedDemoTopic].tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-subtle bg-main/50">
                        {demoTopics[selectedDemoTopic].isCompleted || (demoTopics[selectedDemoTopic].isCurrent && i === 0) ? 
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> : 
                          <div className="w-4 h-4 rounded-full border border-subtle" />}
                        <span className="text-sm text-primary font-medium">{task}</span>
                        {(demoTopics[selectedDemoTopic].isCurrent && i === 0) && (
                          <span className="ml-auto text-[10px] font-bold text-indigo-600 bg-indigo-500/10 px-2 py-0.5 rounded">
                            NEXT
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-indigo-600/10 text-indigo-600 hover:bg-indigo-600 hover:text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Preview Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-3xl bg-indigo-600 p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to level up?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of developers and learners who are mastering their craft with Tracks.
          </p>
          <button 
             onClick={() => navigate("/login?mode=register")}
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl font-bold text-lg transition-all relative z-10 shadow-lg"
          >
            Create Your Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto border-t border-subtle text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <span className="font-bold text-primary">Tracks</span>
        </div>
        <p className="text-muted text-sm">
          © 2026 Tracks Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
