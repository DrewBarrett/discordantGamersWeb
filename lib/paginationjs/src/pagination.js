/*
 * pagination.js 2.0.8
 * A jQuery plugin to provide simple yet fully customisable pagination.
 * https://github.com/superRaytin/paginationjs
 *
 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
 */
!function(a,e){function t(a){throw new Error("Pagination: "+a)}function i(a){a.dataSource||t('"dataSource" is required.'),"string"==typeof a.dataSource?void 0===a.totalNumber?t('"totalNumber" is required.'):e.isNumeric(a.totalNumber)||t('"totalNumber" is incorrect. (Number)'):l.isObject(a.dataSource)&&(void 0===a.locator?t('"dataSource" is an Object, please specify "locator".'):"string"==typeof a.locator||e.isFunction(a.locator)||t(a.locator+" is incorrect. (String | Function)"))}function o(a){var t=["go","previous","next","disable","enable","refresh","show","hide","destroy"]
e.each(t,function(e,t){a.off(s+t)}),a.data("pagination",{}),e(".paginationjs",a).remove()}function n(a,e){return("object"==(e=typeof a)?null==a&&"null"||Object.prototype.toString.call(a).slice(8,-1):e).toLowerCase()}void 0===e&&t("Pagination requires jQuery.")
var r="pagination",s="__pagination-"
e.fn.pagination&&(r="pagination2"),e.fn[r]=function(n){if(void 0===n)return this
var c=e(this),u={initialize:function(){var a=this
if(c.data("pagination")||c.data("pagination",{}),!1!==a.callHook("beforeInit")){c.data("pagination").initialized&&e(".paginationjs",c).remove(),a.disabled=!!p.disabled
var t=a.model={pageRange:p.pageRange,pageSize:p.pageSize}
a.parseDataSource(p.dataSource,function(e){if(a.sync=l.isArray(e),a.sync&&(t.totalNumber=p.totalNumber=e.length),t.totalPage=a.getTotalPage(),!(p.hideWhenLessThanOnePage&&t.totalPage<=1)){var i=a.render(!0)
p.className&&i.addClass(p.className),t.el=i,c["bottom"===p.position?"append":"prepend"](i),a.observer(),c.data("pagination").initialized=!0,a.callHook("afterInit",i)}})}},render:function(a){var t=this,i=t.model,o=i.el||e('<div class="paginationjs"></div>'),n=!0!==a
t.callHook("beforeRender",n)
var r=i.pageNumber||p.pageNumber,s=p.pageRange,l=i.totalPage,c=r-s,u=r+s
return u>l&&(u=l,c=l-2*s,c=c<1?1:c),c<=1&&(c=1,u=Math.min(2*s+1,l)),o.html(t.createTemplate({currentPage:r,pageRange:s,totalPage:l,rangeStart:c,rangeEnd:u})),t.callHook("afterRender",n),o},createTemplate:function(a){var t,i,o=this,n=a.currentPage,r=a.totalPage,s=a.rangeStart,l=a.rangeEnd,c=p.totalNumber,u=p.showPrevious,g=p.showNext,d=p.showPageNumbers,f=p.showNavigator,m=p.showGoInput,h=p.showGoButton,b=p.pageLink,v=p.prevText,N=p.nextText,y=p.ellipsisText,k=p.goButtonText,P=p.classPrefix,x=p.activeClassName,j=p.disableClassName,S=p.ulClassName,w=e.isFunction(p.formatNavigator)?p.formatNavigator():p.formatNavigator,H=e.isFunction(p.formatGoInput)?p.formatGoInput():p.formatGoInput,C=e.isFunction(p.formatGoButton)?p.formatGoButton():p.formatGoButton,O=e.isFunction(p.autoHidePrevious)?p.autoHidePrevious():p.autoHidePrevious,F=e.isFunction(p.autoHideNext)?p.autoHideNext():p.autoHideNext,T=e.isFunction(p.header)?p.header():p.header,J=e.isFunction(p.footer)?p.footer():p.footer,D="",G='<input type="button" class="J-paginationjs-go-button" value="'+k+'">'
if(T&&(t=o.replaceVariables(T,{currentPage:n,totalPage:r,totalNumber:c}),D+=t),u||d||g){if(D+='<div class="paginationjs-pages">',D+=S?'<ul class="'+S+'">':"<ul>",u&&(1===n?O||(D+='<li class="'+P+"-prev "+j+'"><a>'+v+"</a></li>"):D+='<li class="'+P+'-prev J-paginationjs-previous" data-num="'+(n-1)+'" title="Previous page"><a href="'+b+'">'+v+"</a></li>"),d){if(s<=3)for(i=1;i<s;i++)D+=i==n?'<li class="'+P+"-page J-paginationjs-page "+x+'" data-num="'+i+'"><a>'+i+"</a></li>":'<li class="'+P+'-page J-paginationjs-page" data-num="'+i+'"><a href="'+b+'">'+i+"</a></li>"
else p.showFirstOnEllipsisShow&&(D+='<li class="'+P+"-page "+P+'-first J-paginationjs-page" data-num="1"><a href="'+b+'">1</a></li>'),D+='<li class="'+P+"-ellipsis "+j+'"><a>'+y+"</a></li>"
for(i=s;i<=l;i++)D+=i==n?'<li class="'+P+"-page J-paginationjs-page "+x+'" data-num="'+i+'"><a>'+i+"</a></li>":'<li class="'+P+'-page J-paginationjs-page" data-num="'+i+'"><a href="'+b+'">'+i+"</a></li>"
if(l>=r-2)for(i=l+1;i<=r;i++)D+='<li class="'+P+'-page J-paginationjs-page" data-num="'+i+'"><a href="'+b+'">'+i+"</a></li>"
else D+='<li class="'+P+"-ellipsis "+j+'"><a>'+y+"</a></li>",p.showLastOnEllipsisShow&&(D+='<li class="'+P+"-page "+P+'-last J-paginationjs-page" data-num="'+r+'"><a href="'+b+'">'+r+"</a></li>")}g&&(n==r?F||(D+='<li class="'+P+"-next "+j+'"><a>'+N+"</a></li>"):D+='<li class="'+P+'-next J-paginationjs-next" data-num="'+(n+1)+'" title="Next page"><a href="'+b+'">'+N+"</a></li>"),D+="</ul></div>"}return f&&w&&(t=o.replaceVariables(w,{currentPage:n,totalPage:r,totalNumber:c}),D+='<div class="'+P+'-nav J-paginationjs-nav">'+t+"</div>"),m&&H&&(t=o.replaceVariables(H,{currentPage:n,totalPage:r,totalNumber:c,input:'<input type="text" class="J-paginationjs-go-pagenumber">'}),D+='<div class="'+P+'-go-input">'+t+"</div>"),h&&C&&(t=o.replaceVariables(C,{currentPage:n,totalPage:r,totalNumber:c,button:G}),D+='<div class="'+P+'-go-button">'+t+"</div>"),J&&(t=o.replaceVariables(J,{currentPage:n,totalPage:r,totalNumber:c}),D+=t),D},go:function(a,t){function i(a){if(!1===o.callHook("beforePaging",r))return!1
if(n.direction=void 0===n.pageNumber?0:r>n.pageNumber?1:-1,n.pageNumber=r,o.render(),o.disabled&&!o.sync&&o.enable(),c.data("pagination").model=n,e.isFunction(p.formatResult)){var i=e.extend(!0,[],a)
l.isArray(a=p.formatResult(i))||(a=i)}c.data("pagination").currentPageData=a,o.doCallback(a,t),o.callHook("afterPaging",r),1==r&&o.callHook("afterIsFirstPage"),r==n.totalPage&&o.callHook("afterIsLastPage")}var o=this,n=o.model
if(!o.disabled){var r=a,s=p.pageSize,u=n.totalPage
if(!(!(r=parseInt(r))||r<1||r>u)){if(o.sync)return void i(o.getDataSegment(r))
var g={},d=p.alias||{}
g[d.pageSize?d.pageSize:"pageSize"]=s,g[d.pageNumber?d.pageNumber:"pageNumber"]=r
var f={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0}
e.extend(!0,f,p.ajax),e.extend(f.data||{},g),f.url=p.dataSource,f.success=function(a){i(o.filterDataByLocator(a))},f.error=function(a,e,t){p.formatAjaxError&&p.formatAjaxError(a,e,t),o.enable()},o.disable(),e.ajax(f)}}},doCallback:function(a,t){var i=this,o=i.model
e.isFunction(t)?t(a,o):e.isFunction(p.callback)&&p.callback(a,o)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),c.off(),e("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(a){this.go(this.model.pageNumber-1,a)},next:function(a){this.go(this.model.pageNumber+1,a)},disable:function(){var a=this,e=a.sync?"sync":"async"
!1!==a.callHook("beforeDisable",e)&&(a.disabled=!0,a.model.disabled=!0,a.callHook("afterDisable",e))},enable:function(){var a=this,e=a.sync?"sync":"async"
!1!==a.callHook("beforeEnable",e)&&(a.disabled=!1,a.model.disabled=!1,a.callHook("afterEnable",e))},refresh:function(a){this.go(this.model.pageNumber,a)},show:function(){var a=this
a.model.el.is(":visible")||a.model.el.show()},hide:function(){var a=this
a.model.el.is(":visible")&&a.model.el.hide()},replaceVariables:function(a,e){var t
for(var i in e){var o=e[i],n=new RegExp("<%=\\s*"+i+"\\s*%>","img")
t=(t||a).replace(n,o)}return t},getDataSegment:function(a){var e=p.pageSize,t=p.dataSource,i=p.totalNumber,o=e*(a-1)+1,n=Math.min(a*e,i)
return t.slice(o-1,n)},getTotalPage:function(){return Math.ceil(p.totalNumber/p.pageSize)},getLocator:function(a){var i
return"string"==typeof a?i=a:e.isFunction(a)?i=a():t('"locator" is incorrect. (String | Function)'),i},filterDataByLocator:function(a){var i,o=this.getLocator(p.locator)
if(l.isObject(a)){try{e.each(o.split("."),function(e,t){i=(i||a)[t]})}catch(a){}i?l.isArray(i)||t("dataSource."+o+" must be an Array."):t("dataSource."+o+" is undefined.")}return i||a},parseDataSource:function(a,i){var o=this
l.isObject(a)?i(p.dataSource=o.filterDataByLocator(a)):l.isArray(a)?i(p.dataSource=a):e.isFunction(a)?p.dataSource(function(a){e.isFunction(a)&&t('Unexpect parameter of the "done" Function.'),o.parseDataSource.call(o,a,i)}):"string"==typeof a?(/^https?|file:/.test(a)&&(p.ajaxDataType="jsonp"),i(a)):t('Unexpect data type of the "dataSource".')},callHook:function(t){var i,o=c.data("pagination"),n=Array.prototype.slice.apply(arguments)
return n.shift(),p[t]&&e.isFunction(p[t])&&!1===p[t].apply(a,n)&&(i=!1),o.hooks&&o.hooks[t]&&e.each(o.hooks[t],function(e,t){!1===t.apply(a,n)&&(i=!1)}),!1!==i},observer:function(){var a=this,i=a.model.el
c.on(s+"go",function(i,o,n){(o=parseInt(e.trim(o)))&&(e.isNumeric(o)||t('"pageNumber" is incorrect. (Number)'),a.go(o,n))}),i.delegate(".J-paginationjs-page","click",function(t){var i=e(t.currentTarget),o=e.trim(i.attr("data-num"))
if(o&&!i.hasClass(p.disableClassName)&&!i.hasClass(p.activeClassName))return!1!==a.callHook("beforePageOnClick",t,o)&&(a.go(o),a.callHook("afterPageOnClick",t,o),!!p.pageLink&&void 0)}),i.delegate(".J-paginationjs-previous","click",function(t){var i=e(t.currentTarget),o=e.trim(i.attr("data-num"))
if(o&&!i.hasClass(p.disableClassName))return!1!==a.callHook("beforePreviousOnClick",t,o)&&(a.go(o),a.callHook("afterPreviousOnClick",t,o),!!p.pageLink&&void 0)}),i.delegate(".J-paginationjs-next","click",function(t){var i=e(t.currentTarget),o=e.trim(i.attr("data-num"))
if(o&&!i.hasClass(p.disableClassName))return!1!==a.callHook("beforeNextOnClick",t,o)&&(a.go(o),a.callHook("afterNextOnClick",t,o),!!p.pageLink&&void 0)}),i.delegate(".J-paginationjs-go-button","click",function(t){var o=e(".J-paginationjs-go-pagenumber",i).val()
if(!1===a.callHook("beforeGoButtonOnClick",t,o))return!1
c.trigger(s+"go",o),a.callHook("afterGoButtonOnClick",t,o)}),i.delegate(".J-paginationjs-go-pagenumber","keyup",function(t){if(13===t.which){var o=e(t.currentTarget).val()
if(!1===a.callHook("beforeGoInputOnEnter",t,o))return!1
c.trigger(s+"go",o),e(".J-paginationjs-go-pagenumber",i).focus(),a.callHook("afterGoInputOnEnter",t,o)}}),c.on(s+"previous",function(e,t){a.previous(t)}),c.on(s+"next",function(e,t){a.next(t)}),c.on(s+"disable",function(){a.disable()}),c.on(s+"enable",function(){a.enable()}),c.on(s+"refresh",function(e,t){a.refresh(t)}),c.on(s+"show",function(){a.show()}),c.on(s+"hide",function(){a.hide()}),c.on(s+"destroy",function(){a.destroy()}),p.triggerPagingOnInit&&c.trigger(s+"go",Math.min(p.pageNumber,a.model.totalPage))}}
if(c.data("pagination")&&!0===c.data("pagination").initialized){if(e.isNumeric(n))return c.trigger.call(this,s+"go",n,arguments[1]),this
if("string"==typeof n){var g=Array.prototype.slice.apply(arguments)
switch(g[0]=s+g[0],n){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":c.trigger.apply(this,g)
break
case"getSelectedPageNum":return c.data("pagination").model?c.data("pagination").model.pageNumber:c.data("pagination").attributes.pageNumber
case"getTotalPage":return c.data("pagination").model.totalPage
case"getSelectedPageData":return c.data("pagination").currentPageData
case"isDisabled":return!0===c.data("pagination").model.disabled
default:t("Pagination do not provide action: "+n)}return this}o(c)}else l.isObject(n)||t("Illegal options")
var p=e.extend({},e.fn[r].defaults,n)
return i(p),u.initialize(),this},e.fn[r].defaults={totalNumber:1,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,pageLink:"",prevText:"&laquo;",nextText:"&raquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",inlineStyle:!0,formatNavigator:"<%= currentPage %> / <%= totalPage %>",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,hideWhenLessThanOnePage:!1,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,callback:function(){}},e.fn.addHook=function(a,i){arguments.length<2&&t("Missing argument."),e.isFunction(i)||t("callback must be a function.")
var o=e(this),n=o.data("pagination")
n||(o.data("pagination",{}),n=o.data("pagination")),!n.hooks&&(n.hooks={}),n.hooks[a]=n.hooks[a]||[],n.hooks[a].push(i)},e[r]=function(a,i){arguments.length<2&&t("Requires two parameters.")
var o
if(o="string"!=typeof a&&a instanceof jQuery?a:e(a),o.length)return o.pagination(i),o}
var l={}
e.each(["Object","Array"],function(a,e){l["is"+e]=function(a){return n(a)===e.toLowerCase()}}),"function"==typeof define&&define.amd&&define(function(){return e})}(this,window.jQuery)
