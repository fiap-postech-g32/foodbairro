FROM node:latest

WORKDIR /usr/app

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm run build
RUN npx prisma migrate deploy

# COPY . .

EXPOSE ${PORT}

