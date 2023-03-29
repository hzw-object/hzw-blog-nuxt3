FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install --shamefully-hoist
COPY . .
RUN pnpm build
EXPOSE 8002
CMD ["pnpm", "start"]