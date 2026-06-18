import { FullBleed } from "@/components/home/full-page-scroll-2";
import ContactHero from "./ContactHero";
import FooterV3 from "@/components/footer-v3";
import GlobalPresenceV2 from "@/components/about-v2/GlobalPresenceV2";

const Contact = () => {
  return (
    <>
      {/* <FullPageScroll2> */}
      <ContactHero />
      <GlobalPresenceV2 />
      <div className="pb-24"></div>
      {/* <OfficeLocations /> */}
      {/* Footer bleeds behind the fixed nav. FullBleed stretches its
          child to fill the snap section; FooterV2 itself is naturally
          sized so it also works on non-FPS pages via FooterWrapper. */}
      <FullBleed>
        <FooterV3 />
      </FullBleed>
      {/* </FullPageScroll2> */}
    </>
  );
};

export default Contact;
