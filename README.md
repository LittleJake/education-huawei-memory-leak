# 华为云课堂防止内存溢出
## 介绍
1. **解决华为云学院内存溢出问题**
   简单处理华为云学院内存溢出的问题，通过删除标签iframe#testIframe，防止video.js一直对#testIframe一直进行刷新导致内存溢出。

2. **增加检测断网后华为云课堂一直刷新，不跳转登录页面**

   通过增加api `POST handler/save_user_video_time`检测是否掉登录的情况。



## 问题复现
[华为云学院视频播放内存溢出问题 - LittleJake's Blog](https://blog.littlejake.net/archives/577/)

## Requirement
油猴插件：[Tampermonkey](https://www.tampermonkey.net/)


## Release
Greasy Fork发布页：[华为云课堂防止内存溢出](https://greasyfork.org/zh-CN/scripts/429240-%E5%8D%8E%E4%B8%BA%E4%BA%91%E8%AF%BE%E5%A0%82%E9%98%B2%E6%AD%A2%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA)

## License

Apache2.0
