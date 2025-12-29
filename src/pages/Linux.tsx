import Layout from "@/components/Layout";
import MCQCard from "@/components/MCQCard";
import MediumQuestionCard from "@/components/MediumQuestionCard";

const linuxMCQs = [
  { question: "What does the 'ls' command do in Linux?", options: ["List directory contents", "Delete files", "Create directories", "Move files"], correctAnswer: 0 },
  { question: "Which command is used to change directories in Linux?", options: ["mv", "cd", "cp", "rm"], correctAnswer: 1 },
  { question: "What is the root directory in Linux represented by?", options: ["/root", "~", "/", "\\"], correctAnswer: 2 },
  { question: "Which command is used to create a new directory?", options: ["mkdir", "rmdir", "touch", "newdir"], correctAnswer: 0 },
  { question: "What does 'pwd' stand for?", options: ["Password", "Print Working Directory", "Path Working Directory", "Present Working Drive"], correctAnswer: 1 },
  { question: "Which command removes a file in Linux?", options: ["delete", "rm", "remove", "del"], correctAnswer: 1 },
  { question: "What is the default shell in most Linux distributions?", options: ["zsh", "fish", "bash", "sh"], correctAnswer: 2 },
  { question: "Which command is used to view file contents?", options: ["cat", "view", "show", "read"], correctAnswer: 0 },
  { question: "What does 'chmod' command do?", options: ["Change owner", "Change mode/permissions", "Check mode", "Change modification time"], correctAnswer: 1 },
  { question: "Which symbol represents the home directory?", options: ["/", "~", "@", "#"], correctAnswer: 1 },
  { question: "What command is used to copy files?", options: ["cp", "copy", "mv", "duplicate"], correctAnswer: 0 },
  { question: "Which command moves or renames files?", options: ["cp", "rm", "mv", "rn"], correctAnswer: 2 },
  { question: "What does 'sudo' stand for?", options: ["Super User Do", "Switch User Do", "System User Do", "Super Universal Do"], correctAnswer: 0 },
  { question: "Which command displays the current user?", options: ["user", "whoami", "currentuser", "me"], correctAnswer: 1 },
  { question: "What file contains user account information?", options: ["/etc/users", "/etc/passwd", "/etc/accounts", "/var/users"], correctAnswer: 1 },
  { question: "Which command is used to search for text in files?", options: ["find", "search", "grep", "locate"], correctAnswer: 2 },
  { question: "What does the 'man' command do?", options: ["Manage users", "Display manual pages", "Manipulate files", "Mount drives"], correctAnswer: 1 },
  { question: "Which command shows disk space usage?", options: ["disk", "df", "du", "space"], correctAnswer: 1 },
  { question: "What is the purpose of the 'tar' command?", options: ["Transfer files", "Archive files", "Test files", "Truncate files"], correctAnswer: 1 },
  { question: "Which command finds files in the filesystem?", options: ["search", "locate", "find", "grep"], correctAnswer: 2 },
  { question: "What does 'echo' command do?", options: ["Listen for input", "Display text", "Execute commands", "Edit files"], correctAnswer: 1 },
  { question: "Which permission allows reading a file?", options: ["w", "x", "r", "a"], correctAnswer: 2 },
  { question: "What command shows running processes?", options: ["proc", "ps", "process", "run"], correctAnswer: 1 },
  { question: "Which command terminates a process?", options: ["stop", "end", "kill", "terminate"], correctAnswer: 2 },
  { question: "What does the 'head' command do?", options: ["Show file header", "Display first lines of file", "Show file metadata", "Edit file beginning"], correctAnswer: 1 },
  { question: "Which command displays the last lines of a file?", options: ["end", "last", "tail", "bottom"], correctAnswer: 2 },
  { question: "What is a Linux distribution?", options: ["A file type", "A complete OS based on Linux kernel", "A command", "A user group"], correctAnswer: 1 },
  { question: "Which command changes file ownership?", options: ["chmod", "chown", "chgrp", "chuser"], correctAnswer: 1 },
  { question: "What does 'apt' stand for?", options: ["Advanced Package Tool", "Application Package Tool", "Auto Package Transfer", "Advanced Program Tool"], correctAnswer: 0 },
  { question: "Which directory contains user home directories?", options: ["/root", "/users", "/home", "/usr"], correctAnswer: 2 },
  { question: "What command clears the terminal screen?", options: ["cls", "clear", "clean", "reset"], correctAnswer: 1 },
  { question: "Which operator redirects output to a file?", options: ["<", "|", ">", "&"], correctAnswer: 2 },
  { question: "What does the pipe symbol '|' do?", options: ["Redirect to file", "Send output to another command", "Run in background", "Append to file"], correctAnswer: 1 },
  { question: "Which command displays system information?", options: ["uname", "sysinfo", "system", "info"], correctAnswer: 0 },
  { question: "What is the purpose of 'crontab'?", options: ["Manage users", "Schedule tasks", "Monitor system", "Configure network"], correctAnswer: 1 },
  { question: "Which command shows network configuration?", options: ["netconfig", "ifconfig", "network", "ipshow"], correctAnswer: 1 },
  { question: "What does 'wget' do?", options: ["Get file info", "Download files from web", "Search web", "Configure web server"], correctAnswer: 1 },
  { question: "Which command compresses files?", options: ["compress", "zip", "gzip", "pack"], correctAnswer: 2 },
  { question: "What is SSH used for?", options: ["File transfer", "Secure remote access", "Web browsing", "Email"], correctAnswer: 1 },
  { question: "Which command edits text in terminal?", options: ["edit", "nano", "notepad", "text"], correctAnswer: 1 },
  { question: "What does 'apt-get update' do?", options: ["Update all packages", "Update package lists", "Update system", "Update kernel"], correctAnswer: 1 },
  { question: "Which file stores environment variables?", options: ["/etc/env", "~/.bashrc", "/var/env", "~/.config"], correctAnswer: 1 },
  { question: "What command shows memory usage?", options: ["mem", "memory", "free", "ram"], correctAnswer: 2 },
  { question: "Which command creates an empty file?", options: ["new", "create", "touch", "make"], correctAnswer: 2 },
  { question: "What is the Linux kernel?", options: ["A shell", "Core of the OS", "A distribution", "A file manager"], correctAnswer: 1 },
  { question: "Which command sorts file contents?", options: ["order", "sort", "arrange", "organize"], correctAnswer: 1 },
  { question: "What does 'wc' command count?", options: ["Web content", "Words, lines, characters", "Windows connections", "Write cache"], correctAnswer: 1 },
  { question: "Which command displays calendar?", options: ["date", "cal", "calendar", "time"], correctAnswer: 1 },
  { question: "What is the purpose of '/tmp' directory?", options: ["Templates", "Temporary files", "Time files", "Test files"], correctAnswer: 1 },
  { question: "Which command shows command history?", options: ["log", "past", "history", "previous"], correctAnswer: 2 },
];

