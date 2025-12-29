import Layout from "@/components/Layout";
import MCQCard from "@/components/MCQCard";
import MediumQuestionCard from "@/components/MediumQuestionCard";

const githubMCQs = [
  { question: "What is Git?", options: ["A programming language", "A distributed version control system", "A web hosting service", "A text editor"], correctAnswer: 1 },
  { question: "Who created Git?", options: ["Bill Gates", "Mark Zuckerberg", "Linus Torvalds", "Steve Jobs"], correctAnswer: 2 },
  { question: "What command initializes a new Git repository?", options: ["git start", "git init", "git new", "git create"], correctAnswer: 1 },
  { question: "Which command stages changes for commit?", options: ["git stage", "git add", "git commit", "git push"], correctAnswer: 1 },
  { question: "What does 'git clone' do?", options: ["Creates a new branch", "Copies a remote repository", "Deletes a repository", "Merges branches"], correctAnswer: 1 },
  { question: "Which command saves staged changes?", options: ["git save", "git push", "git commit", "git store"], correctAnswer: 2 },
  { question: "What is a Git branch?", options: ["A copy of the repository", "An independent line of development", "A remote server", "A file backup"], correctAnswer: 1 },
  { question: "Which command lists all branches?", options: ["git list", "git branch", "git show", "git branches"], correctAnswer: 1 },
  { question: "What does 'git push' do?", options: ["Downloads from remote", "Uploads to remote", "Creates a branch", "Deletes files"], correctAnswer: 1 },
  { question: "Which command downloads changes from remote?", options: ["git download", "git fetch", "git get", "git receive"], correctAnswer: 1 },
  { question: "What is GitHub?", options: ["A Git command", "A web-based Git repository hosting service", "A Linux distribution", "A text editor"], correctAnswer: 1 },
  { question: "What is a pull request?", options: ["Downloading code", "A request to merge changes", "Deleting a branch", "Creating a repository"], correctAnswer: 1 },
  { question: "Which command shows commit history?", options: ["git history", "git log", "git commits", "git show"], correctAnswer: 1 },
  { question: "What does 'git status' display?", options: ["Commit history", "Current branch and changes", "Remote repositories", "User information"], correctAnswer: 1 },
  { question: "Which command merges branches?", options: ["git combine", "git merge", "git join", "git connect"], correctAnswer: 1 },
  { question: "What is a Git remote?", options: ["A local folder", "A reference to a remote repository", "A branch type", "A commit message"], correctAnswer: 1 },
  { question: "Which command undoes the last commit?", options: ["git undo", "git revert", "git reset", "git delete"], correctAnswer: 2 },
  { question: "What is 'origin' in Git?", options: ["The first commit", "Default name for remote repository", "The main branch", "A Git command"], correctAnswer: 1 },
  { question: "Which file tells Git what to ignore?", options: [".gitconfig", ".gitignore", ".gitexclude", ".gitskip"], correctAnswer: 1 },
  { question: "What does 'git diff' show?", options: ["Branch differences", "Changes between commits/working directory", "Remote differences", "User differences"], correctAnswer: 1 },
  { question: "Which command creates a new branch?", options: ["git branch <name>", "git new <name>", "git create <name>", "git make <name>"], correctAnswer: 0 },
  { question: "What is HEAD in Git?", options: ["The first commit", "Pointer to current branch/commit", "The main server", "A branch name"], correctAnswer: 1 },
  { question: "Which command switches branches?", options: ["git switch", "git checkout", "git change", "Both A and B"], correctAnswer: 3 },
  { question: "What is a Git fork?", options: ["A branch copy", "A personal copy of another's repository", "A merge conflict", "A deleted branch"], correctAnswer: 1 },
  { question: "Which command shows configured remotes?", options: ["git remote", "git remotes", "git show remote", "git list remote"], correctAnswer: 0 },
  { question: "What is a merge conflict?", options: ["A deleted file", "When Git can't auto-merge changes", "A network error", "A branch deletion"], correctAnswer: 1 },
  { question: "Which command fetches and merges?", options: ["git sync", "git pull", "git update", "git refresh"], correctAnswer: 1 },
  { question: "What is 'git stash' used for?", options: ["Deleting changes", "Temporarily saving changes", "Pushing to remote", "Creating branches"], correctAnswer: 1 },
  { question: "Which command shows who changed each line?", options: ["git who", "git blame", "git author", "git history"], correctAnswer: 1 },
  { question: "What is a Git tag?", options: ["A branch label", "A reference to a specific commit", "A remote name", "A file type"], correctAnswer: 1 },
  { question: "Which command rebases branches?", options: ["git rebase", "git reorder", "git reorganize", "git rebuild"], correctAnswer: 0 },
  { question: "What is GitHub Actions?", options: ["A Git command", "CI/CD automation platform", "A branch type", "A code editor"], correctAnswer: 1 },
  { question: "Which command shows a specific commit?", options: ["git display", "git show", "git view", "git open"], correctAnswer: 1 },
  { question: "What is a GitHub Issue?", options: ["A bug in Git", "A task/bug tracking feature", "A merge conflict", "A repository error"], correctAnswer: 1 },
  { question: "Which command cherry-picks commits?", options: ["git pick", "git cherry-pick", "git select", "git choose"], correctAnswer: 1 },
  { question: "What is GitHub Pages?", options: ["A Wiki feature", "Static website hosting", "Issue tracking", "Code review"], correctAnswer: 1 },
  { question: "Which command creates an annotated tag?", options: ["git tag -a", "git tag -m", "git tag -n", "git tag -c"], correctAnswer: 0 },
  { question: "What does 'git clean' do?", options: ["Cleans commit history", "Removes untracked files", "Cleans remote", "Removes branches"], correctAnswer: 1 },
  { question: "What is a GitHub Gist?", options: ["A repository type", "A code snippet sharing service", "A branch", "An issue type"], correctAnswer: 1 },
  { question: "Which command amends the last commit?", options: ["git commit --amend", "git commit --fix", "git commit --update", "git commit --change"], correctAnswer: 0 },
  { question: "What is GitHub Copilot?", options: ["A Git command", "An AI coding assistant", "A branch type", "A CI/CD tool"], correctAnswer: 1 },
  { question: "Which command configures user name?", options: ["git user", "git config user.name", "git set name", "git name"], correctAnswer: 1 },
  { question: "What is a protected branch?", options: ["A hidden branch", "A branch with merge restrictions", "A deleted branch", "A remote branch"], correctAnswer: 1 },
  { question: "Which command shows branch graph?", options: ["git log --graph", "git graph", "git tree", "git visual"], correctAnswer: 0 },
  { question: "What is a GitHub webhook?", options: ["A Git command", "An event notification system", "A branch type", "A merge tool"], correctAnswer: 1 },
  { question: "Which command lists tags?", options: ["git tag", "git tags", "git list tags", "git show tags"], correctAnswer: 0 },
  { question: "What is GitHub Discussions?", options: ["Code comments", "A community forum feature", "Merge requests", "Issue templates"], correctAnswer: 1 },
  { question: "Which command restores a file?", options: ["git restore", "git recover", "git undo", "git fix"], correctAnswer: 0 },
  { question: "What is a README file?", options: ["A Git config file", "Project documentation file", "A log file", "A cache file"], correctAnswer: 1 },
  { question: "What does SSH stand for in GitHub context?", options: ["Secure Shell", "Safe Server Host", "Secure Source Hub", "Simple Shell"], correctAnswer: 0 },
];

