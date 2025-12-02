"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { BrainCircuit, Globe, Palette, Smartphone, MapPin } from "lucide-react";
import { useFirestore } from "@/firebase/provider";
import { addDocumentNonBlocking } from "@/firebase/non-blocking-updates";
import { collection } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  service: z.enum(["Mobile Apps", "Websites", "Design", "AI Integration", "Other"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    addDocumentNonBlocking(submissionsCollection, {
        name: values.name,
        email: values.email,
        projectDetails: values.message,
        submissionDate: new Date().toISOString(),
        service: values.service,
        company: values.company || '',
    });
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Let's Build Together
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Have a project in mind? We'd love to hear about it. Fill out the form, and we'll get in touch to discuss how we can bring your ideas to life.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <Smartphone className="w-6 h-6 text-primary"/>
                <p>Custom mobile app development</p>
              </div>
               <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-primary"/>
                <p>Modern and performant web solutions</p>
              </div>
               <div className="flex items-center gap-4">
                <Palette className="w-6 h-6 text-primary"/>
                <p>Engaging UI/UX and brand design</p>
              </div>
              <div className="flex items-center gap-4">
                <BrainCircuit className="w-6 h-6 text-primary"/>
                <p>Intelligent AI-powered systems</p>
              </div>
              <div className="flex items-start gap-4 pt-4">
                <MapPin className="w-6 h-6 text-primary mt-1"/>
                <p>Nidadavole-534301, <br/>Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Mobile Apps">Mobile Apps</SelectItem>
                          <SelectItem value="Websites">Websites</SelectItem>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="AI Integration">AI Integration</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
