import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/sections/CtaSection";

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
