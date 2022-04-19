FROM node:14
WORKDIR /app
COPY package.json ./
#COPY package-lock.json ./
RUN npm install
RUN npm install --legacy-peer-deps
RUN npm install --force
RUN npm i @emotion/react @emotion/styled
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
