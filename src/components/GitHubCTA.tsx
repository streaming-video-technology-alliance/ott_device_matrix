'use client'

import React from 'react'
import { Box, Button, Tooltip, Fab } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

export function GitHubCTA() {
  return (
    <>
      {/* Fixed position floating button for small screens */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <Tooltip title="Contribute on GitHub" arrow placement="left">
          <Fab
            color="primary"
            size="medium"
            aria-label="contribute on github"
            href="https://github.com/krzemienski/ott_device_matrix"
            target="_blank"
            rel="noopener noreferrer"
            component="a"
            sx={{
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6,
              },
            }}
          >
            <GitHubIcon />
          </Fab>
        </Tooltip>
      </Box>
      
      {/* Larger button for desktop */}
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
          href="https://github.com/krzemienski/ott_device_matrix"
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          sx={{
            borderRadius: 8,
            padding: '10px 20px',
            fontWeight: 'bold',
            boxShadow: 4,
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#24292e' : '#24292e',
            '&:hover': {
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#3a3f46' : '#3a3f46',
              boxShadow: 6,
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          Contribute on GitHub
        </Button>
      </Box>
    </>
  )
}
