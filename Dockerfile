FROM nginx

COPY ./ /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/lexmin0412.conf

EXPOSE 80
