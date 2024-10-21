# Base image with Node.js
FROM node:18-slim AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Development stage
FROM base AS development

# Install additional tools for development
RUN npm install --save-dev react-scripts

# Expose the port for the development server
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "start"]

# Production stage (from your existing Dockerfile)
FROM base AS production

# Build the app
RUN npm run build

# Install 'serve' globally to serve the static files
RUN npm install -g serve

# Set the working directory to /app
WORKDIR /app

# Copy the build files
COPY --from=base /app/build ./build

# Expose port 3000 for production
EXPOSE 3000

# Serve the static files in production
CMD ["serve", "-s", "build", "-l", "3000"]
