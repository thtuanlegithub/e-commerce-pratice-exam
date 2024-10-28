import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

const ProductIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		className={twMerge("default-icon", className)}
		width='24'
		height='24'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		{...props}
	>
		<rect width='24' height='24' fill='none' opacity='0' />
		<g transform='matrix(1 0 0 1 12 12)'>
			<path
				transform='translate(-12, -12)'
				d='M 3 3 C 2.448 3 2 3.448 2 4 L 2 7 L 22 7 L 22 4 C 22 3.448 21.552 3 21 3 L 3 3 z M 3 9 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 9 L 3 9 z M 14 16 L 18 16 L 18 18 L 14 18 L 14 16 z'
				fill='currentColor'
			/>
		</g>
	</svg>
);

export default ProductIcon;
