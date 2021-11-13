#!/bin/bash

yarn build
cp Dockerfile build
cp ./deploy/httpd.conf build
cp ./deploy/install.sh build

cd build && docker build -t healthdev-front . && ./install.sh