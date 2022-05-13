export declare class Product {
    readonly id: string;
    readonly image: string;
    readonly images: string[];
    readonly name: string;
    readonly miktar: string;
    readonly fiyat: number; 
    readonly fiyatIndirimli?: number;

  }

  export declare class Category {
    readonly id: string;
    readonly name: string;
    readonly src: string;
    readonly subCategories: string[];
  }

  export declare class Filtering {
    readonly id: string;
    readonly name: string;
  }