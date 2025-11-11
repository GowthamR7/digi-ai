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

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen   flex items-center justify-center ">
      <div className="w-full  grid lg:grid-cols-2  items-center">
        {/* Left Side - Form */}
        <div className=" w-[700px] h-[676px]   mx-auto lg:ml-auto">
          <div className=" p-20  ">
            <div className="text-center mb-8">
              <h1 className=" font-bold text-[#262626] mb-2">
                Welcome Back!
              </h1>
              <p className="text-[#595959]">
                Let's continue driving your growth with Diginest AI.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5  ">
              <Input
                label="Email"
                type="email"
                variant='underlined'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
               
               
              />

              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant='underlined'
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

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4  border-gray-300 rounded "
                  />
                  <label htmlFor="remember" className="text-sm text-[#595959]">
                    Remember Me
                  </label>
                </div>
                <Link 
                  href="/auth/forgot-password" 
                  className="text-sm text-[#595959] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" variant='gradient' className="w-full">
                Sign In
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
                className="w-full flex items-center justify-center gap-3 "
              >
               <Google/>
                Sign in With Google
              </Button>

              <p className="text-center text-sm text-[#595959] mt-6">
                Don't Have Account?{' '}
                <Link href="/auth/register" className="text-[#595959] font-medium hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="">
         
           <Image 
            src="/images/signin.png"
            alt="Sign In Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
           />
         
        </div>
        
      </div>
    </div>
  )
}