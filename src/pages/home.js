import Navbar from "../components/navbar/navbar.js";
import HeroSection from "../heroSection/heroSection.js";
import RegForm from "../components/regForm/regForm.js";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <RegForm />
    </div>
  );
}

