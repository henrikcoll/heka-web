FROM node:18-alpine as build

RUN npm i -g ember-cli

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN ember build -prod

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /app

EXPOSE 3000