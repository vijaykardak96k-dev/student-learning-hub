import Layout from "@/components/Layout";
import MCQCard from "@/components/MCQCard";
import MediumQuestionCard from "@/components/MediumQuestionCard";

const pythonMCQs = [
  { question: "Who created Python?", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], correctAnswer: 1 },
  { question: "What type of language is Python?", options: ["Compiled only", "Interpreted", "Machine language", "Assembly"], correctAnswer: 1 },
  { question: "Which keyword is used to define a function?", options: ["function", "func", "def", "define"], correctAnswer: 2 },
  { question: "What is the correct file extension for Python?", options: [".python", ".py", ".pt", ".pyt"], correctAnswer: 1 },
  { question: "How do you insert comments in Python?", options: ["// comment", "/* comment */", "# comment", "-- comment"], correctAnswer: 2 },
  { question: "Which of these is a valid variable name?", options: ["1variable", "my-var", "my_var", "my var"], correctAnswer: 2 },
  { question: "What is the output of print(2**3)?", options: ["6", "8", "9", "5"], correctAnswer: 1 },
  { question: "Which data type is immutable?", options: ["List", "Dictionary", "Tuple", "Set"], correctAnswer: 2 },
  { question: "How do you create a list in Python?", options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"], correctAnswer: 1 },
  { question: "What does len() function do?", options: ["Returns length", "Returns type", "Returns sum", "Returns max"], correctAnswer: 0 },
  { question: "Which operator is used for floor division?", options: ["/", "%", "//", "**"], correctAnswer: 2 },
  { question: "How do you start a for loop?", options: ["for i in range:", "for i in range():", "foreach i:", "loop i:"], correctAnswer: 1 },
  { question: "What is None in Python?", options: ["Zero", "Empty string", "Null value", "False"], correctAnswer: 2 },
  { question: "Which method adds an item to a list?", options: ["add()", "append()", "insert()", "push()"], correctAnswer: 1 },
  { question: "What is a dictionary in Python?", options: ["Ordered sequence", "Key-value pairs", "Immutable list", "Set of numbers"], correctAnswer: 1 },
  { question: "How do you check the type of a variable?", options: ["typeof()", "type()", "vartype()", "checktype()"], correctAnswer: 1 },
  { question: "What does 'pip' stand for?", options: ["Python Install Package", "Pip Installs Packages", "Package Installer Python", "Python Installation Program"], correctAnswer: 1 },
  { question: "Which keyword handles exceptions?", options: ["catch", "except", "handle", "error"], correctAnswer: 1 },
  { question: "What is the default value of a function parameter?", options: ["0", "None", "Empty", "Undefined"], correctAnswer: 1 },
  { question: "How do you create a class in Python?", options: ["class MyClass:", "Class MyClass:", "create MyClass:", "new MyClass:"], correctAnswer: 0 },
  { question: "What is __init__ in Python?", options: ["Destructor", "Constructor", "Static method", "Class variable"], correctAnswer: 1 },
  { question: "Which module is used for regular expressions?", options: ["regex", "re", "regexp", "pattern"], correctAnswer: 1 },
  { question: "What does 'self' refer to?", options: ["The module", "The function", "The instance", "The class"], correctAnswer: 2 },
  { question: "How do you import a module?", options: ["include module", "import module", "require module", "use module"], correctAnswer: 1 },
  { question: "What is a lambda function?", options: ["A named function", "An anonymous function", "A class method", "A module"], correctAnswer: 1 },
  { question: "Which method removes an item from a list by value?", options: ["delete()", "remove()", "pop()", "discard()"], correctAnswer: 1 },
  { question: "What is list comprehension?", options: ["A loop", "A concise way to create lists", "A function", "A class"], correctAnswer: 1 },
  { question: "Which data type is used for true/false?", options: ["int", "str", "bool", "bit"], correctAnswer: 2 },
  { question: "What does the 'pass' keyword do?", options: ["Exits loop", "Skips iteration", "Does nothing (placeholder)", "Passes value"], correctAnswer: 2 },
  { question: "How do you read a file in Python?", options: ["read('file')", "open('file', 'r')", "file.read()", "load('file')"], correctAnswer: 1 },
  { question: "What is PEP 8?", options: ["A Python version", "Style guide for Python", "A library", "An error type"], correctAnswer: 1 },
  { question: "Which keyword creates a generator?", options: ["generate", "yield", "return", "create"], correctAnswer: 1 },
  { question: "What is the output of bool('')?", options: ["True", "False", "None", "Error"], correctAnswer: 1 },
  { question: "How do you create a virtual environment?", options: ["python venv create", "python -m venv myenv", "pip venv new", "virtualenv --new"], correctAnswer: 1 },
  { question: "What does the 'with' statement do?", options: ["Loops", "Context management", "Imports", "Defines function"], correctAnswer: 1 },
  { question: "Which method converts string to lowercase?", options: ["lower()", "toLower()", "lowercase()", "down()"], correctAnswer: 0 },
  { question: "What is __name__ == '__main__' for?", options: ["Error handling", "Check if script is run directly", "Import check", "Variable declaration"], correctAnswer: 1 },
  { question: "Which module handles JSON?", options: ["json", "JSON", "jsonify", "parse"], correctAnswer: 0 },
  { question: "What is a decorator in Python?", options: ["A design pattern", "A function that modifies another function", "A class", "A variable type"], correctAnswer: 1 },
  { question: "How do you handle multiple exceptions?", options: ["except (Error1, Error2):", "catch Error1, Error2:", "handle Error1 | Error2:", "except Error1 or Error2:"], correctAnswer: 0 },
  { question: "What is the Global Interpreter Lock (GIL)?", options: ["A security feature", "A mutex for thread safety", "A debugging tool", "A package manager"], correctAnswer: 1 },
  { question: "Which method joins list elements?", options: ["concat()", "join()", "merge()", "combine()"], correctAnswer: 1 },
  { question: "What is *args in a function?", options: ["Keyword arguments", "Variable positional arguments", "Default arguments", "Required arguments"], correctAnswer: 1 },
  { question: "What is **kwargs?", options: ["Positional arguments", "Variable keyword arguments", "List arguments", "Tuple arguments"], correctAnswer: 1 },
  { question: "Which module is used for date/time?", options: ["time", "datetime", "calendar", "All of the above"], correctAnswer: 3 },
  { question: "What does enumerate() return?", options: ["Index only", "Value only", "Index and value", "Length"], correctAnswer: 2 },
  { question: "How do you copy a list?", options: ["list2 = list1", "list2 = list1.copy()", "list2 = copy(list1)", "list2 = list1[:]"], correctAnswer: 1 },
  { question: "What is __str__ method for?", options: ["String conversion", "String length", "String type", "String input"], correctAnswer: 0 },
  { question: "Which package is used for HTTP requests?", options: ["http", "requests", "urllib", "web"], correctAnswer: 1 },
  { question: "What is Python's package index called?", options: ["NPM", "PyPI", "Pip", "Conda"], correctAnswer: 1 },
];

