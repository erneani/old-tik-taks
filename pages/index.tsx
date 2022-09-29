import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/welcome");
  }, [router]);

  return <h1>Loading...</h1>;
};

export default Home;
