FROM nginx
COPY dist/swimresults /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

RUN mkdir -p /usr/share/nginx/html/assets/
RUN rm -f /usr/share/nginx/html/assets/release.txt
RUN touch /usr/share/nginx/html/assets/release.txt
RUN echo $(date) > /usr/share/nginx/html/assets/release.txt

EXPOSE 80
