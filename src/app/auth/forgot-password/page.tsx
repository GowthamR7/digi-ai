'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordUI() {
  const [step, setStep] = useState(1); // Toggle between 1 and 2 to see both designs
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full  grid lg:grid-cols-2  items-center">
        
        {/* Left Side - Form */}
        <div className="w-[700px] h-[676px]   mx-auto lg:ml-auto  ">
          <div className="w-full h-full flex flex-col items-center justify-center ">
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-600">
                {step === 1 
                  ? 'Enter your email to reset your password'
                  : 'Enter your new password'}
              </p>
            </div>

            {/* Step 1: Email Input */}
            {step === 1 && (
              <div className="space-y-6 w-[530px]">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    variant='underlined'
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full text-white py-3 rounded-lg font-medium"
                  variant="gradient"
                >
                  Submit
                </Button>
              </div>
            )}

            {/* Step 2: Password Inputs */}
            {step === 2 && (
              <div className="space-y-6 w-[530px]">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      variant='underlined'
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 pr-12 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      variant='underlined'
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 pr-12 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <Button
                  onClick={() => alert('Password Reset Complete!')}
                  className="w-full"
                  variant="gradient"
                >
                  Submit
                </Button>
              </div>
            )}

            <p className="text-center text-sm text-gray-600 mt-6">
              Remembered password?{' '}
              <a href="/auth/login" className=" ">
                Sign in
              </a>
            </p>

          </div>

          {/* Demo Toggle Button */}
         
        </div>

        {/* Right Side - Illustration */}
        <div className="">
          {step === 1 ? (
            // Step 1 Illustration - Medical/Tech Theme
            <div className="">
             <Image src="/images/forgot-password.png" alt="Office Illustration"  width={500}
            height={500}
            className="w-full h-auto" />
            </div>
          ) : (
            // Step 2 Illustration - Business/Office Theme
            <div className="">
              <Image src="/images/forgot-password1.png" alt="Office Illustration"  width={500}
            height={500}
            className="w-full h-auto" />
            </div>
          )}
        </div>


      </div>
    </div>
  );
}