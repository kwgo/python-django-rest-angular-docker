FROM node:20.19.0

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
# Install Angular CLI globally and project dependencies
# RUN npm install -g @angular/cli && npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]

# remove node_modules and package-lock.json before docker
#docker compose up --build