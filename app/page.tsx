import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <h1 className="text-3xl text-blue-500">
        Discord Clone
      </h1>
      <Button variant="destructive">
        Sign In
      </Button>
    </div>
  )
}
