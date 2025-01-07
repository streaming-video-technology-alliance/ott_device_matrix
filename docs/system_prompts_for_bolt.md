### System Prompts for Bolt

**Purpose:**
The integration of Bolt into the "OTT Device Matrix" project aims to streamline the setup and management of the project by providing AI-driven scaffolding, adhering to best practices in software development, and facilitating automated testing and deployment. Bolt’s contribution ensures the project meets industry standards efficiently and effectively.

#### Prompt 1: Initial Setup
"I need to set up a new project using Next.js 14 with TypeScript. Bolt, please create the initial file structure based on modern best practices, including folders for components, pages, and styles. Also, include configuration files for TypeScript and any necessary testing tools."

#### Prompt 2: Static Site Integration
"Our project requires integration with MakeDocs for generating static content. Can Bolt prepare the Markdown structure and appropriate scripts to enable automated deployment on GitHub Pages every time there's an update in the JSON file?"

#### Prompt 3: API Setup
"Using the defined JSON schema as a contract, develop the necessary API endpoints within our Next.js backend layer. Ensure that the endpoints are RESTful and adhere to security best practices, including data validation against the schema."

#### Prompt 4: Search and Filter Implementation
"Implement a robust search and filter functionality for our device compatibility data. The frontend should allow filtering by streaming protocol versions and HDR support. Use Next.js’s capabilities combined with TypeScript to deliver a high-performance user experience."

#### Prompt 5: Admin Panel Development
"Create an admin panel within the application where users can manage the `device_compatibility_matrix.json`. Ensure it tracks version changes using GitHub’s API for consistency and rollback capabilities."

#### Prompt 6: AI Documentation Integration
"Integrate AI capabilities (through GPT-4 and other AI tools) to offer documentation prompts and reminders for contributors whenever changes are made to the JSON data. This should include auto-generation and suggestion of documentation updates relevant to the JSON schema changes."

#### Prompt 7: Deployment Workflow
"Set up CI/CD pipelines that utilize GitHub Actions to automate tests and deployments upon verifying new changes pushed to the repository. Each change in the `device_compatibility_matrix.json` should trigger a build and deployment to ensure the static site reflects the latest data."

#### Additional Prompts:
- **Code Quality Assessment:** "Implement static code analysis tools and enforce linting rules across the project to maintain code quality."
- **Testing Automation Setup:** "Set up end-to-end test scenarios using Jest or Cypress to ensure comprehensive coverage across UI interactions and API functionalities."
- **Performance Monitoring Integration:** "Integrate performance monitoring tools such as Google Lighthouse to regularly assess the project’s frontend efficiency and provide insights for optimization." 

**Conclusion:**
By employing these system prompts with Bolt, the "OTT Device Matrix" project can ensure a seamlessly organized development workflow that adheres to the highest standards of quality, consistency, and technological efficiency. This system also prepares developers and contributors for scaling the project by automating mundane tasks and focusing on innovative enhancements.