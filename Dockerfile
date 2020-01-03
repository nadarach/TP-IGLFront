# Stage 1 - the build process

FROM node:8.16.2 as build-deps
WORKDIR /app
COPY package.json package-lock.jason ./
RUN npm install --quiet
COPY . ./
CMD npm run build

# Stage 2 - the production environment

FROM node:8.16.2-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 80
CMD ["serve","-p","-s","."]