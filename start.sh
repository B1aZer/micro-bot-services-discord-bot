#!/bin/bash
source ~/.nvm/nvm.sh
nvm use v16.13.1
npx nodemon bot.js | ts '[%Y-%m-%d %H:%M:%.S]' >> log.log
