import { Container, Box } from '@mui/material'
import { DeviceMatrix } from '@/components/DeviceMatrix'

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #121212, #1a1a1a)',
        pt: 2,
        pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <DeviceMatrix />
      </Container>
    </Box>
  )
}
