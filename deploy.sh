#!/bin/bash

# Script to deploy haujournal Hugo site. Meant to be run from base folder of git
# repo after any necessary changes to config.toml have been made.

SOURCE_DIR='public'
WEBSERVER_DIR='/var/www/haujournal.org/public_html'

# Generate site
hugo

# Remove base index xml files
rm $SOURCE_DIR/index.xml
rm $SOURCE_DIR/sitemap.xml

# Copy generated site to the webserver folder
cp -R $SOURCE_DIR/* $WEBSERVER_DIR/
