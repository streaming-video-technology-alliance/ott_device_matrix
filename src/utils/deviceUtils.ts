import { Device } from '@/types/device';
import deviceData from '../../device_compatibility_matrix.json';

export interface FilterOptions {
  brand?: string;
  deviceType?: string;
  os?: string;
  codec?: string;
  streamingFormat?: string;
  drmSystem?: string;
  securityLevel?: string;
  yearStart?: number;
  yearEnd?: number;
}

export function filterDevices(devices: Device[], options: FilterOptions): Device[] {
  let filteredDevices = [...devices];

  if (options.brand) {
    filteredDevices = filteredDevices.filter((device) => device.brand === options.brand);
  }

  if (options.deviceType) {
    filteredDevices = filteredDevices.filter((device) => device.device_type === options.deviceType);
  }

  if (options.os) {
    filteredDevices = filteredDevices.filter((device) => device.os === options.os);
  }

  if (options.yearStart) {
    filteredDevices = filteredDevices.filter((device) => device.year_released >= options.yearStart!);
  }

  if (options.yearEnd) {
    filteredDevices = filteredDevices.filter((device) => device.year_released <= options.yearEnd!);
  }

  if (options.codec) {
    filteredDevices = filteredDevices.filter((device) =>
      device.supported_codecs.includes(options.codec!)
    );
  }

  if (options.streamingFormat) {
    filteredDevices = filteredDevices.filter((device) =>
      device.streaming_formats.includes(options.streamingFormat!)
    );
  }

  if (options.drmSystem) {
    filteredDevices = filteredDevices.filter((device) =>
      device.drm_support.includes(options.drmSystem!)
    );
  }

  if (options.securityLevel) {
    filteredDevices = filteredDevices.filter(
      (device) => device.security_level === options.securityLevel
    );
  }

  return filteredDevices;
}

export function sortDevices(
  devices: Device[],
  field: keyof Device,
  direction: 'asc' | 'desc'
): Device[] {
  return [...devices].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (Array.isArray(aValue) && Array.isArray(bValue)) {
      const aString = aValue.join(',');
      const bString = bValue.join(',');
      return direction === 'asc'
        ? aString.localeCompare(bString)
        : bString.localeCompare(aString);
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });
}

export function getUniqueValues(field: keyof Device): string[] {
  const devices = deviceData as Device[];
  const values = new Set<string>();

  devices.forEach(device => {
    const value = device[field];
    if (Array.isArray(value)) {
      value.forEach(v => values.add(v));
    } else if (typeof value === 'string') {
      values.add(value);
    }
  });

  return Array.from(values).sort();
}
