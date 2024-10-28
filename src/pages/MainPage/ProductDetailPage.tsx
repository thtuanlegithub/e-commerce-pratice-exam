import { ProductDTO } from "../../data/product/product.dto";

type ProductDetailPageProps = {
  product: ProductDTO;
};

function ProductDetailPage({ product }: ProductDetailPageProps) {
  return <div>Product Detail Page</div>;
}

export default ProductDetailPage;
