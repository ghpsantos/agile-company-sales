FROM node:14

WORKDIR /agile-sales/front-end

ENV PATH /agile-sales/front-end/node_modules/.bin:$PATH

COPY . .

RUN npm install

RUN npm rebuild node-sass
