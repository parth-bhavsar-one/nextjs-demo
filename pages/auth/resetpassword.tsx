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
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      newPassword: yup
      .string()
      .required('New password is required.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const handleResetClick = () => {
    console.log("Password Changed Successfully");
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
