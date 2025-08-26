import Background from "@/components/Background";
import Footer from "@/section/Footer";
import "./components/ServiceCard.css";
import { ServiceCard } from "./components/service-card";
import Navbar from "@/section/Navbar";

const Services = () => {
  return (
    <div>
        <Navbar />
      <Background
        title="SERVICES"
        description="We also provide project-based consultation, site evaluation, and custom ceiling and partition solutions tailored for both new developments and renovations."
        displayBottomImage={false}
        // buttons={[
        //   {
        //     label: "READ MORE",
        //     variant: "primary",
        //     onClick: () => console.log("Read More"),
        //   },
        //   {
        //     label: "REACH US",
        //     variant: "outline",
        //     onClick: () => console.log("Reach Us"),
        //   },
        // ]}
      />
      <ServiceCard />

      <Footer />
    </div>
  );
};

export default Services;
