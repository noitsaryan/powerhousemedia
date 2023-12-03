
import { ModeToggle } from '../Buttons/Toggle'
import Image from 'next/image'
import Menu from './Menu'
function Header() {

  return (
    <header className='px-10 py-5 border-b mx-8'>
        <nav className='flex items-center justify-between'>
          <Image src="/brand/brand_logo.png" alt='brand_identity' width={300} height={50} className='h-[80px] w-56 object-cover ' />
        <div  className='flex items-center gap-5'>
        <ModeToggle/>
        <Menu/>
        </div>
        </nav>
    </header>
  )
}

export default Header