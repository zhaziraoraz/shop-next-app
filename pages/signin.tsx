import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";

const Home: NextPage = () => {
  return (
    <div className="auth">
      <div className="main">
        <Header />
        <SignIn />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
