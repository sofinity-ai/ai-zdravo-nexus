import type { Course } from "@/components/CourseCard";
import type { Prompt } from "@/components/PromptCard";

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'AI Marketing Fundamentals',
    description: 'Naučite osnove AI marketinga kroz praktične primere',
    instructor: 'Marko Petrović',
    duration: '4h 30min',
    level: 'Beginner',
    rating: 4.8,
    students: 1250,
    progress: 75,
    thumbnail: 'marketing-fundamentals.jpg',
    category: 'Marketing'
  },
  {
    id: '2',
    title: 'Advanced Prompt Engineering',
    description: 'Napredne tehnike za kreiranje efikasnih prompt-ova',
    instructor: 'Ana Jovanović',
    duration: '6h 15min',
    level: 'Advanced',
    rating: 4.9,
    students: 890,
    progress: 45,
    thumbnail: 'prompt-engineering.jpg',
    category: 'AI Engineering'
  },
  {
    id: '3',
    title: 'ChatGPT for Business',
    description: 'Kako koristiti ChatGPT za povećanje produktivnosti',
    instructor: 'Stefan Nikolić',
    duration: '3h 45min',
    level: 'Intermediate',
    rating: 4.7,
    students: 2100,
    thumbnail: 'chatgpt-business.jpg',
    category: 'Business',
    isLocked: true
  },
  {
    id: '4',
    title: 'AI Content Creation Workshop',
    description: 'Kreiranje sadržaja uz pomoć AI alata',
    instructor: 'Milica Stojanović',
    duration: '5h 20min',
    level: 'Intermediate',
    rating: 4.6,
    students: 1560,
    thumbnail: 'content-creation.jpg',
    category: 'Content'
  },
  {
    id: '5',
    title: 'Automation with n8n & AI',
    description: 'Automatizacija radnih tokova kombinujući n8n i AI',
    instructor: 'Luka Mihajlović',
    duration: '7h 10min',
    level: 'Advanced',
    rating: 4.8,
    students: 650,
    thumbnail: 'automation-n8n.jpg',
    category: 'Automation'
  },
  {
    id: '6',
    title: 'AI Image Generation Mastery',
    description: 'Midjourney, DALL-E i ostali alati za kreiranje slika',
    instructor: 'Jovana Radić',
    duration: '4h 55min',
    level: 'Beginner',
    rating: 4.5,
    students: 1890,
    thumbnail: 'image-generation.jpg',
    category: 'Creative'
  }
];

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Perfect Blog Post Outline',
    description: 'Kreiranje detaljnog plana za blog post na bilo koju temu',
    prompt: 'Create a comprehensive blog post outline for [TOPIC]. Include: 1) An attention-grabbing headline, 2) Introduction hook, 3) 5-7 main sections with subpoints, 4) Key takeaways, 5) Call-to-action. Target audience: [AUDIENCE]. Tone: [TONE].',
    category: 'Content Marketing',
    tags: ['blog', 'content', 'outline'],
    aiTools: ['ChatGPT', 'Claude'],
    author: 'Marko P.',
    likes: 128,
    isBookmarked: true
  },
  {
    id: '2',
    title: 'Email Campaign Generator',
    description: 'Generiranje email kampanje sa subject linovima i sadržajem',
    prompt: 'Generate a complete email marketing campaign for [PRODUCT/SERVICE]. Include: 1) 5 compelling subject lines, 2) Email body with personalization, 3) Clear CTA, 4) Follow-up sequence (3 emails), 5) A/B testing suggestions. Target: [TARGET_AUDIENCE].',
    category: 'Email Marketing',
    tags: ['email', 'campaign', 'marketing'],
    aiTools: ['ChatGPT', 'Gemini'],
    author: 'Ana J.',
    likes: 95
  },
  {
    id: '3',
    title: 'Social Media Content Calendar',
    description: 'Kreiranje mjesečnog kalendara sadržaja za social media',
    prompt: 'Create a 30-day social media content calendar for [BUSINESS/BRAND]. Include: 1) Daily post ideas, 2) Optimal posting times, 3) Hashtag suggestions, 4) Content types (image, video, carousel), 5) Engagement strategies. Platform: [PLATFORM]. Industry: [INDUSTRY].',
    category: 'Social Media',
    tags: ['social', 'calendar', 'planning'],
    aiTools: ['ChatGPT', 'Claude'],
    author: 'Stefan N.',
    likes: 156,
    isLocked: true
  },
  {
    id: '4',
    title: 'Product Description Optimizer',
    description: 'Optimizovani opisi proizvoda za e-commerce',
    prompt: 'Write a compelling product description for [PRODUCT]. Include: 1) Attention-grabbing headline, 2) Key benefits (not features), 3) Problem-solution narrative, 4) Social proof elements, 5) Urgency/scarcity, 6) SEO keywords: [KEYWORDS]. Target customer: [CUSTOMER_PROFILE].',
    category: 'E-commerce',
    tags: ['product', 'description', 'seo'],
    aiTools: ['ChatGPT', 'GPT-4'],
    author: 'Milica S.',
    likes: 203
  }
];

export const continueLearningSolutions = [
  {
    id: '1',
    title: 'AI Marketing Fundamentals',
    progress: 75,
    nextLesson: 'Content Personalization with AI',
    duration: '18 min',
    thumbnail: 'marketing-course.jpg'
  },
  {
    id: '2', 
    title: 'Advanced Prompt Engineering',
    progress: 45,
    nextLesson: 'Chain-of-Thought Prompting',
    duration: '22 min',
    thumbnail: 'prompt-course.jpg'
  }
];