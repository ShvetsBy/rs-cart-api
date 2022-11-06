FROM node:14-alpine
WORKDIR cart/app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build
USER node
EXPOSE 4000
ENTRYPOINT [ "npm", "run", "start:prod" ]