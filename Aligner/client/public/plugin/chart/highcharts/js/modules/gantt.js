/*
 Highcharts JS v5.0.2 (2016-10-26)
 Gantt series

 (c) 2016 Lars A. V. Cabrera

 --- WORK IN PROGRESS ---

 License: www.highcharts.com/license
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:m(Highcharts)})(function(m){(function(c){var m=c.dateFormat,p=c.each,q=c.isObject,u=c.pick,l=c.wrap,n=c.Axis,v=c.Chart,r=c.Tick;n.prototype.isOuterAxis=function(){var a=this,f=-1,b=!0;p(this.chart.axes,function(d,g){d.side===a.side&&(d===a?f=g:0<=f&&g>f&&(b=!1))});return b};r.prototype.getLabelWidth=function(){return this.label.getBBox().width};n.prototype.getMaxLabelLength=function(a){var f=this.tickPositions,b=this.ticks,d=0;
if(!this.maxLabelLength||a)p(f,function(a){(a=b[a])&&a.labelLength>d&&(d=a.labelLength)}),this.maxLabelLength=d;return this.maxLabelLength};n.prototype.addTitle=function(){var a=this.chart.renderer,f=this.axisParent,b=this.horiz,d=this.opposite,g=this.options,e=g.title,h;this.showAxis=h=this.hasData()||u(g.showEmpty,!0);g.title="";this.axisTitle||((g=e.textAlign)||(g=(b?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[e.align]),this.axisTitle=
a.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:g}).addClass("highcharts-axis-title").add(f),this.axisTitle.isNew=!0);this.axisTitle[h?"show":"hide"](!0)};c.dateFormats={W:function(a){a=new Date(a);var f=0===a.getUTCDay()?7:a.getUTCDay(),b=a.getTime(),d=new Date(a.getUTCFullYear(),0,1,-6);a.setDate(a.getUTCDate()+4-f);return 1+Math.floor(Math.floor((b-d)/864E5)/7)},E:function(a){return m("%a",a,!0).charAt(0)}};l(r.prototype,"addLabel",function(a){var f=this.axis,b=void 0!==
f.options.categories,d=f.tickPositions,d=this.pos!==d[d.length-1];(!f.options.grid||b||d)&&a.apply(this)});l(r.prototype,"getLabelPosition",function(a,f,b,d){var g=a.apply(this,Array.prototype.slice.call(arguments,1)),e=this.axis,h=e.options,k=h.tickInterval||1,c,t;h.grid&&(c=h.labels.style.fontSize,t=e.chart.renderer.fontMetrics(c,d),c=t.b,t=t.h,e.horiz&&void 0===h.categories?(h=e.axisGroup.getBBox().height,k=this.pos+k/2,g.x=e.translate(k)+e.left,k=h/2+t/2-Math.abs(t-c),g.y=0===e.side?b-k:b+k):
(void 0===h.categories&&(k=this.pos+k/2,g.y=e.translate(k)+e.top+c/2),k=this.getLabelWidth()/2-e.maxLabelLength/2,g.x=3===e.side?g.x+k:g.x-k));return g});l(n.prototype,"tickSize",function(a){var f=a.apply(this,Array.prototype.slice.call(arguments,1)),b;this.options.grid&&!this.horiz&&(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelLength||(this.maxLabelLength=this.getMaxLabelLength()),b=this.maxLabelLength+b,f[0]=b);return f});l(n.prototype,"getOffset",function(a){var f=this.chart.axisOffset,
b=this.side,d,g,e=this.options,h=e.title,k=h&&h.text&&!1!==h.enabled;this.options.grid&&q(this.options.title)?(g=this.tickSize("tick")[0],f[b]&&g&&(d=f[b]+g),k&&this.addTitle(),a.apply(this,Array.prototype.slice.call(arguments,1)),f[b]=u(d,f[b]),e.title=h):a.apply(this,Array.prototype.slice.call(arguments,1))});l(n.prototype,"renderUnsquish",function(a){this.options.grid&&(this.labelRotation=0,this.options.labels.rotation=0);a.apply(this)});l(n.prototype,"setOptions",function(a,f){f.grid&&this.horiz&&
(f.startOnTick=!0,f.minPadding=0,f.endOnTick=!0);a.apply(this,Array.prototype.slice.call(arguments,1))});l(n.prototype,"render",function(a){var f=this.options,b,d,g,e,h,k,c=this.chart.renderer;if(f.grid){if(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),b=this.maxLabelLength+b,d=f.lineWidth,this.rightWall&&this.rightWall.destroy(),a.apply(this),a=this.axisGroup.getBBox(),this.horiz&&(this.rightWall=c.path(["M",a.x+this.width+1,a.y,"L",a.x+this.width+1,a.y+a.height]).attr({stroke:f.tickColor||
"#ccd6eb","stroke-width":f.tickWidth||1,zIndex:7,class:"grid-wall"}).add(this.axisGroup)),this.isOuterAxis()&&this.axisLine&&(this.horiz&&(b=a.height-1),d)){a=this.getLinePath(d);h=a.indexOf("M")+1;k=a.indexOf("L")+1;g=a.indexOf("M")+2;e=a.indexOf("L")+2;if(0===this.side||3===this.side)b=-b;this.horiz?(a[g]+=b,a[e]+=b):(a[h]+=b,a[k]+=b);this.axisLineExtra?this.axisLineExtra.animate({d:a}):this.axisLineExtra=c.path(a).attr({stroke:f.lineColor,"stroke-width":d,zIndex:7}).add(this.axisGroup);this.axisLine[this.showAxis?
"show":"hide"](!0)}}else a.apply(this)});l(v.prototype,"render",function(a){var f=25/11,b,c;p(this.axes,function(a){var e=a.options;e.grid&&(c=e.labels.style.fontSize,b=a.chart.renderer.fontMetrics(c),"datetime"===e.type&&(e.units=[["millisecond",[1]],["second",[1]],["minute",[1]],["hour",[1]],["day",[1]],["week",[1]],["month",[1]],["year",null]]),a.horiz?e.tickLength=e.cellHeight||b.h*f:(e.tickWidth=1,e.lineWidth||(e.lineWidth=1)))});a.apply(this)})})(m);(function(c){var m=c.getOptions().plotOptions,
p=c.seriesTypes.column,q=c.each,u=c.extendClass,l=c.isNumber,n=c.isObject,v=c.merge,r=c.pick,a=c.seriesTypes,f=c.stop,b=c.wrap,d=c.Axis,g=c.Point,e=c.Series;m.xrange=v(m.column,{tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'}});a.xrange=u(p,{pointClass:u(g,{getLabelConfig:function(){var a=g.prototype.getLabelConfig.call(this);a.x2=this.x2;a.yCategory=this.yCategory=this.series.yAxis.categories&&this.series.yAxis.categories[this.y];
return a}}),type:"xrange",forceDL:!0,parallelArrays:["x","x2","y"],requireSorting:!1,animate:a.line.prototype.animate,getColumnMetrics:function(){function a(){q(f.series,function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,f=this.chart;a();this.yAxis.closestPointRange=1;b=p.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,f,c){b=e.prototype.cropData.call(this,this.x2Data,b,f,c);b.xData=a.slice(b.start,b.end);return b},translate:function(){p.prototype.translate.apply(this,
arguments);var a=this.xAxis,b=this.columnMetrics,f=this.options.minPointLength||0;q(this.points,function(c){var e=c.plotX,d=r(c.x2,c.x+(c.len||0)),d=a.toPixels(d,!0),g=d-e,h;f&&(h=f-g,0>h&&(h=0),e-=h/2,d+=h/2);e=Math.max(e,-10);d=Math.min(Math.max(d,-10),a.len+10);c.shapeArgs={x:e,y:c.plotY+b.offset,width:d-e,height:b.width};c.tooltipPos[0]+=g/2;c.tooltipPos[1]-=b.width/2;if(d=c.partialFill)n(d)&&(d=d.amount),l(d)||(d=0),e=c.shapeArgs,c.partShapeArgs={x:e.x,y:e.y+1,width:e.width*d,height:e.height-
2}})},drawPoints:function(){var a=this,b=this.chart,c=b.renderer,e=b.pointCount<(a.options.animationLimit||250)?"animate":"attr";q(a.points,function(b){var d=b.graphic,g=b.shapeType,h=b.shapeArgs,k=b.partShapeArgs;if(l(b.plotY)&&null!==b.y)if(d){if(f(d),b.graphicOriginal[e](v(h)),k)b.graphicOverlay[e](v(k))}else b.graphic=d=c.g("point").attr({"class":b.getClassName()}).add(b.group||a.group),b.graphicOriginal=c[g](h).addClass("highcharts-partfill-original").add(d),k&&(b.graphicOverlay=c[g](k).addClass("highcharts-partfill-overlay").add(d));
else d&&(b.graphic=d.destroy())})}});b(d.prototype,"getSeriesExtremes",function(a){var b=this.series,c,d;a.call(this);this.isXAxis&&"xrange"===b.type&&(c=r(this.dataMax,Number.MIN_VALUE),q(this.series,function(a){q(a.x2Data||[],function(a){a>c&&(c=a,d=!0)})}),d&&(this.dataMax=c))})})(m)});
