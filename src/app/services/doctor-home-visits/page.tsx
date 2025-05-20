import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";

export const metadata = {
  title: "Doctor Home Visits - City Doctor Healthcare",
  description: "24/7 doctor home visits in Dubai. Our qualified doctors arrive at your doorstep within 30-45 minutes to provide medical care.",
};

export default function DoctorHomeVisitsPage() {
  // Features list
  const features = [
    {
      title: "24/7 Availability",
      description: "Our doctors are available around the clock, including weekends and holidays.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Rapid Response",
      description: "Our doctors arrive at your location within 30-45 minutes of booking.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Qualified Professionals",
      description: "All our doctors are licensed, experienced, and highly qualified.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Care",
      description: "We treat a wide range of conditions and provide various medical services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  // Conditions we treat
  const conditions = [
    "Digestive Issues (Heartburn, Nausea, Vomiting, Abdominal Pain)",
    "Injuries and Pain (Minor Fractures, Cuts, Bruises, Sprains)",
    "Respiratory and ENT (Sinusitis, Tonsillitis, Flu, Fever, Allergies)",
    "Chronic Conditions (High Blood Pressure, Diabetes)",
    "Infections (UTIs, Skin Problems)",
    "General Wellness (Headaches, Migraines, Dizziness, Tiredness)",
  ];

  // Pricing cards
  const pricingCards = [
    {
      title: "GP Doctor Home Visit",
      price: "399",
      description: "Standard doctor home visit with examination, diagnosis, and prescription.",
      features: [
        "Medical examination",
        "Diagnosis and consultation",
        "Prescription",
        "Medical advice",
        "Follow-up guidance",
        "Available 24/7"
      ],
      ctaText: "Book Now",
      ctaLink: "/book-now",
      popular: true
    },
    {
      title: "Additional Services",
      price: "Varies",
      description: "Additional medical services that may be recommended during your visit.",
      features: [
        "Lab tests",
        "Diagnostic investigations",
        "IV/IM treatments",
        "Medical procedures",
        "Specialized consultations",
        "Follow-up visits"
      ],
      ctaText: "Learn More",
      ctaLink: "/services/medical-procedures",
      popular: false
    },
    {
      title: "IV Vitamin Therapy",
      price: "Starting at 349",
      description: "Premium IV vitamin therapy delivered to your home by qualified professionals.",
      features: [
        "Express IV Drips (from 599 AED)",
        "Vitamin C & Glutathione (from 349 AED)",
        "IM Booster Shots (from 299 AED)",
        "NAD+ Therapy (from 899 AED)",
        "Hangover & Recovery Drips",
        "Immune & Energy Boosters"
      ],
      ctaText: "Learn More",
      ctaLink: "/services/iv-vitamin-drips",
      popular: false
    }
  ];

  // FAQ items
  const faqItems = [
    {
      id: "faq-1",
      title: "How much does a doctor on call cost?",
      content: (
        <p>
          A GP doctor home visit in Dubai with City Doctor costs 399 AED, which covers the doctor's medical examination, diagnosis, and prescription.
          This consultation fee doesn't include any lab tests, diagnostic investigations, or treatments (IM/IV) that the doctor might recommend for you.
        </p>
      ),
    },
    {
      id: "faq-2",
      title: "Can I get appointments with doctors for home consultations?",
      content: (
        <p>
          Yes, you can book a home consultation. Call us on <a href="tel:8005060" className="text-city-blue hover:underline">800 50 60</a> or
          contact us via WhatsApp at <a href="https://wa.me/+971551548684" className="text-city-blue hover:underline">+971 55 154 8684</a>,
          and our team will book your appointment immediately.
        </p>
      ),
    },
    {
      id: "faq-3",
      title: "How much time will it take for a doctor to reach my place?",
      content: (
        <p>
          Once you have booked your appointment, a doctor will take 30-45 minutes to reach your place.
        </p>
      ),
    },
    {
      id: "faq-4",
      title: "What is the availability of your doctor home visit in Dubai and how do I call for it?",
      content: (
        <div>
          <p className="mb-4">
            Our doctor at home service is available on weekends and public holidays. No need to suffer any longer through the night
            waiting for your clinic to open. Contact our doctor on call now to get a doctor to your home so you can feel better sooner.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Contact Information:</strong> Call us to make an appointment at <a href="tel:8005060" className="text-city-blue hover:underline">800 5060</a> or
              WhatsApp us at <a href="https://wa.me/+971551548684" className="text-city-blue hover:underline">+971 55 154 8684</a>
            </li>
            <li><strong>Time for appointments:</strong> Anytime, 24x7x365 days a year. We are just a call away!</li>
            <li><strong>Time to reach you:</strong> We arrive the fastest, within 30 to 45 minutes of your call</li>
            <li><strong>Areas our home doctor service covers:</strong> Entire Emirate of Dubai</li>
            <li><strong>Where all our doctors can visit you in Dubai:</strong> Home, Hotel or Office</li>
          </ul>
        </div>
      ),
    },
    {
      id: "faq-5",
      title: "How can I benefit from the doctor on call services at home?",
      content: (
        <p>
          This service is available for anybody who wishes to be seen by a doctor in Dubai at their home or hotel.
        </p>
      ),
    },
    {
      id: "faq-6",
      title: "Is health insurance accepted for doctor at home services?",
      content: (
        <p>
          Doctor on call (doctor at home) services can be covered under a health insurance policy, which may vary from one insurer to another.
          If you're a citizen or resident in Dubai, please check with your insurance company if they can reimburse your payment.
          We will happily support you with all sorts of documentation and reports needed for this purpose.
        </p>
      ),
    },
    {
      id: "faq-7",
      title: "Do your doctors attend emergency cases?",
      content: (
        <p>
          In case of a life-threatening emergency, we advise you to call 998 for an ambulance.
          If not sure, you're always welcome to contact us, and our well-trained team will guide you.
        </p>
      ),
    },
    {
      id: "faq-8",
      title: "How qualified are your doctors?",
      content: (
        <p>
          All Doctors that work with our doctor on call services are fully registered with the Dubai Health Authority (DHA).
          We have full-time doctors that are internationally trained and who work in shifts to cover 24×7 services.
          They treat a wide range of illnesses or conditions that are not life-threatening.
          Not only will our doctors give you the proper treatment, but they also genuinely care about making you feel better.
          Our doctors are always courteous and respectful when being welcomed into your home.
        </p>
      ),
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-city-dark-blue mb-6">Doctor Home Visits</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Immediate medical assistance in the comfort of your home, hotel, or office in Dubai.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/book-now" variant="primary" size="lg">
                    Book a Doctor
                  </Button>
                  <Button href="tel:+971551548684" variant="outline" size="lg">
                    Call Now
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-city-teal/20 to-city-blue/20 z-10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                  <p>Doctor Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Why Choose Our Doctor Home Visits</h2>
              <p className="text-lg text-gray-600">
                Experience premium medical care without leaving your location
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <div className="w-14 h-14 rounded-lg bg-city-blue/10 flex items-center justify-center text-city-blue mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-city-dark-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Conditions We Treat</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our doctors are equipped to diagnose and treat a wide range of medical conditions right at your doorstep.
                </p>
                <ul className="space-y-4">
                  {conditions.map((condition, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-city-teal mr-3 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-city-teal/20 to-city-blue/20 z-10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                  <p>Treatment Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">How It Works</h2>
              <p className="text-lg text-gray-600">
                Getting medical care at your doorstep is simple and convenient
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-city-blue text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Book a Visit</h3>
                <p className="text-gray-600">
                  Call us or book online to schedule a doctor's visit to your home, hotel, or office.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-city-blue text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Doctor Arrives</h3>
                <p className="text-gray-600">
                  A qualified doctor will arrive at your location within 30-45 minutes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-city-blue text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Receive Treatment</h3>
                <p className="text-gray-600">
                  Get diagnosed and treated in the comfort of your own space with personalized care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection
          title="Transparent Pricing"
          subtitle="399 AED for a GP doctor home visit, including examination, diagnosis, and prescription"
          pricingCards={pricingCards}
          className="bg-gray-50"
        />

        {/* FAQ Section */}
        <FaqSection
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our doctor home visit service"
          faqs={faqItems}
          className="bg-gray-50"
        />

        {/* CTA Section */}
        <CtaSection
          title="Need a Doctor Now?"
          subtitle="Our doctors are available 24/7 to provide medical care at your location"
          ctaText="Book a Doctor"
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
