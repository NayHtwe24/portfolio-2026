import {
  MdCode,
  MdCloud,
  MdSmartToy,
  MdPhoneIphone,
  MdStorage,
  MdScience,
} from 'react-icons/md';

export const profile = {
  name: 'Nay Htwe Hlaing',
  title: 'Software Engineer',
  subtitle: 'Building intelligent software solutions across the full stack',
  location: 'Singapore',
  email: 'nayhtwehlaing2@gmail.com',
  github: 'https://github.com/NayHtwe24',
  linkedin: 'https://www.linkedin.com/in/nayhtwe-hlaing-446748136',
  about: `I am a passionate Full-Stack Developer and AI/ML Engineer with expertise in building
enterprise-grade applications, AI-powered services, and scalable cloud infrastructure.
I specialize in creating end-to-end solutions — from designing robust backend APIs and
deploying ML models to crafting intuitive frontend experiences and automating DevOps pipelines.
My work spans global trade platforms, computer vision quality systems, and intelligent agent services.`,
};

export const skills = [
  {
    icon: MdCode,
    title: 'Full-Stack Development',
    color: '#1a73e8',
    items: ['React', 'Vue.js', 'Laravel', 'Flask', 'FastAPI', 'Express.js', 'Tailwind CSS', 'Ant Design'],
  },
  {
    icon: MdSmartToy,
    title: 'AI / Machine Learning',
    color: '#9334e6',
    items: ['PyTorch', 'YOLOv5', 'LangChain', 'Google Gemini', 'Vertex AI', 'RAG Systems', 'ChromaDB', 'OpenCV'],
  },
  {
    icon: MdCloud,
    title: 'Cloud & DevOps',
    color: '#34a853',
    items: ['AWS (ECS, S3, EC2)', 'Google Cloud Platform', 'Terraform', 'Jenkins CI/CD', 'Docker', 'Nginx'],
  },
  {
    icon: MdStorage,
    title: 'Databases',
    color: '#fbbc04',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'Redis', 'ChromaDB (Vector DB)'],
  },
  {
    icon: MdPhoneIphone,
    title: 'Mobile Development',
    color: '#ea4335',
    items: ['Flutter', 'Dart', 'iOS (Xcode)', 'Android Studio', 'Cross-Platform Apps'],
  },
  {
    icon: MdScience,
    title: 'Specialized',
    color: '#e8710a',
    items: ['Laravel', 'Web Development', 'Fruit Detection System (Banana, Avocados, Papaya)', 'Computer Vision', 'Quality Inspection AI', 'Payment Integration (Aleta Planet, Visa)', 'MCP Protocol', 'WebSockets'],
  },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'DiMuto',
    period: 'Dec 2021 - Present',
    location: 'Singapore · Remote',
    description:
      'Building and maintaining the enterprise B2B global trade platform (DPL). Designed AI-powered trading agents, computer vision quality inspection systems, and RAG-based marketplace intelligence services. Managed cloud infrastructure with Terraform and Jenkins CI/CD pipelines across multi-environment AWS deployments.',
    tags: ['ASP.NET', 'Node.js', 'Laravel', 'FastAPI', 'React', 'AWS', 'PyTorch', 'Docker'],
  },
  {
    role: 'Senior Web Developer',
    company: 'Better HR',
    period: 'Jul 2020 - Jun 2021',
    location: 'Yangon, Myanmar',
    description:
      'Developed and maintained HR management web applications, delivering features for employee management, payroll processing, and organizational workflows.',
    tags: ['Web Development', 'Full-Stack', 'HR Systems'],
  },
  {
    role: 'Senior Web Developer',
    company: 'Myanmar Media Linkage',
    period: 'Jan 2018 - Jul 2020',
    location: 'Yangon',
    description:
      'Led web development projects for media and digital solutions, building scalable web applications and managing development workflows.',
    tags: ['Web Development', 'Media', 'Digital Solutions'],
  },
  {
    role: 'Web Application Developer',
    company: 'Green Myanmar Travel Agent',
    period: 'Dec 2015 - Dec 2017',
    location: 'Yangon',
    description:
      'Built and maintained travel booking web applications, integrating reservation systems and customer-facing interfaces for the travel industry.',
    tags: ['Web Applications', 'Travel Tech', 'Booking Systems'],
  },
];

export const projects = [
  {
    title: 'Dimuto Platform (DPL)',
    description:
      'Enterprise B2B platform for global trade management featuring trade contracts, company management, QR code generation, and cloud storage integration.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Google Cloud Storage'],
    color: '#1a73e8',
  },
  {
    title: 'Product Quality AI',
    description:
      'Computer vision system for fruit quality detection using YOLOv5 defect detection, classification models, and quality scoring (0-10) deployed on AWS ECS GPU instances.',
    tags: ['PyTorch', 'YOLOv5', 'OpenCV', 'AWS ECS', 'Redis'],
    color: '#9334e6',
  },
  {
    title: 'Platform Agent Server',
    description:
      'AI-powered trading agent service using Google Gemini and LangChain for intelligent trade decisions with RAG-based context retrieval.',
    tags: ['FastAPI', 'Google Gemini', 'LangChain', 'ChromaDB', 'MCP'],
    color: '#34a853',
  },
  {
    title: 'Marketplace RAG',
    description:
      'Retrieval-Augmented Generation API for AI-powered marketplace search using embeddings, vector databases, and semantic search.',
    tags: ['Flask', 'ChromaDB', 'Vertex AI', 'MongoDB'],
    color: '#fbbc04',
  },
  {
    title: 'Dacky - AI System',
    description:
      'Groundbreaking DiMuto x Intel collaboration for offline AI-powered quality inspection in warehouses. Runs real-time fruit defect detection on Intel Core Ultra processors with OpenVINO, enabling carton scanning, photo capture, and AI analysis without internet connectivity for the global fresh produce supply chain.',
    tags: ['.NET', 'C#', 'OpenCV', 'Intel OpenVINO', 'Hardware Integration'],
    color: '#e8710a',
  },
  {
    title: 'Bloom & Belle Shop',
    description:
      'Point-of-Sale and inventory management system for a cosmetic store with sales tracking, expense management, and reporting dashboards.',
    tags: ['React', 'Express.js', 'SQLite', 'Tailwind CSS'],
    color: '#1a73e8',
  },
  {
    title: 'Travel Booking Platform',
    description:
      'Full-featured travel booking web application with tour packages, reservation management, and integrated payment processing for seamless online bookings.',
    tags: ['Laravel', 'Vue.js', 'Payment Integration'],
    color: '#34a853',
  },
  {
    title: 'BetterHR',
    description:
      'Comprehensive HR management platform with employee management, payroll processing with bank integration, attendance tracking, and organizational workflows.',
    tags: ['Laravel', 'Vue.js', 'GraphQL', 'React', 'Node.js', 'Payroll', 'Bank Integration'],
    color: '#9334e6',
  },
  {
    title: 'Myanmar VAS System',
    description:
      'Value-Added Services platform for Myanmar telecom operators (MPT, Telenor) with SMS service management, bank integration, and operator billing system.',
    tags: ['Laravel', 'Vue.js', 'jQuery', 'Bank Integration', 'SMS Gateway', 'MPT', 'Telenor'],
    color: '#ea4335',
  },
];
