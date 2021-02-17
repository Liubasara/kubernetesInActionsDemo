#!/bin/bash
# 可以用 tee 命令生成文件
# 阻止脚本中断信号
trap "exit" SIGINT
#INTERVAL=$1
echo "every $INTERVAL seconds to generate new fortune"
mkdir /var/htdocs
while :
do
  echo $(TZ=UTC-8 date) writing fortune to /var/htdocs/index.html
  echo "$(TZ=UTC-8 date)  $(/usr/games/fortune)" > /var/htdocs/index.html
  sleep $INTERVAL
done
