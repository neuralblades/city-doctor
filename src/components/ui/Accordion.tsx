'use client';

import { useState } from 'react';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggleAccordion: () => void;
};

const AccordionItem = ({ 
  title, 
  children, 
  isOpen = false, 
  toggleAccordion 
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium text-city-dark-blue">{title}</h3>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-4 px-6 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

type AccordionProps = {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
};

const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(id)
          ? prevOpenItems.filter((item) => item !== id)
          : [...prevOpenItems, id]
      );
    } else {
      setOpenItems((prevOpenItems) =>
        prevOpenItems.includes(id) ? [] : [id]
      );
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItems.includes(item.id)}
          toggleAccordion={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
