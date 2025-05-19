import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import CtaSection from "@/components/sections/CtaSection";

export const metadata = {
  title: "About City Doctor - Healthcare At Your Doorstep",
  description: "Learn about City Doctor's mission to provide premium healthcare services at your doorstep in Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-city-dark-blue mb-6">About City Doctor</h1>
              <p className="text-xl text-gray-600">
                Pioneering at-home healthcare services in Dubai, UAE
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At City Doctor, our mission is to provide convenient, high-quality medical care right at your doorstep. We believe that healthcare should be accessible, personalized, and delivered with compassion.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We are committed to bringing the best medical professionals to your home, hotel, or office, ensuring that you receive the care you need without the hassle of traveling to a clinic or hospital.
                </p>
                <p className="text-lg text-gray-600">
                  Our team of certified healthcare professionals is dedicated to delivering exceptional service with a focus on your comfort and well-being.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-city-teal/20 to-city-blue/20 z-10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                  <p>Mission Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to delivering the highest standard of medical care and service excellence in everything we do.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Responsiveness</h3>
                <p className="text-gray-600">
                  We understand that medical needs can't wait. That's why we pride ourselves on our quick response time and 24/7 availability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-city-blue/10 flex items-center justify-center text-city-blue mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-city-dark-blue mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We treat every patient with empathy, respect, and understanding, recognizing that each person's healthcare journey is unique.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CtaSection 
          title="Experience Healthcare at Your Doorstep"
          subtitle="Our team of healthcare professionals is ready to provide you with the care you need"
          ctaText="Book a Service"
          ctaLink="/book-now"
          secondaryCtaText="Contact Us"
          secondaryCtaLink="/contact"
          bgColor="blue"
        />
      </main>
      
      <Footer />
    </>
  );
}
