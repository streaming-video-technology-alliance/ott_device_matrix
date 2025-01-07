

Cursor Rules for Project

Project Overview

Project Name: OTT Device Matrix

Description: The "OTT Device Matrix" project aims to provide an exhaustive resource detailing the compatibility of various Over-The-Top (OTT) streaming devices like Roku Ultra with different streaming technologies. By establishing a JSON schema, it catalogs the capabilities of these devices, such as supported streaming protocols (e.g., versions of HLS or MPEG-DASH). The project includes creating an endpoint for accessing these compatibility details and a statically generated, searchable table using Markdown via MakeDocs. This table is hosted on GitHub Pages, facilitating easy user access to updated information as the JSON schema and file are maintained collectively by contributors.

Tech Stack: 
- Frontend: Next.js 14 with TypeScript
- Static Site Generation: MakeDocs
- Version Control and Hosting: GitHub Pages

Key Features:
- Define JSON schema to standardize device compatibility data.
- Provide an API endpoint for accessing compatibility data.
- Create a static, searchable site using MakeDocs.
- Automate site updates and documentation rebuilding with each JSON file modification.

Project Structure

Root Directory:
- Contains the main configuration files and documentation including README.md and .gitignore.

/frontend:
- Contains all frontend-related code, including components, styles, and assets.

/components:
- MainSearch: Component handling the device search functionality.
- DeviceDetail: Component rendering detailed information about a selected device.
- AdminPanel: Component for editing and managing the JSON data.

/assets:
- Images, logos, and any non-code resources specific to the frontend.

/styles:
- SCSS/CSS files managing the overall UI and layout styling.

/backend:
- Contains all backend-related code, including API routes and database models.

/controllers:
- APIController: Handles requests to access device compatibility data.

/models:
- DeviceModel: Definitions for JSON schema related to devices.

/routes:
- APIRoutes: Defines API endpoints available for interaction.

/config:
- Configuration files for environment variables and application settings.

/tests:
- Contains unit and integration tests for both frontend and backend.

Development Guidelines

Coding Standards:
- Follow the Airbnb JavaScript style guide, adhering to consistent code formatting and best practices.
- Use ESLint and Prettier for maintaining code style consistency.

Component Organization:
- Components should be functional, making use of React hooks where appropriate.
- Follow a container-presentational pattern to separate logic from UI.

Cursor IDE Integration

Setup Instructions:
- Clone the repository from GitHub.
- Run `npm install` to install all dependencies.
- Use `npm run dev` to start the development server.

Key Commands:
- `npm run build` to build the production-ready site.
- `npm run test` to execute all test files.

Additional Context

User Roles:
- Admin: Full access to modify device data and manage schema updates.
- Contributor: Can propose changes and updates through pull requests.

Accessibility Considerations:
- Ensure high contrast and keyboard navigability.
- Follow WCAG 2.1 guidelines for web accessibility to guarantee a broad user base can utilize the application.