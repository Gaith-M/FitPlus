export interface itemInterface {
  id: string;
  type: string;
  name: string;
  description: {}[];
  slug: string;
  images: { alt: string; image: { asset: {} } }[];
  flavors: string[] | null;
  colors: string[] | null;
  material: string | null;
  category: string[];
  price: {
    uad: { originalPrice: number; discountPrice?: number };
    usd: { originalPrice: number; discountPrice?: number };
  };
  vendor: {
    title: string;
    slug: string;
    logo: {
      ref: string;
    };
  };
  info: {
    servingDetails: {
      unitName: string | null;
      servings: number | null;
    };
    weightDetails: {
      unitName: string | null;
      weight: number | null;
    };
  };
  productInfo: {
    avaliableSizes: { size: string; dimension?: string }[] | null;
    weight: {
      weight: number | null;
      unit: string | null;
    };
  };
}
