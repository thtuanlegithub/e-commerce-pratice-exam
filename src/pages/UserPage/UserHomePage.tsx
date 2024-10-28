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
  const productListData: ProductDTO[] = [
    {
      id: 1,
      name: "Dog Food, Chicken & Chicken Liver Recipe...",
      price: 100,
      quantity: 10,
      description: "Description 1",
      category: "Category 1",
      image: "https://themesflat.co/html/remos/images/upload/upload-1.png",
    },
    {
      id: 2,
      name: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",
      price: 200,
      quantity: 20,
      description: "Description 2",
      category: "Category 2",
      image: "https://remosnextjs.vercel.app/images/upload/upload-2.png",
    },
    {
      id: 3,
      name: "Nutrish® Real Beef, Pea & Brown Rice Recipe Dry Dog Food",
      price: 300,
      quantity: 30,
      description: "Description 3",
      category: "Category 3",
      image:
        "https://www.nutrish.com/wp-content/uploads/2024/04/Nutrish-Whole-Health-Beef-Pea-Brown-Rice-Dry-Dog-Food-3.5LB-1024x1024.png",
    },
    {
      id: 4,
      name: "Nutrish® Real Beef, Pea & Brown Rice Recipe Dry Dog Food",
      price: 400,
      quantity: 40,
      description: "Description 4",
      category: "Category 4",
      image:
        "https://www.nutrish.com/wp-content/uploads/2024/04/Nutrish-Whole-Health-Beef-Pea-Brown-Rice-Dry-Dog-Food-3.5LB-1024x1024.png",
    },
    {
      id: 5,
      name: "Nutrish® Real Beef, Pea & Brown Rice Recipe Dry Dog Food",
      price: 500,
      quantity: 50,
      description: "Description 5",
      category: "Category 5",
      image:
        "https://www.nutrish.com/wp-content/uploads/2024/04/Nutrish-Whole-Health-Beef-Pea-Brown-Rice-Dry-Dog-Food-3.5LB-1024x1024.png",
    },
    {
      id: 6,
      name: "Nutrish® Real Beef, Pea & Brown Rice Recipe Dry Dog Food",
      price: 600,
      quantity: 60,
      description: "Description 6",
      category: "Category 6",
      image:
        "https://www.nutrish.com/wp-content/uploads/2024/04/Nutrish-Whole-Health-Beef-Pea-Brown-Rice-Dry-Dog-Food-3.5LB-1024x1024.png",
    },
  ];
  return (
    <>
      {user?.userType === USER_TYPE.USER ? (
        <div className="flex flex-col flex-1">
          <UserNavBar />
          <div className="banner"></div>
          <div className="flex flex-row flex-wrap gap-8 py-8 px-8">
            {productListData.map((product) => (
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
