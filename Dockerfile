FROM node:latest
WORKDIR /app
COPY package.json ./
#COPY package-lock.json ./
RUN npm install
RUN npm install -g create-react-app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]