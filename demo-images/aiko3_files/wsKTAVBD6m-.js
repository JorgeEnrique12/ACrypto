if (self.CavalryLogger) { CavalryLogger.start_js(["7YG2R"]); }

__d("ComposedEntityMutabilityToName",[],(function(a,b,c,d,e,f){e.exports={0:"MUTABLE",1:"IMMUTABLE",2:"SEGMENTED"}}),null);
__d("ComposedEntityTypeToName",[],(function(a,b,c,d,e,f){e.exports={0:"MENTION",1:"LINK",2:"IMAGE",3:"VIDEO",4:"EMOTICON",5:"TOKEN",6:"HASHTAG",7:"IMPLICIT_LINK",8:"EMBED",9:"EMOJI",10:"MATH",11:"HIGHLIGHT",12:"DELIGHT",13:"TEMPLATE_VARIABLE",14:"ASSISTANT_TYPEAHEAD"}}),null);
__d("XMessagingGetEmojiRecentUsageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/emoji_recent_usage/",{})}),null);
__d("EmojiServerRequests",["Promise","AsyncRequest","XMessagingGetEmojiRecentUsageController"],(function(a,b,c,d,e,f){"use strict";a={fetchTrayData:function(a){return g(b("XMessagingGetEmojiRecentUsageController").getURIBuilder().getURI(),a,!0)}};function g(a,c,d){return new(b("Promise"))(function(c,e){return new(b("AsyncRequest"))(a).setHandler(function(a){return c(a.getPayload())}).setAllowCrossPageTransition(d).send()}).then(c)}e.exports=a}),null);
__d("XMessagingGetEmojiColorPrefController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/get_emoji_color/",{})}),null);
__d("XMessagingSetEmojiColorPrefController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messaging/set_emoji_color/",{})}),null);
__d("EmojiState",["fbt","AsyncRequest","EmojiActions","EmojiServerRequests","MessengerSupportedEmojiUtils","XMessagingGetEmojiColorPrefController","XMessagingSetEmojiColorPrefController","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j;a={onTrayDataReady:function(a){j||(j=b("EmojiServerRequests").fetchTrayData(function(a){i=a})),b("promiseDone")(j,function(){a(),b("EmojiActions").loadedTrayData()})},getEmojiColor:function(){var a=b("XMessagingGetEmojiColorPrefController").getURIBuilder().getURI();new(b("AsyncRequest"))(a).setMethod("POST").setHandler(function(a){b("EmojiActions").emojiColorReady(a.payload)}).send()},changeEmojiColor:function(a){var c=b("XMessagingSetEmojiColorPrefController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setMethod("POST").setData({color:a}).send()},addMRUCategory:function(){if(i){var a=i.map(function(a){return b("MessengerSupportedEmojiUtils").getSupportedEmojiCodesArray(a)}).filter(function(a){return!!a});h={name:g._("Enviados recientemente"),emojis:a,icon:[128340]};b("EmojiActions").updateTrayData();i=null}},_addRecentlyUsedEmoji:function(a){__p&&__p();var c=h&&h.emojis;if(!c)return;var d=function(b){var d=a[b];for(var b=0;b<c.length;++b)if(c[b].length==d.length&&c[b].every(function(a,b){return a===d[b]})){c.splice(b,1);break}c.unshift(d)};for(var e=0;e<a.length;++e)d(e);b("EmojiActions").updateTrayData()},getMRUCategory:function(){h||this.addMRUCategory();return h},updateRecentlyUsed:function(a){if(!h){this.addMRUCategory();return}this._addRecentlyUsedEmoji(a)}};e.exports=a}),null);
__d("EmojiStateStore",["EmojiActions","EmojiDispatcher","EmojiState","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("EmojiDispatcher")),b("EmojiState").getEmojiColor(),this.$EmojiStateStore2=!1}a.prototype.getState=function(){var a=b("EmojiState").getMRUCategory();return{currentCategory:this.$EmojiStateStore4,emojiColor:this.$EmojiStateStore3,mruCategory:[a],threadID:this.$EmojiStateStore1,trayDataReady:this.$EmojiStateStore2}};a.prototype.__onDispatch=function(a){__p&&__p();var c=b("EmojiActions").Types;switch(a.type){case c.GET_EMOJI_COLOR:b("EmojiState").getEmojiColor();break;case c.EMOJI_COLOR_READY:this.$EmojiStateStore3=a.color;break;case c.CHANGE_EMOJI_COLOR:b("EmojiState").changeEmojiColor(a.color);this.$EmojiStateStore3=a.color;break;case c.CHANGE_CURRENT_CATEGORY:this.$EmojiStateStore4=a.currentCategory;break;case c.UPDATE_TRAY_DATA:break;case c.TRAY_DATA_READY:this.$EmojiStateStore2=!0;break}this.__emitChange()};a.__moduleID=e.id;e.exports=new a()}),null);
__d("MessagingThreadEventTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setActiveTimeMs=function(a){this.$1.active_time_ms=a;return this};a.prototype.setClientEventTimeMs=function(a){this.$1.client_event_time_ms=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPageData=function(a){this.$1.page_data=b("GeneratedLoggerUtils").serializeMap(a);return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setScriptPath=function(a){this.$1.script_path=a;return this};a.prototype.setSource=function(a){this.$1.source=a;return this};a.prototype.setThreadID=function(a){this.$1.thread_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={active_time_ms:!0,client_event_time_ms:!0,event:!0,page_data:!0,page_id:!0,script_path:!0,source:!0,thread_id:!0,vc:!0};e.exports=a}),null);
__d("MessengerAdsWebTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setActionID=function(a){this.$1.action_id=a;return this};a.prototype.setAdClientToken=function(a){this.$1.ad_client_token=a;return this};a.prototype.setAdID=function(a){this.$1.ad_id=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setIndex=function(a){this.$1.index=a;return this};a.prototype.setIsSponsored=function(a){this.$1.is_sponsored=a;return this};a.prototype.setItemID=function(a){this.$1.item_id=a;return this};a.prototype.setMessageID=function(a){this.$1.message_id=a;return this};a.prototype.setMessageTimestamp=function(a){this.$1.message_timestamp=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={action_id:!0,ad_client_token:!0,ad_id:!0,event:!0,index:!0,is_sponsored:!0,item_id:!0,message_id:!0,message_timestamp:!0,page_id:!0,vc:!0};e.exports=a}),null);
__d("WorkChatActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAppID=function(a){this.$1.app_id=a;return this};a.prototype.setAppVersion=function(a){this.$1.app_version=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setGroupID=function(a){this.$1.group_id=a;return this};a.prototype.setHscrollPosition=function(a){this.$1.hscroll_position=a;return this};a.prototype.setThreadIds=function(a){this.$1.thread_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={app_id:!0,app_version:!0,event:!0,group_id:!0,hscroll_position:!0,thread_ids:!0,vc:!0};e.exports=a}),null);
__d("MercuryShareAttachmentSnippet.react",["MercuryShareAttachmentReactShape","MercuryShareStyleMap","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=b("MercuryShareStyleMap").getStyleFactory(this.props.attachment);if(a.factory&&!!a.factory.getSnippetComponent){var c=a.factory.getSnippetComponent();return b("React").createElement(c,babelHelpers["extends"]({},this.props,{attachment:a.attachment}))}return null};function a(){g.apply(this,arguments)}a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),isSenderViewer:c.bool,senderName:c.oneOfType([c.string,c.object])};e.exports=a}),null);
__d("ComposedEntityMutability",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MUTABLE:0,IMMUTABLE:1,SEGMENTED:2})}),null);
__d("MessengerEditorStateManager",["CacheStorage","ComposedEntityMutability","ComposedEntityMutabilityToName","ComposedEntityTypeToName","DraftEntityInstance","EditorState","FBLogger","LogHistory","MessengerConstants","SelectionState","decodeBlocks","encodeBlocks","gkx","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ComposedEntityMutability").IMMUTABLE,h=b("LogHistory").getInstance("messenger_editor_state_manager"),i=new(b("CacheStorage"))("localstorage"),j=new(b("CacheStorage"))("memory"),k=!1,l;a={get:function(a){__p&&__p();if(!a)return this._getEmptyEditorState();if(a===b("MessengerConstants").NEW_THREAD_KEY)return l||this._getEmptyEditorState();var c=i.get(a,!1);k&&(c?(j.set(a,c),i.remove(a)):c=j.get(a,!1));if(!c)return this._getEmptyEditorState();a=c.encodedBlocks;var d=b("mapObject")(a.entityMap,function(a,c){return new(b("DraftEntityInstance"))({type:b("ComposedEntityTypeToName")[a.type],mutability:b("ComposedEntityMutabilityToName")[g],data:a.data})});a=b("decodeBlocks")(a.blocks,d);d=b("EditorState").createWithContent(a);return b("EditorState").acceptSelection(d,new(b("SelectionState"))(c.selection))},set:function(a,c){if(a===b("MessengerConstants").NEW_THREAD_KEY){l=c;return}var d=b("encodeBlocks")(c.getCurrentContent());c=c.getSelection();var e=c.toJS(),f=k?j:i;f=f.set(a,{encodedBlocks:d,selection:e});f||(this._logWriteError(a),this._switchToMemoryStore(a,d,c))},_logWriteError:function(a){var c=i.getLastSetExceptionMessage(),d=i.getStorageKeyCount();b("FBLogger")("messenger_dot_com").warn("Fail to write to MessengerEditorState %s  %s",c,d);h.debug("set_editor_state_fail",JSON.stringify({threadID:a,error:c,keysCount:d}))},_switchToMemoryStore:function(a,c,d){if(b("gkx")("678601")&&!k){b("FBLogger")("messenger_dot_com").warn("Switching to MemoryStorage");h.debug("Switching to memoryStorage");k=!0;d=d.toJS();j.set(a,{encodedBlocks:c,selection:d})}},_getEmptyEditorState:function(){var a=b("EditorState").createEmpty();return b("EditorState").forceSelection(a,a.getSelection())}};e.exports=a}),null);
__d("MessagingThreadEventType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTIVE:"active",INACTIVE:"inactive"})}),null);
__d("MessagingThreadSourceName",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_NUB:"chat_nub",MESSENGER:"messenger"})}),null);
__d("MessengerLoggerUtils",["MercuryIDs","MessagingThreadEventType","MessagingThreadEventTypedLogger","MessagingThreadSourceName","ScriptPath","pageID"],(function(a,b,c,d,e,f){a={logThreadChangeEvent:function(a,c,d,e){d.activeThreadID&&a&&this.log({activeThreadID:d.activeThreadID,event:b("MessagingThreadEventType").INACTIVE,clientEventTimeMs:c,activeTimeMs:c-a}),e.activeThreadID&&this.log({activeThreadID:e.activeThreadID,event:b("MessagingThreadEventType").ACTIVE,clientEventTimeMs:c,activeTimeMs:0})},log:function(a){var c=b("MercuryIDs").tokenize(a.activeThreadID.toString()),d=b("ScriptPath").getPageInfo();new(b("MessagingThreadEventTypedLogger"))().setEvent(a.event).setClientEventTimeMs(a.clientEventTimeMs).setActiveTimeMs(a.activeTimeMs).setPageID(b("pageID")).setPageData(d?d.extraData:{}).setThreadID(c.value).setSource(b("MessagingThreadSourceName").MESSENGER).log()}};e.exports=a}),null);
__d("MessengerURIStore",["MessengerActions","MessengerLoggerUtils","MessengerStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){g.constructor.call(this),this.$MessengerURIStore1={activeThreadID:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,serverThreadID:null,extraQueryParams:null},this.$MessengerURIStore2=babelHelpers["extends"]({},this.$MessengerURIStore1),this.$MessengerURIStore4=this.$MessengerURIStore3=null}a.prototype.getState=function(){return this.$MessengerURIStore1};a.prototype.getPrevState=function(){return this.$MessengerURIStore2};a.prototype.__onDispatch=function(a){switch(a.type){case b("MessengerActions").Types.REPLACE_STATE:this.$MessengerURIStore2=this.$MessengerURIStore1;this.$MessengerURIStore4=this.$MessengerURIStore3;this.$MessengerURIStore1=babelHelpers["extends"]({activeThreadID:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,serverThreadID:null,extraQueryParams:null,threadsIDs:null},a.nextState);a=Date.now();this.$MessengerURIStore3=a;b("MessengerLoggerUtils").logThreadChangeEvent(this.$MessengerURIStore4,a,this.$MessengerURIStore2,this.$MessengerURIStore1);this.emitChange();break}};e.exports=new a()}),null);
__d("MessengerComposerActions",["MessengerDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("keyMirror")({ADD_TOKEN:null,REMOVE_TOKEN:null,FOCUS_COMPOSER:null,FOCUS_TYPEAHEAD:null,EXIT_COMPOSE_STATE:null,MOVE_DRAFT:null});a={Types:g,addToken:function(a){b("MessengerDispatcher").dispatch({type:g.ADD_TOKEN,entry:a})},moveDraftToNextThread:function(a){b("MessengerDispatcher").dispatch({type:g.MOVE_DRAFT,threadID:a})},removeToken:function(a){b("MessengerDispatcher").dispatch({type:g.REMOVE_TOKEN,entry:a})},focusComposer:function(){b("MessengerDispatcher").dispatch({type:g.FOCUS_COMPOSER})},focusTypeahead:function(){b("MessengerDispatcher").dispatch({type:g.FOCUS_TYPEAHEAD})},exitComposeState:function(){b("MessengerDispatcher").dispatch({type:g.EXIT_COMPOSE_STATE})}};e.exports=a}),null);
__d("MessengerNewMessagesNoticeReact.bs",["cx","ix","fbt","React","LinkReact.bs","ImageReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j=h("86939"),k=i._("Nuevos mensajes"),l=b("ReasonReact.bs").statelessComponent("MessengerNewMessagesNoticeReact");function m(a,c,d,e){var f=d!==undefined?d:k;return[l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],function(){return b("React").createElement("div",{"aria-hidden":!a,className:"_4wzq"+(a?" _4wzr":"")+(a?"":" _4-je")},b("ReasonReact.bs").element(undefined,undefined,b("LinkReact.bs").make(undefined,undefined,undefined,"_5f0v _4wzs",undefined,undefined,undefined,undefined,undefined,undefined,undefined,c,undefined,undefined,undefined,undefined,undefined,a?0:-1,undefined,undefined,[b("ReasonReact.bs").element(undefined,undefined,b("ImageReact.bs").make("_4wzt",undefined,undefined,undefined,j,undefined,undefined,undefined,undefined,[])),b("React").createElement("div",{className:"_1bqr"},f)])))},l[9],l[10],l[11],l[12]]}a=b("ReasonReact.bs").wrapReasonForJs(l,function(a){return m(a.isOpen,a.onClick,a.label,[])});f.newMessageSrc=j;f.defaultLabel=k;f.component=l;f.make=m;f.jsComponent=a}),null);
__d("WorkChatActivityTypedLogger.bs",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();switch(a){case 0:return"group_sync_new_post_button_click";case 1:return"notifs_jewel_links_click";case 2:return"nav_tab_click";case 3:return"info_panel_profile_link_click";case 4:return"notifs_jewel_click";case 5:return"info_panel_group_sync_top_link_click";case 6:return"info_panel_group_sync_about_link_click";case 7:return"info_panel_group_sync_posts_link_click";case 8:return"info_panel_group_sync_saved_link_click";case 9:return"info_panel_group_sync_events_link_click"}}f.string_of_event=a}),null);
__d("MessengerComposerState",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({step:null,recipients:b("immutable").List()});a.__TCmeta={type:"MessengerComposerState"};e.exports=a}),null);
__d("MessengerComposerSteps",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({NULL:null,SELECT_RECIPIENTS:null,COMPOSE:null});e.exports=a}),null);
__d("MessengerComposerStore",["EditorState","MessengerActions","MessengerComposerActions","MessengerComposerState","MessengerComposerSteps","MessengerConstants","MessengerDispatcher","MessengerEditorStateManager","MessengerStore","MessengerURIStore","MessengerView","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=new(b("MessengerComposerState"))({step:b("MessengerComposerSteps").NULL,recipients:b("immutable").List()});c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){g.constructor.call(this),this.$MessengerComposerStore1=h}a.prototype.getState=function(){return this.$MessengerComposerStore1};a.prototype.__onDispatch=function(a){__p&&__p();b("MessengerDispatcher").waitFor([b("MessengerURIStore").getDispatchToken()]);var c=b("MessengerURIStore").getState().detailView,d=this.$MessengerComposerStore1.recipients,e=this.$MessengerComposerStore1.step,f=null,g=null;switch(a.type){case b("MessengerComposerActions").Types.ADD_TOKEN:if(d.some(function(b){return b.getUniqueID()===a.entry.getUniqueID()}))break;f=d.push(a.entry);break;case b("MessengerComposerActions").Types.REMOVE_TOKEN:var h=a.entry.getUniqueID(),i=d.findIndex(function(a){return a.getUniqueID()===h});i!==-1&&(f=d["delete"](i));break;case b("MessengerComposerActions").Types.FOCUS_COMPOSER:e===b("MessengerComposerSteps").SELECT_RECIPIENTS&&(g=b("MessengerComposerSteps").COMPOSE);break;case b("MessengerComposerActions").Types.FOCUS_TYPEAHEAD:e===b("MessengerComposerSteps").COMPOSE&&(g=b("MessengerComposerSteps").SELECT_RECIPIENTS);break;case b("MessengerActions").Types.REPLACE_STATE:i=b("MessengerURIStore").getPrevState().detailView;i!==b("MessengerView").DETAIL.COMPOSE&&c===b("MessengerView").DETAIL.COMPOSE&&(g=b("MessengerComposerSteps").SELECT_RECIPIENTS);break;case b("MessengerComposerActions").Types.MOVE_DRAFT:b("MessengerEditorStateManager").set(a.threadID,b("MessengerEditorStateManager").get(b("MessengerConstants").NEW_THREAD_KEY));break;case b("MessengerComposerActions").Types.EXIT_COMPOSE_STATE:var j=b("EditorState").createEmpty();setTimeout(function(){b("MessengerEditorStateManager").set(b("MessengerConstants").NEW_THREAD_KEY,b("EditorState").forceSelection(j,j.getSelection()))},0);g=b("MessengerComposerSteps").NULL;f=b("immutable").List();break}(f||g)&&(this.$MessengerComposerStore1=new(b("MessengerComposerState"))({step:g||e,recipients:f||d}),this.emitChange())};e.exports=new a()}),null);
__d("MercuryAttachmentSnippet.react",["cx","fbt","ix","EmoticonsList","Image.react","MercuryAttachment","MercuryAttachmentSnippetRenderer","MercuryAttachmentSnippetType","MercuryAttachmentType","MercuryIDs","MercuryShareAttachmentSnippet.react","MessengerParticipants.bs","MessengerTextWithEmoticons.react","React","StickerConstants","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.$2=function(a){this.$20=a.viewer,this.$21=a.thread.snippet_sender,this.$5=a.thread.snippet_attachments,this.$19=k(this.$21,this.$20)}.bind(this),b}a.prototype.UNSAFE_componentWillMount=function(){this.$1(this.props.thread.snippet_sender),this.$2(this.props)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.$1(a.thread.snippet_sender),this.$2(a)};a.prototype.componentWillUnmount=function(){this.$3()};a.prototype.render=function(){__p&&__p();var a=this.$4(),c=b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(this.$5);switch(c){case b("MercuryAttachmentSnippetType").PHOTO:return this.$6(a);case b("MercuryAttachmentSnippetType").GIF:return this.$7(a);case b("MercuryAttachmentSnippetType").VIDEO:return this.$8(a);case b("MercuryAttachmentSnippetType").AUDIO_CLIP:return this.$9(a);case b("MercuryAttachmentSnippetType").LIKE_STICKER:return this.$10(a);case b("MercuryAttachmentSnippetType").STICKER:return this.$11(a);case b("MercuryAttachmentSnippetType").SHARE:return this.$12(a);case b("MercuryAttachmentSnippetType").GIFT:return this.$13(a);case b("MercuryAttachmentSnippetType").FILE:return this.$14(a);case b("MercuryAttachmentSnippetType").ERROR:return this.$15(a);case b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER:return this.$16(a);default:return this.$17(a)}};a.prototype.$6=function(a){return this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").PHOTO,this.$19,a,this.$5))};a.prototype.$14=function(a){return this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").FILE,this.$19,a,this.$5))};a.prototype.$7=function(a){return this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIF,this.$19,a,this.$5))};a.prototype.$8=function(a){return this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").VIDEO,this.$19,a))};a.prototype.$9=function(a){return this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").AUDIO_CLIP,this.$19,a))};a.prototype.$16=function(a){return b("React").createElement("span",null,b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER,this.$19,a))};a.prototype.$10=function(a){var c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,text:b("EmoticonsList").symbols.like});if(this.$19)return b("React").createElement("span",null,h._("T\u00fa: {conversation_snippet}",[h._param("conversation_snippet",c)]));else return this.props.thread.is_canonical?b("React").createElement("span",null,h._("{conversation_snippet}",[h._param("conversation_snippet",c)])):b("React").createElement("span",null,h._("{sender name}: {conversation_snippet}",[h._param("sender name",a),h._param("conversation_snippet",c)]))};a.prototype.$11=function(a){return b("React").createElement("span",null,b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").STICKER,this.$19,a))};a.prototype.$12=function(a){return this.$5[0].share?b("React").createElement(b("MercuryShareAttachmentSnippet.react"),{attachment:this.$5[0].share,senderName:a,isViewerSender:this.$19}):this.$18(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").SHARE,this.$19,a))};a.prototype.$13=function(a){return b("React").createElement("span",null,b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIFT,this.$19,a))};a.prototype.$17=function(a){return b("React").createElement("span",null,this.$5.filter(function(a){return a.attach_type===b("MercuryAttachmentType").FILE||a.attach_type===b("MercuryAttachmentType").PHOTO||a.attach_type===b("MercuryAttachmentType").VIDEO}).map(function(a,b){return this.$18(a.name,a.icon_type,b)}.bind(this)))};a.prototype.$18=function(a,c,d){c=b("MercuryAttachment").getAttachIconClass(c||this.$5[0].icon_type);c=b("joinClasses")(c,"uiIconText _3l6h");return b("React").createElement("span",{key:d},b("React").createElement("span",{className:c},b("React").createElement(b("Image.react"),{src:i("86988")})),a)};a.prototype.$15=function(a){a=b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").ERROR,this.$19,a);return this.$18(a)};a.prototype.$4=function(){if(!this.$21||this.$19)return null;var a=b("MessengerParticipants.bs").getNow(this.$21);if(!a)return null;var c=b("MercuryIDs").getUserIDFromParticipantID(this.$21);c=this.props.thread.custom_nickname&&this.props.thread.custom_nickname[c];c&&(c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c}));return c?c:a.short_name};a.prototype.$1=function(a){if(!a)return;this.$3();b("MessengerParticipants.bs").getNow(a)||(this.$22=b("MessengerParticipants.bs").get(a,function(a){return this.forceUpdate()}.bind(this)))};a.prototype.$3=function(){this.$22&&b("MessengerParticipants.bs").removeCallback(this.$22)};a.propTypes={thread:c.object.isRequired,viewer:c.string.isRequired};function k(a,c){return!!(a&&b("MercuryIDs").getParticipantIDFromUserID(c)==a)}e.exports=a}),null);
__d("AdPageMessageTypeEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_ADMIN_TEXT:"ad_admin_text",AD_TEXT:"ad_text",AD_BUBBLE:"ad_bubble"})}),null);
__d("MNAdsLoggerEventEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({LINK_CLICK:"messenger_ads_link_click",LINK_CLICK_CTA:"messenger_ads_link_click_cta",MESSAGE_SEEN_THREAD:"messenger_ads_message_seen_thread",MESSAGE_SEEN_INBOX:"messenger_ads_message_seen_inbox",MESSAGE_SEEN_REQUEST:"messenger_ads_message_seen_request",QUICK_REPLY_TAPPED:"messenger_ads_quick_reply_tapped"})}),null);
__d("MNAdsLogMessageUtils",["AdPageMessageTypeEnum","MercuryConfig","MessagingTag","MessengerAdsWebTypedLogger","MNAdsLoggerEventEnum","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryConfig").LOG_INTERVAL_MS||6e4;function a(){this.$1={}}a.prototype.isLoggedWithinInterval=function(a){return this.$1[a]&&this.$1[a]-Date.now()<g?!0:!1};a.prototype.setLoggingTime=function(a){this.$1[a]=Date.now()};a.prototype.logAdsThreadListImpression=function(a){switch(a.folder){case b("MessagingTag").INBOX:this.logWithThreadMetaData(a,b("MNAdsLoggerEventEnum").MESSAGE_SEEN_INBOX);break;case b("MessagingTag").PENDING:this.logWithThreadMetaData(a,b("MNAdsLoggerEventEnum").MESSAGE_SEEN_REQUEST);break;default:return}};a.prototype.logWithThreadMetaData=function(a,event){if(a.last_message_type!==b("AdPageMessageTypeEnum").NON_AD){var c=a.last_message_timestamp+String(event);if(!b("gkx")("678670")||this.isLoggedWithinInterval(c))return;new(b("MessengerAdsWebTypedLogger"))().setEvent(event).setMessageTimestamp(a.last_message_timestamp).setPageID(a.other_user_fbid).log();this.setLoggingTime(c)}};e.exports=new a()}),null);
__d("MercuryThreadSnippet.react",["cx","fbt","MercuryAttachmentSnippet.react","MercuryAttachmentType","MercuryIDs","MessengerTextWithEmoticons.react","MNAdsLogMessageUtils","React","StoryAttachmentStyle","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.shouldComponentUpdate=function(a){return this.props.shouldRenderYou!==a.shouldRenderYou||this.props.thread!==a.thread||this.props.viewer!==a.viewer||this.props.className!==a.className||!b("immutable").is(a.participants,this.props.participants)};a.prototype.render=function(){return b("React").createElement("span",{className:this.props.className},this.$1(),this.$2())};a.prototype.$1=function(){return!this.props.thread.snippet||!j(this.props.thread)?null:b("React").createElement("span",{className:"_j0r"})};a.prototype.$2=function(){__p&&__p();var a,c,d=this.props.thread,e=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),f=d.snippet?d.snippet.toString():null,g=this.props.shouldRenderYou;if(d.snippetCount!=null)return h._({"*":"{number} resultados","_1":"1 resultado"},[h._plural(d.snippetCount,"number")]);c=(c=d)!=null?(c=c.snippet_attachments)!=null?(c=c[0])!=null?c.share:c:c:c;a=(a=c)!=null?(a=a.style_list)!=null?a[0]:a:a;c=(c=c)!=null?c.title:c;if((a===b("StoryAttachmentStyle").INSTANT_GAMES_LEADERBOARD_UPDATE||a===b("StoryAttachmentStyle").INSTANT_GAMES_CUSTOM_UPDATE)&&c)return c;if(d.snippet_attachments&&d.snippet_attachments.length>0&&d.snippet_attachments[0].attach_type!==b("MercuryAttachmentType").SHARE||!d.snippet_sender)return this.$3(f);a=this.$3(f);b("MNAdsLogMessageUtils").logAdsThreadListImpression(d);c=k(d);if(c)return h._("{name}: {conversation_snippet}",[h._param("name",c),h._param("conversation_snippet",a)]);if(d.snippet_sender===e)return!g?a:h._("T\u00fa: {conversation_snippet}",[h._param("conversation_snippet",a)]);if(b("MercuryIDs").isCanonical(d.thread_id)&&!this.props.shouldAlwaysRenderSender)return a;f=this.props.participants.get(d.snippet_sender);if(!f)return a;c=f.short_name||f.name;if(d){e=d.custom_nickname?d.custom_nickname:null;g=b("MercuryIDs").getUserIDFromParticipantID(f.id);e&&g&&e[g]&&(c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:e[g]}))}return!c?a:h._("{name}: {conversation_snippet}",[h._param("name",c),h._param("conversation_snippet",a)])};a.prototype.$3=function(a){if(a&&a.startsWith("?OTR"))return h._("[mensaje codificado]");if(a)return b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:a});a=this.props.thread;return j(a)?b("React").createElement(b("MercuryAttachmentSnippet.react"),{thread:a,viewer:this.props.viewer}):null};function a(){i.apply(this,arguments)}a.propTypes={participants:c.instanceOf(b("immutable").Map).isRequired,shouldAlwaysRenderSender:c.bool,shouldRenderYou:c.bool,thread:c.object.isRequired,viewer:c.string.isRequired};function j(a){return!!(a.snippet_attachments&&a.snippet_attachments.length>0&&!(a.snippet_attachments[0].attach_type===b("MercuryAttachmentType").SHARE&&!a.snippet_attachments[0].share))}function k(a){return a&&a.snippet_attachments&&a.snippet_attachments[0]&&a.snippet_attachments[0].share&&a.snippet_attachments[0].share.target&&a.snippet_attachments[0].share.target.genie_name?a.snippet_attachments[0].share.target.genie_name:null}e.exports=a}),null);
__d("MessengerSortParticipants",[],(function(a,b,c,d,e,f){a={sortAlphabeticalWithAdmins:function(a,b){var c=b.filter(function(b){return!!b&&a&&a.indexOf(b.fbid)!==-1}).toArray().sort(function(a,b){return a.name.localeCompare(b.name)});b=b.filter(function(b){return!!b&&(!a||a.indexOf(b.fbid)===-1)}).toArray().sort(function(a,b){return a.name.localeCompare(b.name)});return c.concat(b)}};e.exports=a}),null);
__d("SphericalPhotoViewerInMessengerThreadBootloaded.react",["cx","BootloadedComponent.react","CssBackgroundImage.react","JSResource","PhotoProjection","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("PhotoProjection").PERSPECTIVE;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();if(this.props.photoEncodings&&this.props.thumbnail){var a=this.props.photoEncodings.find(function(a){return a.projection_type===i}),c=null,d=null;if(a&&a.thumbnails&&a.thumbnails.length>0){a=a.thumbnails;c=a[0]?a[0].uri:null;d=a[1]?a[1].uri:null}if(this.props.useRenderer&&this.props.width&&this.props.height&&this.props.fbid){a=d||c||this.props.thumbnail;return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("SphericalPhotoViewerInMessengerThreadWrapper.react").__setRef("SphericalPhotoViewerInMessengerThreadBootloaded.react"),bootloadPlaceholder:b("React").createElement(b("CssBackgroundImage.react"),{backgroundPosition:"center",imageURI:a,className:"_3v3t"}),height:this.props.height,width:this.props.width,fbid:this.props.fbid,thumbnail:a,photoEncodings:this.props.photoEncodings,isVisible:this.props.isVisible,onClickHandler:this.props.onClickHandler})}else{a=c||d||this.props.thumbnail;return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("SphericalPhotoMessengerThumbnail.react").__setRef("SphericalPhotoViewerInMessengerThreadBootloaded.react"),bootloadPlaceholder:b("React").createElement(b("CssBackgroundImage.react"),{backgroundPosition:"center",imageURI:a,className:"_3v3t"}),photoEncodings:this.props.photoEncodings,thumbnail:a})}}return null};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("EmojiSticker.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};a.prototype.render=function(){var a=this.props.emojiImage?this.props.emojiImage:b("React").createElement(b("Image.react"),{src:this.props.sourceURI});return b("React").createElement("div",{"aria-label":this.props.emoji,className:b("joinClasses")(this.props.className,"_383m"),tabIndex:"0"},a)};function a(){h.apply(this,arguments)}a.propTypes={emoji:c.string,emojiImage:c.any,onAttachmentLoad:c.func,sourceURI:c.string.isRequired};e.exports=a}),null);
__d("XStickerInTrayController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stickers/in_tray/",{pack_id:{type:"Int",required:!0}})}),null);
__d("StickersPackInTray",["Promise","AsyncRequest","XStickerInTrayController","react-relay/classic/query/createRelayQuery","react-relay/classic/query/RelayQL","react-relay/classic/store/RelayStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={onIsPackInTray:function(a,c,d){__p&&__p();c=b("react-relay/classic/query/createRelayQuery")(function(){return{children:[{children:[{calls:[{kind:"Call",metadata:{type:"StickerInterfaces"},name:"interface",value:{kind:"CallVariable",callVariableName:"stickerInterface"}},{kind:"Call",metadata:{type:"Int"},name:"first",value:{kind:"CallValue",callValue:1e4}}],children:[{children:[{children:[{fieldName:"id",kind:"Field",metadata:{isRequisite:!0},type:"ID"}],fieldName:"node",kind:"Field",metadata:{canHaveSubselections:!0,inferredRootCallName:"node",inferredPrimaryKey:"id",isRequisite:!0},type:"StickerPack"},{fieldName:"cursor",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"ID"}],fieldName:"edges",kind:"Field",metadata:{canHaveSubselections:!0,isPlural:!0},type:"PacksInTrayEdge"},{children:[{fieldName:"has_next_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"},{fieldName:"has_previous_page",kind:"Field",metadata:{isGenerated:!0,isRequisite:!0},type:"Boolean"}],fieldName:"page_info",kind:"Field",metadata:{canHaveSubselections:!0,isGenerated:!0,isRequisite:!0},type:"PageInfo"}],fieldName:"tray_packs",kind:"Field",metadata:{canHaveSubselections:!0,isConnection:!0},type:"PacksInTrayConnection"}],fieldName:"sticker_store",kind:"Field",metadata:{canHaveSubselections:!0},type:"StickerStore"}],fieldName:"viewer",kind:"Query",metadata:{},name:"StickersPackInTray",type:"Viewer"}}(),{stickerInterface:c});var e=b("react-relay/classic/store/RelayStore").readQuery(c);e=e&&e.length>0?e[0]:null;if(e&&e.sticker_store&&e.sticker_store.tray_packs&&e.sticker_store.tray_packs.edges)return new(b("Promise"))(function(b,c){return b({in_sticker_tray:e.sticker_store.tray_packs.edges.filter(function(b){return b.node.id===a}).length>0})}).then(d);var f=b("XStickerInTrayController").getURIBuilder().setInt("pack_id",a).getURI();return new(b("Promise"))(function(a,c){return new(b("AsyncRequest"))(f).setHandler(function(b){return a(b.getPayload())}).setAllowCrossPageTransition(!0).send()}).then(d)}};e.exports=a}),null);
__d("MessageShareType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMAGE:"image",PLATFORM_SHARE_CTA:"platform_share_CTA"})}),null);
__d("MessagingThreadCustomizationSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMIN_MSG_CHANGE_LINK:"admin_msg",THREAD_INLINE:"thread_inline",JOURNEY_PROMPT:"journey_prompt",JOURNEY_PROMPT_WRITE_IN:"journey_prompt_write_in",PROMO_LINK:"promo_link",SETTINGS:"thread_settings",USER_INFO_ACTION_SHEET:"user_info_action_sheet",ROOM_CREATION:"room_creation",DELETE_ALL_SETTING:"delete_all_setting",RELATIONSHIP_STATUS_UPDATE:"relationship_status_update",TESTBOT:"testbot",SET_FROM_MESSAGE:"set_from_message",GROUP_NULL_STATE:"group_null_state"})}),null);
__d("MessengerThreadSharedMediaAfterWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1668947383157276"};c.getQueryID=function(){"use strict";return"515216185516880"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("MessengerThreadSharedMediaBeforeWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1712143858865110"};c.getQueryID=function(){"use strict";return"1694317194012102"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("MessengerThreadSharedMediaFindWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1933185426727404"};c.getQueryID=function(){"use strict";return"237087923629184"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("XForwardingNUXSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/chat/forwarding_nux_seen/",{})}),null);
__d("XMessagingForwardAttachmentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mercury/attachments/forward/",{})}),null);
__d("XMessagingPhotoDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mercury/attachments/photo/",{photo_id:{type:"String",required:!0}})}),null);
__d("XMessagingShareAttachmentDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mercury/attachments/share/dialog/",{__asyncDialog:{type:"Int"}})}),null);
__d("XMessagingVideoAttachmentController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/mercury/attachments/video/",{video_id:{type:"String",required:!0},video_container_id:{type:"String",required:!0},width:{type:"Int",required:!0},height:{type:"Int",required:!0},start_muted:{type:"Bool",defaultValue:!1},no_fullscreen:{type:"Bool",defaultValue:!1},load_player_controller:{type:"Bool",defaultValue:!1},hide_controls_on_finish:{type:"Bool",defaultValue:!1},hide_url_menu_option:{type:"Bool",defaultValue:!1},is_share:{type:"Bool",defaultValue:!1},render_play_button:{type:"Bool",defaultValue:!1},start_timestamp:{type:"Int",defaultValue:0}})}),null);
__d("XMessengerPlatformShareCTAController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messages/platform/share/",{})}),null);