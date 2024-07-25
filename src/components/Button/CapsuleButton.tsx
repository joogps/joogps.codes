import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

interface CapsuleButtonProps {
  className?: string;
  href: string;
  children: ReactNode;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ className: className = `capsule-button-secondary`, href, children }) => {
  return (
    <Link href={href} className={`rounded-xl border-2 border-[color:var(--capsule-button-border)] bg-[color:var(--capsule-button-background)] overflow-clip hover:bg-[color:var(--capsule-button-background-highlighted)] font-medium text-lg transition duration-300 ease-out capsule-background-blur ${className}`}>
      <div className="text-[color:var(--capsule-button-text)]">
        {children}
      </div>
    </Link>
  );
};

export default CapsuleButton;
