import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ProductDTO } from "../../data/product/product.dto";
import { APP_ROUTE } from "../../helpers/constants/route.constant";
import { USER_TYPE } from "../../helpers/types/dto/user.type";
import { RootState } from "../../services/store";
import ProductCard from "./components/ProductCard";
import UserNavBar from "./components/UserNavBar";

function UserHomePage() {
  const { user } = useSelector((state: RootState) => state.auth);
  const productList: ProductDTO[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 10,
      description:
        "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      category: "Category 1",
      image: "https://themewagon.github.io/ogani/img/blog/blog-1.jpg",
    },
    {
      id: 2,
      name: "6 ways to prepare breakfast for 30",
      price: 200,
      quantity: 20,
      description:
        "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat ",
      category: "Category 2",
      image: "https://themewagon.github.io/ogani/img/blog/blog-2.jpg",
    },
  ];
  return (
    <>
      {user?.userType === USER_TYPE.USER ? (
        <div className="flex flex-col flex-1">
          <UserNavBar />
          <div className="banner"></div>
          <div className="flex flex-row flex-wrap gap-8 py-8 px-8">
            {productList.map((product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <Navigate to={APP_ROUTE.AUTH.LOGIN} />
      )}
    </>
  );
}

export default UserHomePage;
