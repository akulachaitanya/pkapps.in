"use client";

import Image from "next/image";
import { portfolioItems, TPortfolioCategory } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const categories: TPortfolioCategory[] = ["Mobile Apps", "Websites", "Design", "AI Integration"];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our Case Studies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of our projects that showcase our expertise and commitment to excellence across various industries.
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-auto max-w-2xl">
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.filter(item => item.category === category).map((item) => (
                  <PortfolioCard key={item.id} {...item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

type PortfolioCardProps = typeof portfolioItems[0];

function PortfolioCard({ title, category, description, img, imgHint }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={600}
            height={400}
            data-ai-hint={imgHint}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary">{category}</Badge>
      </CardFooter>
    </Card>
  );
}
