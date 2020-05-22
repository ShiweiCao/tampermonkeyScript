// ==UserScript==
// @name         NGA Open All Pictures
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Click to open all the pictures in the page
// @author       Shiwei Cao
// @match        *://*ngabbs.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    var $openAll = $("<button style='position: fixed; bottom: 0; right: 0'>显示所有图片</button>")
    $openAll.click(function() {
        $("button:contains('显示图片')").trigger("click");
    })
    $(document).ready(function() {
        $("body").append($openAll)
    })
})();