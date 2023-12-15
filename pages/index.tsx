import Image from 'next/image'
import { Inter } from 'next/font/google'
import AuthForm from '@/components/auth-form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="row">
    <div className="col-6">
      <h1 className="header">Supabase Auth + Storage</h1>
      <p className="">
        Experience our Auth and Storage through a simple profile management example. Create a user
        profile and upload an avatar image. Fast, simple, secure.
      </p>
    </div>
    <div className="col-6 auth-widget">
      <AuthForm />
    </div>
  </div>
  )
}
