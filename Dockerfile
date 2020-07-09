FROM phusion/baseimage

MAINTAINER Christian Linder <rednil@onyown.com>

# Build time variables
ENV ROUTINO_VERSION 3.3.2

# update base image and install required packages
RUN apt-get update && apt-get upgrade -y -o Dpkg::Options::="--force-confold" && apt-get install -y \
apache2 \
gcc \
gettext-base \
make \
libapache2-request-perl \
libc6-dev \
libcgi-pm-perl \
libjson-pp-perl \
libz-dev \
libbz2-dev \
liburi-perl \
libwww-perl \
nodejs \
unzip \
wget

# Fetch and build ROUTINO
RUN curl -sSL https://www.routino.org/download/routino-${ROUTINO_VERSION}.tgz | tar -xz -C /usr/src
WORKDIR /usr/src/routino-${ROUTINO_VERSION}
RUN make && make install
RUN cp -a web /var/www/html/routino
RUN chown -R www-data:www-data /var/www/html/routino

# Fetch LEAFLET
WORKDIR /var/www/html/routino/www/leaflet
RUN ./install.sh

# Configure APACHE
#RUN sed -i '2 i <Directory /var/www/html/routino/>\nAllowOverride Options=MultiViews,ExecCGI FileInfo Limit\n</Directory>' /etc/apache2/sites-enabled/000-default.conf
RUN cd /etc/apache2/mods-enabled && ln -s ../mods-available/cgi.load

COPY . /
VOLUME /var/www/html/routino/data
EXPOSE 80
CMD ["/sbin/my_init"]
