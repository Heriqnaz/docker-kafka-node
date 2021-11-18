FROM node:10-alpine
WORKDIR /src
COPY package*.json ./
RUN apk update && apk add bash
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN npm install
COPY . .
RUN npx tsc
RUN ["chmod", "+x", "wait-for-it.sh"]
