import Button from '../ui/Button';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string; // Made optional since we're not using it
  imageAlt?: string; // Made optional since we're not using it
};

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  // Removed unused props
}: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-city-dark-blue leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={ctaLink} variant="primary" size="lg">
                {ctaText}
              </Button>
              {secondaryCtaText && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="outline" size="lg">
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted by thousands of patients in Dubai</p>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 from 500+ reviews</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-r from-city-teal/20 to-city-blue/20 z-10 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-city-blue flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Doctor Image Placeholder</p>
                    <p className="text-sm text-gray-500">Healthcare at your doorstep</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px]">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-city-blue flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-city-dark-blue">Fast Response</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Doctor at your doorstep in 30-45 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-city-teal/10 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-city-blue/10 rounded-tr-full -z-10"></div>
    </section>
  );
};

export default HeroSection;
