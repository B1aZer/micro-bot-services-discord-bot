#!/bin/bash
source ~/.nvm/nvm.sh
nvm use v16.13.1
node --unhandled-rejections=warn bot.js | ts '[%Y-%m-%d %H:%M:%.S]' >> log.log
