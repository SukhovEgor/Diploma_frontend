FROM node:15.13-alpine as build
WORKDIR /app
COPY . .
ENV WDS_SOCKET_PORT=0
RUN npm run build
CMD [ "npm", "start" ]