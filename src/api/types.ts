export interface PropertyImage {
  id: string;
  thumb_url: string;
  hero_url: string;
  alt_text: string | null;
  sort_order: number;
}

export interface PropertySummary {
  id: string;
  slug: string;
  title: string;
  address: string;
  guests: number;
  bedrooms: number;
  baths: number;
  price_cents: number | null;
  rating: number | null;
  reviews_count: number | null;
  walking_cluster: boolean;
  large_group: boolean;
  is_signature: boolean;
  lat: number | null;
  lon: number | null;
  miles_to_angc: number | null;
  tags: string[];
  thumb_url: string | null;
  image_count: number;
}

export interface Property extends Omit<PropertySummary, "thumb_url" | "image_count"> {
  slug: string;
  listing_id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  description: string | null;
  airbnb_url: string | null;
  vrbo_url: string | null;
  images: PropertyImage[];
}

export type EventWeekSlug =
  | "masters"
  | "anwa"
  | "ironman"
  | "peach-jam"
  | "private-event"
  | "student-living"
  | "other";

export interface InquiryPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  group_size?: number;
  event_week?: EventWeekSlug;
  check_in?: string;
  check_out?: string;
  property_slug?: string;
  notes?: string;
}

export interface SiteInfo {
  business_name: string;
  phone: string;
  email: string;
  site_url: string;
}
