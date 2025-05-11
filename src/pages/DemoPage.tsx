import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoForm from "@/components/demo/DemoForm";

const DemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;
