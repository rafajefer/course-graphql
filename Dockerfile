FROM node:23

ARG user=dev
ARG uid=1001

RUN useradd -G www-data,root -u $uid -d /home/$user $user

WORKDIR /app

USER $user