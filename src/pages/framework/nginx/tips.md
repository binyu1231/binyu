---
title: Tips
index: Framework.Nginx.Practice
---


2. 重启nginx

``` bash
$ nginx -t
$ nginx -s reload
```

1. 查找nginx 配置文件

```bash
$ which nginx
# /usr/sbin/nginx

$ /usr/sbin/nginx -t
$ nginx -t
# nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
# nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```