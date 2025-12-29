import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home", emoji: "🏠" },
  { path: "/linux", label: "Linux", emoji: "🐧" },
  { path: "/github", label: "GitHub", emoji: "🔗" },
  { path: "/python", label: "Python", emoji: "🐍" },
  { path: "/aws", label: "AWS", emoji: "☁️" },
  { path: "/profile", label: "Profile", emoji: "👤" },
  { path: "/contact", label: "Contact", emoji: "📧" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-3xl animate-bounce-gentle">📚</span>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl gradient-text">
                  Student Learning Hub
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Learn. Build. Grow.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span>{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-card animate-slide-up">
            <div className="container mx-auto container-padding py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <span className="text-xl">{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto container-padding py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="font-display font-bold text-lg gradient-text">
                  Student Learning Hub
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your beginner-friendly platform for DevOps and programming education.
                Learn Linux, GitHub, Python, and AWS with ease.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.emoji}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:Studlerning07@gmail.com" className="hover:text-primary transition-colors">
                    Studlerning07@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <span>452200020</span>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              All copyrights © held by <span className="font-semibold text-foreground">Vijay Kardak</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
