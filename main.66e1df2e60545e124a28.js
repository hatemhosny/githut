!function(e){function t(t){for(var n,o,u=t[0],l=t[1],s=t[2],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(f&&f(t);d.length;)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,u=1;u<a.length;u++){var l=a[u];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={3:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;i.push([75,4,0,1,2]),a()}({139:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.NonLangStore=void 0;var r=n(a(6)),i=n(a(8)),o=function(){function e(){(0,r.default)(this,e),this.config={lang:["ApacheConf","ApacheConf","Arduino","Batchfile","BitBake","CMAKE","CMake","CSS","Dockerfile","GCC Machine Description","Gettext Catalog","Gherkin","Groff","HCL","HTML","Handlebars","Jupyter Notebook","Lex","M4","Makefile","NSIS","Nginx","PLSQL","PLpgSQL","Perl6","Protocol Buffer","QMake","SaltStack","Scilab","Smarty","TeX","Vue","XML","XSLT","Yacc"]}}return(0,i.default)(e,[{key:"getConfig",value:function(){return this.config}}]),e}();t.NonLangStore=o},140:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.RenameLangStore=void 0;var r=n(a(6)),i=n(a(8)),o=function(){function e(){(0,r.default)(this,e),this.config={vim:{before:["VimL"],after:"Vim script"},fortran:{before:["FORTRAN"],after:"Fortran"}}}return(0,i.default)(e,[{key:"getConfig",value:function(){return this.config}}]),e}();t.RenameLangStore=o},141:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(24)),i=n(a(25)),o=n(a(6)),u=n(a(8)),l=n(a(11)),s=n(a(12)),f=n(a(13)),c=n(a(1)),d=n(a(143)),p=n(a(42)),h=a(20),g=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).call(this))).state={credits:{enabled:!1},chart:{type:"pie",backgroundColor:"transparent"},title:{text:"Top 5 Open Source Licenses"},tooltip:{formatter:function(){return'<span style="color:'+this.series.color+'">'+this.point.name+"</span>: <b>"+this.percentage.toFixed(2)+"%</b>"}}},e}var a;return(0,f.default)(t,e),(0,u.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.series!==t.series}},{key:"componentWillMount",value:(a=(0,i.default)(r.default.mark(function e(){var t;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,h.take)(5)((0,h.map)((0,h.update)("y")(Math.floor))((0,h.map)((0,h.mapKeys)(function(e){return"license"===e?"name":"y"}))(d.default))),this.setState({series:[{data:t}]});case 2:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return c.default.createElement(p.default,{config:this.state})}}]),t}(c.default.Component);t.default=g},144:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(a(6)),o=n(a(8)),u=n(a(11)),l=n(a(12)),s=n(a(13)),f=n(a(1)),c=a(23),d=a(145),p=(0,c.observer)(r=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.match,a=e.store,n=t.params.event;a.set(n.replace(/_/g," ").replace(/\b[a-z]/g,function(e){return e.toUpperCase()}))}},{key:"next",value:function(){var e=this.props.match;this.props.store.next();var t=this.props.store.getEventName;this.props.history.push("/"+function(e){return e.toLowerCase().replace(/ /g,"_")}(t)+"/"+e.params.year+"/"+e.params.quarter)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("center",null,f.default.createElement(d.Button,{className:"waves-effect waves-light blue-grey lighten-2 btn",onClick:this.next.bind(this)},this.props.store.getEventName)))}}]),t}(f.default.Component))||r;t.default=p},190:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(8)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=n(a(1)),f=n(a(191)),c=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return s.default.createElement("div",{className:"application"},s.default.createElement(f.default,{title:"Github Language Stats",meta:[{charset:"utf-8"}],link:[{rel:"stylesheet",type:"text/css",href:"//cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css"},{rel:"stylesheet",type:"text/css",href:"//cdnjs.cloudflare.com/ajax/libs/react-select/1.2.1/react-select.min.css"},{rel:"stylesheet",type:"text/css",href:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"},{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/icon?family=Material+Icons"},{rel:"stylesheet",type:"text/css",href:"//allenfang.github.io/react-bootstrap-table/css/react-bootstrap-table-all.min.css"},{rel:"stylesheet",type:"text/css",href:"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"},{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Open+Sans:400,300,700"},{rel:"stylesheet",type:"text/css",href:"//unpkg.com/react-virtualized-select/styles.css"},{rel:"stylesheet",type:"text/css",href:"//unpkg.com/react-virtualized/styles.css"}]}))}}]),t}(s.default.Component);t.default=c},196:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(8)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=n(a(1)),f=n(a(197)),c=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return s.default.createElement("div",{id:"wrapper"},s.default.createElement("div",{id:"header"},s.default.createElement("h1",null,"Git",s.default.createElement("b",null,"Hut 2.0")),s.default.createElement("h2",null,"A small place to discover languages in GitHub")),s.default.createElement(f.default,{href:"//github.com/madnight/githut",color:"black",target:"_blank",position:"right"},"Fork me on GitHub"))}}]),t}(s.default.Component);t.default=c},199:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(8)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=n(a(1)),f=n(a(200)),c=function(e){function t(){var e;return(0,r.default)(this,t),(e=(0,o.default)(this,(0,u.default)(t).call(this))).contentStyle={margin:"auto",marginTop:"40px",marginBottom:"40px",maxWidth:760,textAlign:"justify",fontSize:13},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return s.default.createElement("div",{style:this.contentStyle},s.default.createElement("div",{dangerouslySetInnerHTML:{__html:f.default}}))}}]),t}(s.default.Component);t.default=c},200:function(e,t){e.exports="<h4 id=githut-20>GITHUT 2.0</h4> <p>GitHut 2.0 is an attempt to proceed the <a href=http://githut.info>githut.info</a> project. The project did not received any update since 2014/Q4, that is mainly due to the fact that Github Archive changed its datasets. GitHub is the largest code host in the world, with 20 million users and more than 57 million repositories as of April 2017. By analyzing how languages are used in GitHub it&#39;s possible to understand the popularity of programming languages among developers and to discover the unique characteristics of each language. GitHub provides a public <a href=//developer.github.com/v3/ >API</a> to interact with its huge dataset of events and interaction with the hosted repositories. <a href=//githubarchive.org/ >GitHub Archive</a> goes a step further by aggregating and storing the API data. The quantitative data used in GitHut 2.0 is collected from the GitHub Archive dataset via <a href=//developers.google.com/bigquery/ >Google BigQuery</a>.</p> <p>The GihHub Archive dataset can be accessed by queries that are syntactically almost the same as SQL queries, with exception of some additional functionality provided by Google. Google provides a free query limit of 1000 GB per month. The query volume is calculated very precisely, it only counts the data that you actually access, regardless of the overall dataset size. This allows you to query datasets, even in the case that they are much bigger than the free query volume. The free query limit is therefore sufficient for the purpose of this Website. You will find the queries that are used to calculate the statistics in the <a href=https://github.com/madnight/githut>README.md</a>. However if you don&#39;t like the idea of using a Google Service for any reason, you can also download the files from the GitHub Archive and process them manually. The statistics are updated on a quarterly basis.</p> <p>The language percentage distribution in the line chart shows the top 10 languages since 2012/Q2. The ranking table shows the top 50 languages based on the last quarter, while the trend is calculated as difference from the same quarter of the year before. The percentage gives the actual fraction of Pull Requests, Pushes, ... in relation to the top 50 languages shown in the table, consequently summing up all fractions in the table results in 100%. The change shows the difference of the percentage compared to last years value, as for example year 2016 percentage plus year 2017 change equals 2017 percentage. The trend arrows indicate the change in ranking. Two up arrows stands for more than three ranks up within one year. No arrow indicates that nothing has changed, consequently one up arrow fills the gap. The down arrow definition is analogue. Please note that it is possible that the ranking shown in the table does not match the chart ranking, since they are calculated over a different time period (quarter vs. full history). Please also note that there is not enough data available in the GitHub Archive dataset to calculate a statistical accurate ranking table or chart for any time period before 2012/Q2.</p> <h4 id=related-work>Related Work</h4> <ul> <li><p><a href=//tiobe.com/tiobe-index/ >TIOBE Programming Community Index</a> is a measure of popularity of programming languages, created and maintained by the TIOBE Company based in Eindhoven, the Netherlands.</p> </li> <li><p><a href=//redmonk.com/sogrady/2016/07/20/language-rankings-6-16/ >The RedMonk Programming Language Rankings</a> are derived from a correlation of programming traction on GitHub and Stack Overflow.</p> </li> <li><p><a href=//pypl.github.io/PYPL.html>The PYPL PopularitY of Programming Language Index</a> is created by analyzing how often language tutorials are searched on Google.</p> </li> <li><p><a href=//langpop.corger.nl>Programming Language Popularity Chart</a> shows GitHub (lines changed) and StackOverflow (tags) ratio for programming languages.</p> </li> </ul> "},201:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(8)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=n(a(1)),f=n(a(202)),c=function(e){function t(){var e;return(0,r.default)(this,t),(e=(0,o.default)(this,(0,u.default)(t).call(this))).style={margin:"auto",maxWidth:760},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return s.default.createElement("div",{style:this.style},s.default.createElement(f.default,{shortname:"githut2",identifier:"githut2",title:"GitHut2 Thread"}))}}]),t}(s.default.Component);t.default=c},204:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(8)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=n(a(1)),f=function(e){function t(){return(0,r.default)(this,t),(0,o.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return s.default.createElement("div",{id:"footer"},s.default.createElement("div",{id:"licence",className:"clearfix"},"Credits to ",s.default.createElement("a",{href:"//github.com/littleark"},"Carlo Zapponi"),s.default.createElement("br",null),"This work is licensed under the ",s.default.createElement("a",{rel:"license",href:"//www.gnu.org/licenses/agpl-3.0.en.html",target:"_blank"},"GNU Affero General Public License")))}}]),t}(s.default.Component);t.default=f},205:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(a(6)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=a(23),f=n(a(65)),c=(0,s.observer)(r=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,o.default)(this,(0,u.default)(t).call(this,e))).year=!0,a}return(0,l.default)(t,e),t}(f.default))||r;t.default=c},209:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(a(6)),o=n(a(11)),u=n(a(12)),l=n(a(13)),s=a(23),f=n(a(65)),c=(0,s.observer)(r=function(e){function t(){return(0,i.default)(this,t),(0,o.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,l.default)(t,e),t}(f.default))||r;t.default=c},210:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.EventStore=void 0;var r,i,o,u,l=n(a(24)),s=n(a(25)),f=n(a(35)),c=n(a(6)),d=n(a(8)),p=n(a(36)),h=(n(a(37)),a(3)),g=n(a(67)),m=n(a(211)),v=n(a(212)),y=n(a(213)),b=a(20),k=(r=h.observable.ref,i=function(){function e(){(0,c.default)(this,e),(0,f.default)(this,"data",o,this),(0,f.default)(this,"event",u,this),this.fetchData(g.default)}var t,a,n;return(0,d.default)(e,[{key:"next",value:(n=(0,s.default)(l.default.mark(function e(){var t=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.event).push(a.shift()),(0,b.mapValues)(function(e){return t.fetchData(e)})((0,b.first)(this.event));case 3:case"end":return e.stop()}var a},e,this)})),function(){return n.apply(this,arguments)})},{key:"set",value:(a=(0,s.default)(l.default.mark(function e(t){var a,n=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){return e.push(e.shift())},(0,b.map)(function(e){return(0,b.keys)(e).includes(t)})(this.event).includes(!0))for(;(0,b.first)((0,b.keys)((0,b.first)(this.event)))!==t;)a(this.event);(0,b.mapValues)(function(e){return n.fetchData(e)})((0,b.first)(this.event));case 3:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"parseJSON",value:function(e){return(0,b.map)(JSON.parse)((0,b.split)("\n")(e))}},{key:"fetchData",value:(t=(0,s.default)(l.default.mark(function e(t){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.data=t;case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"getData",get:function(){return this.data}},{key:"getEventName",get:function(){return(0,b.first)((0,b.keys)((0,b.first)(this.event)))}}]),e}(),o=(0,p.default)(i.prototype,"data",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),u=(0,p.default)(i.prototype,"event",[h.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{"Pull Requests":g.default},{Pushes:m.default},{Stars:v.default},{Issues:y.default}]}}),(0,p.default)(i.prototype,"next",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"next"),i.prototype),(0,p.default)(i.prototype,"set",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"set"),i.prototype),(0,p.default)(i.prototype,"fetchData",[h.action],Object.getOwnPropertyDescriptor(i.prototype,"fetchData"),i.prototype),(0,p.default)(i.prototype,"getData",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"getData"),i.prototype),(0,p.default)(i.prototype,"getEventName",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"getEventName"),i.prototype),i);t.EventStore=k;var w=new k;t.default=w},214:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HistStore=void 0;var r,i,o=n(a(35)),u=n(a(6)),l=n(a(8)),s=n(a(36)),f=(n(a(37)),a(3)),c=(r=function(){function e(){(0,u.default)(this,e),(0,o.default)(this,"data",i,this),this.data={year:"2018",quarter:"1"}}return(0,l.default)(e,[{key:"getData",get:function(){return this.data}}]),e}(),i=(0,s.default)(r.prototype,"data",[f.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),(0,s.default)(r.prototype,"getData",[f.computed],Object.getOwnPropertyDescriptor(r.prototype,"getData"),r.prototype),r);t.HistStore=c;var d=new c;t.default=d},215:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TableStore=void 0;var r,i,o=n(a(24)),u=n(a(25)),l=n(a(35)),s=n(a(6)),f=n(a(8)),c=n(a(36)),d=(n(a(37)),a(3)),p=(r=function(){function e(){(0,s.default)(this,e),(0,l.default)(this,"data",i,this),this.data={}}var t;return(0,f.default)(e,[{key:"set",value:(t=(0,u.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.data=t;case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"getData",get:function(){return this.data}}]),e}(),i=(0,c.default)(r.prototype,"data",[d.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),(0,c.default)(r.prototype,"getData",[d.computed],Object.getOwnPropertyDescriptor(r.prototype,"getData"),r.prototype),(0,c.default)(r.prototype,"set",[d.action],Object.getOwnPropertyDescriptor(r.prototype,"set"),r.prototype),r);t.TableStore=p;var h=new p;t.default=h},216:function(e,t,a){var n=a(217);"string"==typeof n&&(n=[[e.i,n,""]]);a(69)(n,{});n.locals&&(e.exports=n.locals)},217:function(e,t,a){(e.exports=a(68)(!1)).push([e.i,"html {\n  overflow-y: scroll;\n}\nhtml,\nbody {\n  background: #e8f8ff;\n  height: 100%;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #fff), color-stop(100%, #e8f8ff));\n  background: -webkit-radial-gradient(center, ellipse cover, #fff 0%, #e8f8ff 100%);\n  background: -o-radial-gradient(center, ellipse cover, #fff 0%, #e8f8ff 100%);\n  background: -ms-radial-gradient(center, ellipse cover, #fff 0%, #e8f8ff 100%);\n  background: radial-gradient(ellipse at center, #fff 0%, #e8f8ff 100%);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-align: center;\n}\n#githut-2-0,\n#related-work,\n#data {\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\na {\n  text-decoration: none;\n  color: #006aad;\n}\na:hover {\n  color: #a06535;\n}\n#header {\n  width: 80%;\n  min-width: 960px;\n  margin: 0 auto 10px;\n  padding-bottom: 5px;\n  position: relative;\n}\n#header h1 {\n  font-size: 38px;\n  color: #a06535;\n  font-weight: 400;\n  text-align: center;\n  padding: 0;\n}\n#header h1 b {\n  font-weight: 700;\n}\n#header h2 {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  margin: 0;\n  text-align: center;\n  padding: 0;\n  text-transform: uppercase;\n}\n#footer {\n  width: 600px;\n  margin: 0 auto 10px;\n  padding-bottom: 5px;\n  font-size: 11px;\n}\n#footer #licence {\n  font-size: 10px;\n  width: 380px;\n  margin: 0 auto;\n  line-height: 150%;\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 10px;\n  clear: both;\n}\n#footer #licence div {\n  text-align: left;\n}\n#footer #licence a.cc {\n  float: left;\n  margin-right: 10px;\n}\n.social {\n  text-align: center;\n  font-size: 23px;\n  width: 110px;\n  height: 23px;\n}\n.social.social-top {\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  font-size: 20px;\n}\n#footer .social a,\n.social-top a {\n  color: #666;\n  background-color: transparent;\n  width: 19px;\n  height: 20px;\n  float: left;\n  margin: 0 20px;\n}\n.table-striped {\n  font-weight: 400;\n  font-size: 15px;\n}\n.react-bs-table .react-bs-container-header > table > thead > tr > th {\n  font-size: 16px;\n}\n.table-striped > tbody > tr:nth-child(2n+1) > td,\n.table-striped > tbody > tr:nth-child(2n+1) > th {\n  background-color: #f7fcff;\n}\n.rowCenter {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding-top: 10px;\n}\n.Select {\n  min-width: 200px;\n  margin-left: 20px;\n}\n.emptyTable {\n  margin-top: 200px;\n  margin-bottom: 200px;\n}\n",""])},43:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(11)),o=n(a(12)),u=n(a(13)),l=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,u.default)(t,e),t}(n(a(1)).default.Component);t.default=l},65:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(6)),i=n(a(11)),o=n(a(12)),u=n(a(41)),l=n(a(8)),s=n(a(13)),f=n(a(1)),c=n(a(206)),d=a(20),p=a(66);a(207);var h=function(e){function t(e){var a;return(0,r.default)(this,t),(a=(0,i.default)(this,(0,o.default)(t).call(this,e))).year=!1,a.onChange=a.onChange.bind((0,u.default)(a)),a}return(0,s.default)(t,e),(0,l.default)(t,[{key:"vals",value:function(e,t){return(0,d.range)(--e,t).map(function(e){return{value:(0,d.toString)(e+1),label:(0,d.toString)(e+1)}})}}]),(0,l.default)(t,[{key:"setValue",value:function(e){this.year?this.props.hist.data.year=e:this.props.hist.data.quarter=e,this.setState({value:e})}},{key:"componentWillMount",value:function(){var e=this;(0,p.getMaxDataDate)().then(function(t){e.setState({options:e.year?e.vals(2014,t.year):e.vals(1,4),value:e.year?e.props.match.params.year:e.props.match.params.quarter})});var t=this.props.match.params,a=this.year?t.year:t.quarter;this.setValue(a)}},{key:"histPush",value:function(e,t,a){this.props.history.push("/"+e+"/"+t+"/"+a)}},{key:"onChange",value:function(e){var t=this.props.match.params;this.setValue(e),this.year?this.histPush(t.event,e,t.quarter):this.histPush(t.event,t.year,e)}},{key:"render",value:function(e){return f.default.createElement("div",null,f.default.createElement("h4",{className:"section-heading"},this.year?"Year":"Quarter"),f.default.createElement(c.default,{label:"States",onChange:this.onChange,options:this.state.options,simpleValue:!0,searchable:!1,clearable:!1,value:this.state.value}))}}]),t}(f.default.Component);t.default=h},66:function(e,t,a){"use strict";var n=a(4),r=n(a(24)),i=n(a(25)),o=a(20),u=n(a(67)),l=function(){var e=(0,i.default)(r.default.mark(function e(){var t,a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,o.max)((0,o.values)((0,o.map)("year")(u.default))),a=(0,o.max)((0,o.values)((0,o.map)("quarter")((0,o.filter)({year:t})(u.default)))),e.abrupt("return",{year:t,quarter:a});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e.exports={getMaxDataDate:l}},75:function(e,t,a){"use strict";var n=a(4),r=n(a(1)),i=n(a(9)),o=a(70),u=n(a(84)),l=(n(a(216)),a(66)),s=window.location.href.includes("madnight.github.io");s||(0,a(218).registerObserver)({shouldLog:!0});(0,l.getMaxDataDate)().then(function(e){var t="#/pull_requests/"+e.year+"/"+e.quarter;window.location.href.includes("#")||(window.location.href=s?"/githut/"+t:"/"+t);var a=document.createElement("div");a.id="app",document.body.appendChild(a),i.default.render(r.default.createElement(o.HashRouter,null,r.default.createElement(u.default,null)),a)})},84:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(85)),i=n(a(6)),o=n(a(8)),u=n(a(11)),l=n(a(12)),s=n(a(13)),f=n(a(1)),c=a(70),d=n(a(88)),p=n(a(98)),h=n(a(141)),g=n(a(144)),m=n(a(190)),v=n(a(196)),y=n(a(199)),b=n(a(201)),k=n(a(204)),w=n(a(205)),x=n(a(209)),P=n(a(210)),O=n(a(214)),E=n(a(215)),S=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(m.default,null),f.default.createElement(v.default,null),f.default.createElement(d.default,{store:P.default,table:E.default}),f.default.createElement(c.Route,{path:"/:event?/:year?/:quarter?",render:function(e){return f.default.createElement(g.default,(0,r.default)({},e,{store:P.default}))}}),f.default.createElement("div",{className:"rowCenter"},f.default.createElement(c.Route,{path:"/:event?/:year?/:quarter?",render:function(e){return f.default.createElement(w.default,(0,r.default)({},e,{hist:O.default}))}}),f.default.createElement(c.Route,{path:"/:event?/:year?/:quarter?",render:function(e){return f.default.createElement(x.default,(0,r.default)({},e,{hist:O.default}))}})),f.default.createElement(p.default,{store:P.default,hist:O.default,table:E.default}),f.default.createElement(h.default,null),f.default.createElement(y.default,null),f.default.createElement(b.default,null),f.default.createElement(k.default,null))}}]),t}(f.default.Component);t.default=S},88:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(a(89)),o=n(a(6)),u=n(a(8)),l=n(a(11)),s=n(a(12)),f=n(a(13)),c=n(a(1)),d=a(23),p=a(3),h=a(20),g=a(96),m=n(a(42)),v=n(a(43));function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){(0,i.default)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var k=(0,d.observer)(r=function(e){function t(e){var a;(0,o.default)(this,t),a=(0,l.default)(this,(0,s.default)(t).call(this,e));var n=new g.LangChartStore;return a.state=n.getConfig(),a.dataLength=0,a.top10=[],a.style={width:"100%",margin:"auto",maxWidth:1360},a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"categories",value:function(){return(0,h.drop)(1)((0,h.flatten)((0,h.map)(function(e){return(0,h.map)(function(t){return e+"/Q"+t})((0,h.range)(1,5))})((0,h.range)(12,30))))}},{key:"percentageData",value:function(e){var t=(0,h.map)(h.sum)((0,h.unzip)((0,h.map)("data")(e)));return(0,h.map)((0,h.update)("data")(function(e){return(0,h.zipWith)(h.divide)(e)(t)}))(e)}},{key:"fillZeros",value:function(e){var t=(0,h.max)((0,h.map)(h.size)((0,h.map)("data")(e))),a=function(e){return new Array(t-(0,h.size)(e)).fill(0).concat(e)};return(0,h.map)(function(e){return{name:e.name,data:a(e.data)}})(e)}},{key:"createSeries",value:function(e){var t=this;return(0,h.sortBy)("name")(h.map.convert({cap:0})(function(e,t){return t>10?(0,h.assign)({visible:!1})(e):e})(this.fillZeros((0,h.uniqBy)("name")((0,h.map)(function(t){return{name:t.name,data:(0,h.map)("count")((0,h.filter)({name:t.name})(e))}})((0,h.reject)(function(e){return!(0,h.includes)(e.name)(t.top10)})(e))))))}},{key:"updateState",value:function(e){(0,h.isEqual)(this.state,e)||this.setState(e)}},{key:"createSeriesPercentage",value:function(e){return this.percentageData(this.createSeries((0,h.map)((0,h.update)("count")(Math.floor))(e)))}},{key:"constructChart",value:function(e,t,a){if((e.length!==this.dataLength||!(0,h.isEqual)(this.top10,a))&&(0,h.size)(a)>0){this.top10=a,this.dataLength=e.length;var n=b({},this.state,{yAxis:b({},this.state.yAxis,{title:{text:t}}),series:this.createSeriesPercentage(e),xAxis:{categories:this.categories()}});this.updateState(n)}}},{key:"componentWillMount",value:function(){var e=this;this.handler=(0,p.autorun)(function(){var t=e.props.store.getData,a=e.props.store.getEventName,n=(0,h.map)("name")((0,h.sortBy)("name")((0,h.take)(50)(e.props.table.data)));e.constructChart(t,a,n)})}},{key:"render",value:function(){return c.default.createElement("div",{style:this.style},c.default.createElement(m.default,{config:this.state,ref:"chart"}))}}]),t}(v.default))||r;t.default=k},96:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.LangChartStore=void 0;var r=n(a(6)),i=n(a(8)),o={credits:{enabled:!1},chart:{type:"spline",backgroundColor:"transparent"},title:{text:""},xAxis:{categories:[]},yAxis:{title:{text:""},labels:{formatter:function(){return 100*this.value+"%"}}},plotOptions:{spline:{lineWidth:4,states:{hover:{lineWidth:5}},marker:{enabled:!1}},series:{animation:{duration:200}}},tooltip:{formatter:function(){return'<span style="color:'+this.series.color+'">'+this.series.name+"</span>: <b>"+(100*this.y).toFixed(2)+"%</b>"}}},u=function(){function e(){(0,r.default)(this,e),this.config=o}return(0,i.default)(e,[{key:"getConfig",value:function(){return this.config}}]),e}();t.LangChartStore=u},98:function(e,t,a){"use strict";var n=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(a(6)),o=n(a(8)),u=n(a(11)),l=n(a(12)),s=n(a(13)),f=n(a(1)),c=a(20),d=a(99),p=a(139),h=a(140),g=a(23),m=a(3),v=n(a(43)),y=(0,g.observer)(r=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,u.default)(this,(0,l.default)(t).call(this,e))).state={data:[]},a.style={margin:"auto",maxWidth:1160},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"filterDate",value:function(e,t,a){return(0,c.map)((0,c.pick)(["name","count"]))((0,c.filter)({quarter:a})((0,c.filter)({year:t})(e)))}},{key:"filterNonProgrammingLanguages",value:function(e){var t=(new p.NonLangStore).getConfig();return(0,c.reject)(function(e){return(0,c.includes)(e.name)(t.lang)})(e)}},{key:"applyLanguageRenamings",value:function(e){var t=(new h.RenameLangStore).getConfig();return(0,c.map)((0,c.update)("name")(function(e){var a=(0,c.find)(function(t){return(0,c.includes)(e,t.before)})(t);return a?a.after:e}))(e)}},{key:"trendFormatter",value:function(e,t){return"".concat(function(e){var t=function(e){return"<i class='fa fa-angle-".concat(e,"'></i>")};switch(!0){case 0===e:return"";case e>3:return t("double-up");case e<-3:return t("double-down");case e<0:return t("down");case e>0:return t("up");default:return t("double-up")}}(e))}},{key:"findByName",value:function(e,t){return(0,c.omitBy)(c.isNil)((0,c.first)((0,c.filter)({name:t})(e)))}},{key:"getTrend",value:function(e,t){var a=this;return(0,c.take)(50)((0,c.map)(function(e){return(0,c.assign)({trend:a.findByName(t,e.name).id-e.id})(e)})(e))}},{key:"getChange",value:function(e,t){var a=this;return(0,c.take)(50)((0,c.map)(function(e){return(0,c.assign)({change:e.count-a.findByName(t,e.name).count})(e)})(e))}},{key:"createTable",value:function(e,t,a){var n;return this.percentageData((n=this.applyLanguageRenamings(this.filterNonProgrammingLanguages(this.filterDate(e,t,a))),c.map.convert({cap:0})(function(e,t){return(0,c.assign)({id:++t})(e)})(n)))}},{key:"mountTable",value:function(){var e=this.props.store.getData,t=this.props.hist.getData;if(!(e.length<1e3)){var a,n=t.year,r=t.quarter,i=this.createTable(e,n,r),o=this.createTable(e,(a=n,(0,c.toString)(--a)),r),u=this.getTrend(i,o),l=this.getChange(u,o);this.props.table.set(l),this.setState({data:l})}}},{key:"percentageData",value:function(e){var t=(0,c.sum)((0,c.map)(Number)((0,c.map)("count")(e)));return(0,c.map)((0,c.update)("count")(function(e){return e/t}))(e)}},{key:"componentWillMount",value:function(){var e=this;(0,m.autorun)(function(){return e.mountTable()})}},{key:"percentFormatter",value:function(e,t){var a,n,r=function(e,t){return'<font size="1">(<font color="'.concat(t,'">').concat(e,"%</font>)</font>")},i=function(e){return(100*e).toFixed(3)},o=i(t.count)+"%";return t.id>30?o:"".concat(o+"  "+((a=i((n=t.change,(0,c.isNaN)(n)?0:n)))>=0?r("+"+a,"green"):r(a,"chrimson")))}},{key:"noDataAvailableYet",value:function(){return f.default.createElement("div",{className:"emptyTable"},f.default.createElement("h2",null,"No data available for this time period yet"))}},{key:"render",value:function(){return this.state.data.length<50?this.noDataAvailableYet():f.default.createElement("div",{style:this.style},f.default.createElement(d.BootstrapTable,{condensed:!0,striped:!0,tableStyle:{margin:"30px auto 30px auto",width:"70%"},data:this.state.data,bordered:!1,options:this.options},f.default.createElement(d.TableHeaderColumn,{width:"50px",dataAlign:"center",dataField:"id",isKey:!0},"# Ranking"),f.default.createElement(d.TableHeaderColumn,{width:"150px",dataAlign:"center",dataField:"name"},"Programming Language"),f.default.createElement(d.TableHeaderColumn,{width:"100px",dataAlign:"center",dataField:"count",dataFormat:this.percentFormatter},"Percentage (Change)"),f.default.createElement(d.TableHeaderColumn,{width:"50px",dataAlign:"center",dataField:"trend",dataFormat:this.trendFormatter},"Trend")))}}]),t}(v.default))||r;t.default=y}});