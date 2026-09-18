FROM nginx:stable-alpine

RUN rm -f /etc/nginx/mime.types /etc/nginx/conf.d/default.conf \
  && mkdir -p /var/cache/nginx

COPY nginx.conf /etc/nginx/
COPY mime.types /etc/nginx/conf/

EXPOSE 80
