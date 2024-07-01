'use client';

import { LayoutGridIcon, MenuIcon } from 'lucide-react';

import { Sheet, SheetTrigger, SheetContent } from '~/core/ui/sheet';
import { Button } from '~/core/ui/Button';
import { useState } from 'react';
import NAVIGATION_CONFIG from '~/lib/navigation.config';
import NavigationMenuItem from '~/core/ui/Navigation/NavigationItem';

const MobileAppNavigation = () => {
  const [open, setOpen] = useState(false);

  const Links = NAVIGATION_CONFIG().items.map((item, index) => {
    if ('children' in item) {
      return item.children.map((child) => {
        return (
          <NavigationMenuItem
            label={child.label}
            link={child.path}
            Icon={child.Icon}
            setOpen={setOpen}
          />
        );
      });
    }

    return (
      <NavigationMenuItem
        label={item.label}
        link={item.path}
        Icon={item.Icon}
        setOpen={setOpen}
      />
    );
  });

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:hidden">
          <div className="mb-6 flex items-center gap-2">
            <LayoutGridIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
          <nav className="flex flex-col gap-2">{Links}</nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileAppNavigation;
