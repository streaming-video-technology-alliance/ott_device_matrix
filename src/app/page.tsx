import { Container, Box, Button, Typography, Alert, Paper } from '@mui/material'
import { DeviceMatrix } from '@/components/DeviceMatrix'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'

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
      <Container maxWidth="xl">
        {/* Contribution Banner */}
        <Paper
          elevation={0}
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CodeIcon color="primary" sx={{ fontSize: 32 }} />
            <Box>
              <Typography variant="h6" component="h2">
                Help Grow the OTT Device Matrix
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Missing a device? Spotted outdated info? Contribute by updating the device_compatibility_matrix.json file!
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GitHubIcon />}
            href="https://github.com/krzemienski/ott_device_matrix"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 'bold',
              px: 3,
              py: 1,
              borderRadius: 2,
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
                transition: 'all 0.2s',
              },
            }}
          >
            Contribute Now
          </Button>
        </Paper>
        
        <DeviceMatrix />
      </Container>
    </Box>
  )
}
