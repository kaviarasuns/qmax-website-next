import FullPageScroll2, {
  FullBleed,
} from "@/components/home/full-page-scroll-2";
import ContactHero from "./ContactHero";
import OfficeLocations from "./OfficeLocations";
import FooterV2 from "@/components/footer-v2";

const Contact = () => {
  return (
    <FullPageScroll2>
      <ContactHero />
      <OfficeLocations />
      {/* Footer bleeds behind the fixed nav. FullBleed stretches its
          child to fill the snap section; FooterV2 itself is naturally
          sized so it also works on non-FPS pages via FooterWrapper. */}
      <FullBleed>
        <FooterV2 />
      </FullBleed>
    </FullPageScroll2>
  );
};

export default Contact;
