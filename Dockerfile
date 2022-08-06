FROM node:14
WORKDIR ./
COPY package*.json ./
RUN npm install
RUN mkdir logs \
 && touch logs/out.log \
 && chmod 777 logs/out.log \
 && printf "npm run setup\nnpm start\n" > entrypoint.sh
COPY . .
CMD ["/bin/sh", "entrypoint.sh"]