import Button from '../ui/Button';

type CtaSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgColor?: 'blue' | 'teal' | 'white';
};

const CtaSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgColor = 'blue',
}: CtaSectionProps) => {
  // Background color classes
  const bgClasses = {
    blue: 'bg-city-blue text-white',
    teal: 'bg-city-teal text-white',
    white: 'bg-white text-city-dark-blue',
  };

  // Button variants based on background
  const primaryBtnVariant = bgColor === 'white' ? 'primary' : 'secondary';
  const secondaryBtnVariant = bgColor === 'white' ? 'outline' : 'outline';

  // Text color for subtitle
  const subtitleClass = bgColor === 'white' ? 'text-gray-600' : 'text-white/80';

  return (
    <section className={`py-16 md:py-24 ${bgClasses[bgColor]}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className={`text-lg mb-8 ${subtitleClass}`}>{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href={ctaLink} 
              variant={primaryBtnVariant}
              size="lg"
              className={bgColor !== 'white' ? 'bg-white text-city-blue hover:bg-gray-100' : ''}
            >
              {ctaText}
            </Button>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button 
                href={secondaryCtaLink} 
                variant={secondaryBtnVariant}
                size="lg"
                className={bgColor !== 'white' ? 'border-white text-white hover:bg-white hover:text-city-blue' : ''}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
