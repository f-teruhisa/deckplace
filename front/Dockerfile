FROM node:12.20.1-alpine

LABEL maintainer = "f-teruhisa <teru_fukumoto@outlook.jp>"

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update && npm install -g @vue/cli
COPY package.json .
RUN npm install
