'use client'

import { FilterOptions } from '@/utils/deviceUtils'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
  Chip,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { getBrands, getDeviceTypes, getOperatingSystems, getCodecs, getDrmSystems } from '@/services/deviceService'

interface FilterPanelProps {
  filters: FilterOptions
  setFilters: (filters: FilterOptions) => void
}

export function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const [options, setOptions] = useState<Record<string, string[]>>({
    brands: [],
    deviceTypes: [],
    operatingSystems: [],
    codecs: [],
    drmSystems: [],
  })

  useEffect(() => {
    async function loadOptions() {
      const [brands, deviceTypes, operatingSystems, codecs, drmSystems] = await Promise.all([
        getBrands(),
        getDeviceTypes(),
        getOperatingSystems(),
        getCodecs(),
        getDrmSystems(),
      ])

      setOptions({
        brands,
        deviceTypes,
        operatingSystems,
        codecs,
        drmSystems,
      })
    }

    loadOptions()
  }, [])

  const handleChange = (field: keyof FilterOptions, value: string | undefined) => {
    setFilters({
      ...filters,
      [field]: value,
    })
  }

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3, backgroundColor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
        Filter Devices
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Brand</InputLabel>
          <Select
            value={filters.brand || ''}
            onChange={(e) => handleChange('brand', e.target.value || undefined)}
            input={<OutlinedInput label="Brand" />}
          >
            <MenuItem value="">All Brands</MenuItem>
            {options.brands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Device Type</InputLabel>
          <Select
            value={filters.deviceType || ''}
            onChange={(e) => handleChange('deviceType', e.target.value || undefined)}
            input={<OutlinedInput label="Device Type" />}
          >
            <MenuItem value="">All Types</MenuItem>
            {options.deviceTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Operating System</InputLabel>
          <Select
            value={filters.os || ''}
            onChange={(e) => handleChange('os', e.target.value || undefined)}
            input={<OutlinedInput label="Operating System" />}
          >
            <MenuItem value="">All OS</MenuItem>
            {options.operatingSystems.map((os) => (
              <MenuItem key={os} value={os}>
                {os}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Codec</InputLabel>
          <Select
            value={filters.codec || ''}
            onChange={(e) => handleChange('codec', e.target.value || undefined)}
            input={<OutlinedInput label="Codec" />}
          >
            <MenuItem value="">All Codecs</MenuItem>
            {options.codecs.map((codec) => (
              <MenuItem key={codec} value={codec}>
                {codec}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>DRM System</InputLabel>
          <Select
            value={filters.drmSystem || ''}
            onChange={(e) => handleChange('drmSystem', e.target.value || undefined)}
            input={<OutlinedInput label="DRM System" />}
          >
            <MenuItem value="">All DRM Systems</MenuItem>
            {options.drmSystems.map((drm) => (
              <MenuItem key={drm} value={drm}>
                {drm}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  )
}
