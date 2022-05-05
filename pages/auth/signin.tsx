import type { NextPage } from "next";
import router from "next/router";
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
    // password: yup
    //   .string()
    //   .required("Password is required.")
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
  });
  const handleButtonClick = async (data: any) => {
    console.log("Loggedin successfully.");
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        if (result && result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("userId", result.id);
          router.push("/user/dashboard");
        } else {
          alert(result.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
function data(data: any): BodyInit | null | undefined {
  throw new Error("Function not implemented.");
}
