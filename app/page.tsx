"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Smartphone, Globe } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto py-8">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Globe className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Ideas into Digital Realities
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative solutions for your business needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg">Get Started</Button>
          </motion.div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Solutions</TabsTrigger>
            </TabsList>
            <TabsContent value="web">
              <Card>
                <CardHeader>
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>Create stunning and responsive websites</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Laptop className="h-32 w-32 text-primary" />
                  </div>
                  <p className="mt-4 text-center">From simple landing pages to complex web applications, we've got you covered.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="mobile">
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Apps</CardTitle>
                  <CardDescription>Develop powerful mobile applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-primary" />
                  </div>
                  <p className="mt-4 text-center">Build native and cross-platform mobile apps for iOS and Android.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="cloud">
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Solutions</CardTitle>
                  <CardDescription>Scalable and secure cloud infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <Globe className="h-32 w-32 text-primary" />
                  </div>
                  <p className="mt-4 text-center">Leverage the power of cloud computing for your business needs.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src={`https://source.unsplash.com/random/800x600?tech,${i}`}
                      alt={`Project ${i}`}
                      width={800}
                      height={600}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>A brief description of the project and its impact.</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline">View Case Study</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Innovative Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}