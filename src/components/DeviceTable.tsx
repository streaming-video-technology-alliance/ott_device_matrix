'use client'

import { Device } from '@/types/device'
import { useState } from 'react'

interface DeviceTableProps {
  devices: Device[]
}

export function DeviceTable({ devices }: DeviceTableProps) {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Device
    direction: 'asc' | 'desc'
  }>({ key: 'brand', direction: 'asc' })

  const sortedDevices = [...devices].sort((a, b) => {
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (Array.isArray(aValue) && Array.isArray(bValue)) {
      return sortConfig.direction === 'asc'
        ? aValue.join(',').localeCompare(bValue.join(','))
        : bValue.join(',').localeCompare(aValue.join(','))
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc'
        ? aValue - bValue
        : bValue - aValue
    }

    return 0
  })

  const handleSort = (key: keyof Device) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    })
  }

  const renderSortIcon = (key: keyof Device) => {
    if (sortConfig.key !== key) return '↕'
    return sortConfig.direction === 'asc' ? '↑' : '↓'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('brand')}
              >
                Brand {renderSortIcon('brand')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('model')}
              >
                Model {renderSortIcon('model')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('device_type')}
              >
                Device Type {renderSortIcon('device_type')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('os')}
              >
                OS {renderSortIcon('os')}
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('year_released')}
              >
                Year {renderSortIcon('year_released')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedDevices.map((device, index) => (
              <tr key={`${device.brand}-${device.model}-${index}`} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {device.brand}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.model}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.device_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.os} {device.os_version}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {device.year_released}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => setSelectedDevice(device)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Device Details Modal */}
      {selectedDevice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {selectedDevice.brand} {selectedDevice.model}
              </h2>
              <button
                onClick={() => setSelectedDevice(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-medium">Device Type:</span> {selectedDevice.device_type}</p>
                    <p><span className="font-medium">OS:</span> {selectedDevice.os} {selectedDevice.os_version}</p>
                    <p><span className="font-medium">Year Released:</span> {selectedDevice.year_released}</p>
                    <p><span className="font-medium">Max Resolution:</span> {selectedDevice.max_resolution || 'N/A'}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Region Availability:</span> {selectedDevice.region_availability?.join(', ') || 'N/A'}</p>
                    <p><span className="font-medium">Network:</span> {selectedDevice.network_connectivity?.join(', ') || 'N/A'}</p>
                    <p><span className="font-medium">Voice Assistants:</span> {selectedDevice.voice_assistants?.join(', ') || 'N/A'}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Streaming Capabilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-medium">Formats:</span> {selectedDevice.streaming_formats.join(', ')}</p>
                    <p><span className="font-medium">Protocol Versions:</span> {selectedDevice.streaming_protocol_versions.join(', ')}</p>
                    <p><span className="font-medium">Codecs:</span> {selectedDevice.supported_codecs.join(', ')}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">HLS Version:</span> {selectedDevice.hls_version_supported || 'N/A'}</p>
                    <p><span className="font-medium">DASH Version:</span> {selectedDevice.dash_version_supported || 'N/A'}</p>
                    <p><span className="font-medium">Low Latency Support:</span></p>
                    <ul className="list-disc list-inside ml-4">
                      <li>HLS: {selectedDevice.low_latency_hls_support ? 'Yes' : 'No'}</li>
                      <li>DASH: {selectedDevice.low_latency_dash_support ? 'Yes' : 'No'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">DRM & Security</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><span className="font-medium">DRM Support:</span> {selectedDevice.drm_support.join(', ')}</p>
                    <p><span className="font-medium">AES Scheme:</span> {selectedDevice.aes_scheme}</p>
                  </div>
                  <div>
                    <p><span className="font-medium">Security Level:</span> {selectedDevice.security_level}</p>
                    <p><span className="font-medium">HDR Support:</span> {selectedDevice.hdr_support?.join(', ') || 'None'}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Audio</h3>
                <p><span className="font-medium">Audio Codecs:</span> {selectedDevice.audio_codec_support.join(', ')}</p>
              </div>
              {selectedDevice.notes && (
                <div>
                  <h3 className="font-semibold mb-2">Additional Notes</h3>
                  <p className="text-gray-700">{selectedDevice.notes}</p>
                </div>
              )}
              {selectedDevice.developer_documentation_url && (
                <div>
                  <h3 className="font-semibold mb-2">Developer Resources</h3>
                  <a
                    href={selectedDevice.developer_documentation_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Developer Documentation
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
