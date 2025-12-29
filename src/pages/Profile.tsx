import Layout from "@/components/Layout";

const Profile = () => {
  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl md:text-8xl mb-6 block animate-float">👨‍💻</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About the Creator</h1>
            <p className="text-lg text-muted-foreground">Meet Vijay Kardak - DevOps Enthusiast & Learner</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card text-center">
              <div className="w-32 h-32 rounded-full gradient-bg mx-auto mb-6 flex items-center justify-center animate-pulse-glow">
                <span className="text-6xl">🎓</span>
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Vijay Kardak</h2>
              <p className="text-primary font-medium mb-4">Aspiring DevOps Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Vijay, a passionate learner on my journey to becoming a skilled DevOps professional. 
                This platform is my way of organizing knowledge and helping fellow beginners navigate the 
                exciting world of DevOps and cloud technologies.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                <span>🚀</span> My DevOps Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Like many beginners, I started with curiosity about how modern applications are built and deployed. 
                The DevOps world seemed overwhelming at first – so many tools, concepts, and technologies to learn!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's why I created Student Learning Hub. It's not just a website; it's my learning companion. 
                Every note, every question here represents hours of study and practice. I believe in learning 
                by teaching, and this platform helps me solidify my understanding while helping others.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> What I'm Learning
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <span className="text-2xl">🐧</span>
                  <span className="font-medium">Linux Administration</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <span className="text-2xl">🔗</span>
                  <span className="font-medium">Git & GitHub</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <span className="text-2xl">🐍</span>
                  <span className="font-medium">Python Scripting</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                  <span className="text-2xl">☁️</span>
                  <span className="font-medium">AWS Cloud</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                <span>💡</span> My Philosophy
              </h3>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "The best way to learn is to teach. The best way to grow is to help others grow."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I believe that everyone can learn DevOps with the right resources and dedication. 
                This platform is free because education should be accessible to all. 
                Let's learn and grow together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
