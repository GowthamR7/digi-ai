import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  highlighted = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white shadow-sm',
        highlighted && 'bg-primary border-primary',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-200', className)} {...props}>
      {children}
    </div>
  )
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const CardBody: React.FC<CardBodyProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}