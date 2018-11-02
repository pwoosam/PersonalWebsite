FROM node:11-alpine

WORKDIR /website

COPY ./scripts ./scripts
COPY ./assets ./assets
COPY ./index.html ./

RUN npm i -g serve

EXPOSE 5000

ENTRYPOINT [ "serve" ]
