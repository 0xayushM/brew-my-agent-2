import React from 'react';
import Link from 'next/link';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, AnimatedButtonProps>((
  { children, className, href, ...props },
  ref
) => {
  const commonClasses = `relative group overflow-hidden px-6 py-2 bg-transparent border border-light rounded-full flex items-center transition-all duration-300 ease-out ${className || ''} no-underline inline-block text-center hover:text-black z-0`;

  const content = (
    <>
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 transition-all duration-500 ease-in-out bg-light rounded-lg group-hover:w-full group-hover:h-full z-0"></span>
      <span className="relative z-0 transition-colors duration-500">
        {children}
      </span>
    </>
  );

  if (href) {
    const { type, ...anchorProps } = props as any; // remove button-specific `type` prop
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={commonClasses}
        {...anchorProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={commonClasses} {...props}>
      {content}
    </button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
