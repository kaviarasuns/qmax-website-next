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
      {/* Footer bleeds behind the fixed nav so its `min-h-screen`
          (shared with non-FPS pages) isn't clipped at the bottom. */}
      <FullBleed>
        <FooterV2 />
      </FullBleed>
    </FullPageScroll2>
  );
};

export default Contact;
