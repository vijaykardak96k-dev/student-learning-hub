import Layout from "@/components/Layout";
import MCQCard from "@/components/MCQCard";
import MediumQuestionCard from "@/components/MediumQuestionCard";

const awsMCQs = [
  { question: "What does AWS stand for?", options: ["Amazon Web Solutions", "Amazon Web Services", "Advanced Web Services", "Amazon Wide Services"], correctAnswer: 1 },
  { question: "Which AWS service provides virtual servers?", options: ["S3", "EC2", "RDS", "Lambda"], correctAnswer: 1 },
  { question: "What is Amazon S3 used for?", options: ["Computing", "Object storage", "Databases", "Networking"], correctAnswer: 1 },
  { question: "Which service is serverless compute?", options: ["EC2", "ECS", "Lambda", "EKS"], correctAnswer: 2 },
  { question: "What is an AWS Region?", options: ["A data center", "A geographic area with multiple data centers", "A server", "A network"], correctAnswer: 1 },
  { question: "What is an Availability Zone?", options: ["A region", "An isolated data center location", "A security group", "A subnet"], correctAnswer: 1 },
  { question: "Which service manages DNS?", options: ["CloudFront", "Route 53", "VPC", "Direct Connect"], correctAnswer: 1 },
  { question: "What is IAM in AWS?", options: ["Internet Access Manager", "Identity and Access Management", "Instance Access Method", "Internal Account Management"], correctAnswer: 1 },
  { question: "Which database service is managed by AWS?", options: ["MySQL only", "RDS", "Oracle only", "PostgreSQL only"], correctAnswer: 1 },
  { question: "What is Amazon VPC?", options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Processing Center", "Virtual Protocol Control"], correctAnswer: 0 },
  { question: "Which service provides CDN functionality?", options: ["S3", "EC2", "CloudFront", "Route 53"], correctAnswer: 2 },
  { question: "What is an AMI?", options: ["Amazon Machine Image", "AWS Management Interface", "Amazon Main Instance", "AWS Module Image"], correctAnswer: 0 },
  { question: "Which service monitors AWS resources?", options: ["CloudTrail", "CloudWatch", "Config", "Inspector"], correctAnswer: 1 },
  { question: "What is AWS CloudFormation for?", options: ["Storage", "Infrastructure as Code", "Monitoring", "Security"], correctAnswer: 1 },
  { question: "Which service logs API calls?", options: ["CloudWatch", "CloudTrail", "Config", "GuardDuty"], correctAnswer: 1 },
  { question: "What is an EBS volume?", options: ["Network storage", "Block storage for EC2", "Object storage", "File storage"], correctAnswer: 1 },
  { question: "Which service provides message queuing?", options: ["SNS", "SQS", "SES", "Step Functions"], correctAnswer: 1 },
  { question: "What is SNS used for?", options: ["Storage", "Pub/Sub messaging", "Computing", "Database"], correctAnswer: 1 },
  { question: "Which service is for container orchestration?", options: ["EC2", "Lambda", "ECS/EKS", "Elastic Beanstalk"], correctAnswer: 2 },
  { question: "What is AWS Elastic Beanstalk?", options: ["Storage service", "PaaS for deploying apps", "Database service", "Network service"], correctAnswer: 1 },
  { question: "Which service provides load balancing?", options: ["ELB/ALB", "Route 53", "CloudFront", "Direct Connect"], correctAnswer: 0 },
  { question: "What is a Security Group?", options: ["IAM policy", "Virtual firewall for instances", "VPC component", "S3 bucket policy"], correctAnswer: 1 },
  { question: "Which storage class is cheapest?", options: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier Deep Archive", "S3 One Zone-IA"], correctAnswer: 2 },
  { question: "What is AWS Auto Scaling?", options: ["Manual scaling", "Automatic resource adjustment", "Load balancing", "Monitoring"], correctAnswer: 1 },
  { question: "Which service is NoSQL database?", options: ["RDS", "DynamoDB", "Redshift", "Aurora"], correctAnswer: 1 },
  { question: "What is Amazon Redshift?", options: ["NoSQL database", "Data warehouse", "Cache", "Queue"], correctAnswer: 1 },
  { question: "Which service caches data?", options: ["RDS", "DynamoDB", "ElastiCache", "S3"], correctAnswer: 2 },
  { question: "What is AWS Kinesis for?", options: ["Storage", "Real-time data streaming", "Computing", "Networking"], correctAnswer: 1 },
  { question: "Which service sends emails?", options: ["SNS", "SQS", "SES", "WorkMail"], correctAnswer: 2 },
  { question: "What is Amazon EFS?", options: ["Block storage", "Object storage", "File storage", "Archive storage"], correctAnswer: 2 },
  { question: "Which service provides API Gateway?", options: ["Lambda", "API Gateway", "AppSync", "CloudFront"], correctAnswer: 1 },
  { question: "What is AWS Secrets Manager for?", options: ["IAM users", "Storing secrets/credentials", "Encryption", "Logging"], correctAnswer: 1 },
  { question: "Which service is for ML?", options: ["EC2", "SageMaker", "Lambda", "ECS"], correctAnswer: 1 },
  { question: "What is AWS CodePipeline?", options: ["Code editor", "CI/CD service", "Repository", "Build service"], correctAnswer: 1 },
  { question: "Which service stores code?", options: ["CodePipeline", "CodeBuild", "CodeCommit", "CodeDeploy"], correctAnswer: 2 },
  { question: "What is AWS CodeBuild?", options: ["Repository", "Build service", "Deployment", "Pipeline"], correctAnswer: 1 },
  { question: "Which service deploys code?", options: ["CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline"], correctAnswer: 2 },
  { question: "What is Amazon Cognito for?", options: ["Computing", "User authentication", "Storage", "Networking"], correctAnswer: 1 },
  { question: "Which service provides VPN?", options: ["Direct Connect", "VPN Gateway", "Transit Gateway", "PrivateLink"], correctAnswer: 1 },
  { question: "What is AWS Direct Connect?", options: ["VPN service", "Dedicated network connection", "Internet gateway", "NAT gateway"], correctAnswer: 1 },
  { question: "Which service is for serverless APIs?", options: ["EC2", "Lambda + API Gateway", "ECS", "EKS"], correctAnswer: 1 },
  { question: "What is Amazon Aurora?", options: ["NoSQL database", "MySQL/PostgreSQL compatible database", "Data warehouse", "Cache"], correctAnswer: 1 },
  { question: "Which service manages containers without servers?", options: ["ECS", "EKS", "Fargate", "EC2"], correctAnswer: 2 },
  { question: "What is AWS WAF?", options: ["Storage", "Web Application Firewall", "Computing", "Database"], correctAnswer: 1 },
  { question: "Which service provides DDoS protection?", options: ["WAF", "Shield", "GuardDuty", "Inspector"], correctAnswer: 1 },
  { question: "What is AWS Organizations for?", options: ["Single account", "Multi-account management", "IAM users", "EC2 instances"], correctAnswer: 1 },
  { question: "Which pricing model is pay-per-use?", options: ["Reserved", "On-Demand", "Spot", "Dedicated"], correctAnswer: 1 },
  { question: "What are Spot Instances?", options: ["Reserved capacity", "Unused capacity at discount", "Dedicated servers", "On-demand servers"], correctAnswer: 1 },
  { question: "Which service is for event-driven architectures?", options: ["SQS", "EventBridge", "Step Functions", "SNS"], correctAnswer: 1 },
  { question: "What is AWS Step Functions?", options: ["Serverless workflow orchestration", "Lambda functions", "Queue service", "API service"], correctAnswer: 0 },
];

const awsMediumQuestions = [
  "Explain the AWS shared responsibility model. What is AWS responsible for vs. the customer?",
  "What is the difference between EC2 Reserved Instances, On-Demand, and Spot Instances?",
  "Describe the differences between S3 storage classes and their use cases.",
  "How does AWS Auto Scaling work? Explain scaling policies and triggers.",
  "What is a VPC? Explain subnets, route tables, and internet gateways.",
  "Compare and contrast AWS Lambda with EC2. When would you use each?",
  "Explain IAM roles, policies, and best practices for security.",
  "What is the difference between Security Groups and Network ACLs?",
  "Describe the AWS Well-Architected Framework and its five pillars.",
  "How does Amazon RDS differ from DynamoDB? When would you choose each?",
  "Explain how CloudFront improves application performance.",
  "What is Infrastructure as Code? Explain CloudFormation vs. Terraform.",
  "Describe the process of creating a highly available architecture on AWS.",
  "What is AWS ECS vs. EKS? When would you use containers on AWS?",
  "Explain the concept of AWS Regions and Availability Zones for disaster recovery.",
  "How does AWS Route 53 routing work? Explain routing policies.",
  "What are AWS Lambda layers and environment variables?",
  "Describe VPC peering vs. Transit Gateway for network connectivity.",
  "How do you implement a CI/CD pipeline using AWS CodePipeline?",
  "Explain S3 bucket policies vs. IAM policies for access control.",
  "What is AWS CloudWatch? Explain metrics, alarms, and logs.",
  "Describe serverless architecture patterns on AWS.",
  "How do you secure data at rest and in transit on AWS?",
  "What is AWS ElastiCache? When would you use Redis vs. Memcached?",
  "Explain cost optimization strategies on AWS.",
];

const AWS = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl md:text-8xl mb-6 block animate-float">☁️</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Amazon Web Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn cloud computing with the world's most comprehensive cloud platform
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
              {/* What is AWS */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">What is AWS?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by 
                  Amazon. Launched in 2006, it offers over 200 services including computing power, 
                  storage, databases, machine learning, analytics, and more – all delivered over 
                  the internet with pay-as-you-go pricing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AWS operates through a global network of data centers organized into Regions and 
                  Availability Zones. This infrastructure enables businesses to deploy applications 
                  close to their users while maintaining high availability and fault tolerance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Instead of buying and maintaining physical servers, companies can rent computing 
                  resources from AWS, scaling up or down based on demand. This eliminates upfront 
                  costs and allows businesses to focus on their applications rather than infrastructure.
                </p>
              </div>

              {/* Why AWS is Important */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Why is AWS Important?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Market Leader:</strong> AWS holds approximately 32% of the cloud market share, making it the most widely used cloud platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Cost Efficiency:</strong> Pay only for what you use, with no upfront hardware investments required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Scalability:</strong> Automatically scale resources to handle traffic spikes or reduce during quiet periods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Global Reach:</strong> Deploy applications in 30+ regions worldwide for low latency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Career Growth:</strong> AWS skills are among the highest-paid in tech, with strong job demand.</span>
                  </li>
                </ul>
              </div>

              {/* Where AWS is Used */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Real-World Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🌐 Web Hosting</h4>
                    <p className="text-sm text-muted-foreground">Host websites and applications with EC2, S3, and CloudFront</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📱 Mobile Backends</h4>
                    <p className="text-sm text-muted-foreground">Build scalable backends with Lambda and API Gateway</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">📊 Big Data</h4>
                    <p className="text-sm text-muted-foreground">Process massive datasets with EMR, Redshift, and Kinesis</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🤖 Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Train and deploy ML models with SageMaker</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🎮 Gaming</h4>
                    <p className="text-sm text-muted-foreground">Build multiplayer games with GameLift and DynamoDB</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">🏢 Enterprise</h4>
                    <p className="text-sm text-muted-foreground">Run ERP, CRM, and business applications</p>
                  </div>
                </div>
              </div>

              {/* Key Services */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-xl font-display font-semibold mb-4 text-primary">Key AWS Services to Know</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><span className="font-semibold text-foreground">EC2:</span> <span className="text-muted-foreground">Virtual servers in the cloud</span></p>
                    <p><span className="font-semibold text-foreground">S3:</span> <span className="text-muted-foreground">Object storage for files</span></p>
                    <p><span className="font-semibold text-foreground">Lambda:</span> <span className="text-muted-foreground">Serverless compute</span></p>
                    <p><span className="font-semibold text-foreground">RDS:</span> <span className="text-muted-foreground">Managed relational databases</span></p>
                    <p><span className="font-semibold text-foreground">VPC:</span> <span className="text-muted-foreground">Private cloud network</span></p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-semibold text-foreground">IAM:</span> <span className="text-muted-foreground">Identity and access management</span></p>
                    <p><span className="font-semibold text-foreground">CloudWatch:</span> <span className="text-muted-foreground">Monitoring and logging</span></p>
                    <p><span className="font-semibold text-foreground">Route 53:</span> <span className="text-muted-foreground">DNS and routing</span></p>
                    <p><span className="font-semibold text-foreground">CloudFront:</span> <span className="text-muted-foreground">Content delivery network</span></p>
                    <p><span className="font-semibold text-foreground">DynamoDB:</span> <span className="text-muted-foreground">NoSQL database</span></p>
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
              Test your AWS knowledge with these 50 MCQs. Click on an option to check your answer!
            </p>

            <div className="space-y-6">
              {awsMCQs.map((mcq, index) => (
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
              Prepare for interviews with these 25 medium-level AWS questions.
            </p>

            <div className="space-y-4">
              {awsMediumQuestions.map((question, index) => (
                <MediumQuestionCard key={index} number={index + 1} question={question} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AWS;
