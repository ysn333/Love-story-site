var inCloudFlare=true;window.addEventListener("DOMContentLoaded",function(){inCloudFlare=false});if(document.readyState==="loading"){window.addEventListener("load",function(){if(inCloudFlare)window.dispatchEvent(new Event("DOMContentLoaded"))})}!function(r){let t=r(document),a=r(window);let e;let i=0;let s=5;let o=r("#header").outerHeight();let l=true;r(".open-overlay-btn, .overlay-box-close, .overlay-box-container").on("click",function(e){let t=!1;if(r(this).hasClass("open-overlay-btn")){e.preventDefault();t=r(this).data("box")}else{if(r(this).hasClass("overlay-box-container")&&r(e.target).is(".overlay-box-container")===false){return void 0}t=r(this).closest(".overlay-box").attr("id");if(t==="trailer_wrapper"){r("#"+t).find(".trailer-player-res").html("")}}r("body").toggleClass("overlay-box-active");r("#"+t).fadeToggle();r("#"+t).toggleClass("active");return 0});r(".margin-100").on("click",function(e){if(!e.ctrlKey)r(this).attr("href",atob(r(this).data("clse")))});let n=function(){r(".Clazy[data-image]").each(function(){if(a.scrollTop()+a.height()>r(this).offset().top+100){r(this).attr("src",r(this).data("image")).on("load",function(){if(!this.complete||typeof this.naturalWidth=="undefined"||this.naturalWidth===0){r(this).remove()}else{r(this).addClass("Clazy-Loaded");r(this).removeAttr("data-image")}})}})};window.addEventListener("load",function(){if("serviceWorker"in navigator){navigator.serviceWorker.register("/serviceworker.js?ver=1.0").then(()=>{return true}).catch(()=>{return false})}});r(".go-to-scroll").on("click",function(){r("html, body").animate({scrollTop:r(r(this).attr("href")).offset().top},1e3)});r("#player_servers").on("click",".server_nth",function(){if(r(this).hasClass("active")===false&&l===true){r("#player_viewer #iframe_player").attr("src","");r(".server_nth").removeClass("active");r(this).addClass("active");let e=r(this).data("type");let t=r(this).data("nume");let a=r(this).data("post");let i=cl_theme.embed+"embed/"+t+"/"+a+"/"+(e==="tv"?"2":"1")+"/";setTimeout(function(){if(!r("#iframe_player").length){r("#player_viewer .frame-container").html('<iframe id="iframe_player" width="560" height="315" src="'+i+'" frameborder="0" allowfullscreen></iframe>')}else{r("#player_viewer #iframe_player").attr("src",i)}},200)}else if(l===false){r(".server_nth").removeClass("active");r(this).addClass("active")}});r(".frame-container").on("click",".soki",function(e){e.preventDefault();l=true;r(".server_nth.active").removeClass("active").trigger("click")});r(function(){if(r(".seasons-selection").length===1&&cl_se_eps!="undefined"&&cl_se_eps.se>0){if(r(".seasons-selection .idTabs").find("a").length>1){r(".seasons-selection .idTabs").find("a.selected").removeClass("selected");r(".seasons-selection .idTabs").find('li[data-value="'+cl_se_eps.se+'"] a')[0].click()}if(cl_se_eps.ep>0){r(".episodes-list #season-num-"+cl_se_eps.se).find('a[data-ep-num="'+cl_se_eps.ep+'"]').addClass("selected")}}});t.ready(function(){if(r("#player_viewer").length>0&&r("#iframe_player").data("ad")==1){(function e(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a);t.onload=s})();var t;var a=r("#player_viewer iframe").data("ad-timer")||5;var i;function s(){window.YT.ready(function(){t=new window.YT.Player("iframe_player",{events:{onReady:e,onStateChange:n}})})}r(".skip-ax").on("click",function(e){e.preventDefault();if(a<=0){r(".skip-ax").removeClass("active");l=true;r(".server_nth.active").removeClass("active").trigger("click")}});function o(e){if(a<=0){clearInterval(i);r(".skip-ax").addClass("ready").html("تخطي الأن")}else{a--;r(".skip-ax .skip-ax-time").html(a)}}function e(e){t.playVideo();r(".skip-ax .skip-ax-time").html(a);r(".skip-ax").addClass("active")}function n(e){if(e.data==1){i=setInterval(o,1*1e3)}if(e.data==2){clearInterval(i)}}}else{}});t.on("ready",function(){r(".preload-style").attr("rel","stylesheet");if(typeof r.cookie==="function"&&!r.cookie("CL_SOCIALS_SUBS")){r(".social-box").fadeIn()}r(".social-box-close").on("click",function(){r(this).closest(".social-box").fadeOut();let e=new Date;e.setTime(e.getTime()+30*60*1e3);r.cookie("CL_SOCIALS_SUBS","socials",{path:"/",expires:e})});r(".social-box").on("click","a",function(){r(this).closest(".social-box").fadeOut();let e=new Date;e.setTime(e.getTime()+720*60*1e3);r.cookie("CL_SOCIALS_SUBS","socials",{path:"/",expires:e})});if(typeof r.cookie==="function"&&!r.cookie("CL_SURVEY_1")){r(".survey-box").fadeIn()}r(".survey-box-close").on("click",function(){r(this).closest(".survey-box").fadeOut();let e=new Date;e.setTime(e.getTime()+120*60*1e3);r.cookie("CL_SURVEY_1","socials",{path:"/",expires:e})});r(".survey-box").on("click","a",function(){r(this).closest(".survey-box").fadeOut();let e=new Date;e.setTime(e.getTime()+1440*60*1e3);r.cookie("CL_SURVEY_1","socials",{path:"/",expires:e})});if(1===2&&typeof r.iframeTracker==="object"){interval_ad_id=window.setInterval(function(){if(r("iframe[id^=google_ads_iframe_]").length>0){r("iframe[id^=google_ads_iframe_]").each(function(e,t){if(!r(t).hasClass("cl-loaded")&&/(apl\/inter_)/i.test(r(t).attr("id"))===false){r(t).addClass("cl-loaded");r(t).iframeTracker({blurCallback:function(){if(typeof r.cookie==="function"){let e=new Date;e.setTime(e.getTime()+60*60*1e3);r.cookie("wordpress_theme_465488541654",btoa(Math.round(e.getTime()/1e3)),{path:"/",expires:e})}setTimeout(function(){r(".ad_item_box").each(function(e,t){t.remove()});r("[id^=google_ads_iframe_]").each(function(e,t){t.remove()})},1e3)}})}})}},1e3)}a.on("scroll",function(){e=true});setInterval(function(){if(e){c();e=false}},10)});function c(){let e=r(this).scrollTop();if(Math.abs(i-e)<=s)return;if(e>i&&e>o){r("#header").addClass("header-onscroll")}else{if(e+a.height()<t.height()){r("#header").removeClass("header-onscroll")}}i=e}a.on("scroll",n);a.on("resize",n);a.on("load",n);a.ajaxSuccess(n)}(jQuery);