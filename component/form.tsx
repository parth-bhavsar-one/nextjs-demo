import { useFormik, FormikProps } from "formik";
import Link from "next/link";
interface FormValues {
  email?: string;
  password?: string;
  fullName?: string;
  dob?: string;
  newPassword?: string;
}

interface OtherProps {
  type: string;
  onFormSubmit: (values: string) => void;
}

const Form: any = (props: any & OtherProps & FormikProps<FormValues>) => {
  const {
    initialValues,
    type,
    formSchema,
    onFormSubmit,
  } = props;
  const formik: any = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: async (values) => {
      onFormSubmit(values);
      console.log(values);
    },
  });
  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div className="py-4 px-8 flex font-bold text-xl border-b border-grey-lighter">
              <div className="py-12 mx-auto"> {type}</div>
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
              {type === "SignIn" || type === "SignUp" ? (
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
              ) : null}
              {type === "ResetPassword" || type === "SignIn"? (
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
              {type === "ResetPassword" ? (
                <div className="mb-4">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    New Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    name="newPassword"
                    placeholder="Enter new password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                  />
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <span className="text-red-500 text-sm">
                      {formik.errors.newPassword}
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
                <div className="mx-auto">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                  >
                    {type === "SignIn" ? "Login" : type === "ResetPassword" ? "Reset" : "Register"}
                  </button>
                </div>
              </div>
              <div className="flex mt-8 mx-10">
                <div className="flex items-center mx-auto">
                  {type === "SignIn" ? (
                    <p style={{ padding: "15px" }}>Do not have an account?</p>
                  ) : type === "ResetPassword" ? null : (
                    <p style={{ padding: "15px" }}>Already have an account?</p>
                  )}
                  {type === "SignIn" ? (
                    <Link href="/auth/signup" className="btn btn-link">
                      <a> SignUp Now</a>
                    </Link>
                  ) : type  === "ResetPassword" ? null : (
                    <Link href="/auth/signin" className="btn btn-link">
                      <a href="#" className="btn btn-link">
                        Cancel
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
