FROM node:15.13-alpine as build
WORKDIR /app
COPY . .
RUN npm run build
CMD [ "npm", "start" ]