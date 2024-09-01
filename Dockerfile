# Stage 1: Build the React app
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with 'serve'
FROM node:18-slim as production

# Install 'serve' globally to serve the static files
RUN npm install -g serve

# Set the working directory to /app
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=build /app/build ./build

# Expose port 3000 to be available outside this container
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]
