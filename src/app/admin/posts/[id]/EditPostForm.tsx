"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Header from '@/components/Header'
import Brand from '@/types/Brand'
import { Product } from '@/types/Product'
import { WatchExPostWithBrandAndProduct } from '@/types/WatchExPost'
import { removeEscapedAmpersands } from "@/util/URL";
import Pill from '@/components/Pill';
import { createPostBrand, createPostProduct, deletePostBrand, deletePostProduct } from '@/api/posts';

export default ({ post, brands, products }: { post: WatchExPostWithBrandAndProduct, brands: Brand[], products: Product[] }) => {
    const router = useRouter();
    const postBrands = brands.filter((brand) => post.Brands.includes(brand.Name));
    const filteredProducts = products.filter((product) => postBrands.some((brand) => brand.ID === product.BrandID));
    
    const handleBrandClick = (brand: Brand) => {
        const brandObj = brands.find((b) => b.Name === brand.Name);

        if (!brandObj) return;

        if (post.Brands.includes(brand.Name)) {
            deletePostBrand(post.ID, brandObj.ID);
            return;
        }

        createPostBrand(post.ID, brandObj.ID);

        router.refresh();
    }

    const handleProductClick = (product: Product) => {
        if (post.Products.includes(product.Name)) {
            deletePostProduct(post.ID, product.ID);
            return;
        }

        createPostProduct(post.ID, product.ID);

        router.refresh();
    }

    return (
        <div>
            <Header>{post.Title}</Header>

            <div className="bg-black/5 p-4 w-full flex items-center justify-center">
                <Image src={removeEscapedAmpersands(post.Thumbnail)} width={400} height={400} alt={post.Title} className="rounded-lg" />
            </div>
            <div className="mt-8">
                <div className="font-semibold">Brands</div>
                <div className="flex flex-wrap gap-4 mt-4">
                    {brands.map((brand) => (
                        <Pill
                            key={brand.ID}
                            type={post.Brands.find((b) => b === brand.Name) ? "success" : "default"}
                            onClick={() => handleBrandClick(brand)}
                        >
                            {brand.Name}
                        </Pill>
                    ))}
                </div>
            </div>

            <div className="mt-8">
                <div className="font-semibold">Products</div>
                <div className="flex flex-wrap gap-4 mt-4">
                    {filteredProducts.map((product) => (
                        <Pill
                            key={product.ID}
                            type={post.Products.find((b) => b === product.Name) ? "success" : "default"}
                            onClick={() => handleProductClick(product)}
                        >
                            {product.Name}
                        </Pill>
                    ))}
                </div>
            </div>
        </div>
    )
}