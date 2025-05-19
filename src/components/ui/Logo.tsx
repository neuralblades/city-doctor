import Link from 'next/link';

type LogoProps = {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
};

const Logo = ({ variant = 'default', size = 'md' }: LogoProps) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  // Color classes
  const colorClasses = {
    default: 'text-city-blue',
    white: 'text-white',
  };

  return (
    <Link href="/" className={`flex items-center ${sizeClasses[size]}`}>
      <div className="flex items-center">
        {/* Logo Mark */}
        <div className="relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={sizeClasses[size]}
          >
            <path
              d="M56.5,10C29.8,10,8.2,31.5,8.2,58.2c0,13.2,5.3,25.2,13.9,33.9L100,170l77.9-77.9c8.6-8.7,13.9-20.7,13.9-33.9 C191.8,31.5,170.2,10,143.5,10c-13.2,0-25.2,5.3-33.9,13.9L100,33.5l-9.6-9.6C81.7,15.3,69.7,10,56.5,10z"
              fill="#004165"
            />
            <path
              d="M56.5,10C29.8,10,8.2,31.5,8.2,58.2c0,13.2,5.3,25.2,13.9,33.9L100,170l77.9-77.9c8.6-8.7,13.9-20.7,13.9-33.9 C191.8,31.5,170.2,10,143.5,10c-13.2,0-25.2,5.3-33.9,13.9L100,33.5l-9.6-9.6C81.7,15.3,69.7,10,56.5,10z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="8.2"
                y1="90"
                x2="191.8"
                y2="90"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#004165" />
                <stop offset="0.5" stopColor="#0077B5" />
                <stop offset="1" stopColor="#3CB4A0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Logo Text */}
        <div className={`ml-2 font-bold text-2xl ${colorClasses[variant]}`}>
          City Doctor
          <span className="text-xs align-top ml-1">®</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
