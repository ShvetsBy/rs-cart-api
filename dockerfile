docker

WORKDIR cart/app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

USER node

expose 8080

CMD [ "npm", "run", "start:prod" ]