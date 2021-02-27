FROM node:lts-alpine

ENV HOME=/app
WORKDIR $HOME

COPY package.json ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]