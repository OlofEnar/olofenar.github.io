export type NavItems = {
  name: string;
  path: string;
};

export interface Project {
  slug?: string;
  title: string;
  featured?: boolean | false;
  description: string;
  category: string;
  tags: string[];
}

export interface CodeProject extends Project {
  url: string;
}

export interface DesignProject extends Project {
  imgUrl: string;
}
