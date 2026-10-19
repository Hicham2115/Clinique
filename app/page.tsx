import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import ClinicSection from "@/components/clinic-section";
import ExpertiseSection from "@/components/expertise-section";
import DoctorSection from "@/components/doctor-section";
import ImagingSection from "@/components/imaging-section";
import TrainingSection from "@/components/training-section";
import PartnershipSection from "@/components/partnership-section";
import ReviewsSection from "@/components/reviews-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClinicSection />
        <ExpertiseSection />
        <DoctorSection />
        <ImagingSection />
        <TrainingSection />
        <PartnershipSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
