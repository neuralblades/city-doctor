import Accordion from '../ui/Accordion';

type FaqSectionProps = {
  title: string;
  subtitle?: string;
  faqs: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  className?: string;
};

const FaqSection = ({ title, subtitle, faqs, className = '' }: FaqSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
