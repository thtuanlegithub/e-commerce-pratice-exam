import { APP_ROUTE } from "../../helpers/constants/route.constant";

function RegisterPage() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
				<form>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='username'
						>
							Username
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='your_username'
						/>
					</div>
					<div className='mb-6'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='your_password'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'
						>
							Sign Up
						</button>
						<a
							className='inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800'
							href={APP_ROUTE.AUTH.LOGIN}
						>
							Sign In
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
