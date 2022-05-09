import type { NextPage } from "next";
import router from "next/router";
import { useState } from "react";
import * as yup from "yup";
import Form from "../../component/form";
import Homepage from "../../component/homepage";

interface InitialProps {
  email: string;
  password: string;
}

const Signin: NextPage = () => {
  const initialValuesOfSignIn: InitialProps = { email: "", password: "" };
  const [customError, setCustomError] = useState({ message: "" });
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
  const handleButtonClick = async (data: any) => {
    fetch("/api/auth/login", {
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
        if (result && result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("userId", result.id);
          router.push("/user/dashboard");
        } else {
          setCustomError({ message: result.message });
        }
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
          initialValues={initialValuesOfSignIn}
          type="SignIn"
          formSchema={signInSchema}
          onFormSubmit={handleButtonClick}
          customError={customError}
        />
      </div>
    </>
  );
};

export default Signin;
function data(data: any): BodyInit | null | undefined {
  throw new Error("Function not implemented.");
}

