import tbtLogo from "../assets/tbt-logo.avif";

function NavBar() {
	return (
		<div className='w-full px-8 py-4 flex flex-row items-center justify-between'>
			<div className='flex items-center'>
				<img src={tbtLogo} alt='TBT Logo' className='h-8 w-8 mr-2' />
				<div>TBT Marketplace</div>
			</div>
			<div className='flex flex-row gap-4 items-center hover:cursor-pointer'>
				<img
					src='https://avatar.iran.liara.run/public/boy'
					alt='Avatar'
					className='h-8 w-8 rounded-full'
				/>
			</div>
		</div>
	);
}

export default NavBar;
