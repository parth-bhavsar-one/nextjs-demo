import type { NextPage } from "next";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			dob: "",
		},
		validationSchema: yup.object().shape({
			fullName: yup.string().required("Full Name is required"),
			email: yup.string().email("Please enter a valid email").required("Email is required."),
			dob: yup.string().required("Date of Birth is required"),
			// .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, "Date of Birth must be a valid date in the format DD-MM-YYYY"),
		}),
		onSubmit: async (values) => {
			await signUp(values);
		},
	});

	const signUp = async (data: any) => {
		fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				alert(result.message)
				router.push("/auth/signin");
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className="font-sans antialiased bg-grey-lightest">
			<div className="w-full bg-grey-lightest">
				<div className="container mx-auto py-8">
					<div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
						<div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register Here</div>
						<div className="py-4 px-8">
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">Full Name</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="fullName"
									placeholder="Enter FullName"
									onChange={formik.handleChange}
									value={formik.values.fullName}
								/>
								{formik.touched.fullName && formik.errors.fullName ? <span className="text-red-500 text-sm">{formik.errors.fullName}</span> : null}
							</div>
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
								<label className="block text-grey-darker text-sm font-bold mb-2">Date of Birth</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="dob"
									// type="date"
									placeholder="Enter Date Of Birth"
									onChange={formik.handleChange}
									value={formik.values.dob}
								/>
								{formik.touched.dob && formik.errors.dob ? <span className="text-red-500 text-sm">{formik.errors.dob}</span> : null}
							</div>
							<div className="flex items-center justify-between mt-8">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => formik.handleSubmit()}>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
