import { Project } from '@/types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'training-platform',
    title: 'Next Level Speed',
    subtitle: 'Subscription-Based Athlete Training Platform',
    description: 'A full-stack training and mentorship platform that combines structured athletic programs, video-based coaching, progress tracking, subscriptions, and personalized athlete mentorship.',
    longDescription: 'Next Level Speed is a subscription-based training and mentorship platform built for student-athletes and their families. The platform provides structured speed, strength, and conditioning programs alongside video lessons, progress tracking, mindset resources, parent support, and a premium 1-on-1 mentorship program.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image: '/projects/next-level-speed-ui.png',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    stats: [
      { label: 'Active Athletes', value: '10,000+' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Latency', value: '<50ms' },
    ],
    details: {
      ownershipStatement: 'I designed and built the platform from the ground up, covering the frontend, backend, database architecture, authentication, subscription lifecycle, billing, media delivery and admin tooling.',
      whatIBuilt: [
        {
          category: 'Training & Content',
          items: [
            'Structured Programs → Modules → Lessons architecture with video coaching.',
            'Real-time watch-progress persistence & athlete completion tracking.',
          ],
        },
        {
          category: 'Subscription & Billing',
          items: [
            'Monthly & yearly subscriptions + Elite Mentorship plan via Stripe.',
            'Automated recurring billing, plan changes, and past-due access guards.',
          ],
        },
        {
          category: 'Media & Security',
          items: [
            'Secure video playback pipeline with tokenized media access control.',
            'JWT HttpOnly cookie authentication & role-based content guards.',
          ],
        },
        {
          category: 'Admin Platform & Communication',
          items: [
            'Comprehensive admin ecosystem for programs, members, subscriptions, and real-time metrics.',
            'Automated transactional emails and SSE real-time in-app notifications.',
          ],
        },
      ],
      techStackBreakdown: [
        {
          category: 'FRONTEND',
          skills: ['Next.js', 'React', 'Tailwind CSS', 'React Query', 'React Hook Form', 'Zod', 'Stripe.js'],
        },
        {
          category: 'BACKEND',
          skills: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Passport JWT', 'bcrypt', 'Swagger'],
        },
        {
          category: 'INFRASTRUCTURE',
          skills: ['PostgreSQL', 'Scheduled Jobs', 'Media Storage'],
        },
        {
          category: 'SERVICES',
          skills: ['Stripe', 'Nodemailer', 'Puppeteer', 'Handlebars'],
        },
      ],
      outcome: 'The result is a complete coaching ecosystem rather than simply a video library — combining training delivery, athlete progress, family support, mentorship, subscriptions, billing, and administrative operations in one platform.',
      engineeringHighlights: [
        {
          title: 'Structured Coaching',
          description: 'Delivered multi-tier video programs with real-time watch progress tracking.',
        },
        {
          title: 'Automated Subscriptions',
          description: 'Handled recurring billing, plan changes, and past-due guards via Stripe.',
        },
        {
          title: 'Protected Media Delivery',
          description: 'Secured video streaming using tokenized access and JWT route guards.',
        },
        {
          title: 'Admin Operations',
          description: 'Built a centralized admin portal for member management, metrics, and automated notifications.',
        },
      ],
    },
  },
  {
    id: 'signature-k9',
    title: 'Signature K9',
    subtitle: 'Dog Training & Community Platform',
    description: 'A video-based dog training platform combining structured courses, progress tracking, quizzes, certification, and a private community for dog owners.',
    longDescription: 'Signature K9 is an online dog training and community platform centered around The 30-Day Reset, a structured training program designed to help dog owners build better communication, consistency, and relationships with their dogs.\n\nThe platform combines guided video lessons, progression-based quizzes, certification, learning progress, and a private community where members can share experiences and engage with training content.\n\nThis was a collaborative team project, where I contributed to the development of the platform\'s core learning, media, community, and backend functionality.',
    tags: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'AWS S3', 'Tailwind CSS'],
    image: '/projects/signature-k9.png',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    stats: [
      { label: 'Team Role', value: 'Full-Stack' },
      { label: 'Core Program', value: '30-Day Reset' },
      { label: 'Video Protocol', value: 'AWS S3 + HLS' },
    ],
    details: {
      ownershipStatement: 'Contributed to the development of the learning platform, including course progression, video delivery, quizzes and certification, community functionality, and supporting backend APIs. Worked within the existing team architecture to implement features across the frontend, backend, database, and media pipeline.',
      whatIBuilt: [
        {
          category: 'Learning & Course Experience',
          items: [
            'Contributed to the 30-Day Reset LMS, including the Programs → Modules → Lessons structure, lesson progression, completion tracking, and gated learning flow.',
            'Implemented progression rules requiring meaningful lesson completion and quiz performance before unlocking subsequent content.',
          ],
        },
        {
          category: 'Video Delivery Pipeline',
          items: [
            'Worked on the video delivery pipeline supporting HLS adaptive streaming with MP4 fallback, integrating protected media delivery through AWS S3 and CloudFront.',
            'Contributed to the media pipeline for S3 multipart uploads, upload-session tracking, FFmpeg HLS transcoding, and media state management.',
          ],
        },
        {
          category: 'Quizzes & Certification',
          items: [
            'Built functionality for module and certification quizzes, including quiz attempts, scoring, pass thresholds, and curriculum progression.',
            'Implemented course completion certification with automatically generated PDF certificates and student access to completed certificates.',
          ],
        },
        {
          category: 'Dashboard, Community & Backend',
          items: [
            'Contributed to the student dashboard bringing course progress, quiz performance, community activity, and training resources together.',
            'Built community functionality (posts, comments, categories, media) with supporting NestJS backend APIs & moderation tools.',
          ],
        },
      ],
      techStackBreakdown: [
        {
          category: 'FRONTEND',
          skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'React Query', 'Tailwind CSS'],
        },
        {
          category: 'BACKEND',
          skills: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Passport JWT'],
        },
        {
          category: 'MEDIA & INFRASTRUCTURE',
          skills: ['AWS S3', 'AWS CloudFront', 'FFmpeg', 'HLS'],
        },
        {
          category: 'SERVICES & TOOLS',
          skills: ['Puppeteer', 'Handlebars', 'Swagger'],
        },
      ],
      outcome: 'The platform brings structured dog training, progress-based learning, certification, and community interaction into a single digital experience. My contributions helped establish the core learning and media experience, allowing users to move from guided video lessons through quizzes and certification while staying connected through the community.',
      engineeringHighlights: [
        {
          title: 'Structured Learning',
          description: 'Turned a multi-module training curriculum into a guided digital learning experience.',
        },
        {
          title: 'Protected Video Delivery',
          description: 'Enabled scalable, access-controlled streaming through HLS, S3, and CloudFront.',
        },
        {
          title: 'Progress & Certification',
          description: 'Connected lesson completion, quizzes, and certification into a measurable learning journey.',
        },
        {
          title: 'Community Experience',
          description: 'Added a space for members to continue engaging beyond the individual training lessons.',
        },
      ],
    },
  },
  {
    id: 'taxificient',
    title: 'Taxificient',
    subtitle: 'Taxi Operations & Fleet Management Platform',
    description: 'A multi-tenant mobility platform that brings ride operations, dispatcher workflows, fleet management, driver operations, communication, and reporting into a unified system.',
    longDescription: 'Taxificient is a multi-tenant ride operations and fleet management platform built for taxi and mobility service providers. It brings passenger ride management, dispatcher workflows, driver and vehicle operations, communication, notifications, reporting, and subscription-based platform management into a unified system.\n\nThis was a collaborative team project, where I contributed to selected frontend and backend functionality across ride operations, fleet management, and administrative workflows.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS'],
    image: '/projects/taxificient.png',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    stats: [
      { label: 'Team Role', value: 'Full-Stack' },
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Real-Time Data', value: 'WebSockets' },
    ],
    details: {
      ownershipStatement: 'Contributed to the development of core operational features across the frontend and backend, including ride workflows, fleet-related functionality, and supporting administrative APIs. Worked across the Next.js frontend and NestJS backend to implement and integrate assigned features with the platform\'s existing services and data models.',
      whatIBuilt: [
        {
          category: 'Ride Operations',
          items: [
            'Contributed to ride creation and management workflows, including ride details, lifecycle states, and operational views used by the platform.',
            'Worked on dispatcher-facing workflows for managing and organizing ride operations and assignment-related information.',
          ],
        },
        {
          category: 'Fleet Management',
          items: [
            'Contributed to vehicle and fleet management functionality, including vehicle records, types, assignments, and related operational data.',
            'Worked on driver-related functionality including driver profiles, availability, and driver-vehicle relationships.',
          ],
        },
        {
          category: 'Administrative APIs',
          items: [
            'Developed and integrated NestJS APIs supporting assigned operational and administrative features, working with the existing PostgreSQL data layer.',
            'Implemented JWT-based access control and role-aware route protection for operational endpoints.',
          ],
        },
        {
          category: 'Frontend Application',
          items: [
            'Built and integrated responsive Next.js interfaces for assigned workflows, using React Query for server-state management and API integration.',
            'Integrated interactive map components and real-time operational status indicators for dispatchers.',
          ],
        },
      ],
      techStackBreakdown: [
        {
          category: 'FRONTEND',
          skills: ['Next.js', 'React Query', 'Google Maps', 'Tailwind CSS'],
        },
        {
          category: 'BACKEND',
          skills: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma'],
        },
        {
          category: 'PLATFORM & INFRASTRUCTURE',
          skills: ['Redis', 'WebSockets', 'Firebase', 'AWS'],
        },
      ],
      outcome: 'The platform brings ride operations, fleet management, driver coordination, communication, and administrative workflows into a single operational system for mobility providers. My contributions helped extend the platform\'s ride and fleet management capabilities while integrating new functionality into its existing frontend and backend architecture.',
      engineeringHighlights: [
        {
          title: 'Ride Workflows',
          description: 'Extended core ride management and dispatcher operational views.',
        },
        {
          title: 'Fleet Operations',
          description: 'Structured vehicle records, types, assignments, and driver profiles.',
        },
        {
          title: 'Backend Integration',
          description: 'Developed NestJS APIs and data models for team operational workflows.',
        },
        {
          title: 'Responsive UI',
          description: 'Built React Query integrated Next.js views for dispatcher and admin operations.',
        },
      ],
    },
  },
  {
    id: 'eventnest',
    title: 'EventNest',
    subtitle: 'Smart Event & Attendance Platform',
    description: 'A QR-based event management platform that simplifies attendee verification and provides organizers with accurate, real-time attendance tracking.',
    longDescription: 'EventNest is a smart event management and attendance platform designed to simplify event check-in while giving organizers reliable visibility into participation.\n\nThe platform uses event-specific QR codes to connect physical attendance with a digital verification workflow. Visitors scan the event QR code, submit their details, and authenticate using their registered email before their attendance is recorded.\n\nI designed, developed, and deployed the platform independently, covering the frontend, backend, database, attendance logic, authentication flow, and deployment infrastructure.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Vercel', 'Render'],
    image: '/projects/eventnest.png',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    stats: [
      { label: 'Project Type', value: 'Personal / Solo' },
      { label: 'Verification', value: 'QR Code + Email' },
      { label: 'Deployment', value: 'Vercel + Render' },
    ],
    details: {
      ownershipStatement: 'Independent Full-Stack Development — Designed and built the platform end-to-end, from event management and QR-based attendance to attendee verification, duplicate prevention, live monitoring, and automated email confirmation. Also handled the production deployment and infrastructure across Vercel, Render, and Supabase.',
      whatIBuilt: [
        {
          category: 'Event Management & Dashboard',
          items: [
            'Built the organizer workflow for creating and managing events through a centralized dashboard, generating unique QR entry points.',
            'Built a live attendance dashboard allowing organizers to monitor participation and review real-time check-in records.',
          ],
        },
        {
          category: 'QR Attendance & Verification',
          items: [
            'Implemented the QR-based check-in flow where attendees scan an event-specific code, submit details, and verify identity using registered email.',
            'Validated submitted emails against the event database, distinguishing between valid registered attendees and unknown users before recording attendance.',
          ],
        },
        {
          category: 'Attendance Integrity & Safeguards',
          items: [
            'Built safeguards against duplicate attendance and invalid check-ins while automatically recording attendance timestamps for reliable event records.',
            'Implemented automated verification rules ensuring duplicate attempts are blocked and logged.',
          ],
        },
        {
          category: 'Automated Communication & Deployment',
          items: [
            'Implemented automatic email confirmation after successful attendance, giving attendees immediate verification of their check-in.',
            'Handled production deployment and infrastructure setup across Vercel (frontend), Render (backend), and Supabase (PostgreSQL database).',
          ],
        },
      ],
      techStackBreakdown: [
        {
          category: 'FRONTEND',
          skills: ['Next.js', 'React', 'Tailwind CSS', 'React Hook Form', 'Zod'],
        },
        {
          category: 'BACKEND',
          skills: ['NestJS', 'TypeScript', 'TypeORM'],
        },
        {
          category: 'DATABASE',
          skills: ['PostgreSQL', 'Supabase'],
        },
        {
          category: 'DEPLOYMENT',
          skills: ['Vercel', 'Render'],
        },
      ],
      outcome: 'EventNest turns a traditionally manual event check-in process into a structured digital workflow. Organizers can create events, distribute a unique QR entry point, verify attendees, monitor participation, and maintain a reliable attendance history from a single platform. The project also gave me an opportunity to take a product from concept → architecture → implementation → production deployment independently.',
      engineeringHighlights: [
        {
          title: 'QR Verification',
          description: 'Connected physical attendance to email authentication workflows.',
        },
        {
          title: 'Integrity Safeguards',
          description: 'Prevented duplicate check-ins and invalid attendance attempts.',
        },
        {
          title: 'Live Monitoring',
          description: 'Built real-time organizer dashboards for check-in analytics.',
        },
        {
          title: 'Independent Deployment',
          description: 'Shipped full production stack across Vercel, Render, and Supabase.',
        },
      ],
    },
  },
];