const linuxMediumQuestions = [
  "Explain the Linux file system hierarchy and the purpose of key directories like /etc, /var, /home, and /usr.",
  "What are file permissions in Linux and how do you interpret permission strings like 'rwxr-xr--'?",
  "Describe the difference between hard links and soft links (symbolic links) in Linux.",
  "How does the Linux boot process work from power-on to login prompt?",
  "Explain the concept of processes and daemons in Linux. How are they managed?",
  "What is the difference between 'su' and 'sudo'? When would you use each?",
  "How do you manage services in Linux using systemctl? Give examples.",
  "Explain stdin, stdout, and stderr. How do you redirect them?",
  "What are environment variables? How do you set them permanently?",
  "Describe the purpose and syntax of cron jobs for task scheduling.",
  "How does package management work in Debian-based vs RedHat-based systems?",
  "Explain the concept of Linux users and groups. How do you manage them?",
  "What is the purpose of the /proc filesystem? Give examples of useful files.",
  "How do you troubleshoot network connectivity issues in Linux?",
  "Explain what a shell script is and the basic structure of a bash script.",
  "What are the different types of shells available in Linux? Compare bash and zsh.",
  "How do you monitor system resources (CPU, memory, disk) in Linux?",
  "Explain the concept of Linux namespaces and how they relate to containerization.",
  "What is SELinux? How does it enhance system security?",
  "Describe how to set up SSH key-based authentication.",
  "What are Linux runlevels or targets? How have they evolved with systemd?",
  "Explain the difference between RAID levels and their use cases.",
  "How do you manage disk partitions and filesystems in Linux?",
  "What is LVM and what are its advantages for disk management?",
  "Describe best practices for securing a Linux server.",
];

const Linux = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl md:text-8xl mb-6 block animate-float">🐧</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Linux Fundamentals
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the command line and become proficient in Linux system administration
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
              {/* What is Linux */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">What is Linux?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Linux is a free, open-source operating system kernel created by Linus Torvalds in 1991. 
                  It forms the foundation of many operating systems called "Linux distributions" (distros) 
                  like Ubuntu, CentOS, Fedora, and Debian. Linux is known for its stability, security, 
                  and flexibility.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike Windows or macOS, Linux gives users complete control over their system. The 
                  command-line interface (CLI) is a powerful tool that allows users to perform complex 
                  tasks efficiently. Linux follows the Unix philosophy of "do one thing and do it well."
                </p>
              </div>

              {/* Why Linux is Important */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Why is Linux Important?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Server Dominance:</strong> Over 90% of the world's servers run on Linux, including most web servers, cloud infrastructure, and supercomputers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>DevOps Essential:</strong> Linux is the foundation of DevOps practices, containerization (Docker), and orchestration (Kubernetes).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Security:</strong> Linux's permission system and open-source nature make it inherently more secure than proprietary alternatives.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Free & Open Source:</strong> No licensing costs, complete source code access, and a massive community for support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Career Growth:</strong> Linux skills are highly demanded in cloud computing, system administration, and software development roles.</span>
                  </li>
                </ul>
              </div>

              {/* Where Linux is Used */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Real-World Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">☁️ Cloud Computing</h4>
                    <p className="text-sm text-muted-foreground">AWS, Google Cloud, and Azure all run on Linux infrastructure</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🌐 Web Servers</h4>
                    <p className="text-sm text-muted-foreground">Apache and Nginx servers powering websites worldwide</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📱 Android</h4>
                    <p className="text-sm text-muted-foreground">Android OS is built on the Linux kernel</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🐳 Containers</h4>
                    <p className="text-sm text-muted-foreground">Docker and Kubernetes rely on Linux features</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🖥️ Supercomputers</h4>
                    <p className="text-sm text-muted-foreground">100% of top 500 supercomputers run Linux</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🔧 IoT Devices</h4>
                    <p className="text-sm text-muted-foreground">Embedded systems and smart devices</p>
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
              Test your Linux knowledge with these 50 MCQs. Click on an option to see if you're correct!
            </p>

            <div className="space-y-6">
              {linuxMCQs.map((mcq, index) => (
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
              Prepare for interviews with these 25 medium-level questions. Use these to test your understanding and practice explaining concepts.
            </p>

            <div className="space-y-4">
              {linuxMediumQuestions.map((question, index) => (
                <MediumQuestionCard key={index} number={index + 1} question={question} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Linux;
