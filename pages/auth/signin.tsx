import type { NextPage } from "next";
import * as yup from "yup";
import Form from "../../component/form";
import Homepage from "../../component/homepage";

interface InitialProps {
  email: string;
  password: string;
}

const Signin: NextPage = () => {
  const initialValuesOfSignIn: InitialProps = { email: "", password: "" };
  const signInSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const handleButtonClick = () => {
    console.log("Loggedin successfully.");
  };
  return (
    <>
      <div className="grid grid-cols-2 items-center h-screen"> 
        <div className="flex justify-center">
          <Homepage />
        </div>
        <div>
          <Form
            initialValues={initialValuesOfSignIn}
            type="SignIn"
            formSchema={signInSchema}
            onFormSubmit={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default Signin;
