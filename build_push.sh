#!/bin/bash

tag=$1
if [ -z $tag ]; then
  echo "please input the tag"
  exit 1
fi

gatsby clean
gatsby build

echo "build docker image with tag: fishpond:$tag"

docker build --network=host -t fishpond:$tag .
docker tag fishpond:$tag zhangxin8344/fishpond:$tag
docker push zhangxin8344/fishpond:$tag


docker container stop gatsby_site
docker rm gatsby_site
docker run -p 7046:7046 --name=gatsby_site -d zhangxin8344/fishpond
docker image prune
