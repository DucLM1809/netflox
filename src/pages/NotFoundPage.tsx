import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'

const NotfoundPage = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Grid xs={12}>
        <Typography variant='h1' className='text-red-600'>
          404
        </Typography>
        <Typography variant='h6' className='text-red-600'>
          The page you’re looking for doesn’t exist.
        </Typography>
        <button
          type='submit'
          className='w-full mt-2 rounded bg-[#e50914] py-3 font-semibold'
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </Grid>
    </Box>
  )
}

export default NotfoundPage
