import { Button, Image, Table } from "antd";
import { TableProps } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import MainPageTitle from "../../components/MainPageTitle";
import { ProductDTO } from "../../data/product/product.dto";
import { APP_ROUTE } from "../../helpers/constants/route.constant";

function ProductPage() {
  const navigate = useNavigate();

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

  const columns: TableProps<ProductDTO>["columns"] = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (image: string) => {
        return (
          <div className="flex-center h-[75px] overflow-hidden bg-center">
            <Image
              className="m-auto object-cover w-full h-full"
              src={image || ""}
              fallback={"_"}
            />
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 400,
      render: (name: string) => {
        return <span className="font-semibold line-clamp-1">{name}</span>;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => {
        return <span className="font-medium">$ {price}</span>;
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: () => (
        <div className="flex justify-center space-x-2">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <MainPageTitle title="Product" />
      <div className="flex flex-col items-end my-4 mr-8">
        <Button
          size="large"
          type="primary"
          onClick={() => {
            navigate(APP_ROUTE.MAIN.PRODUCT.DETAIL);
          }}
        >
          <span className="text-sm">Add Product</span>
        </Button>
      </div>
      <Table
        scroll={{ x: "max-content" }}
        bordered
        rowKey={"id"}
        columns={columns}
        dataSource={productListData}
      />
    </div>
  );
}

export default ProductPage;
