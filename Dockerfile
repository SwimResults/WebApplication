FROM nginx
COPY dist/swimresults /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

ARG now

# to store the value as environment variable in the image
ENV DASHBOARD_BUILD_DATE=$now

RUN touch /usr/share/nginx/html/assets/release.txt
RUN echo $(date) > /usr/share/nginx/html/assets/release.txt

EXPOSE 80
