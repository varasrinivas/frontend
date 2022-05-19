FROM nginx

COPY /dist/frontend /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/