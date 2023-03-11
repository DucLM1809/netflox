import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useMutation } from 'react-query'
import AuthService from '../../services/authService'
import { LOCAL_STORAGE_ITEMS } from '../../constants/common'
import Loading from '../Loading/Loading'
import TokenService from '../../services/tokenService'
import Toast from '../Toast/Toast'

const Header = () => {
  const [hidden, setHidden] = useState<boolean>(true)

  // MUTATE
  const { mutate, isError, isLoading, isSuccess } = useMutation({
    mutationKey: 'logout',
    mutationFn: () => AuthService.logoutUser()
  })

  const handleHidden = () => {
    setHidden((prev: boolean) => !prev)
  }

  const handleLogout = () => {
    mutate()
  }

  isLoading && <Loading />

  return (
    <header className='bg-[#141414]'>
      {isError && <Toast severity='error' message='Logout Failed!' />}
      {isSuccess && <Toast severity='success' message='Logout Successfully!' />}
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light relative'>
        <SearchIcon className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />
        {/* <Link href="/account"> */}
        <button
          data-dropdown-toggle='dropdown'
          id='dropdownButton'
          type='button'
          data-dropdown-trigger='click'
          onClick={handleHidden}
        >
          <img
            src='https://rb.gy/g1pwyx'
            alt=''
            className='cursor-pointer rounded'
          />
        </button>
        <div
          id='dropdown'
          className={`z-10 ${
            hidden ? 'hidden' : ''
          } bg-[#141414] divide-y divide-gray-100 rounded-lg shadow shadow-gray-800 w-44 absolute top-10 right-0`}
        >
          <ul
            className='py-2 text-sm text-white'
            aria-labelledby='dropdownButton'
          >
            <li
              className='block px-4 py-2 hover:bg-gray-700 cursor-pointer'
              onClick={handleLogout}
            >
              Log out
            </li>
          </ul>
        </div>
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
