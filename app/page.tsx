"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { PortfolioSidebar } from "@/ui/sidebar";
import { HomeSection } from "@/ui/section/home-section";
import { AboutSection } from "@/ui/section/about-section";
import { ContactSection } from "@/ui/section/contact-section";
import { EducationSection } from "@/ui/section/education";
import { ProjectsSection } from "@/ui/section/project-section";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <PortfolioSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      {/* <main className="pl-16">
        <Tabs value={activeTab} className="h-full">
          <TabsContent value="home" className="h-full m-0">
            <HomeSection />
          </TabsContent>
          <TabsContent value="about" className="h-full m-0">
            <AboutSection />
          </TabsContent>
          <TabsContent value="projects" className="h-full m-0">
            <ProjectsSection />
          </TabsContent>
          <TabsContent value="education" className="h-full m-0">
            <EducationSection />
          </TabsContent>
          <TabsContent value="contact" className="h-full m-0">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </main> */}
    </div>
  );
}