const githubMediumQuestions = [
  "Explain the difference between Git and GitHub. Why are both important for developers?",
  "What is the Git workflow? Describe the stages: working directory, staging area, and repository.",
  "How do you resolve a merge conflict? Walk through the process step by step.",
  "Explain the difference between 'git merge' and 'git rebase'. When would you use each?",
  "What is a .gitignore file? What types of files should typically be ignored?",
  "Describe the pull request workflow. What makes a good pull request?",
  "What is the difference between 'git fetch' and 'git pull'?",
  "Explain branching strategies like Git Flow, GitHub Flow, and trunk-based development.",
  "How do you undo changes in Git? Compare reset, revert, and checkout.",
  "What are Git hooks? Give examples of useful pre-commit and post-commit hooks.",
  "Explain the difference between 'git reset --soft', '--mixed', and '--hard'.",
  "What is GitHub Actions and how does it enable CI/CD? Give an example workflow.",
  "How do you squash commits? Why would you want to do this?",
  "Explain what 'git cherry-pick' does and when you would use it.",
  "What is the purpose of Git tags? Differentiate between lightweight and annotated tags.",
  "How do you configure Git for multiple accounts (personal and work)?",
  "Explain the concept of a detached HEAD state. How do you recover from it?",
  "What is 'git stash' and how do you use it effectively?",
  "Describe best practices for writing commit messages.",
  "What is GitHub's code review process? What should reviewers look for?",
  "Explain forking workflow vs. branching workflow in team collaboration.",
  "How do you set up branch protection rules? Why are they important?",
  "What is semantic versioning and how does it relate to Git tags?",
  "Explain how to use Git submodules. What are their advantages and disadvantages?",
  "How do you recover a deleted branch or lost commits in Git?",
];

