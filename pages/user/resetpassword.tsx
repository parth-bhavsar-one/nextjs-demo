import type { NextPage } from "next";
import * as yup from "yup";
import Form from "../../component/form";

interface InitialProps {
  password: string;
  newPassword: string;
}

const ResetPassword: NextPage = () => {
  const initialValuesOfResetPassword: InitialProps = { password: "", newPassword: "" };
  const ResetPasswordSchema = yup.object({
    password: yup
      .string()
      .required("Password is required."),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
      newPassword: yup
      .string()
      .required('New password is required.')
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
  });
  const handleResetClick = (data:any) => {
    // console.log("Password Changed Successfully");
    // fetch("/api/users/resetpassword", {
		// 	method: "PUT",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// })
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((result) => {
		// 		alert(result.message)
		// 	})
		// 	.catch((e) => {
		// 		console.log(e);
		// 	});
    fetch('/api/users/resetpassword', {
  method: 'PUT', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({id:1,password:'1234567'}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', {id:1,password:'1234567'});
})
.catch((error) => {
  console.error('Error:', error);
});
  };
  return (
    <Form
      initialValues={initialValuesOfResetPassword}
      type="ResetPassword"
      formSchema={ResetPasswordSchema}
      onFormSubmit={handleResetClick}
    />
  );
};

export default ResetPassword;
