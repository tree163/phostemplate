// ==UserScript==
// @name         land of the lustrous fellas
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Keep the canvas beautiful!
// @author       Original author oralekin from osu! /r/osuplace, appropriated by @tree#9400 on discord for r/landofthelustrous
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/tree163/phostemplate/raw/main/phostemplate.user.js
// @downloadURL  https://github.com/tree163/phostemplate/raw/main/phostemplate.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959886716473323543/960631721437585408/dotted-place-template-with-LoTLplusXMoonUpdate.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
