interface PriceData {
  currency: string;
  price: number;
  discountedPrice: number;
  formatted: {
    price: string;
    discountedPrice: string;
  };
}

interface Variant {
  priceData: PriceData;
  convertedPriceData: PriceData;
  weight: number;
  sku: string;
  visible: boolean;
}

interface Stock {
  trackQuantity: boolean;
  inStock: boolean;
}

export interface Product {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  choices: {
    Size: string;
  };
  variant: Variant;
  stock: Stock;
  _id: string;
}
