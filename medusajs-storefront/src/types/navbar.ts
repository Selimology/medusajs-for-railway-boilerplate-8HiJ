interface NavigationItem {
    name: string;
    href: string;
  }
  
  interface FeaturedItem {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  interface Section {
    id: string;
    name: string;
    items: NavigationItem[];
  }
  
  interface Category {
    id: string;
    name: string;
    featured: FeaturedItem[];
    sections: Section[];
  }
  
  interface Page {
    name: string;
    href: string;
  }
  
export interface NavigationDataType {
    categories: Category[];
    pages: Page[];
  }
  