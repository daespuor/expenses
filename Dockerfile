FROM node:latest

RUN npm install -g netlify-cli

RUN mkdir /home/node/code

RUN chmod -R 777 /home/node/code

USER node

WORKDIR /home/node/code

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

CMD ["netlify","dev"]