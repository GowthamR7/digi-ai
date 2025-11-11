import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'filled' | 'outlined' | 'underlined' | 'ghost'
  inputSize?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  suffix?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = 'default',
    inputSize = 'md',
    icon,
    iconPosition = 'left',
    suffix,
    className, 
    ...props 
  }, ref) => {
    

    const variantStyles = {
      default: 'border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent',
      filled: 'border-0 bg-gray-100 focus:bg-gray-200 focus:ring-2 focus:ring-primary',
      outlined: 'border-2 border-gray-300 bg-transparent focus:border-primary focus:ring-0',
      underlined: 'border-0 border-b-2 border-gray-300 bg-transparent rounded-none focus:border-primary focus:ring-0 px-0',
      ghost: 'border-0 bg-transparent focus:bg-gray-50 focus:ring-0'
    }
    
  
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-5 py-3 text-lg'
    }
    
  
    const iconPaddingStyles = icon ? (
      iconPosition === 'left' ? 'pl-10' : 'pr-10'
    ) : ''
    
    const suffixPaddingStyles = suffix ? 'pr-10' : ''

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
       
          <input
            ref={ref}
            className={cn(
              'w-full rounded-lg transition-all duration-200',
              'placeholder:text-gray-400',
              'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
              'focus:outline-none',
              variantStyles[variant],
              sizeStyles[inputSize],
              iconPaddingStyles,
              suffixPaddingStyles,
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              className
            )}
            {...props}
          />
          
          {/* Right Icon */}
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          
          {/* Suffix */}
          {suffix && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              {suffix}
            </div>
          )}
        </div>
        
        {/* Error Message */}
        {error && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <span>⚠</span>
            {error}
          </p>
        )}
        
        {/* Helper Text */}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'