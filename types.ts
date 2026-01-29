export interface Product {
  id: number;
  name: string;
  price: number;
  subtitle: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isBestSeller?: boolean;
}

export interface SocialImage {
  id: number;
  imageUrl: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}