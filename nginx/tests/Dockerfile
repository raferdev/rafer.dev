FROM nginx

RUN mkdir /www/data/out -p
RUN mkdir /www/data/storybook-static -p
RUN mkdir /var/cache/nginx -p

RUN rm /etc/nginx/mime.types
RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/
COPY ./mime.types /etc/nginx/conf/
COPY ./default.conf /etc/nginx/conf.d/
COPY ../../out /www/data/out
COPY ../../storybook-static /www/data/storybook-static

EXPOSE 80