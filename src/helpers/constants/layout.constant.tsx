import ChartPieIcon from "../../icons/ChartPieIcon";
import ProductIcon from "../../icons/ProductIcon";
import UserIcon from "../../icons/UserIcon";
import { SideBarGroupTemplate } from "../../layouts/types/SideBarGroupTemplate.type";

export const LAYOUT_SIDEBAR_ADMIN: SideBarGroupTemplate[] = [
	{
		title: "dashboard",
		icon: <ChartPieIcon />,
	},
	{
		title: "customer",
		icon: <UserIcon />,
	},
	{
		title: "product",
		icon: <ProductIcon />,
	},
];
