import { useState } from 'react';
import { tw } from 'twind';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  {
    label: `Properties`,
    href: `/properties`,
  },
  {
    label: `Testimonials`,
    href: `/testimonials`,
  },
  {
    label: `Rates`,
    href: `/rates`,
  },
  {
    label: `Blog`,
    href: `/blog`,
  },
];

const secondaryLinks: Link[] = [
  {
    label: `Contact Us`,
    href: `/contact`,
  },
  {
    label: `Sign In`,
    href: `/signin`,
  },
  {
    label: `Get Started`,
    href: `/get-started`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={tw`md:hidden`}>
      <div className={tw`px-2 pt-2 pb-3 space-y-1 sm:px-3`}>
        {links.map((link) => (
          <a href={link.href} className={tw`text-gray-500 block px-3 py-2 text-base font-medium`} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
      <div className={tw`pt-4 pb-3 border-t border-gray-400`}>
        <div className={tw`px-2 space-y-1`}>
          {secondaryLinks.map((link) => (
            <a
              key={`mobile-${link.label}`}
              href={link.href}
              className={tw`block px-3 py-2 text-base font-medium text-gray-500`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
