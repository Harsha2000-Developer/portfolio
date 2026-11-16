import type { SummaryData } from '@/types/content';

export const summary: SummaryData = {
  name: 'Harsha',
  initials: 'H',
  role: 'Software Engineer',
  headline: 'Full Stack Developer ',
  bio: 'Software Engineer with 4 years of experience designing, developing, and deploying scalable, high-availability applications using Java 17, Spring Boot 3.x, Node.js, and TypeScript. Strong experience building RESTful APIs, GraphQL services, and distributed microservices, with asynchronous event processing using Apache Kafka. Hands-on experience developing cloud-native applications, containerizing services with Docker, and deploying workloads on AWS EKS. Proficient in building responsive, SEO-optimized web applications using React and Next.js, with a focus on frontend performance, scalability, and reducing page load times. ',
  availability: 'Actively looking for new opportunities',
  // Add public/resume.pdf, then uncomment to show the "Resume" download button.
  // resumeUrl: '/resume.pdf',
  stats: [
    { value: '4', label: 'Years shipping to production' },
    { value: '3', label: 'Regulated industries' },
    { value: '5x', label: 'Faster search & transactions' },
    { value: '30%', label: 'Faster feature delivery' },
  ],
  focus: ['AWS Serverless', 'Event-Driven Systems', 'Production Reliability'],
};
