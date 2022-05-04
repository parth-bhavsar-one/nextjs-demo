import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";



const Dashboard: NextPage = () => {
	const [userData, setUserData] = useState({
		id: "",
		email: "",
		dob: "",
	});

	useEffect(() => {

		fetch("/api/users/dashboard?id=" + localStorage.getItem("userId"), {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			}
		  })
			.then((res) => res.json())
			.then((data) => {
				setUserData(data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<Fragment>
			<div className="font-sans antialiased bg-grey-lightest">
				<div className="w-full bg-grey-lightest">
					<div className="container mx-auto py-8">
						<div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
							<div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Dashboard</div>
							<div className="py-4 px-8">
								<div className="mb-4">
									<label className="block text-grey-darker text-sm font-bold mb-2">User Id</label>
									<p>{userData.id}</p>
								</div>
								<div className="mb-4">
									<label className="block text-grey-darker text-sm font-bold mb-2">Email</label>
									<p>{userData.email}</p>
								</div>
								<div className="mb-4">
									<label className="block text-grey-darker text-sm font-bold mb-2">Date of Birth</label>
									<p>{userData.dob}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard