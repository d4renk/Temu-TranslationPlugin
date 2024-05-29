// ==UserScript==
// @name         Temu Translate Enabler
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change translate="no" to translate="yes" on temu.com subdomains
// @author       You
// @match        *://*.temu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 获取页面中所有的 <html> 元素
    const htmlElement = document.querySelector('html');

    // 设置 translate 属性为 "yes"
    htmlElement.setAttribute('translate', 'yes');
})();