const GitHub = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl md:text-8xl mb-6 block animate-float">🔗</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              GitHub & Git Essentials
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn version control and collaboration with the world's most popular code hosting platform
            </p>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <span>📖</span> Learning Notes
            </h2>

            <div className="space-y-8">
              {/* What is Git/GitHub */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">What is Git & GitHub?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Git</strong> is a distributed version control system created by Linus Torvalds in 2005. 
                  It tracks changes in your code, allows multiple developers to work together, and maintains 
                  a complete history of your project. Every developer has a full copy of the repository.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>GitHub</strong> is a web-based platform that hosts Git repositories and adds 
                  collaboration features like pull requests, issues, project boards, and GitHub Actions 
                  for CI/CD. It's the world's largest developer community with over 100 million developers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Think of Git as the engine and GitHub as the car – Git provides the core version control 
                  functionality, while GitHub provides the interface and additional features to make 
                  collaboration seamless.
                </p>
              </div>

              {/* Why Git is Important */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Why is Git/GitHub Important?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Version History:</strong> Never lose your work – every change is tracked and can be reversed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Collaboration:</strong> Multiple developers can work on the same project without conflicts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Branching:</strong> Experiment with new features without affecting the main codebase.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Code Review:</strong> Pull requests enable thorough review before merging changes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Industry Standard:</strong> Required skill for virtually all software development jobs.</span>
                  </li>
                </ul>
              </div>

              {/* Where Git is Used */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Real-World Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">💼 Enterprise Development</h4>
                    <p className="text-sm text-muted-foreground">Teams use Git for collaborative software development</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🌐 Open Source</h4>
                    <p className="text-sm text-muted-foreground">GitHub hosts millions of open source projects</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🚀 CI/CD Pipelines</h4>
                    <p className="text-sm text-muted-foreground">Automated testing and deployment with GitHub Actions</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📚 Documentation</h4>
                    <p className="text-sm text-muted-foreground">Version-controlled docs with GitHub Pages</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🎨 Design Systems</h4>
                    <p className="text-sm text-muted-foreground">Track design assets and component libraries</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📊 Portfolio</h4>
                    <p className="text-sm text-muted-foreground">Showcase your work to potential employers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
              <span>❓</span> Multiple Choice Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Test your Git and GitHub knowledge with these 50 MCQs. Click on an option to check your answer!
            </p>

            <div className="space-y-6">
              {githubMCQs.map((mcq, index) => (
                <MCQCard
                  key={index}
                  number={index + 1}
                  question={mcq.question}
                  options={mcq.options}
                  correctAnswer={mcq.correctAnswer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medium Questions Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
              <span>💭</span> Interview & Practice Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Prepare for interviews with these 25 medium-level questions about Git and GitHub.
            </p>

            <div className="space-y-4">
              {githubMediumQuestions.map((question, index) => (
                <MediumQuestionCard key={index} number={index + 1} question={question} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GitHub;
