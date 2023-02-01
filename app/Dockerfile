FROM node:18-alpine

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install --include=dev

COPY --chown=node:node . .

USER node

ENTRYPOINT [ "npm", "run", "dev" ]