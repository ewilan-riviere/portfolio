FROM node:18.16.0-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY . /app/
RUN npm install -g pnpm
RUN pnpm install

COPY . .

ENV PATH ./node_modules/.bin/:$PATH
