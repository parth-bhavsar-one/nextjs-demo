import { useFormik, FormikProps } from "formik";
interface FormValues {
  email: string;
  password: string;
  fullName: string;
  dob: string;
}

interface OtherProps {
  type: string;
  onFormSubmit: () => void;
}

const Form: any = (props: any & OtherProps & FormikProps<FormValues>) => {
  const {
    initialValuesOfSignIn,
    initialValuesOfSignUp,
    type,
    signInSchema,
    signUpSchema,
    onFormSubmit,
  } = props;
  const formik:any = useFormik({
    initialValues:
      type === "SignIn" ? initialValuesOfSignIn : initialValuesOfSignUp,
    validationSchema: type === "SignIn" ? signInSchema : signUpSchema,
    onSubmit: async (values) => {
      onFormSubmit();
    },
  });
  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              {type}
            </div>
            <div className="py-4 px-8">
              {type === "SignUp" ? (
                  <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="fullName"
                      placeholder="Enter FullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <span className="text-red-500 text-sm">
                        {formik.errors.fullName}
                      </span>
                    ) : null}
                  </div>
              ) : null}
                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="email"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="text-red-500 text-sm">
                      {formik.errors.email}
                    </span>
                  ) : null}
                </div>
                {type === "SignIn" ? (
                  <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">
                      Password
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="password"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <span className="text-red-500 text-sm">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                {type === "SignUp" ? (
                  <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">
                      Date of Birth
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="dob"
                      type="date"
                      placeholder="Enter Date Of Birth"
                      onChange={formik.handleChange}
                      value={formik.values.dob}
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                      <span className="text-red-500 text-sm">
                        {formik.errors.dob}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => formik.handleSubmit()}
                  >
                    {type === "SignIn" ? "Login" : "Register"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Form;
