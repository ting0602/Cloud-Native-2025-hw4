FROM node:20

WORKDIR /app

COPY backend ./backend
WORKDIR /app/backend

RUN npm ci

CMD ["npm", "run", "dev"]
