export interface BusinessResponse {
  msg: string | null;
  data: BusinessData;
  success: boolean;
}

export interface BusinessData {
  id: number;
  owner_id: number;
  service_id: string[];
  package_id: string[];
  employee_id: string[];
  name: string;
  address: string;
  image: string;
  cover_image: string;
  phone_no: string;
  is_popular: number;
  is_best: number;
  start_time: string; // "HH:mm:ss"
  end_time: string; // "HH:mm:ss"
  service_type: number;
  status: number;
  lat: number;
  lng: number;
  type: number;
  telphone: string;
  workstation_count: number;
  cate: Category[];
  distance: number;
  best_review: string;
  best_star: number;
  imageUri: string;
  avg_rating: string;
  cover_image_uri: string;
  packageData: PackageData[];
  serviceData: ServiceItem[];
  reviews: Review[];
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  imageUri: string;
}

export interface PackageData {
  id: number;
  name: string;
  price: number;
  price_type: number;
  sort_order: number;
  service: string[];
  owner_id: number;
  duration: number;
  status: number;
  description: string;
  currency: string;
  serviceData: ServiceData[];
  price_display: number;
}

export interface ServiceData {
  name: string;
  id: number;
  currency: string;
  price_display: number | null;
}

export interface ServiceItem {
  name: string;
  id: number;
  description: string;
  duration: number;
  price: number;
  price_type: number;
  currency: string;
  price_display: number;
}

export interface Review {
  id: number;
  user_id: number;
  employee_id: number;
  shop_id: number;
  booking_id: number;
  star: number;
  cmt: string;
  created_at: string;
  updated_at: string;
  user: ReviewUser;
}

export interface ReviewUser {
  name: string;
  id: number;
  image: string;
  imageUri: string;
}
