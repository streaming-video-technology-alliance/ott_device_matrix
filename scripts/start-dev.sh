#!/bin/bash

# Kill any existing Node.js processes
echo "Cleaning up existing Node.js processes..."
pkill -f "node" || true

# Wait a moment to ensure ports are freed
sleep 1

# Start the development server
echo "Starting development server..."
npm run dev
