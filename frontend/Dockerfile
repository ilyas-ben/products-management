FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force && npm install @rollup/rollup-win32-x64-msvc --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

