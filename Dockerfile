# ---- Build Stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json yarn.lock ./
ENV CI=true
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

# ---- Runtime Stage ----
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

