FROM node:latest
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV DB_URL=postgresql://postgres.nmuwbyokgrkopevzskui:LaFosse@aws-1-eu-west-2.pooler.supabase.com:6543/postgres
RUN npm run setup-db
CMD ["node", "server/index.js"]