const pythonMediumQuestions = [
  "Explain the difference between lists and tuples in Python. When would you use each?",
  "What are Python decorators? Provide an example of creating and using a decorator.",
  "Explain the concept of generators in Python. How do they differ from regular functions?",
  "What is the Global Interpreter Lock (GIL)? How does it affect multithreading?",
  "Describe the differences between __str__ and __repr__ methods.",
  "Explain Python's garbage collection mechanism. How does reference counting work?",
  "What are context managers? Explain the 'with' statement and how to create custom context managers.",
  "Describe the difference between shallow copy and deep copy in Python.",
  "What is method resolution order (MRO) in Python's multiple inheritance?",
  "Explain list comprehension, dictionary comprehension, and set comprehension with examples.",
  "What are *args and **kwargs? When and how would you use them?",
  "Describe Python's exception handling. What is the purpose of try, except, else, and finally?",
  "What is the difference between @staticmethod and @classmethod?",
  "Explain Python virtual environments. Why are they important?",
  "What are metaclasses in Python? When would you use them?",
  "Describe the differences between Python 2 and Python 3.",
  "What is duck typing in Python? How does it relate to polymorphism?",
  "Explain Python's import system. What is the difference between import and from import?",
  "What are lambda functions? What are their limitations?",
  "Describe Python's memory management and how to optimize memory usage.",
  "What is the difference between is and == operators?",
  "Explain async/await in Python. How does asynchronous programming work?",
  "What are Python's built-in data structures? Compare their time complexities.",
  "Describe unit testing in Python. How do you use unittest or pytest?",
  "What is PEP 8? Why are coding standards important in Python?",
];

const Python = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl md:text-8xl mb-6 block animate-float">🐍</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Python Programming
            </h1>
            <p className="text-lg text-muted-foreground">
              Master the most versatile programming language for automation, web development, and DevOps
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
              {/* What is Python */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">What is Python?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Python is a high-level, interpreted programming language created by Guido van Rossum 
                  and released in 1991. It emphasizes code readability with its notable use of 
                  significant indentation and clean, simple syntax that makes it ideal for beginners.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Python supports multiple programming paradigms including procedural, object-oriented, 
                  and functional programming. It has a vast standard library and an even larger 
                  ecosystem of third-party packages available through PyPI (Python Package Index).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The language is dynamically typed, meaning you don't need to declare variable types. 
                  This, combined with its intuitive syntax, makes Python one of the fastest languages 
                  to learn and write code in.
                </p>
              </div>

              {/* Why Python is Important */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Why is Python Important?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Easy to Learn:</strong> Simple, readable syntax makes it perfect for beginners and rapid development.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Versatile:</strong> Used in web development, data science, AI/ML, automation, DevOps, and more.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Automation:</strong> Perfect for scripting, task automation, and DevOps workflows.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Rich Ecosystem:</strong> Over 400,000 packages on PyPI for virtually any task.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>High Demand:</strong> One of the most in-demand programming languages in the job market.</span>
                  </li>
                </ul>
              </div>

              {/* Where Python is Used */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Real-World Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🤖 AI & Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, scikit-learn for ML models</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🌐 Web Development</h4>
                    <p className="text-sm text-muted-foreground">Django, Flask, FastAPI for backend services</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📊 Data Science</h4>
                    <p className="text-sm text-muted-foreground">Pandas, NumPy, Matplotlib for data analysis</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🔧 DevOps & Automation</h4>
                    <p className="text-sm text-muted-foreground">Ansible, scripts for CI/CD and infrastructure</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🔐 Cybersecurity</h4>
                    <p className="text-sm text-muted-foreground">Security tools, penetration testing, scripting</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🎮 Game Development</h4>
                    <p className="text-sm text-muted-foreground">Pygame for 2D games and prototypes</p>
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
              Test your Python knowledge with these 50 MCQs. Click on an option to check your answer!
            </p>

            <div className="space-y-6">
              {pythonMCQs.map((mcq, index) => (
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
              Prepare for interviews with these 25 medium-level Python questions.
            </p>

            <div className="space-y-4">
              {pythonMediumQuestions.map((question, index) => (
                <MediumQuestionCard key={index} number={index + 1} question={question} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Python;
