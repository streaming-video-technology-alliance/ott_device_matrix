import { Device } from '@/types/device'
import deviceData from '../../device_compatibility_matrix.json'

export async function getDevices(): Promise<Device[]> {
  return deviceData as Device[]
}

export async function getDeviceByModel(model: string): Promise<Device | undefined> {
  const devices = await getDevices()
  return devices.find((device) => device.model === model)
}

export async function getBrands(): Promise<string[]> {
  const devices = await getDevices()
  return Array.from(new Set(devices.map((device) => device.brand))).sort()
}

export async function getDeviceTypes(): Promise<string[]> {
  const devices = await getDevices()
  return Array.from(new Set(devices.map((device) => device.device_type))).sort()
}

export async function getStreamingFormats(): Promise<string[]> {
  const devices = await getDevices()
  const formats = new Set<string>()
  devices.forEach((device) => {
    device.streaming_formats.forEach((format) => formats.add(format))
  })
  return Array.from(formats).sort()
}

export async function getOperatingSystems(): Promise<string[]> {
  const devices = await getDevices()
  return Array.from(new Set(devices.map((device) => device.os))).sort()
}

export async function getCodecs(): Promise<string[]> {
  const devices = await getDevices()
  const codecs = new Set<string>()
  devices.forEach((device) => {
    device.supported_codecs.forEach((codec) => codecs.add(codec))
  })
  return Array.from(codecs).sort()
}

export async function getDrmSystems(): Promise<string[]> {
  const devices = await getDevices()
  const drm = new Set<string>()
  devices.forEach((device) => {
    device.drm_support.forEach((system) => drm.add(system))
  })
  return Array.from(drm).sort()
}
