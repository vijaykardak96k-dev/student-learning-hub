import Layout from "@/components/Layout";
import SubjectCard from "@/components/SubjectCard";

const subjects = [
  {
    emoji: "🐧",
    title: "Linux",
    description: "Master the command line, file systems, and system administration. Linux is the backbone of servers, cloud infrastructure, and DevOps workflows worldwide.",
    path: "/linux",
    colorClass: "bg-linux",
  },
  {
    emoji: "🔗",
    title: "GitHub",
    description: "Learn version control with Git and collaboration using GitHub. Essential for every developer to manage code, track changes, and work in teams effectively.",
    path: "/github",
    colorClass: "bg-github",
  },
  {
    emoji: "🐍",
    title: "Python",
    description: "Explore Python programming from basics to advanced concepts. Perfect for automation, scripting, data science, web development, and DevOps tasks.",
    path: "/python",
    colorClass: "bg-python",
  },
  {
    emoji: "☁️",
    title: "AWS",
    description: "Discover Amazon Web Services cloud computing. Deploy applications, manage infrastructure, and leverage cloud services used by millions of companies.",
    path: "/aws",
    colorClass: "bg-aws",
  },
];

const features = [
  {
    emoji: "📖",
    title: "Comprehensive Notes",
    description: "Well-structured notes covering key concepts for each subject",
  },
  {
    emoji: "❓",
    title: "50 MCQ Questions",
    description: "Test your knowledge with multiple choice questions per subject",
  },
  {
    emoji: "💭",
    title: "25 Interview Questions",
    description: "Prepare for interviews with medium-level questions",
  },
  {
    emoji: "🎯",
    title: "Beginner Friendly",
    description: "Perfect for students starting their DevOps journey",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            {/* Decorative Elements */}
            <div className="mb-6">
              <span className="inline-block text-6xl md:text-8xl animate-float">📚</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Welcome to{" "}
              <span className="gradient-text">Student Learning Hub</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your beginner-friendly gateway to DevOps and programming excellence. 
              Master essential technologies with structured notes, practice MCQs, 
              and interview preparation questions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#subjects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold gradient-bg text-primary-foreground btn-shine transition-all duration-300 hover:shadow-glow"
              >
                <span>Start Learning</span>
                <span>🚀</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-card border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span>Explore Features</span>
                <span>✨</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">4</div>
              <div className="text-muted-foreground text-sm mt-1">Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">200</div>
              <div className="text-muted-foreground text-sm mt-1">MCQ Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">100</div>
              <div className="text-muted-foreground text-sm mt-1">Interview Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">∞</div>
              <div className="text-muted-foreground text-sm mt-1">Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What You'll Get
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to kickstart your DevOps and programming journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border text-center card-hover"
              >
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Choose Your Subject
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four essential technologies every DevOps engineer and developer should master
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full gradient-bg flex items-center justify-center animate-pulse-glow">
                    <span className="text-5xl md:text-6xl">🎓</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    About This Platform
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Student Learning Hub is designed for beginners who want to build a strong 
                    foundation in DevOps and programming. Whether you're a student, career changer, 
                    or curious learner, this platform provides structured learning materials to 
                    help you succeed.
                  </p>
                  <p className="text-muted-foreground">
                    Each subject includes detailed notes, 50 carefully crafted MCQs for practice, 
                    and 25 interview-focused questions to prepare you for real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Jump into any subject and begin your journey towards becoming a skilled DevOps professional.
          </p>
          <a
            href="#subjects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-card text-foreground hover:shadow-lg transition-all duration-300"
          >
            <span>Choose a Subject</span>
            <span>📚</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
