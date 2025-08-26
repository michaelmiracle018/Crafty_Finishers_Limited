import Navbar from "@/section/Navbar";
import ContactUsOn from "./components/contact-us-on";
import Footer from "@/section/Footer";
import Background from "@/components/Background";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <Background
        title="CONTACT US"
        description="You can reach us via the following details below."
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
      <ContactUsOn />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
