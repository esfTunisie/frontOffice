FROM node:12 as build
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g
COPY . .
EXPOSE 3000
CMD ["npm ","start"];

FROM nginx:1.19.0
COPY build/ /usr/share/nginx/html


