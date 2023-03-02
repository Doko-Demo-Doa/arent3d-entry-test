FROM node:16-alpine

WORKDIR /usr/src/app
EXPOSE 4173

COPY . .

RUN npm ci

RUN NODE_ENV=production npm run build

CMD npm run start
