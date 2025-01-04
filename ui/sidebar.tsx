"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Home,
  User2,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  name: string;
  icon: React.ElementType;
  value: string;
}

const mainNavItems: NavItem[] = [
  {
    name: "Home",
    icon: Home,
    value: "home",
  },
  {
    name: "About",
    icon: User2,
    value: "about",
  },
  {
    name: "Projects",
    icon: Briefcase,
    value: "projects",
  },
  {
    name: "Education",
    icon: GraduationCap,
    value: "education",
  },
  {
    name: "Contact",
    icon: Mail,
    value: "contact",
  },
];

const socialNavItems = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
];

interface PortfolioSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PortfolioSidebar({
  activeTab,
  onTabChange,
}: PortfolioSidebarProps) {
  return (
    <TooltipProvider>
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col justify-between border-r bg-background py-8">
        {/* Logo Section */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-xl bg-primary p-2"
              onClick={() => onTabChange("home")}
            >
              <span className="font-bold text-xl text-primary-foreground">
                P
              </span>
              <span className="sr-only">Logo</span>
            </Button>
          </motion.div>
        </div>

        {/* Main Navigation - Centered */}
        <nav className="flex flex-1 flex-col items-center justify-center space-y-4">
          {mainNavItems.map((item) => (
            <NavButton
              key={item.name}
              item={item}
              isActive={activeTab === item.value}
              onClick={() => onTabChange(item.value)}
            />
          ))}
        </nav>

        {/* Social Links - Bottom */}
        <nav className="flex flex-col items-center space-y-2">
          {socialNavItems.map((item) => (
            <NavButton
              key={item.name}
              item={item}
              isActive={false}
              href={item.href}
            />
          ))}
        </nav>
      </aside>
    </TooltipProvider>
  );
}

interface NavButtonProps {
  item: NavItem & { href?: string };
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
}

function NavButton({ item, isActive = false, onClick, href }: NavButtonProps) {
  const Icon = item.icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative h-10 w-10",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:ring-1 focus-visible:ring-ring",
              "active:translate-y-0.5 active:transition-transform",
              isActive && "bg-accent text-accent-foreground",
              isActive &&
                "after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:rounded-full after:bg-primary after:h-2 after:w-2"
            )}
            onClick={onClick}
            asChild={!!href}
          >
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </a>
            ) : (
              <>
                <Icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </>
            )}
          </Button>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={10}>
        {item.name}
      </TooltipContent>
    </Tooltip>
  );
}
