FROM node:18-alpine

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]