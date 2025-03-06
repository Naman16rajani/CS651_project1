# Stage 1: Build environment
FROM node:23-alpine3.20 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production server
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Install SSL dependencies and create directory for certificates
RUN apk add --no-cache openssl && mkdir -p /etc/nginx/ssl

# Copy SSL certificates
COPY ssl/nginx.crt /etc/nginx/ssl/
COPY ssl/nginx.key /etc/nginx/ssl/

# Expose both HTTP and HTTPS ports
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]