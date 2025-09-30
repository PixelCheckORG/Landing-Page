
# GEMINI.md

## Project Overview

This is a web application built with Vite, React, and TypeScript. It uses shadcn-ui for UI components and Tailwind CSS for styling. The project is structured with a `src` directory containing the main application logic, components, and pages.

## Building and Running

To get started with this project, you'll need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server at `http://localhost:8080`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** Reusable UI components are located in the `src/components` directory.
*   **Pages:** The application's pages are in the `src/pages` directory.
*   **Routing:** The project uses `react-router-dom` for routing. Routes are defined in `src/App.tsx`.
*   **State Management:** The project uses `@tanstack/react-query` for server-side state management.
