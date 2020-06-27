#!/bin/bash
pm2 stop WxFlow && npm run build && rm -rf ~/Wx && mv app ~/Wx && pm2 start WxFlow