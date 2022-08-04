FROM node:14
WORKDIR ./
COPY package*.json .
RUN npm install
COPY . .
RUN npm run setup
RUN npm start