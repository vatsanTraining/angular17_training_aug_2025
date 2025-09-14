# Stage 1: The build process
FROM node:20-alpine AS build

WORKDIR /usr/local/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY ./ ./

# Generate the build of the application
RUN npm run build

# --- TROUBLESHOOTING STEP ---
# This command will list the contents of the 'dist' folder.
# Look for the folder name that contains your built files (e.g., 'ordermanager', 'build', etc.)
RUN ls -la /usr/local/app/dist/

# Stage 2: Serve app with Nginx server
FROM nginx:latest

# Copy the build output from the 'build' stage
# Make sure the path after 'dist/' matches the output from the previous step.
COPY --from=build /usr/local/app/dist/ordermanager /usr/share/nginx/html

EXPOSE 80
