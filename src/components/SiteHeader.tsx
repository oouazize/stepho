'use client';

import { SearchIcon } from 'lucide-react';
import { Input } from '~/core/ui/input';
import Profile from './profile';

import MobileAppNavigation from './MobileAppNavigation';

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <MobileAppNavigation />

      <div className="relative flex-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search entities..."
          className="w-full rounded-md bg-muted pl-10 pr-4 focus:bg-background focus:outline-none"
        />
      </div>

      <Profile />
    </header>
  );
};

export default SiteHeader;
