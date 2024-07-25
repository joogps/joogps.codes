import Link from 'next/link';
import { ReactNode } from 'react';

interface ArrowLinkProps {
  className?: string;
  href: string;
  children: ReactNode;
}

const ArrowLink: React.FC<ArrowLinkProps> = ({ className = '', href, children }) => {
  return (
    <Link href={href} className={`inline-block underline ${className}`}>
      {children}

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="inline-block size-6 origin-top-left scale-75 opacity-75 w-6 -mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /> </svg>
    </Link>
  );
};

export default ArrowLink;
