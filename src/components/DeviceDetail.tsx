import { Device } from '@/types/device'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Grid,
  Chip,
  Link,
  Box,
  Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface DeviceDetailProps {
  device: Device
  onClose: () => void
}

export function DeviceDetail({ device, onClose }: DeviceDetailProps) {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          background: 'linear-gradient(to bottom right, #1e1e1e, #2d2d2d)',
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        <Typography variant="h6" sx={{ color: '#121212', fontWeight: 'bold' }}>
          {device.brand} {device.model}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#121212',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}>
        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#90caf9' }}>
              Basic Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Device Type
                </Typography>
                <Typography>{device.device_type}</Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Operating System
                </Typography>
                <Typography>
                  {device.os} {device.os_version}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Year Released
                </Typography>
                <Typography>{device.year_released}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
          </Grid>

          {/* Streaming Capabilities */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#90caf9' }}>
              Streaming Capabilities
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  Streaming Formats
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {device.streaming_formats.map((format) => (
                    <Chip
                      key={format}
                      label={format}
                      sx={{ mr: 1, mb: 1 }}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  Supported Codecs
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {device.supported_codecs.map((codec) => (
                    <Chip
                      key={codec}
                      label={codec}
                      sx={{ mr: 1, mb: 1 }}
                      color="info"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="textSecondary">
                  HLS Version
                </Typography>
                <Typography>{device.hls_version_supported || 'N/A'}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="textSecondary">
                  DASH Version
                </Typography>
                <Typography>{device.dash_version_supported || 'N/A'}</Typography>
              </Grid>
              {device.max_resolution && (
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="textSecondary">
                    Maximum Resolution
                  </Typography>
                  <Typography>{device.max_resolution}</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
          </Grid>

          {/* DRM & Security */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#90caf9' }}>
              DRM & Security
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary">
                  DRM Support
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {device.drm_support.map((drm) => (
                    <Chip
                      key={drm}
                      label={drm}
                      sx={{ mr: 1, mb: 1 }}
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="textSecondary">
                  Security Level
                </Typography>
                <Typography>{device.security_level}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" color="textSecondary">
                  AES Scheme
                </Typography>
                <Typography>{device.aes_scheme}</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ color: '#90caf9' }}>
              Audio Codec Support
            </Typography>
            <Box sx={{ mt: 1 }}>
              {device.audio_codec_support.map((codec) => (
                <Chip
                  key={codec}
                  label={codec}
                  sx={{ mr: 1, mb: 1 }}
                  color="info"
                  variant="outlined"
                />
              ))}
            </Box>
          </Grid>

          {/* Additional Information */}
          {(device.developer_documentation_url || device.notes) && (
            <>
              <Grid item xs={12}>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom sx={{ color: '#90caf9' }}>
                  Additional Information
                </Typography>
                {device.developer_documentation_url && (
                  <Link
                    href={device.developer_documentation_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#90caf9' }}
                  >
                    View Developer Documentation
                  </Link>
                )}
                {device.notes && (
                  <Typography sx={{ mt: 1 }} color="text.secondary">
                    {device.notes}
                  </Typography>
                )}
              </Grid>
            </>
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
