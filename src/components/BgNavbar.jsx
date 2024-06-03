"use client"
import Image from 'next/image'
import Link from 'next/link'
import { navLinks, DropLinks } from '@/app/constant/NavLink'
import { CiMenuFries } from 'react-icons/ci'
import { IoMdMail } from "react-icons/io";
import { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './com.css'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter } from 'react-icons/fa'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation';
const BgNavbar = () => {
  const router = useRouter()
  const [navOpen, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [searchOpen, setseacrchOpen] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const cookies = parseCookies();

    const accessToken = cookies?.access_token;
    const name = cookies?.user_name;
    const getFrist = name?.slice(0, 1)
    if (accessToken) {
      setAccessToken(accessToken)
      setUsername(getFrist)
    } else {
      setAccessToken(null)
    }
  }, [accessToken])

  const LogoutButton = () => {
    // Clear the access_token and refresh_token cookies
    destroyCookie(null, 'access_token', { path: '/' });
    destroyCookie(null, 'refresh_token', { path: '/' });
    setAccessToken(null)
    router.push('/login');
  };





  const LinkClick = () => {
    setOpen(false);
  }

  const [navscroll, setNavscroll] = useState(false);
  useEffect(() => {

    const Click = () => {
      if (window.scrollY >= 80) {
        setNavscroll(true)
      } else {
        setNavscroll(false)
      }
    }
    window.addEventListener('scroll', Click)

  }, [])

  const dropOpen = (e) => {
    e.stopPropagation(); // Stop event bubbling
    setDropDown(!dropDown);
  };


  return (
    <>


      <div className='bg-green'>
        {/* main - upper  */}
        <div className=' max-w-[1800px] mx-auto border-b border-white w-full h-full py-[1rem] flex gap-y-3 sm:gap-y-0 flex-col sm:flex-row justify-between items-center px-[30px] lg:px-[60px] xll:px-[120px]'>

          {/* Left Side  */}
          <div className='flex  gap-x-1 items-center justify-center'>
            <IoMdMail className='text-white text-[16px]' />
            <Link className='text-white font-normal text-[14px] tracking-wide font-worksans' href={'mailto:contact@reborngreen.org'}>
              contact@reborngreen.org
            </Link>
          </div>


          {/* Right - upper  */}
          <div className='flex items-center gap-x-4 mr-2 flex-col'>
            <div className='flex items-center gap-x-2 sm:gap-x-4 mr-2'>
              <p className='text-white pr-2 ssm:pr-5 font-normal font-worksans text-[10px] ssm:text-sm'>Follow Us</p>
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <Link key={index} href={'/'}>
                  <span className='text-white cursor-pointer hover:text-[#c2c2c2]  duration-200'>
                    <Icon size={16} />
                  </span>
                </Link>
              ))}

              <span onClick={() => setseacrchOpen(true)} className=' inline-block md:hidden cursor-pointer text-white hover:text-[#c2c2c2]'>
                <FaSearch size={16} />
              </span>

              {/* Seacrh  */}

              <div className=' hidden w-[250px] md:flex items-center rounded-sm py-2 px-2 bg-[#ffffff55]'>
                <input type='text' placeholder='search here...' className='w-full pl-2 placeholder:text-white placeholder:text-[14px] text-white h-full outline-none bg-transparent' />
                <FaSearch className='text-white cursor-pointer' />
              </div>

              {/* ---- search for mobile  */}
              <div className={`absolute duration-500 bg-[#181a189f] z-[99] flex items-center justify-center left-0 w-full h-1/2 md:hidden ${searchOpen ? 'top-20' : 'top-[-9999px]'}`}>
                <div className=' w-[250px] flex items-center rounded-sm py-2 px-2 bg-[#ffffff55]'>
                  <input type='text' placeholder='search here...' className='w-full pl-2 placeholder:text-white placeholder:text-[14px] text-white h-full outline-none bg-transparent' />
                  <FaSearch className='text-white cursor-pointer' />
                </div>
                <p onClick={() => setseacrchOpen(false)} className='absolute cursor-pointer top-1/4 right-4'><AiOutlineClose className='text-white' size={25} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Navbar - upper  */}


      <nav className={`fixed mt-0 w-full ${navscroll && 'top-0'}  z-[100] bg-white max mx-auto py-[0.5rem] h-auto flex justify-between items-center`}>
        <div className='max-w-[1800px] mx-auto h-full flex justify-between w-full items-center px-[30px] py-3 lg:px-[60px] xll:px-[120px]'>
          <Link href={'/'} className='relative'>
            <Image src='/assets/logos/logo.png' width={1000} height={1000} alt='Picture of the author' priority className='w-[120px] xsm:w-[160px] h-auto object-cover' />
          </Link>

          <ul className={`flex items-start lg:items-center flex-col absolute top-0 pl-6 lg:pl-0 transition-all duration-[0.6s] lg:static lg:flex-row w-1/2 h-[100vh] bg-[#F2EEEE] lg:bg-transparent lg:h-auto lg:w-auto justify-start pt-20 lg:pt-0 lg:justify-center gap-[20px] xlg:gap-[30px] ${navOpen ? 'right-0' : 'right-[-9000px]'}`}>
            <div>

              <AiOutlineClose onClick={() => setOpen(false)} className='text-[30px] cursor-pointer inline-block absolute top-[20px] left-[20px] lg:hidden' />
            </div>
            {
              navLinks.map((i) => {
                return <li key={i.id} className={`relative drop-menu font-poppins text-[14px] lg:text-[14px]  text-black-text font-[400]`}>
                  {i.dropdown ? <>
                    <div className='gap-x-2 flex items-end'>
                      <Link href={i.id} className='grop-li flex items-end' >{i.title}</Link>
                      <p onClick={dropOpen} className='cursor-pointer inline-block'>{dropDown ? <MdKeyboardArrowUp className="text-black-text  drop-icon" size={20} /> : <MdKeyboardArrowDown className="text-black-text  drop-icon" size={20} />}</p>
                    </div>
                    <div className={`absolute -w-[150px] top-12 shadow-sm show-drop z-10 bg-white px-1 py-2 min-w-[170px] gap-y-3 flex-col left-0 ${dropDown ? 'flex' : 'hidden'}`}>
                      {DropLinks.map((i) => (
                        <Link className='px-2 link py-2 text-black-text border-b' key={i.id} href={i.id} >{i.dropTitle} </Link>
                      ))}
                    </div>
                  </>
                    : <Link href={i.id} className='link' >{i.title}</Link>}
                </li>

              })
            }
            {
              accessToken ?
                <>
                  <button onClick={LogoutButton} className='px-6 py-2 bg-green rounded-lg text-white font-poppins'>Logout</button>
                  <li>

                    <Link href={'/user-profile'} className='w-[50px] h-[50px] text-3xl flex items-center text-white justify-center font-medium   bg-blue-600 rounded-full'>
                      <p className='mb-1'>
                        {username}
                      </p>
                    </Link>
                  </li>
                </> :
                <li>
                  <Link className='btn' href='/login'>Login</Link>
                </li>
            }


          </ul>

          <CiMenuFries onClick={() => setOpen(true)} className='text-black text-[30px]  cursor-pointer inline-block lg:hidden' />
        </div>
      </nav>

    </>
  )
}

export default BgNavbar