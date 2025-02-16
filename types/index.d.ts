interface Feature {
  title: string;
  des: string;
}

interface TechStack {
  label: string;
  img: string;
}

export interface ProjectCardProps {
  id: number;
  title: string;
  des: string;
  features: Array<Feature>;
  images: string[];
  iconLists: Array<TechStack>;
  github: string;
  liveLink?: string;
  tag: string;
}

export interface GridItemProps {
  id: number;
  title: string;
  description?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}

export interface ProjectDetailsProps {
  id: number;
  title: string;
  description: string;
  images: Array<string>;
  iconList: Array<TechStack>;
  features: Array<Feature>;
  github: string;
  liveLink?: string;
  isMobile?: boolean;
}
