'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Eyes from '@/assets/icons/Eyes.svg'
import Hide from '@/assets/icons/Hide.svg'
import Image from 'next/image'
import Google from '@/assets/icons/Google.svg'

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    router.push('/auth/connect-business')
  }

  return (
    <div className="min-h-screen   flex items-center justify-center  ">
      <div className="w-full  grid lg:grid-cols-2  items-center ">
        {/* Left Side - Illustration */}
        <div className="">

          <Image src="/images/signup.png"
            alt="Register Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />

        </div>

        {/* Right Side - Form */}
        <div className=" w-[700px] h-[900px]   mx-auto lg:ml-auto">
          <div className=" p-20  ">
            <div className="text-center mb-8">
            <h1 className=" font-bold text-[#262626] mb-2">
                Join Us Today
              </h1>
              <p className="text-[#595959]">
                Create your account and start exploring AI-powered avatars in just a few steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                variant='underlined'
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                
              />

              <Input
                label="Email"
                type="email"
                variant='underlined'
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                
              />

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant='underlined'
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                   {showPassword ? <Hide size={20} /> : <Eyes size={20} />}
                </button>
              </div>

              <div className="relative">
                <Input
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  variant='underlined'
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                   {showPassword ? <Hide size={20} /> : <Eyes size={20} />}
                </button>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                 className="w-4 h-4  border-gray-300 rounded "
                 
                />
                <label htmlFor="terms" className="text-sm text-[#595959]">
                  Agree to our{' '}
                  <Link href="/terms" className="ext-[#595959] hover:underline">
                    Terms of Service
                  </Link>
                  {' '}&{' '}
                  <Link href="/privacy" className="ext-[#595959] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <Button type="submit" variant='gradient' className="w-full">
                Sign Up
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full flex items-center justify-center gap-3"
              >
                 <Google/>
                Sign in With Google
              </Button>

              <p className="text-center text-sm text-[#595959] mt-6">
                Already have an account?{' '}
                <Link href="/auth/register" className="text-[#595959] font-medium hover:underline">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}