#!/bin/bash

tag=$1
if [ -z $tag ]; then
  echo "no specific tag detected, use repo default"
  tag='gatsby_blog_site'
#  echo "please input the tag"
#  exit 1
fi
echo "build docker image with tag: fishpond:$tag"

npx gatsby clean
npx gatsby build

docker build --network=host -t fishpond:$tag .
docker tag fishpond:$tag zhangxin8344/fishpond:$tag
docker push zhangxin8344/fishpond:$tag
