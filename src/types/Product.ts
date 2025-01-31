import { Category } from "./Category";

/*
    Maps to the Product struct in the Go backend

    type Product struct {
        ID           int
        Name         string
        Reference    string
        Price        float64
        CaseSize     int
        LugToLug     int
        Thickness    int
        LugWidth     int
        Movement     string
        MovementType string
        Crystal      string
        DialColor    string
        CaseMaterial string
        Thumbnail    string
        Created      time.Time
        Updated      time.Time
    }
*/
export interface Product {
    ID: number;
    Name: string;
    Reference: string;
    Price: number;
    CaseSize: number;
    LugToLug: number;
    Thickness: number;
    LugWidth: number;
    Movement: string;
    MovementType: string;
    Crystal: string;
    DialColor: string;
    CaseMaterial: string;
    Thumbnail: string;
    Categories?: Category[];
    Created: string;
    Updated: string;
}

export interface CreateProductRequest {
    Name: string;
    Reference: string;
    Price: number;
    CaseSize: number;
    LugToLug: number;
    Thickness: number;
    LugWidth: number;
    Movement: string;
    MovementType: string;
    Crystal: string;
    DialColor: string;
    CaseMaterial: string;
    Thumbnail: string;
}