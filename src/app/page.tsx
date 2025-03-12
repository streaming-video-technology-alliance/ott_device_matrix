import { Container, Box, IconButton, Tooltip } from '@mui/material'
import { DeviceMatrix } from '@/components/DeviceMatrix'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #121212, #1a1a1a)',
        pt: 2,
        pb: 6,
        position: 'relative',
      }}
    >
      <Tooltip title="View on GitHub">
        <IconButton
          href="https://github.com/krzemienski/ott_device_matrix"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            color: '#fff',
            '&:hover': {
              color: '#90caf9'
            }
          }}
          aria-label="GitHub Repository"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Container maxWidth="xl">
        <DeviceMatrix />
      </Container>
    </Box>
  )
}
