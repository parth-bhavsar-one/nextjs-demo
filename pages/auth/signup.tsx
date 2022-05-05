import type { NextPage } from "next";
import * as yup from "yup";
import Homepage from "../../component/homepage";
import Form from "../../component/form";
import { useRouter } from "next/router";

interface InitialProps {
  fullName: string;
  email: string;
  dob: string;
}

const SignUp: NextPage = () => {
  const initialValuesOfSignUp: InitialProps = {
    fullName: "",
    email: "",
    dob: "",
  };
  const signUpSchema = yup.object({
    fullName: yup.string().required("Full name is required."),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required."),
    dob: yup
      .string()
      .required("Date of birth is required.")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format DD-MM-YYYY"
      ),
  });
  const Router = useRouter();
  const submitSignUp = () => {
    console.log("Register successfully.");
    Router.push({ pathname: "/auth/signin" });
  };
  return (
    <>
      <div className="grid grid-cols-2 items-center h-screen">
        <div className="flex justify-center">
          <Homepage />
        </div>
        <div>
          <Form
            initialValues={initialValuesOfSignUp}
            type="SignUp"
            formSchema={signUpSchema}
            onFormSubmit={submitSignUp}
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
