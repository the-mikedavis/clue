#! /bin/bash
sass --watch sass:static/dist/css &
nodemon -e js,html,css 'test.js' ${1:-3000}
