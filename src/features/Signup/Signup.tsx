import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/common'
import { IUser, IUserRegister } from '../../interfaces/IUser'
import Toast from '../../components/Toast/Toast'
import { IApiError } from '../../interfaces/IError'
import Loading from '../../components/Loading/Loading'
import AuthService from '../../services/authService'

const Signup = () => {
  const [showPass, setShowPass] = useState<boolean>(false)
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false)
  const navigate = useNavigate()

  // MUTATE
  const { mutate, isError, isLoading, error, isSuccess } = useMutation({
    mutationKey: 'register',
    mutationFn: (variables: IUser) => AuthService.registerUser(variables),
    onSuccess: () => {
      navigate(PATH.LOGIN)
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IUserRegister>()
  const onSubmit: SubmitHandler<IUserRegister> = ({ email, password }) => {
    mutate({ email, password })
  }

  const handleShowPass = () => {
    setShowPass((prev: boolean) => !prev)
  }

  const handleShowPassConfirm = () => {
    setShowPassConfirm((prev: boolean) => !prev)
  }

  isLoading && <Loading />

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      {isError && <Toast severity='error' message='Email is already taken!' />}
      {isSuccess && (
        <Toast severity='success' message='Register Successfully!' />
      )}
      <img
        src='https://rb.gy/p2hphi'
        className='-z-10 !hidden opacity-60 sm:!inline object-cover h-full w-full'
      />
      <img
        src='https://rb.gy/ulxxee'
        className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6'
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='absolute mt-24 space-y-8 rounded bg-black/75 w-full py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      >
        <h1 className='text-4xl font-semibold text-white'>Sign Up</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full relative'>
            <input
              type='text'
              placeholder='Email'
              className='input'
              {...register('email', {
                required: 'You must specify an email.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email format.'
                }
              })}
            />
            {errors?.email && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                {errors?.email?.message}
              </p>
            )}
          </label>
          <label className='inline-block w-full relative'>
            <input
              type={`${showPass ? 'text' : 'password'}`}
              placeholder='Password'
              className='input'
              {...register('password', {
                required: 'You must specify a password',
                pattern: {
                  value: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
                  message:
                    'Password must contain at least one lower character, one upper character, digit or special symbol'
                }
              })}
            />

            {/* Show pass */}
            {!showPass && (
              <button
                className='absolute text-gray-500 hover:text-gray-400 px-2 py-1 cursor-pointer js-password-label top-3 right-3'
                onClick={handleShowPass}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
            )}

            {/* Hide pass */}
            {showPass && (
              <button
                className='absolute text-gray-500 hover:text-gray-400 px-2 py-1 cursor-pointer js-password-label top-3 right-3'
                onClick={handleShowPass}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              </button>
            )}

            {errors?.password && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                {errors?.password?.message}
              </p>
            )}
          </label>
          <label className='inline-block w-full relative'>
            <input
              type={`${showPassConfirm ? 'text' : 'password'}`}
              placeholder='Confirm Password'
              className='input'
              {...register('confirmPassword', {
                required: 'You must specify a confirm password',
                validate: (value) =>
                  value === watch('password') || 'The passwords do not match'
              })}
            />

            {/* Show pass */}
            {!showPassConfirm && (
              <button
                className='absolute text-gray-500 hover:text-gray-400 px-2 py-1 cursor-pointer js-password-label top-3 right-3'
                onClick={handleShowPassConfirm}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
            )}

            {/* Hide pass */}
            {showPassConfirm && (
              <button
                className='absolute text-gray-500 hover:text-gray-400 px-2 py-1 cursor-pointer js-password-label top-3 right-3'
                onClick={handleShowPassConfirm}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              </button>
            )}

            {errors?.confirmPassword && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                {errors?.confirmPassword?.message}
              </p>
            )}
          </label>
        </div>

        <button
          type='submit'
          className='w-full rounded bg-[#e50914] py-3 font-semibold'
        >
          Sign Up
        </button>

        <div className='text-[gray]'>
          Already have account? {''}
          <button
            className='text-white hover:underline'
            onClick={(e: React.SyntheticEvent | Event) => {
              e.preventDefault()
              navigate(PATH.LOGIN)
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup
