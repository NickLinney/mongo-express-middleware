# Specify a base image to start from
FROM node:14

# Create a directory for the app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app to the container
COPY . .

# Set the app's port (you may need to change this if your app uses a different port)
ENV PORT=5000

# Expose the app's port to the host machine
EXPOSE $PORT

# Start the app
CMD [ "npm", "start" ]
