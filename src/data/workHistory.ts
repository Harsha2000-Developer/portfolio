import type { Job } from '@/types/content';

// Newest first. `summary` is optional — left out so each role shows only its skills.
export const workHistory: Job[] = [
  {
    role: 'Software Developer',
    company: 'PNC',
    location: 'Irving, TX',
    domain: 'Banking',
    start: 'Mar 2026',
    end: 'Present',
    tech: ['Java', 'Spring Boot', 'AWS Lambda', 'SQS / SNS', 'S3', 'API Gateway', 'Kafka', 'Bedrock'],
  },
  {
    role: 'Software Developer',
    company: 'Chicago Education Advocacy Cooperative',
    location: 'Irving, TX',
    domain: 'Healthcare',
    start: 'Jun 2025',
    end: 'Mar 2026',
    tech: ['Node.js', 'TypeScript', 'AWS ECS', 'AWS Lambda', 'API Gateway', 'RDS PostgreSQL', 'Kafka'],
  },
  {
    role: 'Software Engineer',
    company: 'Unifo Private Limited',
    location: 'India',
    domain: 'Trade compliance',
    start: 'Aug 2021',
    end: 'Jul 2023',
    tech: ['Node.js', 'Express.js', 'TypeScript', 'AWS EKS', 'AWS CDK', 'Terraform', 'React'],
  },
];
