# OTT Device Matrix

A comprehensive matrix of OTT (Over-The-Top) device compatibility information. This tool helps content providers and developers understand the capabilities and limitations of various streaming devices.

## Contributing

We welcome contributions to improve the OTT Device Matrix! The contribution process is simple:

### How to Contribute

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/ott_device_matrix.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes to the `device_compatibility_matrix.json` file:
   - **Add a new device**: Add a new JSON object following the schema
   - **Update an existing device**: Modify the relevant fields of an existing entry
   - **Fix data**: Correct any inaccurate information
5. Validate your changes against the schema:
   - Run `npm run validate` to make sure your changes comply with the data structure
6. Commit your changes: `git commit -m 'Add/Update device: DEVICE_NAME'`
7. Push to your branch: `git push origin feature/your-feature-name`
8. Open a Pull Request

### Device Entry Guidelines

When adding or updating a device entry in `device_compatibility_matrix.json`, please ensure:

- All required fields are included (see `schema.json` for requirements)
- Information is accurate and verified
- Proper formatting is maintained (use existing entries as reference)
- Entries are in alphabetical order by brand and then by model

Example of a valid device entry:

```json
{
  "brand": "Brand Name",
  "model": "Model Name",
  "device_type": "Smart TV",
  "os": "OS Name",
  "os_version": "OS Version",
  "year_released": 2023,
  "supported_codecs": ["AVC", "HEVC"],
  "drm_support": ["Widevine", "PlayReady"],
  "aes_scheme": "cenc",
  "security_level": "L1",
  "streaming_formats": ["HLS", "DASH"],
  "streaming_protocol_versions": ["HLS v4", "DASH IF 3.0"],
  "hdr_support": ["HDR10", "HDR10+", "Dolby Vision"],
  "audio_codec_support": ["AAC", "AC-3", "E-AC-3"]
}
```

## Features

- 🎯 Comprehensive device information
- 🔍 Advanced filtering and sorting
- 📱 Responsive Material UI design
- 🌙 Dark mode interface
- 📊 Export capabilities
- 🔎 Quick search functionality
- 📋 Detailed device information modal

### Search Functionality

The application provides comprehensive search capabilities:

- Search across all device properties (brand, model, OS, codecs, etc.)
- Case-insensitive matching
- Partial string matching
- Array property searching (e.g., finding devices that support specific codecs or DRMs)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ott_device_matrix.git
cd ott_device_matrix
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process includes:

1. Building the Next.js application
2. Validating the device compatibility matrix JSON against the schema
3. Deploying to GitHub Pages

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out` directory.

## Data Structure

The device compatibility matrix is stored in `device_compatibility_matrix.json` and follows the schema defined in `schema.json`. The data includes:

- Basic device information (brand, model, type)
- Operating system details
- Supported streaming formats
- DRM capabilities
- Audio/video codec support
- Security features

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the beautiful component library
- Next.js team for the amazing framework
- All contributors who help maintain the device compatibility data
