import { Device } from '@/types/device';

/**
 * Search for devices based on a query string
 * The search is case-insensitive and matches partial strings
 * across multiple device properties
 */
export function searchDevices(devices: Device[], query: string): Device[] {
  if (!query || query.trim() === '') {
    return devices;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return devices.filter((device) => {
    // Search across all string properties
    const searchableProperties = [
      device.brand,
      device.model,
      device.device_type,
      device.os,
      device.os_version,
      device.security_level,
      device.aes_scheme,
      device.max_resolution,
      device.notes,
      device.developer_documentation_url,
      device.storefront_url,
      device.hls_version_supported,
      device.dash_version_supported,
    ].filter(Boolean); // Filter out undefined values

    // Search across array properties by joining them
    const searchableArrays = [
      device.supported_codecs,
      device.drm_support,
      device.streaming_formats,
      device.streaming_protocol_versions,
      device.hdr_support,
      device.audio_codec_support,
      device.region_availability,
      device.network_connectivity,
      device.casting_protocols,
      device.voice_assistants,
    ].filter(Boolean).map(arr => arr?.join(' ').toLowerCase());

    // Search in string properties
    const matchesString = searchableProperties.some(prop => 
      prop && prop.toLowerCase().includes(normalizedQuery)
    );

    // Search in array properties
    const matchesArray = searchableArrays.some(arr => 
      arr && arr.includes(normalizedQuery)
    );

    // Search in numeric properties
    const matchesNumeric = device.year_released.toString().includes(normalizedQuery);

    // Search in boolean properties
    const matchesBoolean = [
      device.low_latency_hls_support !== undefined ? `low latency hls ${device.low_latency_hls_support}` : '',
      device.low_latency_dash_support !== undefined ? `low latency dash ${device.low_latency_dash_support}` : '',
    ].some(str => str.toLowerCase().includes(normalizedQuery));

    return matchesString || matchesArray || matchesNumeric || matchesBoolean;
  });
}
