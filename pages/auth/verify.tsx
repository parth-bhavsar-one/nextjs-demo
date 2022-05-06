import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Verify() {
  const [page, setPage] = useState((useRouter().query || 1).toString());
  const router = useRouter();
  const { token } = router.query;
  console.log(token);
  useEffect(() => {}, []);

  const onVerify = (data:any) => {
    fetch(`/api/auth/verify?token=${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Verify your Account
          </h1>
          <br />
          <p className="text-lg font-normal text-center ">
            Verify and Activate Your Account
          </p>
          <br />
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4"
            onClick={onVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
