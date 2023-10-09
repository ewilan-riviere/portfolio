FROM node:18.16.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

ENV HOST=0.0.0.0

EXPOSE 3000

CMD [ "pnpm", "start" ]
