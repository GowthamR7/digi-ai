// Pricing Plan Types
export interface PricingFeature {
    icon: string
    title: string
    description: string
  }
  
  export interface PricingPlan {
    id: string
    name: string
    price: number
    period: string
    description: string
    popular?: boolean
    customizable?: boolean
    features: PricingFeature[]
  }
  
  // User Types
  export interface User {
    id: string
    name: string
    email: string
    companyName?: string
    avatar?: string
    role: 'admin' | 'user' | 'owner'
    createdAt: Date
    updatedAt: Date
  }
  
  // Authentication Types
  export interface LoginCredentials {
    email: string
    password: string
  }
  
  export interface RegisterData {
    name: string
    email: string
    password: string
    companyName?: string
  }
  
  export interface AuthResponse {
    user: User
    token: string
  }
  
  // Business Connection Types
  export interface BusinessConnectionData {
    companyName: string
    name: string
    email: string
    whatsappDisplayName: string
    agreeDiginest: boolean
    agreeMeta: boolean
  }
  
  // Dashboard Types
  export interface TicketStats {
    solved: number
    inProcess: number
    unsolved: number
  }
  
  export interface AppointmentStats {
    availableStaff: number
    totalAppointments: number
    completed: number
    pending: number
  }
  
  export interface ChatStats {
    totalReceived: number
    readMessages: number
    unreadMessages: number
  }
  
  export interface ChartDataPoint {
    week: string
    leads?: number
    conversions?: number
    amount?: number
  }
  
  export interface Transaction {
    id: string
    date: Date
    description: string
    amount: number
    status: 'completed' | 'pending' | 'failed'
    type: 'credit' | 'debit'
  }
  
  // Campaign Types
  export interface Campaign {
    id: string
    name: string
    type: 'whatsapp' | 'facebook' | 'instagram'
    status: 'active' | 'paused' | 'completed' | 'draft'
    startDate: Date
    endDate?: Date
    budget: number
    spent: number
    leads: number
    conversions: number
    createdAt: Date
    updatedAt: Date
  }
  
  // Lead Types
  export interface Lead {
    id: string
    name: string
    email?: string
    phone: string
    source: 'whatsapp' | 'facebook' | 'instagram' | 'website'
    status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
    assignedTo?: string
    notes?: string
    createdAt: Date
    updatedAt: Date
  }
  
  // Bot Types
  export interface Bot {
    id: string
    name: string
    type: 'lead-generation' | 'customer-support' | 'appointment' | 'custom'
    platform: 'whatsapp' | 'facebook' | 'instagram' | 'website'
    status: 'active' | 'inactive' | 'training'
    conversations: number
    successRate: number
    createdAt: Date
    updatedAt: Date
  }
  
  // Message Types
  export interface Message {
    id: string
    conversationId: string
    senderId: string
    recipientId: string
    content: string
    type: 'text' | 'image' | 'video' | 'document' | 'audio'
    status: 'sent' | 'delivered' | 'read' | 'failed'
    timestamp: Date
  }
  
  // Notification Types
  export interface Notification {
    id: string
    userId: string
    title: string
    message: string
    type: 'info' | 'success' | 'warning' | 'error'
    read: boolean
    actionUrl?: string
    createdAt: Date
  }
  
  // API Response Types
  export interface ApiResponse<T> {
    success: boolean
    data?: T
    message?: string
    error?: string
  }
  
  export interface PaginatedResponse<T> {
    data: T[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
  
  // Form Types
  export interface FormField {
    name: string
    label: string
    type: 'text' | 'email' | 'password' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio'
    placeholder?: string
    required?: boolean
    options?: { label: string; value: string }[]
    validation?: {
      pattern?: RegExp
      minLength?: number
      maxLength?: number
      custom?: (value: any) => boolean | string
    }
  }
  
  // Company Profile Types
  export interface CompanyProfile {
    id: string
    name: string
    industry: string
    size: string
    website?: string
    address?: string
    city?: string
    state?: string
    country?: string
    zipCode?: string
    logo?: string
    description?: string
    createdAt: Date
    updatedAt: Date
  }