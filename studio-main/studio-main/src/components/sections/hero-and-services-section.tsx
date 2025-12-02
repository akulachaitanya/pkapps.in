import { Smartphone, Globe, Palette, BrainCircuit } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Crafting intuitive and high-performance mobile experiences for iOS and Android.",
    details: "Our team builds scalable and secure mobile apps that engage users and drive business growth. From initial strategy to App Store submission, we've got you covered with native and cross-platform solutions."
  },
  {
    icon: Globe,
    title: "Websites",
    description: "Developing responsive, fast, and SEO-friendly websites that convert visitors.",
    details: "We specialize in creating dynamic web applications and e-commerce platforms using the latest technologies. Our focus is on performance, security, and creating a seamless user experience across all devices."
  },
  {
    icon: Palette,
    title: "Design Studio",
    description: "Creating stunning UI/UX designs and brand identities that captivate your audience.",
    details: "Our design studio offers a full suite of creative services, including user interface and experience design, branding, and motion graphics. We create visually compelling designs that are user-centric and aligned with your brand's vision."
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description: "Leveraging artificial intelligence to build smarter, automated business solutions.",
    details: "We integrate cutting-edge AI and machine learning models into your products and workflows to unlock new capabilities, improve efficiency, and deliver personalized experiences for your customers."
  },
];

export default function HeroAndServicesSection() {
  return (
    <section id="services" className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/10 via-accent/10 to-background animate-gradient-xy"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-gradient-from to-gradient-to">
                Innovate. Create. Elevate.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Pallavi Krishna Apps is your strategic partner in building next-generation digital solutions. From sleek mobile apps to intelligent AI systems, we turn your vision into reality.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a href="#portfolio">
                <Button size="lg" className="bg-gradient-to-r from-gradient-from to-gradient-to text-white">View Our Work</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          <div className="space-y-4">
             <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                     <div className="flex items-center gap-4">
                        <service.icon className="h-6 w-6 text-primary" />
                        {service.title}
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-10">
                    {service.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
