
FROM httpd:2.4

LABEL version="1.0.0" description="HealthDev" maintainer="HealthDev.io"

COPY . /usr/local/apache2/htdocs/

COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80