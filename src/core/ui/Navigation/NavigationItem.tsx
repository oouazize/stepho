'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import isRouteActive from '~/core/generic/is-route-active';

const NavigationMenuItem: React.FCC<{
  label: string;
  link: string;
  Icon: (props: { className: string }) => JSX.Element;
  setOpen?: (value: React.SetStateAction<boolean>) => void;
}> = ({ label, link, Icon, setOpen }) => {
  const pathName = usePathname() ?? '';
  const active = isRouteActive(link, pathName);

  const className = active
    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
    : 'text-muted-foreground hover:bg-muted hover:text-foreground';

  return (
    <Link
      key={link}
      href={link}
      className={`flex items-center gap-2 rounded-md px-3 py-2 transition-colors ${className}`}
      prefetch={false}
      onClick={() => setOpen && setOpen(false)}
    >
      <Icon className="h-5 w-5" />

      <span>{label}</span>
    </Link>
  );
};

export default NavigationMenuItem;
