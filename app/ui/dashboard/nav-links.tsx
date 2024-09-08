'use client';


import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CommandLineIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import "./nav-links.css"

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

// Other Routes!
// {
//   name: 'Invoices',
//   href: '/dashboard/invoices',
//   icon: UserGroupIcon,
// },
// {
//   name: 'Customers',
//   href: '/dashboard/customers',
//   icon: UserGroupIcon,
// },

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: '🌊 ZurfsUp',
    href: '/dashboard/zurfsup',
    icon: DocumentDuplicateIcon,
  },
  { name: '༄｡° Metrics', href: '/dashboard/metrics', icon: ChartBarIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'zurfslink_standard',
              {
                'zurfslink_triggered': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="paragraph_linkname">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
