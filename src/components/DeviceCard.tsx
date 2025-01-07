import React from 'react';
import { Device } from '../types/device';

interface DeviceCardProps {
  device: Device;
  onClick?: () => void;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{device.brand}</h3>
            <p className="text-sm text-gray-500">{device.model}</p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {device.device_type}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-500">OS</p>
            <p className="text-sm text-gray-900">{device.os} {device.os_version}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Release Year</p>
            <p className="text-sm text-gray-900">{device.year_released}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Supported Codecs</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {device.supported_codecs.map((codec) => (
                <span
                  key={codec}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {codec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Streaming Formats</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {device.streaming_formats.map((format) => (
                <span
                  key={format}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>

          {device.hdr_support && device.hdr_support.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-500">HDR Support</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {device.hdr_support.map((format) => (
                  <span
                    key={format}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {device.notes && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">{device.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
};
