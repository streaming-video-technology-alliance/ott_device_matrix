'use client'

import { useState, useEffect, useMemo } from 'react'
import { Device } from '@/types/device'
import { getDevices } from '@/services/deviceService'
import { searchDevices } from '@/services/searchService'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { DeviceDetail } from './DeviceDetail'
import { Paper, Box, Typography, CircularProgress, Container, Link } from '@mui/material'
import { SearchBar } from './SearchBar'
import GitHubIcon from '@mui/icons-material/GitHub'

export function DeviceMatrix() {
  const [devices, setDevices] = useState<Device[]>([])
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDevices() {
      try {
        console.log('Fetching devices...')
        const data = await getDevices()
        console.log('Devices fetched:', data)
        setDevices(data)
        setFilteredDevices(data)
      } catch (error) {
        console.error('Error fetching devices:', error)
        setError(error instanceof Error ? error.message : 'Failed to load devices')
      } finally {
        setLoading(false)
      }
    }

    fetchDevices()
  }, [])

  // Filter devices when search query changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredDevices(devices)
    } else {
      const results = searchDevices(devices, searchQuery)
      setFilteredDevices(results)
    }
  }, [searchQuery, devices])

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'brand',
        headerName: 'Brand',
        width: 130,
        filterable: true,
      },
      {
        field: 'model',
        headerName: 'Model',
        width: 200,
        filterable: true,
      },
      {
        field: 'device_type',
        headerName: 'Device Type',
        width: 150,
        filterable: true,
      },
      {
        field: 'os',
        headerName: 'Operating System',
        width: 160,
        filterable: true,
        valueGetter: (params) => `${params.row.os} ${params.row.os_version}`,
      },
      {
        field: 'year_released',
        headerName: 'Year',
        width: 100,
        type: 'number',
        filterable: true,
      },
      {
        field: 'supported_codecs',
        headerName: 'Supported Codecs',
        width: 200,
        filterable: true,
        valueGetter: (params) => params.row.supported_codecs.join(', '),
      },
      {
        field: 'streaming_formats',
        headerName: 'Streaming Formats',
        width: 200,
        filterable: true,
        valueGetter: (params) => params.row.streaming_formats.join(', '),
      },
      {
        field: 'drm_support',
        headerName: 'DRM Support',
        width: 200,
        filterable: true,
        valueGetter: (params) => params.row.drm_support.join(', '),
      },
      {
        field: 'security_level',
        headerName: 'Security Level',
        width: 130,
        filterable: true,
      },
      {
        field: 'max_resolution',
        headerName: 'Max Resolution',
        width: 150,
        filterable: true,
      },
      {
        field: 'hdr_support',
        headerName: 'HDR Support',
        width: 200,
        filterable: true,
        valueGetter: (params) => params.row.hdr_support?.join(', ') || 'None',
      },
    ],
    []
  )

  const rows = useMemo(
    () =>
      filteredDevices.map((device, index) => ({
        id: index,
        ...device,
      })),
    [filteredDevices]
  )

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Typography color="error">{error}</Typography>
      </Box>
    )
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%', height: '100%', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            mb: 4,
            background: 'linear-gradient(45deg, #90caf9 30%, #f48fb1 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          OTT Device Matrix
        </Typography>
        
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="Search devices by brand, model, OS, codecs, DRM, and more..."
          onClear={() => setSearchQuery('')}
        />
        
        <Paper
          elevation={3}
          sx={{
            height: 700,
            width: '100%',
            mb: 2,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            autoHeight={false}
            slots={{
              toolbar: null
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 25 },
              },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            onRowClick={(params) => setSelectedDevice(filteredDevices[params.row.id])}
            sx={{
              '& .MuiDataGrid-cell': {
                cursor: 'pointer',
              },
              border: 'none',
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
            }}
          />
        </Paper>
        {selectedDevice && (
          <DeviceDetail device={selectedDevice} onClose={() => setSelectedDevice(null)} />
        )}
      </Box>
    </Container>
  )
}
