import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import { ProductDTO } from "../../../data/product/product.dto";
import { APP_ROUTE } from "../../../helpers/constants/route.constant";

type ProductCardProps = {
  product: ProductDTO;
};

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(
          {
            pathname: `${APP_ROUTE.USER.PRODUCT}`,
          },
          {
            state: { product },
          }
        );
      }}
      className="flex flex-col w-96 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
    >
      <Image
        className="object-contain h-16 w-24 rounded-t-xl"
        src={product.image}
      />
      <div className="mt-4 flex flex-col gap-4 px-4 pb-8">
        <div className="text-xl font-semibold">{product.name}</div>
        <div className="text-lg font-normal">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductCard;
