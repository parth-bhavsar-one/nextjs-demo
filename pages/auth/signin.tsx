import type { NextPage } from "next";
import * as yup from "yup";
import { useFormik } from "formik";

const Signin: NextPage = () => {

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: yup.object().shape({
			email: yup.string().email("Please enter a valid email").required("This field is required."),
			password: yup.string().required("This field is required."),
		}),
		onSubmit: async (values) => {
			console.log("Loggedin successfully.", values);
		},
	});

	return (
		<div className="font-sans antialiased bg-grey-lightest">
			<div className="w-full bg-grey-lightest">
				<div className="container mx-auto py-8">
					<div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
						<div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Login Here</div>
						<div className="py-4 px-8">
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">Email Address</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="email"
									placeholder="Enter email"
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
                {formik.touched.email && formik.errors.email ? <span className="text-red-500 text-sm">{formik.errors.email}</span> : null}
							</div>
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">Password</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="password"
									placeholder="Enter password"
									onChange={formik.handleChange}
									value={formik.values.password}
								/>
								{formik.touched.password && formik.errors.password ? <span className="text-red-500 text-sm">{formik.errors.password}</span> : null}
							</div>
							<div className="flex items-center justify-between mt-8">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => formik.handleSubmit()}>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
