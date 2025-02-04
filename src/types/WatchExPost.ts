export default interface WatchExPost {
    ID: number;
    Title: string;
    Content?: string;
    Username: string;
    Thumbnail: string;
    PostTime: number;
    Created: string;
    Updated: string;
}

export interface WatchExPostWithBrandAndProduct extends WatchExPost {
    Brands: string[];
    Products: string[];
}

export interface WatchExPostWithBrandAndProductTable extends WatchExPost {
    Brands: React.ReactNode;
    Products: React.ReactNode;
}