export interface Device {
  brand: string
  model: string
  device_type: string
  os: string
  os_version: string
  year_released: number
  supported_codecs: string[]
  drm_support: string[]
  aes_scheme: string
  security_level: string
  streaming_formats: string[]
  streaming_protocol_versions: string[]
  hdr_support?: string[]
  audio_codec_support: string[]
  notes?: string
  developer_documentation_url?: string
  region_availability?: string[]
  max_resolution?: string
  network_connectivity?: string[]
  casting_protocols?: string[]
  voice_assistants?: string[]
  storefront_url?: string
  hls_version_supported?: string
  dash_version_supported?: string
  low_latency_hls_support?: boolean
  low_latency_dash_support?: boolean
}
