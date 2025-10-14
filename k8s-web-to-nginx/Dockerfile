# Use an official Node.js runtime as a parent image
FROM node:alpine 

# Set the working directory to /app

WORKDIR /app

# Copy the current directory contents into the container at /app

COPY package.json package-lock.json ./

# Install any needed packages specified in package.json

RUN npm install

# Copy the current directory contents into the container at /app

COPY . ./

# Run the app when the container launches

CMD ["npm", "start"]