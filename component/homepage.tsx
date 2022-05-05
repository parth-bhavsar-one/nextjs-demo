import type { NextPage } from "next";
import Image from "next/image";
import profile from "../component/assest/image.jpg"
const HomePage: NextPage = () => {
  return (
    <div>
      <Image
        src={profile}
        alt="Picture of the author"
        width={800}
        height={750}
      />
    </div>
  );
};

export default HomePage;
