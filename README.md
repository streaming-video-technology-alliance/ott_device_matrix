# OTT Device Matrix

A comprehensive matrix of OTT (Over-The-Top) device compatibility information. This tool helps content providers and developers understand the capabilities and limitations of various streaming devices.

## Features

- 🎯 Comprehensive device information
- 🔍 Advanced filtering and sorting
- 📱 Responsive Material UI design
- 🌙 Dark mode interface
- 📊 Export capabilities
- 🔎 Quick search functionality
- 📋 Detailed device information modal

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the beautiful component library
- Next.js team for the amazing framework
- All contributors who help maintain the device compatibility data
