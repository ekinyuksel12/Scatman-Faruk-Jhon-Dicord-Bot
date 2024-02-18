FROM node:lts-slim
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "./main.js"]