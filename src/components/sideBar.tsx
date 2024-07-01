import {
  LayoutGridIcon,
} from 'lucide-react';
import SiteNavigation from './SiteNavigation';

const SideBar = () => {
  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-6 md:flex">
      <div className="mb-6 flex items-center gap-2">
        <LayoutGridIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      <SiteNavigation />
    </aside>
  );
};

export default SideBar;
