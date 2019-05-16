FROM node:8

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 2000
CMD [ "npm", "run", "start" ]