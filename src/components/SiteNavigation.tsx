'use client';
import React from 'react';
import NAVIGATION_CONFIG from '~/lib/navigation.config';
import NavigationMenuItem from '~/core/ui/Navigation/NavigationItem';

const SiteNavigation = ({
  setOpen,
}: {
  setOpen?: (value: React.SetStateAction<boolean>) => void;
}) => {
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

  return <nav className="flex flex-col gap-2">{Links}</nav>;
};

export default SiteNavigation;
