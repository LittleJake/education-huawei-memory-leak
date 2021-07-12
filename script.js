// ==UserScript==
// @name         华为云课堂防止内存溢出
// @version      1.0
// @description  防止video.js刷新iframe导致内存溢出
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
})();
