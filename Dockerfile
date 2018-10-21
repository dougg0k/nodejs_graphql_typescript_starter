FROM node:10 as build
WORKDIR /usr/app_files
COPY tsconfig.json ./
COPY package*.json ./
RUN apt-get -y install gcc
RUN npm install -g node-gyp
RUN npm install
COPY . .
RUN npm run build

FROM node:10 as preparation
WORKDIR /usr/app_preparation
COPY .env.production .
COPY ormconfig.js .
COPY package*.json ./
RUN npm install --only=production

FROM node:10-alpine
WORKDIR /usr/app
COPY --from=build /usr/app_files/dist/src/ .
COPY --from=preparation /usr/app_preparation/ .
EXPOSE 4000
CMD NODE_ENV=production node ./index.js