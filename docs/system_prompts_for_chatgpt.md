### System Prompts for ChatGPT

Objective

This document outlines the prompts and instructions used within the project to leverage ChatGPT's capabilities for supporting development tasks such as code generation, documentation enhancement, and feature suggestions for the OTT Device Matrix project.

Prompting Strategies

These strategies maximize the efficiency and applicability of ChatGPT in developing, maintaining, and expanding the OTT Device Compatibility Matrix.

Prompts for Documentation Enhancement

1.  **"Content Summarization"**

    *   **Prompt:** "Given the extensive device information provided in JSON format, generate a concise summary highlighting key attributes such as supported codecs and HDR compatibility for each device entry."
    *   **Context:** Applied to enhance the readability and accessibility of device entries when preparing markdown files.

2.  **"Technical Explanation"**

    *   **Prompt:** "Explain the implications of the JSON schema's required fields and their importance in maintaining accurate device compatibility records."
    *   **Context:** Utilized to ensure Contributors understand schema constraints and expected outputs accurately.

Prompts for Code Generation

1.  **"API Endpoint Design"**

    *   **Prompt:** "Design an API endpoint using Next.js capable of fetching and returning filtered device compatibility data based on user inputs such as brand and streaming protocol. Include TypeScript typings for enhanced code accuracy."
    *   **Context:** Supports backend development by automating repetitive coding tasks and ensuring consistency.

2.  **"Frontend Component Development"**

    *   **Prompt:** "Generate a React component in Next.js that implements a search and filter UI. The component should be capable of reading from a JSON API and display results dynamically."
    *   **Context:** Assists in building adaptable user interface elements facilitating user interaction with the compatibility matrix.

Prompts for Feature Suggestions

1.  **"Advanced Search Features"**

    *   **Prompt:** "Provide innovative suggestions for additional advanced features that could be integrated into the search interface. Consider using AI-driven predictive text or user behavior analysis to refine searches."
    *   **Context:** Focuses on enhancing user experience through intelligent features and anticipatory solutions.

2.  **"Data Handling Improvements"**

    *   **Prompt:** "How can the data ingestion pipeline be optimized to support real-time updates and scalability as new devices are added or specifications change?"
    *   **Context:** Aims to ensure the system remains responsive and agile in accommodating continual data influxes.

Prompts for Maintenance & Updates

1.  **"Automated Content Generation"**

    *   **Prompt:** "Develop a script that utilizes an AI model to auto-generate Markdown documentation updates when the core JSON file experiences new contributions or revisions."
    *   **Context:** Supports ongoing project documentation efforts by automating routine tasks, ensuring that updates are reflected promptly.

2.  **"Version Control Utilization"**

    *   **Prompt:** "How can GitHub's version control functionalities be leveraged to automatically trigger workflows that rebuild site documentation post JSON edits?"
    *   **Context:** Ensures seamless integration between data management and content delivery to the public repository site.

Application & Usage Notes

*   **Scalability Considerations:** It's crucial to model prompts to handle increased complexity and data volumes as the device matrix grows.
*   **User Feedback Incorporation:** Continually refine and test these prompts based on user feedback and observed project outcomes.
*   **Documentation Updates:** Maintain this document regularly as new use cases and capabilities for ChatGPT in this project are realized.

These system prompts act as foundational guidelines for engaging ChatGPT effectively throughout project development, ensuring tasks are aligned with strategic objectives and executed efficiently.
