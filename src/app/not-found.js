import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-5xl font-bold text-red-300'>Not Found!</h2>
      <p className='text-accent'>Could not find requested Page</p>
      <Link className='btn btn-primary' href="/">Return Home</Link>
    </div>
  )
}