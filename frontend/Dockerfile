FROM node as builder

WORKDIR /app

COPY . .

RUN npm ci \
  && npm run docs:build

FROM nginx:alpine

COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80