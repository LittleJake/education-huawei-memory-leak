// ==UserScript==
// @name         华为云课堂防止内存溢出
// @version      2.0
// @description  防止video.js刷新iframe导致内存溢出，增加判断登录是否过期。
// @author       LittleJake
// @license      Apache2.0
// @match        https://education.huaweicloud.com/courses/*
// @icon         https://www.google.cn/s2/favicons?domain=huaweicloud.com
// @grant        none
// @namespace https://greasyfork.org/users/773473
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.onload = function(){document.getElementById("testIframe").remove();}
	if ($){
		let data_id = $(".vert-0").attr("data-id"),
			course_id = $(".vert-0").children().attr("data-course-id");
		let ajax_url = "https://education.huaweicloud.com/courses/" + course_id + "/xblock/" + data_id + "/handler/save_user_video_time";
		setInterval(function(){
			if ($){
				$.ajax({
					url: ajax_url,
					data: '{"msg":0,"type":""}',
					method: "POST",
					error: function(e){
						console.log(e.status);
						if (e.status == 403){
							window.location = "https://auth.huaweicloud.com/authui/login.html?service="+window.location;
							$ = null;
						}
					},
				});
			}
		}, 10000);
		console.log("===华为云课堂增强脚本===");
		console.log("项目地址：https://github.com/LittleJake/education-huawei-memory-leak/");
		console.log("by LittleJake, licensed under Apache2.0");
	}
})();
