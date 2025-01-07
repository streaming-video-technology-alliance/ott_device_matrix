Windsurf File for Project

## Project Overview

**Project Name:** OTT Device Compatibility Matrix

**Description:** The OTT Device Compatibility Matrix project is focused on creating a comprehensive resource for developers and industry professionals to determine the compatibility of various OTT streaming devices, such as Roku Ultra, with specific streaming technologies. This is facilitated through a JSON schema detailing each device's capabilities, which include supported streaming protocols and versions. The project will provide a searchable static site for easy access to this information, hosted on GitHub Pages.

**Tech Stack:**

*   **Frontend:** Next.js 14 with TypeScript
*   **Static Site Generation:** MakeDocs
*   **Version Control and Hosting:** GitHub Pages

**Key Features:**

*   JSON schema to standardize device compatibility data
*   API endpoint for accessing compatibility data
*   Static, searchable site generation using MakeDocs
*   Automated site updates with GitHub Pages integration

## Project Structure

### Root Directory:

*   Contains main configuration files and documentation such as `README.md` and `package.json`.

### /frontend:

*   All frontend-related code, including components, styles, and assets.

/components:

*   DeviceTable
*   SearchBar
*   FilterPanel
*   DeviceDetailCard

/assets:

*   Device icons and images
*   JSON data files

/styles:

*   Global.css
*   DeviceList.css
*   DetailPage.css

### /backend:

*   Backend-related code, such as API routes and database models.

/controllers:

*

/models:

*

/routes:

*   DevicesAPI.js
*   SearchAPI.js

### /config:

*   Configuration files for environment variables and application settings.

### /tests:

*   Contains unit and integration tests for both frontend and backend.

## Development Guidelines

**Coding Standards:**

*   Use TypeScript for type safety.
*   Follow AirBnB’s JavaScript style guide for code consistency.
*   Document all functions and components thoroughly.

**Component Organization:**

*   Organize components by feature within the `/components` directory.
*   Utilize hooks for state management where applicable.

## Windsurf IDE Integration

**Setup Instructions:**

*   Install and configure Windsurf IDE with the project repository.
*   Set up ESLint and Prettier for code quality and style enforcement.
*   Ensure that the TypeScript compiler is active for real-time feedback.

**Key Commands:**

*   `Ctrl + Shift + P`: To access the command palette
*   `F5`: To start the project server

## Additional Context

**User Roles:**

*   Contributors: Can edit JSON files and submit pull requests.
*   Maintainers: Approve changes and manage project settings.

**Accessibility Considerations:**

*   Ensure all UI components are accessible via keyboard navigation.
*   Provide screen reader support for all interactive elements.
