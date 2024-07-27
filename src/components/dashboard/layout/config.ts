import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'Asset List', title: 'Asset List', href: paths.dashboard.asset_list, icon: 'users' },
  {
    key: 'Maintenance Calendar',
    title: 'Maintenance Calendar',
    href: paths.dashboard.maintenance_calendar,
    icon: 'plugs-connected',
  },
  {
    key: 'Resource Dashboard',
    title: 'Resource Dashboard',
    href: paths.dashboard.resource_management,
    icon: 'gear-six',
  },
  { key: 'Analytics Dashboard', title: 'Analytics Dashboard', href: paths.dashboard.analytical_db, icon: 'user' },
] satisfies NavItemConfig[];
