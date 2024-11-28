## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/DarrenZal/kwaxala.git
   cd kwaxala
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Server

To start the site locally, run the following command:
   ```bash
   node server.js
   ```

By default, the server will start on `http://localhost:8000`. You can open this URL in your browser to view the site.

## Development Mode (Optional)

If you're actively working on the code and need hot-reloading, use:
   ```bash
   npm run dev
   ```

This will start the server in development mode with live updates.

## Troubleshooting

If you encounter issues:

- Ensure all dependencies are installed by running `npm install`.
- Verify that Node.js and npm are installed correctly.
- Check the `server.js` file for custom configurations like port numbers or environment variables.