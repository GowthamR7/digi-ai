'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, Radio, Package, Layout, Calendar, Workflow, 
  CircleUser, Wallet, Users, MessageSquare, CreditCard, 
  Bell, HelpCircle, Menu, X, ExternalLink, ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  external?: boolean
  badge?: number
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/dashboard', icon: <Home size={20} /> },
  { label: 'Broadcast Bot', href: '/dashboard/broadcast', icon: <Radio size={20} /> },
  { label: 'Products & Services', href: '/dashboard/products', icon: <Package size={20} /> },
  { label: 'Widget Studio', href: '/dashboard/widget-studio', icon: <Layout size={20} /> },
  { label: 'Appointment Bot', href: '/dashboard/appointment', icon: <Calendar size={20} /> },
  { label: 'WhatsApp Flow', href: '/dashboard/whatsapp-flow', icon: <Workflow size={20} /> },
  { label: 'K Avatar', href: '/dashboard/k-avatar', icon: <CircleUser size={20} />, external: true },
  { label: 'Wallet', href: '/dashboard/wallet', icon: <Wallet size={20} /> },
  { label: 'Contacts', href: '/dashboard/contacts', icon: <Users size={20} /> },
  { label: 'Chat History', href: '/dashboard/chat-history', icon: <MessageSquare size={20} /> },
  { label: 'Pricing Plan', href: '/dashboard/pricing', icon: <CreditCard size={20} /> },
  { label: 'Notifications', href: '/dashboard/notifications', icon: <Bell size={20} />, badge: 1 },
  { label: 'Help Center', href: '/dashboard/help', icon: <HelpCircle size={20} /> },
]

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isExpanded ? '256px' : '80px',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-50',
          'flex flex-col shadow-lg lg:shadow-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DN</span>
                </div>
                <span className="font-bold text-gray-900 text-lg">DIGI NEST AI</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              'p-2 rounded-lg hover:bg-gray-100 transition-colors',
              !isExpanded && 'mx-auto'
            )}
          >
            {isExpanded ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 relative group',
                      isActive
                        ? 'bg-primary-50 text-primary font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 text-sm truncate"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {item.external && isExpanded && (
                      <ExternalLink size={14} className="flex-shrink-0 opacity-50" />
                    )}

                    {item.badge && isExpanded && (
                      <span className="flex-shrink-0 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}

                    {/* Tooltip for collapsed state */}
                    {!isExpanded && hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-50 shadow-lg"
                      >
                        {item.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                      </motion.div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">UN</span>
            </div>
            
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-gray-900 truncate">UserName</p>
                  <p className="text-xs text-gray-500 truncate">user@example.com</p>
                </motion.div>
              )}
            </AnimatePresence>

            {isExpanded && (
              <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
            )}
          </Link>
        </div>
      </motion.aside>

      {/* Spacer for main content */}
      <div
        style={{
          width: isExpanded ? '256px' : '80px',
          transition: 'width 0.3s ease-in-out'
        }}
        className="flex-shrink-0"
      />
    </>
  )
}