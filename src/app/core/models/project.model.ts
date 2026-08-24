export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  imageUrl: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
}