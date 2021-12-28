FROM node:16-alpine 
ENV NODE_ENV development
# Add a work directory
WORKDIR /usr/src/app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
