import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Book Now - City Doctor Healthcare",
  description: "Book a healthcare service with City Doctor. Doctor home visits, IV vitamin drips, physiotherapy, and lab tests delivered to your doorstep.",
};

export default function BookNowPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-city-dark-blue mb-6">Book a Service</h1>
              <p className="text-xl text-gray-600">
                Schedule a healthcare service at your doorstep
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Form */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-city-dark-blue mb-8">Book Your Appointment</h2>
                
                <form className="space-y-6">
                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type*
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="doctor-visit">Doctor Home Visit</option>
                      <option value="iv-drip">IV Vitamin Drip</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="lab-test">Lab Test</option>
                      <option value="nursing">Nursing Care</option>
                    </select>
                  </div>
                  
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                      placeholder="Your address in Dubai"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date*
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time*
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Symptoms/Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Symptoms or Special Requests
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-city-blue"
                      placeholder="Please describe your symptoms or any special requests"
                    ></textarea>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-city-blue focus:ring-city-blue border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-600">
                        I agree to the <a href="/terms-conditions" className="text-city-blue hover:underline">Terms and Conditions</a> and <a href="/privacy-policy" className="text-city-blue hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      Book Appointment
                    </Button>
                  </div>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Need immediate assistance? Call us at{" "}
                    <a href="tel:+971551548684" className="text-city-blue font-semibold hover:underline">
                      055 154 8684
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
