import Button from '../ui/Button';

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
};

const PricingCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  popular = false,
}: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${popular ? 'ring-2 ring-city-blue' : ''}`}>
      {popular && (
        <div className="bg-city-blue text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold text-city-dark-blue mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-city-blue">{price}</span>
          <span className="text-gray-500 ml-2">AED</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-city-teal mr-2 mt-0.5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          href={ctaLink} 
          variant={popular ? 'primary' : 'outline'} 
          fullWidth
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

type PricingSectionProps = {
  title: string;
  subtitle?: string;
  pricingCards: PricingCardProps[];
  className?: string;
};

const PricingSection = ({ title, subtitle, pricingCards, className = '' }: PricingSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
