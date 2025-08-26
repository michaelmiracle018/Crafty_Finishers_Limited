import Background from "@/components/Background";
import AboutCompany from "./components/about-company";
import Footer from "@/section/Footer";
import Navbar from "@/section/Navbar";
import { useRouter } from "@tanstack/react-router";

const AboutUsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />

      <Background
        title="ABOUT US"
        description=" Crafty Finishers Limited is a registered shop fitting and interior
            finishing company incorporated on June 18, 2020. Based in Ghana, the
            company specializes in residential and commercial building finishes
            with a focus on quality craftsmanship, modern aesthetics, and timely
            delivery."
        displayBottomImage={true}
        buttons={[
          {
            label: "READ MORE",
            variant: "primary",
            onClick: () =>
              router.navigate({
                to: "/about-us",
                hash: "#about-company",
                hashScrollIntoView: { behavior: "smooth", block: "start" },
              }),
          },
          {
            label: "REACH US",
            variant: "outline",
            onClick: () => router.navigate({ to: "/contact-us" }),
          },
        ]}
      />
      <AboutCompany />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
