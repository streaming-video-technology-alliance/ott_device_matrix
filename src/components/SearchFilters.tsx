'use client'

import { Device } from '@/types/device'
import { getBrands, getDeviceTypes, getStreamingFormats, getOperatingSystems } from '@/services/deviceService'
import { useEffect, useState } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
  Chip,
  OutlinedInput,
} from '@mui/material'

interface SearchFiltersProps {
  filters: Record<string, string[]>
  setFilters: (filters: Record<string, string[]>) => void
}

export function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const [options, setOptions] = useState<Record<string, string[]>>({
    brands: [],
    deviceTypes: [],
    streamingFormats: [],
    operatingSystems: [],
  })

  useEffect(() => {
    async function loadOptions() {
      const [brands, deviceTypes, streamingFormats, operatingSystems] = await Promise.all([
        getBrands(),
        getDeviceTypes(),
        getStreamingFormats(),
        getOperatingSystems(),
      ])

      setOptions({
        brands,
        deviceTypes,
        streamingFormats,
        operatingSystems,
      })
    }

    loadOptions()
  }, [])

  const handleFilterChange = (event: SelectChangeEvent<string[]>, field: string) => {
    const value = event.target.value
    setFilters({
      ...filters,
      [field]: typeof value === 'string' ? value.split(',') : value,
    })
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Brand</InputLabel>
        <Select
          multiple
          value={filters.brands || []}
          onChange={(e) => handleFilterChange(e, 'brands')}
          input={<OutlinedInput label="Brand" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
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
          multiple
          value={filters.deviceTypes || []}
          onChange={(e) => handleFilterChange(e, 'deviceTypes')}
          input={<OutlinedInput label="Device Type" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.deviceTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Streaming Format</InputLabel>
        <Select
          multiple
          value={filters.streamingFormats || []}
          onChange={(e) => handleFilterChange(e, 'streamingFormats')}
          input={<OutlinedInput label="Streaming Format" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.streamingFormats.map((format) => (
            <MenuItem key={format} value={format}>
              {format}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Operating System</InputLabel>
        <Select
          multiple
          value={filters.operatingSystems || []}
          onChange={(e) => handleFilterChange(e, 'operatingSystems')}
          input={<OutlinedInput label="Operating System" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {options.operatingSystems.map((os) => (
            <MenuItem key={os} value={os}>
              {os}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
