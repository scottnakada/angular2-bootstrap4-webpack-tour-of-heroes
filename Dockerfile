######################################################################################################
# To build the docker container:
#    docker build -t angular2-tour .
#
# To start the docker container:
#    docker run -it --rm -p 3000:3000 -p 3001:3001 --name angular2-tour angular2-tour
#
# To view the app, Open a browser at localhost:3000
#
# To connect and edit the application
#    docker run -it angular2-tour /bin/bash
#
######################################################################################################
# Start with a default nodejs image
FROM node:latest

# Maintainer
MAINTAINER Scott M. Nakada<scottnakada@gmail.com>

# Add some necessary packages
RUN apt-get update
RUN apt-get install -y vim

# Create a nodejs account, in nodejs group, with home directory /home/nodejs
RUN mkdir -p /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

# Use /home/nodejs as the working directory
WORKDIR /home/nodejs

# Add build files to /home/nodejs
RUN git clone https://github.com/scottnakada/angular2-bootstrap4-webpack-tour-of-heroes.git \
	 tour-of-heroes

# Change to the hour of heroes directory
WORKDIR /home/nodejs/tour-of-heroes

# Build and run the repository
RUN npm install && \
    chown -R nodejs:nodejs /home/nodejs && \
    chmod -R 775 /home/nodejs

# Startup as user nodejs
#USER nodejs

EXPOSE 3000 3001

# Start the web-server
CMD npm start
