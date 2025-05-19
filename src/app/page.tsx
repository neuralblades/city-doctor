import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  // Services data
  const services = [
    {
      id: "doctor-visits",
      title: "Doctor Home Visits",
      description: "24/7 on-call medical assistance at your doorstep within 30-45 minutes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      link: "/services/doctor-home-visits",
      features: [
        "Digestive Issues Treatment",
        "Injuries and Pain Management",
        "Respiratory and ENT Care",
        "Chronic Conditions Management"
      ]
    },
    {
      id: "iv-drips",
      title: "IV Vitamin Drips",
      description: "Premium IV vitamin therapy delivered to your home or hotel in Dubai.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/services/iv-vitamin-drips",
      features: [
        "Hangover Recovery",
        "Energy & Immune Boosters",
        "Skin Glow Treatments",
        "NAD+ Therapy"
      ]
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      description: "Specialized physiotherapy services in the comfort of your home.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: "/services/physiotherapy",
      features: [
        "Musculoskeletal Therapy",
        "Post-Surgery Rehabilitation",
        "Pain Management",
        "Geriatric & Pediatric Care"
      ]
    },
    {
      id: "lab-tests",
      title: "Lab Tests at Home",
      description: "Comprehensive lab testing services brought directly to your doorstep.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/services/lab-tests",
      features: [
        "General Health Checks",
        "Cardiac & Metabolic Tests",
        "Hormonal & Reproductive Health",
        "Infection & Immunity Assessments"
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Dubai Resident",
      content: "City Doctor's service was exceptional. The doctor arrived within 30 minutes and provided excellent care for my son's fever. Highly recommended for families!",
      rating: 5
    },
    {
      id: "2",
      name: "Mohammed Al-Farsi",
      role: "Business Executive",
      content: "As someone with a busy schedule, City Doctor's home service is a lifesaver. Their IV drip therapy helped me recover quickly from jet lag and fatigue.",
      rating: 5
    },
    {
      id: "3",
      name: "Elena Petrova",
      role: "Hotel Guest",
      content: "I fell ill during my vacation in Dubai, and City Doctor sent a physician to my hotel room within an hour. Professional service that saved my holiday!",
      rating: 4
    }
  ];

  return (
    <>
      <Header />

      <main>
        <HeroSection
          title="Healthcare Excellence At Your Doorstep"
          subtitle="Experience premium medical services in the comfort of your home, hotel, or office in Dubai. Our doctors and healthcare professionals arrive within 30-45 minutes."
          ctaText="Book Now"
          ctaLink="/book-now"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/about"
          imageSrc="/placeholder-doctor.jpg"
          imageAlt="Doctor providing home healthcare service"
        />

        <ServicesSection
          title="Explore Our Healthcare Services"
          subtitle="Comprehensive medical care delivered to your doorstep in Dubai"
          services={services}
        />

        <TestimonialsSection
          title="What Our Patients Say"
          subtitle="Trusted by thousands of patients across Dubai"
          testimonials={testimonials}
        />

        <CtaSection
          title="Need Medical Assistance?"
          subtitle="Our healthcare professionals are available 24/7 to provide care at your location"
          ctaText="Book a Service"
          ctaLink="/book-now"
          secondaryCtaText="Call Us"
          secondaryCtaLink="tel:+971551548684"
          bgColor="blue"
        />
      </main>

      <Footer />
    </>
  );
}
