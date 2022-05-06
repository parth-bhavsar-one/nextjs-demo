import type { NextPage } from "next";
import * as yup from "yup";
import Homepage from "../../component/homepage";
import Form from "../../component/form";
import { useRouter } from "next/router";
import { useState } from "react";
interface InitialProps {
  fullName: string;
  email: string;
  dob: string;
}

const SignUp: NextPage = () => {
  const router = useRouter();
  const initialValuesOfSignUp: InitialProps = {
    fullName: "",
    email: "",
    dob: "",
  };
  const [customError, setCustomError] = useState({ message: "" });
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

  const submitSignUp = async (data: any) => {
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
        alert(result.message);
        router.push("/auth/signin");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <Homepage />
        <Form
          initialValues={initialValuesOfSignUp}
          type="SignUp"
          formSchema={signUpSchema}
          onFormSubmit={submitSignUp}
          customError={customError}
        />
      </div>
    </>
  );
};

export default SignUp;
