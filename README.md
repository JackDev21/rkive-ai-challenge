# App

This repository contains a React application built with Vite and a backend built with Node.js and TypeScript. Below you will find instructions to set up and run both parts of the project locally.

## Table of Contents
- [App](#app)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Available Scripts](#available-scripts)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Dependencies](#dependencies)
    - [Frontend Dependencies](#frontend-dependencies)
    - [Backend Dependencies](#backend-dependencies)
    - [Dev Dependencies](#dev-dependencies)

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (>= 16.x.x)
- **npm** (>= 7.x.x) or **yarn**

To check if Node.js and npm are installed, run:

```bash
node -v
npm -v
```

If they are not installed, download them from [Node.js](https://nodejs.org/).

---

## Setup Instructions

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd app
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```
   
   Or:
   ```bash
   yarn dev
   ```

4. **Open the Application**

   Once the development server starts, open your browser and navigate to:
   
   ```
   http://localhost:5173
   ```

### Backend Setup

1. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

2. **Install Dependencies**

   Using npm:
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```
   
   Or:
   ```bash
   yarn dev
   ```

4. **Environment Variables**

   Create a `.env` file in the `backend` directory and add the required environment variables:
   ```env
   PORT=5000
   OPENAI_API_KEY=<your_openai_api_key>
   ```

5. **Note on Hugging Face API**

   The project uses the Hugging Face Inference API for natural language processing tasks because the OpenAI API required payment. This decision ensures accessibility for local testing without incurring additional costs.

6. **API Endpoints**

   Once the server is running, the backend will be available at:
   ```
   http://localhost:5000
   ```

---

## Available Scripts

### Frontend

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the production-ready application.

### Backend

- **`npm run dev`**: Starts the development server using `ts-node-dev`.
- **`npm run build`**: Compiles the TypeScript code to JavaScript.
- **`npm run start`**: Runs the compiled JavaScript code.

---

## Dependencies

### Frontend Dependencies

- **React** (`^18.3.1`): For building the user interface.
- **React-DOM** (`^18.3.1`): For rendering React components.
- **Axios** (`^1.7.9`): For making HTTP requests.
- **Moment** (`^2.30.1`): For date manipulation.
- **Recharts** (`^2.14.1`): For data visualization.

### Backend Dependencies

- **Express** (`^4.21.2`): For building the API.
- **Axios** (`^1.7.9`): For making HTTP requests.
- **Body-Parser** (`^1.20.3`): To parse incoming request bodies.
- **CORS** (`^2.8.5`): To handle Cross-Origin Resource Sharing.
- **Dotenv** (`^16.4.7`): For managing environment variables.
- **@huggingface/inference** (`^2.8.1`): For integrating with Hugging Face APIs.
- **OpenAI** (`^4.76.0`): For integrating OpenAI services.

### Dev Dependencies

- **TypeScript** (`^5.7.2`): For static typing.
- **TS-Node-Dev** (`^2.0.0`): For running TypeScript files in development.
- **@types/node** (`^22.10.1`): Type definitions for Node.js.
- **@types/express** (`^5.0.0`): Type definitions for Express.
- **@types/cors** (`^2.8.17`): Type definitions for CORS.

For a complete list, refer to the respective `package.json` files.

---
