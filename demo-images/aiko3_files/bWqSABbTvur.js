if (self.CavalryLogger) { CavalryLogger.start_js(["OTajr"]); }

__d("LiveMapEntryPointsEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({APPS:"bookmarks",FAVORITES:"favorites",ENDSCREEN:"endscreen",TRENDING:"trending",BLUEBAR:"bluebar",NUX:"nux",FACEBAR_TYPEAHEAD:"br_tf",SHAREABLE:"shareable",VIDEO_HOME:"video_home",LIVE_DISCOVERY:"live_discovery"})}),null);
__d("LiveMapEntryPointsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMPRESSION:"impression",CLICKED:"clicked",EMPTY_UNIT:"empty_unit",VIEWER_COUNT:"viewer_count"})}),null);
__d("LiveMapEntryPointsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LiveMapEntryPointsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setViewerCount=function(a){this.$1.viewer_count=a;return this};c={entry_point:!0,event:!0,vc:!0,viewer_count:!0};e.exports=a}),null);
__d("LiveMapEntryPointsLoggerController",["LiveMapEntryPointsEnum","LiveMapEntryPointsEvent","LiveMapEntryPointsTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={logEndscreenImpression:function(){new(b("LiveMapEntryPointsTypedLogger"))().setEvent(b("LiveMapEntryPointsEvent").IMPRESSION).setEntryPoint(b("LiveMapEntryPointsEnum").ENDSCREEN).log()}};e.exports=a}),null);
__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setLikeSource=function(a){this.$1.like_source=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={event:!0,like_source:!0,page_id:!0};e.exports=a}),null);
__d("KeyframeAnimation",["invariant","CSS","ReactTransitionEvents","UserAgent","nullthrows","queryThenMutateDOM","uniqueID"],(function(a,b,c,d,e,f,g){__p&&__p();var h="KeyframeAnimation-",i="animation-";function j(a){"use strict";__p&&__p();this.$3=a;this.$8=!0;this.$5=new Map();this.$5.set("animation-name",h+b("uniqueID")());this.$4=new Map();if(!j.$1){a=document.createElement("style");document.head.appendChild(a);a=b("nullthrows")(a.sheet);a instanceof CSSStyleSheet||g(0,920);j.$1=a;j.$2=new Map()}this.$9=b("UserAgent").isEngine("WebKit")?"-webkit-":""}j.prototype.defineKeyframes=function(a){"use strict";__p&&__p();a=Object.entries(a);for(var b=0;b<a.length;b++){var c=a[b],d=c[0];c=c[1];d=parseFloat(d,10);d>=0&&d<=100||g(0,921);var e="";for(var c=Object.entries(c).sort(),f=Array.isArray(c),h=0,c=f?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(h>=c.length)break;i=c[h++]}else{h=c.next();if(h.done)break;i=h.value}i=i;var j=i[0];i=i[1];e+=j+": "+i+";"}this.$4.set(d,e)}return this};j.prototype.defineKeyframe=function(a,b){"use strict";__p&&__p();a=parseFloat(a,10);a>=0&&a<=100||g(0,921);var c="";for(var b=Object.entries(b).sort(),d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;var h=f[0];f=f[1];(h.substring(0,i.length)===i||h==="transform")&&(h=this.$9+h);c+=h+": "+f+";"}this.$4.set(a,c);return this};j.prototype.setDirection=function(a){"use strict";this.$5.set("animation-direction",a);return this};j.prototype.setDuration=function(a){"use strict";this.$5.set("animation-duration",a+"s");return this};j.prototype.setTimingFunction=function(a){"use strict";this.$5.set("animation-timing-function",a);return this};j.prototype.setIterationCount=function(a){"use strict";this.$5.set("animation-iteration-count",a+"");return this};j.prototype.setFillMode=function(a){"use strict";this.$5.set("animation-fill-mode",a);return this};j.prototype.setAnimationDelay=function(a){"use strict";this.$5.set("animation-delay",a+"s");return this};j.prototype.setFinishedCallback=function(a){"use strict";this.$6=a;return this};j.prototype.setMemoize=function(a){"use strict";this.$8=a;return this};j.prototype.start=function(){"use strict";__p&&__p();this.$5.has("animation-duration")||g(0,922);if(this.$7){this.restartAnimation();return}var a=this.$3,c=this.$10(),d=this.$11(c),e;if(this.$8&&j.$2.has(d)){var f=b("nullthrows")(j.$2.get(d));this.$5.set("animation-name",f);e=f}else j.$1.insertRule(c,j.$1.cssRules.length),e=b("nullthrows")(this.$5.get("animation-name")),this.$8&&j.$2.set(d,e);f=this.$12(e);(!this.$8||!j.$2.has(f))&&(j.$1.insertRule(f,j.$1.cssRules.length),this.$8&&j.$2.set(f,e));b("queryThenMutateDOM")(function(){},function(){this.$13(),b("CSS").addClass(a,e)}.bind(this))};j.prototype.restartAnimation=function(){"use strict";var a=this.$3;b("CSS").removeClass(a,b("nullthrows")(this.$5.get("animation-name")));a.offsetWidth;this.$7=!1;b("CSS").addClass(a,b("nullthrows")(this.$5.get("animation-name")))};j.prototype.$13=function(){"use strict";b("ReactTransitionEvents").addEndEventListener(this.$3,this.$14.bind(this))};j.prototype.$12=function(a){"use strict";__p&&__p();var b="";b+="."+a+" {";for(var a=this.$5,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];b+=f+": "+e+";"}b+="}";return b};j.prototype.$10=function(){"use strict";__p&&__p();var a=this.$5.get("animation-name"),c;b("UserAgent").isEngine("WebKit")?c="@-webkit-keyframes":c="@keyframes";c=c+" "+a+" {";for(var a=this.$4,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];c+=g+"% {"+f+"}"}return c+"}"};j.prototype.$14=function(){"use strict";this.$7||(this.$6&&this.$6(this.$3),this.$7=!0)};j.prototype.$11=function(a){"use strict";return a.substring(a.indexOf("{")+1).toLowerCase().replace(/\s+/g,"")};e.exports=j}),null);
__d("CSSAnimationBuilder",["KeyframeAnimation"],(function(a,b,c,d,e,f){a={keyframeAnimation:function(a){return new(b("KeyframeAnimation"))(a)}};e.exports=a}),null);
__d("EgoActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMP:1,CLICK:2,CONVERSION:4,SUPPRESS:8,NEXT:16,ERROR:32,XOUT:24,NONE:0})}),null);
__d("EgoPageServiceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAN:"fan",UNFAN:"unfan",PAGE_VIEW:"page_view",FRIEND_VIEW:"friend_view",SEE_ALL:"see_all",ADD_INTEREST:"add_interest",CONTEXT_ITEM:"tap_context_item",BOOST_POST:"tap_boost_post",WATCH_AS_PAGE:"watch_as_page",UNWATCH_AS_PAGE:"unwatch_as_page",SHOP_VIEW:"shop_view",MESSAGE:"message",FOLLOW:"follow",UNFOLLOW:"unfollow",SUBSCRIBE:"subscribe"})}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","EgoActionType","EgoPageServiceConstants","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:b("EgoPageServiceConstants").FAN,action_type:b("EgoActionType").CONVERSION};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("UFIReactionsAnimatedKeyframesIcon.react",["Keyframes.react","React","UFIReactionsKeyframesAssets","UFIReactionTypes"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.supportsReaction=function(a){"use strict";return!!b("UFIReactionsKeyframesAssets").reactions[a]};a.prototype.render=function(){"use strict";var a=this.props,c=a.animate,d=a.className,e=a.maxSize,f=a.reactionID;a=a.usePackage;var g=b("UFIReactionsKeyframesAssets").initialProgress[f]||0,h=a?b("UFIReactionsKeyframesAssets")["package"].name:undefined,i=a?b("UFIReactionsKeyframesAssets")["package"].ids[f]:undefined;a=a&&i!=null?b("UFIReactionsKeyframesAssets")["package"].uri:b("UFIReactionsKeyframesAssets").reactions[f];return a?b("React").createElement(b("Keyframes.react"),{projectName:"feedback_reactions",assetName:b("UFIReactionTypes").reactions[f].name,className:d,source:a,width:e,height:e,playing:c,initialProgress:g,resetOnPause:!0,unstable_packageName:h,unstable_packageIndex:i}):b("React").createElement("div",{style:{width:e,height:e}})};function a(){"use strict";g.apply(this,arguments)}a.defaultProps={usePackage:!1};e.exports=a}),null);
__d("PublicLiveMapConstants",["cx","VideoPlayerLoggerSource"],(function(a,b,c,d,e,f,g){"use strict";a={DEFAULT_MAP_ZOOM:4,POPUP_POSITION_OFFSET:[0,0],POPUP_OPEN_TIMEOUT_MS:100,HOVER_INTENT_TIMEOUT_MS:100,DEBOUNCE_TIMER_MS:400,MINIMUM_VIDEO_SIZE_PX:400,COMMENT_INPUT_HEIGHT:48,TOP_N_TO_SHOW_IN_SIDEBAR:20,NUMBER_OF_CACHE_LEVELS:3,NUMBER_OF_VIEWERS_TO_SHOW:200,MARKER_STATUS:{SPECIAL_EVENT:"special_event"},FB_HEADER_HEIGHT:42,BROADCAST_MARKER_OPTIONS:{stroke:!1,fill:"true",radius:4,pointerEvents:"all"},NON_INTERACTIVE_MARKER_OPTIONS:{stroke:!1,fill:"true",fillOpacity:1,radius:2,pointerEvents:"none"},VIEWER_MARKER_OPTIONS:{stroke:!1,fill:"true",fillOpacity:1,radius:3,pointerEvents:"none"},VIEWER_LINE_OPTIONS:{color:"#1c4f8c",weight:.9,opacity:.5,smoothFactor:0,pointerEvents:"none"},DEFAULT_VIDEOPORT_SIZE:{width:900,height:600},VIDEO_PLAYER_DIALOG:{VERT_PADDING:320,HORIZ_PADDING:320,COMMENT_WIDTH:350},TOOLTIP:{OFFSCREEN:-500,DEFAULT:{LEFT:-109,TOP:-110},BOUNDS:{LEFT_LIMIT:180,RIGHT_LIMIT:250,TOP_LIMIT:290},VIDEO_DIMENSIONS:{MAX_WIDTH:368,TOOLTIP_SIZE:218},DESCRIPTION_LINE_LENGTH:30,DESCRIPTION_LINE_HEIGHT:20,LEFT_EDGE_ADJUST:5,RIGHT_EDGE_ADJUST:-10,TOP_EDGE_ADJUST:28,SIDEBAR:{TOP:310,LEFT:265,RIGHT:"auto"}},MAP_CENTER_OPTIONS:{AMERICAS_CENTER:[17,-40],AFRO_EURO_CENTER:[20,0],APAC_CENTER:[10,116]},MAP_BOUNDS:[[-85,-Infinity],[85,+Infinity]],STANDARD_MAP_BOUNDS:{x:-180,y:-90,width:360,height:180},STANDARD_MAP_SEARCH_BOX:{x1:-180,y1:-90,x2:180,y2:90},POPULARITY_MARKERS:{ONE:{className:"_3avk _3avl",iconSize:[12,12],iconAnchor:[6,6]},TWO:{className:"_3avq _3avl",iconSize:[16,16],iconAnchor:[8,8]},THREE:{className:"_3avr _3avl",iconSize:[20,20],iconAnchor:[10,10]},FOUR:{className:"_1iq1 _3avl",iconSize:[20,20],iconAnchor:[10,10]}},SPECIAL_EVENT_MARKER:{className:"_t0m _3avl",iconSize:[20,20],iconAnchor:[10,10]},ZOOM_CONTROLS:{vertical:"bottom",horizontal:"right"},VIEW_MODE:{MAP_VIEW:"map_view",LIST_VIEW:"list_view"},ZOOM_CUTOFF_FOR_CACHE:{DYNAMIC:6,LEVEL_2:5,LEVEL_3:6},POLLING_VIDEO_COUNT:{LEVEL_0:300,LEVEL_1:300,LEVEL_2:400,DYNAMIC:100},MIN_VIEWERS_FOR_DYNAMIC_FETCH:0,MAX_VIEWERS_FOR_DYNAMIC_FETCH:6,isInlinePlayer:function(a){return a===b("VideoPlayerLoggerSource").LIVE_MAP_SIDEBAR||a===b("VideoPlayerLoggerSource").LIVE_MAP_LISTVIEW||a===b("VideoPlayerLoggerSource").LIVE_MAP_TOOLTIP||a===b("VideoPlayerLoggerSource").LIVE_MAP_TOOLTIP_FROM_LISTVIEW||a===b("VideoPlayerLoggerSource").LIVE_MAP_TOOLTIP_FROM_WEBGL||a===b("VideoPlayerLoggerSource").LIVE_MAP_TOOLTIP_FROM_MAP}};e.exports=a}),null);
__d("XLiveResetViewerCountAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/viewercount/reset/",{})}),null);
__d("XVideoLiveViewCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/liveviewcount/",{player_origin:{type:"Enum",enumType:1},video_id:{type:"String",required:!0},source:{type:"String",required:!0},unmuted:{type:"Bool",defaultValue:!0},read_only:{type:"Bool",defaultValue:!1}})}),null);
__d("VideoWithLiveBroadcast",["AsyncRequest","BanzaiODS","HTML","Run","SubscriptionsHandler","VideoPlayerLoggerEvent","XLiveResetViewerCountAsyncController","XVideoLiveViewCountController"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$8=null,this.$5=a,this.$5.isState("playing")&&this.$9(),this.$2=!1,this.$1=!0,this.$6=null,this.$4=new(b("SubscriptionsHandler"))(),this.$4.addSubscriptions(a.addListener("beginPlayback",this.$9.bind(this)),a.addListener("pausePlayback",this.$10.bind(this)),a.addListener("updateStatus",this.$11.bind(this)),a.addListener("finishPlayback",this.$12.bind(this)),a.addListener("unmuteVideo",this.$13.bind(this)),a.addListener("muteVideo",this.$14.bind(this))),a.registerOption("VideoWithLiveBroadcast","viewCount",this.getViewCount.bind(this)),a.registerOption("VideoWithLiveBroadcast","isLive",function(){return!0}),b("Run").onLeave(function(){return this.leave()}.bind(this))}a.prototype.leave=function(){"use strict";this.$15(),this.$4.release()};a.prototype.getViewCount=function(){"use strict";return this.$6};a.prototype.$16=function(a){"use strict";this.$6!=a&&(this.$6=a,this.$5.emit("VideoWithLiveBroadcast/viewCountChange",a))};a.prototype.$12=function(){"use strict";this.$5.logEvent(b("VideoPlayerLoggerEvent").PLAYING_LIVE_STOPPED),this.$8=null,this.$15()};a.prototype.$17=function(){"use strict";if(this.$7)return;this.$18();this.$7=setInterval(function(){return this.$18()}.bind(this),3e3)};a.prototype.$11=function(a){"use strict";this.$5.isState("playing")&&(this.$8==null&&(this.$8=a.position),this.$8+3<=a.position&&(this.$5.logEvent(b("VideoPlayerLoggerEvent").PLAYED_FOR_THREE_SECONDS),this.$8=Infinity)),this.$5.isState("playing")||(this.$3||(b("BanzaiODS").bumpEntityKey("www_live_concurrent_viewer","non_playing_update_status"),this.$3=!0),this.$1&&!this.$2&&(this.$2=!0))};a.prototype.$15=function(){"use strict";this.$7&&clearInterval(this.$7),this.$7=null};a.prototype.$18=function(){"use strict";this.$19(function(a){a=b("HTML").replaceJSONWrapper(a).getRootNode();this.$16(a)}.bind(this))};a.prototype.$19=function(a){"use strict";this.$5.emit("VideoWithLiveBroadcast/poll");var c=b("XVideoLiveViewCountController").getURIBuilder().setString("video_id",this.$5.getVideoID()).setString("source",this.$5.getSource()).setEnum("player_origin",this.$5.getPlayerOrigin()).setBool("unmuted",!this.$5.isMuted()).getURI();new(b("AsyncRequest"))().setMethod("GET").setURI(c).setReadOnly(!0).setHandler(function(b){return a(b&&b.payload)}).send()};a.prototype.$9=function(){"use strict";if(this.$5.isFacecastAudio()&&(this.$5.isMuted()||!this.$5.isState("playing")))return;this.$8=null;this.$1&&(this.$5.logEvent(b("VideoPlayerLoggerEvent").PLAYING_LIVE_STARTED),this.$1=!1,b("BanzaiODS").bumpEntityKey("www_live_concurrent_viewer","begin_playback"),this.$2||b("BanzaiODS").bumpEntityKey("www_live_concurrent_viewer","begin_playback_without_early_polling"));this.$17()};a.prototype.$10=function(){"use strict";this.$8=null,this.$15()};a.prototype.$13=function(){"use strict";if(!this.$5.isFacecastAudio())return;this.$15();this.$9()};a.prototype.$14=function(){"use strict";if(!this.$5.isFacecastAudio())return;new(b("AsyncRequest"))().setMethod("POST").setURI(b("XLiveResetViewerCountAsyncController").getURIBuilder().getURI()).setData({video_id:this.$5.getVideoID()}).send()};e.exports=a}),null);
__d("VideoWithVODBroadcast",[],(function(a,b,c,d,e,f){function a(a){"use strict";a.registerOption("VideoWithVODBroadcast","isLiveVOD",function(){return!0})}e.exports=a}),null);
__d("FeedbackReactionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,JACKO:9,CONFUSED:10,DOROTHY:11,TOTO:12,SELFIE:13,FLAME:14,PLANE:15})}),null);