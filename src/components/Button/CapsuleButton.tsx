import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

interface CapsuleButtonProps {
  style?: string;
  href: string;
  children: ReactNode;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ style = `capsule-button-secondary`, href, children }) => {
  return (
    <Link href={href} className={`rounded-xl border border-[color:var(--capsule-button-border)] bg-[color:var(--capsule-button-background)] overflow-clip hover:bg-[color:var(--capsule-button-background-highlighted)] font-medium text-lg transition duration-300 ease-out ${style}`}>
      <div className="text-[color:var(--capsule-button-text)]">
        {children}
      </div>
    </Link>
  );
};

export default CapsuleButton;
