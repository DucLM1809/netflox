import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'

const ForbiddenPage = () => {
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
          403
        </Typography>
        <Typography variant='h6' className='text-red-600'>
          You are unauthorized to visit this page.
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

export default ForbiddenPage
