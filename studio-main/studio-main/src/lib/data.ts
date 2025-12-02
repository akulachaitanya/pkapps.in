import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find(p => p.id === id);
  if (!image) {
    // Return a default or throw an error
    return 'https://picsum.photos/seed/default/600/400';
  }
  return image.imageUrl;
};

const findHint = (id: string) => {
    const image = PlaceHolderImages.find(p => p.id === id);
    return image ? image.imageHint : 'image';
}

export type TPortfolioCategory = "Mobile Apps" | "Websites" | "Design" | "AI Integration";

export const portfolioItems = [
  {
    id: 1,
    title: 'Fintech Mobile App',
    category: 'Mobile Apps' as TPortfolioCategory,
    img: findImage('mobile-app-1'),
    imgHint: findHint('mobile-app-1'),
    description: 'A cutting-edge mobile application for fintech services, providing seamless transaction and portfolio management.',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Websites' as TPortfolioCategory,
    img: findImage('website-1'),
    imgHint: findHint('website-1'),
    description: 'A scalable and modern e-commerce website with a custom CMS and payment gateway integration.',
  },
  {
    id: 3,
    title: 'Brand Identity Redesign',
    category: 'Design' as TPortfolioCategory,
    img: findImage('design-2'),
    imgHint: findHint('design-2'),
    description: 'A complete brand overhaul for a tech startup, including logo, color palette, and marketing materials.',
  },
  {
    id: 4,
    title: 'AI-Powered Chatbot',
    category: 'AI Integration' as TPortfolioCategory,
    img: findImage('ai-1'),
    imgHint: findHint('ai-1'),
    description: 'An intelligent customer support chatbot that reduced response times by 90% and improved user satisfaction.',
  },
  {
    id: 5,
    title: 'SocialConnect App',
    category: 'Mobile Apps' as TPortfolioCategory,
    img: findImage('mobile-app-2'),
    imgHint: findHint('mobile-app-2'),
    description: 'A social networking app focused on connecting professionals in the creative industry.',
  },
  {
    id: 6,
    title: 'Corporate Analytics Dashboard',
    category: 'Websites' as TPortfolioCategory,
    img: findImage('website-2'),
    imgHint: findHint('website-2'),
    description: 'A data visualization dashboard for a large enterprise, providing real-time business intelligence.',
  },
  {
    id: 7,
    title: 'Neural Network Visualization',
    category: 'AI Integration' as TPortfolioCategory,
    img: findImage('ai-2'),
    imgHint: findHint('ai-2'),
    description: 'An interactive tool for visualizing and understanding complex neural network architectures.',
  },
    {
    id: 8,
    title: 'Abstract Branding',
    category: 'Design' as TPortfolioCategory,
    img: findImage('design-1'),
    imgHint: findHint('design-1'),
    description: 'A modern brand identity using abstract shapes and a vibrant color scheme.',
  },
];
