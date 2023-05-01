FROM node:20-alpine3.16

# Update npm
RUN npm upgrade -g npm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]


