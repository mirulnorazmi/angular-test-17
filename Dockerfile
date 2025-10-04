FROM node:20-alpine

WORKDIR /usr/app
COPY ./dist/akmal-fe-ng17/ ./
CMD node server/server.mjs
EXPOSE 4000

# to remove .git hidden folder
RUN rm -rf ./.git
