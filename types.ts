
import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface MegaMenuSubItem {
  name: string;
  description: string;
  page: Page;
}

export interface MegaMenuCategory {
  title: string;
  description: string;
  items: MegaMenuSubItem[];
}

export interface NavItem {
  label: string;
  page: Page;
  hasMegaMenu?: boolean;
  megaMenuData?: {
    [key: string]: MegaMenuCategory;
  };
}

export enum Page {
  HOME = 'home',
  BLOCKCHAIN = 'blockchain',
  AI = 'ai',
  GAMING = 'gaming',
  CONSULTING = 'consulting',
  SOLUTIONS = 'solutions',
  INDUSTRIES = 'industries',
  ABOUT = 'about',
  CONTACT = 'contact'
}
