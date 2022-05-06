import type { NextPage } from "next";
import * as yup from "yup";
import Form from "../../component/form";
import Homepage from "../../component/homepage";

interface InitialProps {
  password: string;
  newPassword: string;
}

const ResetPassword: NextPage = () => {
  const initialValuesOfResetPassword: InitialProps = {
    password: "",
    newPassword: "",
  };
  const ResetPasswordSchema = yup.object({
    password: yup.string().required("Password is required."),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
    newPassword: yup.string().required("New password is required."),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
  });
  const handleResetClick = (data: any) => {
    let token = localStorage.getItem("token");
    fetch(`/api/users/resetPassword?token=${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, id }),
    })
      .then((response) => response.json())
      .then((id) => {
        console.log(data, id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <Homepage />
      <Form
        initialValues={initialValuesOfResetPassword}
        type="ResetPassword"
        formSchema={ResetPasswordSchema}
        onFormSubmit={handleResetClick}
      />
    </div>
  );
};

export default ResetPassword;
