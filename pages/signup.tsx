import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";

const Home: NextPage = () => {
  return (
    <div className="auth">
      <div className="main">
        <Header />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
