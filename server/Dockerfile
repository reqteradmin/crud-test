FROM node:16-alpine 
# Add a work directory
WORKDIR /usr/src/server
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 4000
# Start the app
CMD [ "yarn", "dev"]