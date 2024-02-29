"use client"
import React from 'react'
import { BadgeDollarSign, Bell, CircleUserRound, Cog, HandHelping, HelpCircle, HelpingHand, LayoutDashboard, LucideIcon, Phone, Settings, Siren, WalletCards, Wrench } from 'lucide-react'
import SidebarItem from './item';

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const items = [
  {
    name: 'Dashboard',
    path: '/',
    icon: LayoutDashboard
  },
  {
    name: 'Transaction',
    path: '/transaction',
    icon: BadgeDollarSign
  },
  {
    name: 'Payment',
    path: '/payment',
    icon: WalletCards
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: CircleUserRound
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    items: [
      {
        name: 'General',
        path: '/settings/setting',
        icon: Wrench
      },  
      {
        name: 'Security',
        path: '/settings/security',
        icon: Siren
      },
      {
        name: 'Notifications',
        path: '/settings/notifications',
        icon: Bell
      },
    ]
  },
  {
    name: 'Help',
    path: '/help',
    icon: HelpingHand,
    items: [
      {
        name: 'FAQs',
        path: '/help/faqs',
        icon: HelpCircle
      },  
      {
        name: 'Support',
        path: '/help/support',
        icon: HandHelping
      },
      {
        name: 'Contact Us',
        path: '/help/contact-us',
        icon: Phone
      },
    ]
  }
]
const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4'>
      <div className='flex flex-col space-y-10'>
        <img className='h-15 w-fit' src='/nextjs.jpg' alt='logo' />
        <div className='flex flex-col space-y-1'>
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
