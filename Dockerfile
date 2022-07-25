FROM node:18.6.0-alpine3.16

ENV TZ Asia/Shanghai

RUN apk add tzdata && cp /usr/share/zoneinfo/${TZ} /etc/localtime \
    && echo ${TZ} > /etc/timezone \
    && apk del tzdata

RUN npm install --global serve

WORKDIR /app
COPY ./public ./public

EXPOSE 7046

CMD serve -p 7046 ./public
