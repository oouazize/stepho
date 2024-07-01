import { BookOpenIcon, HomeIcon, PackageIcon, UsersIcon } from 'lucide-react';

import configuration from '~/configuration';

type NavigationItemLink = {
  label: string;
  path: string;
  Icon: (props: { className: string }) => JSX.Element;
  end?: boolean;
};

type NavigationGroup = {
  label: string;
  collapsible?: boolean;
  collapsed?: boolean;
  children: NavigationItemLink[];
};

type NavigationItem = NavigationItemLink | NavigationGroup;

type NavigationConfig = {
  items: NavigationItem[];
};

const NAVIGATION_CONFIG = (): NavigationConfig => ({
  items: [
    {
      label: 'Overview',
      path: getPath('/'),
      Icon: ({ className }: { className: string }) => {
        return <HomeIcon className={className} />;
      },
      end: true,
    },
    {
      label: 'Entities',
      path: getPath('entities'),
      Icon: ({ className }: { className: string }) => {
        return <PackageIcon className={className} />;
      },
    },
    {
      label: 'Courses',
      path: getPath('courses'),
      Icon: ({ className }: { className: string }) => {
        return <BookOpenIcon className={className} />;
      },
    },
    {
      label: 'Participants',
      path: getPath('participants'),
      Icon: ({ className }: { className: string }) => {
        return <UsersIcon className={className} />;
      },
    },
  ],
});

export default NAVIGATION_CONFIG;

function getPath(path: string) {
  const appPrefix = configuration.paths.appPrefix;

  return [appPrefix, path].filter(Boolean).join('/');
}
