import FullPageScroll from "@/components/home/full-page-scroll";
import ContactHero from "./ContactHero";
import OfficeLocations from "./OfficeLocations";
import FooterV2 from "@/components/footer-v2";

const Contact = () => {
  return (
    <FullPageScroll>
      <ContactHero />
      <OfficeLocations />
      <FooterV2 />
    </FullPageScroll>
  );
};

export default Contact;
