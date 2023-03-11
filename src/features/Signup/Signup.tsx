import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/common'

interface Inputs {
  email: string
  password: string
  confirmPassword: string
}

const Signup = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {}

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
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
          <label className='inline-block w-full'>
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
          <label className='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              className='input'
              {...register('password', {
                required: 'You must specify a password',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters'
                },
                maxLength: {
                  value: 12,
                  message: 'Password must have at most 12 characters'
                }
              })}
            />
            {errors?.password && (
              <p className='p-1 text-[13px] font-light  text-orange-500'>
                {errors?.password?.message}
              </p>
            )}
          </label>
          <label className='inline-block w-full'>
            <input
              type='password'
              placeholder='Confirm Password'
              className='input'
              {...register('confirmPassword', {
                required: 'You must specify a confirm password',
                validate: (value) =>
                  value === watch('password') || 'The passwords do not match'
              })}
            />
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
