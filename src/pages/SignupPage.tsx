import SignupForm from "@/components/auth/SignupForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex justify-center">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
