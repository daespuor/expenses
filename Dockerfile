FROM node:alpine3.10

RUN npm i -g netlify-cli

USER node

RUN mkdir /node/src
WORKDIR /node/src

COPY --chown=node:node package.json yarn.lock ./

RUN npm ci

COPY --chown=node:node . .

CMD ["netlify dev"]