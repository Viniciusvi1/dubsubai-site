import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
