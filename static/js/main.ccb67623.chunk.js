(this["webpackJsonpcovid19-dashboard-vaccini"]=this["webpackJsonpcovid19-dashboard-vaccini"]||[]).push([[0],{204:function(t,e,a){},231:function(t,e,a){},233:function(t,e,a){"use strict";a.r(e);var r=a(2),n=a(1),i=a.n(n),c=a(29),s=a.n(c),o=(a(204),a(9)),l=a(12),d=(a(24),a(129),a(130),a(131),a(132),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"d-flex flex-column justify-content-center bg-danger topBanner",children:Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"primary",children:["Questo \xe8 un esempio di dashboard, per quella ufficiale visita ",Object(r.jsx)("a",{href:"https://www.governo.it/it/cscovid19/report-vaccini/",children:"report-vaccini"})," (",Object(r.jsx)("a",{href:"https://github.com/italia/report-vaccini-anti-covid-19",children:"GitHub"}),")"]})})}),Object(r.jsx)("div",{className:"d-flex flex-column justify-content-center mainBanner",children:Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)("img",{src:"logo.png",alt:"Logo",className:"main-logo"}),Object(r.jsx)("span",{className:"pl-3",children:"Report Vaccini Anti COVID-19"})]})})]})}),u=a(45),p=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("footer",{className:"section",children:Object(r.jsxs)("ul",{className:"footer_links clearfix",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://github.com/italia/covid19-dashboard-vaccini",title:"",children:[Object(r.jsx)(u.a,{color:"white",icon:"it-github",padding:!0,size:"small"}),"GitHub"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{href:"https://github.com/italia/covid19-opendata-vaccini",title:"",children:[Object(r.jsx)(u.a,{color:"white",icon:"it-github",padding:!0,size:"small"}),"Open Data"]})})]})})})},m=a(8),x=a.n(m),j=a(36),h=a(7),f=a(144),b=(a(14),function(t){return function(e,a){return e+ +(null===a||void 0===a?void 0:a[t])}}),g=function(t){return function(e,a){return(null===a||void 0===a?void 0:a[t])>e?null===a||void 0===a?void 0:a[t]:e}},v=function(t){return function(e){return function(a){return a[t]===e}}},y=v("area"),O=y("ITA"),w=(v("TML_FASCIA_ETA"),function(t){return Object(o.a)(Object(o.a)({},t),{},{area:N[t.area]})}),N={ABR:"Abruzzo",BAS:"Basilicata",CAL:"Calabria",CAM:"Campania",EMR:"Emilia-Romagna",FVG:"Friuli-Venezia Giulia",LAZ:"Lazio",LIG:"Liguria",LOM:"Lombardia",MAR:"Marche",MOL:"Molise",PAB:"Trentino-Alto Adige/S\xfcdtirol",PAT:"Prov. Aut. Trento",PIE:"Piemonte",PUG:"Puglia",SAR:"Sardegna",SIC:"Sicilia",TOS:"Toscana",UMB:"Umbria",VDA:"Valle d'Aosta/Vall\xe9e d'Aoste",VEN:"Veneto"},S=function(t){var e={};for(var a in t)e[t[a]]=a;return e}(N),_=(a(231),function(t){var e=Object(n.useState)([]),a=Object(l.a)(e,2),i=a[0],c=a[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),d=o[0],u=o[1],p=h.c().center([0,41]).rotate([347,0]).parallels([35,45]).scale(2200).translate([249,239]);return Object(n.useEffect)((function(){(function(){var t=Object(j.a)(x.a.mark((function t(){var e,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("data/geo/it.json");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,c(f.a(a,a.objects.regions).features);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsx)("div",{className:"maparea-container align-self-center",children:Object(r.jsx)("svg",{viewBox:"0 0 498 478",preserveAspectRatio:"none",children:Object(r.jsxs)("g",{className:"countries",children:[i.map((function(e,a){var n,i,c=null===(n=t.summary)||void 0===n||null===(i=n.deliverySummary)||void 0===i?void 0:i.filter(y(e.properties.reg_name)),s={};return c&&c.length>0&&(s=c[0]),Object(r.jsx)("path",{d:h.d().projection(p)(e),className:"country",fill:"rgba(0,102,204,".concat(.01*s.percentuale_somministrazione,")"),stroke:"#FFFFFF",strokeWidth:.7,onClick:function(){return e=s.index,void(d===e?(t.handleCountryClick(null),u(null)):(t.handleCountryClick(e),u(e)));var e},children:Object(r.jsx)("title",{children:Object(r.jsxs)("span",{className:"bg-info",children:[s.area," ",s.percentuale_somministrazione,"%"]})})},"path-".concat(a))})),");"]})})})}),A=function(t){return Object(r.jsx)("div",{className:"d-flex m-2 p-2 pt-4 pb-4 w-100 h-75 justify-content-center text-center "+t.classes,children:t.text})},C=a(11),z=a.n(C),L=a(37),P=a.n(L);a(140);z.a.DataTable=P.a,z.a.DataTable.ext.classes.sPageButton="btn",z.a.DataTable.ext.classes.sPageButtonActive="btn-primary text-white",z.a.DataTable.ext.classes.sPageButtonDisabled="btn-outline-primary disabled",z.a.DataTable.ext.classes.sPaging="";var F=[{title:"Regione",data:"area"},{title:"Provincia",data:"provincia"},{title:"Comune",data:"comune"},{title:"Punto di somministrazione",data:"presidio_ospedaliero"}],M=function(t){return Object(n.useEffect)((function(){var e,a,r=z()("#datatable-locations").find("table").DataTable({dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row pagination-wrapper'<'col-sm-12 pagination'p><'col-sm-12'i>>",language:{lengthMenu:"Mostra _MENU_ risultati per pagina",info:"Risultati pagina _PAGE_ di _PAGES_",infoFiltered:"(filtrati su _MAX_ risultati)",search:"Cerca",paginate:{next:">",previous:"<"}},paging:!0,searching:!0,destroy:!0,pagingType:"simple_numbers",data:(null===(e=t.summary)||void 0===e?void 0:e.locations)||[],columns:F});(null===t||void 0===t||null===(a=t.selected)||void 0===a?void 0:a.area)?r.search(t.selected.area).draw():r.search(" ").draw()})),Object(r.jsx)("div",{id:"datatable-locations",children:Object(r.jsx)("table",{className:"table table-borderless compact table-striped table-hover table-responsive-sm",cellSpacing:"0",width:"100%"})})};z.a.DataTable=P.a;var k=[{title:"Regioni",data:"area"},{title:"Somministrazioni",data:"dosi_somministrate"},{title:"Consegne",data:"dosi_consegnate"},{title:"%",data:"percentuale_somministrazione"}],D=function(t){return Object(n.useEffect)((function(){var e,a,r=z()("#datatable").find("table").DataTable({dom:"<'row'<'col-sm-12 col-md-12'lf>><'row'<'col-sm-12'tr>>",language:{search:"Cerca"},paging:!1,searching:!0,destroy:!0,data:(null===(e=t.summary)||void 0===e?void 0:e.deliverySummary)||[],columns:k});(null===t||void 0===t||null===(a=t.selected)||void 0===a?void 0:a.area)?r.search(t.selected.area).draw():r.search(" ").draw()})),Object(r.jsx)("div",{id:"datatable",children:Object(r.jsx)("table",{className:"table table-borderless compact table-striped table-hover table-responsive-sm",cellSpacing:"0",width:"100%"})})},V=a(143),R=a.n(V),T=function(t){var e;return Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-center h-100 mt-2 mb-3",children:[Object(r.jsx)("div",{className:"timestamp mx-auto",children:Object(r.jsxs)("h6",{children:["Dati aggiornati al:"," ",t.summary.timestamp&&R()(t.summary.timestamp).format("DD-MM-YYYY HH:mm")]})}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)("img",{src:"meds.png",alt:"meds",className:"pr-5"})," ",Object(r.jsx)("h1",{className:"pl-5 mt-4 font-weight-light",children:null===(e=t.summary.tot)||void 0===e?void 0:e.toLocaleString("it")})]}),Object(r.jsx)("span",{className:"border-top mt-2 mb-2"}),Object(r.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(r.jsx)("img",{src:"logo.png",alt:"fiore",height:"30"}),Object(r.jsx)("img",{src:"logo.png",alt:"fiore",height:"30"}),Object(r.jsx)("img",{src:"logo.png",alt:"fiore",height:"30",className:"pr-5"})," ",Object(r.jsx)("h6",{className:"pl-5",children:"Totale vaccinazioni"})]})]})})]})},B="https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati",E="".concat(B,"/somministrazioni-vaccini-summary-latest.json"),I="".concat(B,"/somministrazioni-vaccini-latest.json"),G="".concat(B,"/consegne-vaccini-latest.json"),U="".concat(B,"/vaccini-summary-latest.json"),Y="".concat(B,"/punti-somministrazione-latest.json"),H="".concat(B,"/anagrafica-vaccini-summary-latest.json"),J="".concat(B,"/punti-somministrazione-latest.json"),q="".concat(B,"/last-update-dataset.json"),Q=function(t){console.log(t);var e,a=t.dataSommVaxSummary.data.filter(O).reduce(b("totale"),0),r=t.dataVaxSummary.data.map(w),n=t.dataProfileSummary.data,i=[{name:"Categoria OSS",code:"cat_oss",total:n.reduce(b("categoria_operatori_sanitari_sociosanitari"),0)},{name:"Categoria Ospiti RSA",code:"cat_rsa",total:n.reduce(b("categoria_ospiti_rsa"),0)},{name:"Categoria Personale non sanitario",code:"cat_pns",total:n.reduce(b("categoria_personale_non_sanitario"),0)}],c=t.dataSommVaxSummary.data.reduce((e="area",function(t,a){var r=a[e];return t[r]||(t[r]=[]),t[r].push(a),t}),{}),s={};Object.keys(c).map((function(t){return s[t]=[{name:"Categoria OSS",code:"cat_oss",total:c[t].reduce(b("categoria_operatori_sanitari_sociosanitari"),0)},{name:"Categoria Ospiti RSA",code:"cat_rsa",total:c[t].reduce(b("categoria_ospiti_rsa"),0)},{name:"Categoria Personale non sanitario",code:"cat_pns",total:c[t].reduce(b("categoria_personale_non_sanitario"),0)}],s}));var o=t.dataVaxLocations.data.map(w),l={gen_m:n.reduce(b("sesso_maschile"),0),gen_f:n.reduce(b("sesso_femminile"),0)},d={timestamp:t.dataLastUpdate.ultimo_aggiornamento,tot:a,deliverySummary:r,categoriesAndAges:n,categories:i,categoriesByRegions:s,locations:o,gender:l};return console.log(d),d},W=function(){var t=Object(j.a)(x.a.mark((function t(){var e,a,r,n,i,c,s,l,d,u,p,m,j,h,f,b;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(E);case 2:return e=t.sent,t.next=5,fetch(I);case 5:return a=t.sent,t.next=8,fetch(G);case 8:return r=t.sent,t.next=11,fetch(U);case 11:return n=t.sent,t.next=14,fetch(H);case 14:return i=t.sent,t.next=17,fetch(J);case 17:return c=t.sent,t.next=20,fetch(Y);case 20:return s=t.sent,t.next=23,fetch(q);case 23:return l=t.sent,t.next=26,e.json();case 26:return d=t.sent,t.next=29,a.json();case 29:return u=t.sent,t.next=32,r.json();case 32:return p=t.sent,t.next=35,n.json();case 35:return m=t.sent,t.next=38,i.json();case 38:return j=t.sent,t.next=41,c.json();case 41:return h=t.sent,t.next=44,s.json();case 44:return f=t.sent,t.next=47,l.json();case 47:return b=t.sent,t.abrupt("return",Object(o.a)({},Q({dataSommVaxSummary:d,dataSommVaxDetail:u,dataDeliveryVaxDetail:p,dataVaxSummary:m,dataProfileSummary:j,dataPointsSommSummary:h,dataLastUpdate:b,dataVaxLocations:f})));case 49:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(t){var e=+t.width,a=+t.height,i=Object(n.useRef)(),c=Object(n.useRef)();Object(n.useEffect)((function(){h.g(c.current).selectAll("svg").remove(),o()}));var s=function(t){var e=h.g(t.node().parentNode),a=parseInt(t.style("width"),10),r=parseInt(t.style("height"),10),n=a/r;function i(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/n))}t.attr("viewBox","0 0 ".concat(a," ").concat(r)).attr("preserveAspectRatio","xMinYMid").call(i),h.g(window).on("resize."+e.attr("id"),i)};var o=function(){var r=(null===t||void 0===t?void 0:t.data)||[],n=(null===r||void 0===r?void 0:r.reduce(g(t.property.yprop),0))||0,i=h.g(c.current).append("svg").attr("width",e).attr("height",a),o=50,l=50,d=h.e().padding(.2),u=h.f().domain([0,n]);u.range([a,0]),d.range([0,e]).domain(r.map((function(e){return e[t.property.xprop]}))),i.attr("width",e+2*l).attr("height",a+2*o).call(s).attr("id","svg-bar"),i.append("text").attr("x",e/2+l).attr("y",o/2).attr("class","title").attr("text-anchor","middle").attr(t.title),i.append("text").attr("x",e/2+l).attr("y",2*o).attr("transform","translate(0,".concat(a-o/4,")")).attr("class","title").text(t.xtitle),i.append("text").attr("x",-a/2-o).attr("y",l/2.4).attr("transform","rotate(-90)").attr("class","title").text(t.ytitle);var p=i.append("g").attr("transform","translate(".concat(l,",").concat(o,")"));p.append("g").attr("class","axis").call(h.b(u)),p.append("g").attr("class","axis").attr("transform","translate(0,".concat(a,")")).call(h.a(d)),p.append("g").attr("class","grid-hline").call(h.b().scale(u).tickSize(-e,0,0).tickFormat(""));var m=p.selectAll().data(r);m.enter().append("rect").attr("class","bar").attr("x",(function(e){return d(e[t.property.xprop])})).attr("y",(function(e){return u(e[t.property.yprop])})).attr("height",(function(e){return a-u(e[t.property.yprop])})).attr("width",d.bandwidth()).append("title").attr("x",(function(e){return d(e[t.property.xprop])})).attr("y",(function(e){return u(e[t.property.yprop])})).text((function(e){return"Fascia ".concat(e[t.property.xprop]," totale: ").concat(e[t.property.yprop])})),m.enter().append("text").attr("class","bartext").attr("text-anchor","middle").attr("fill","white").attr("x",(function(e){return d(e[t.property.xprop])+35})).attr("y",(function(e){return a-u(e[t.property.yprop])>=0?u(e[t.property.yprop])-10:u(e[t.property.yprop])})).text((function(e){return e[t.property.yprop].toLocaleString("it")})),m.exit().remove()};return Object(r.jsx)("div",{ref:c,className:"chart svg-container",children:Object(r.jsx)("svg",{ref:i,className:"svg-content-responsive"})})},Z=function(t){var e=+t.width,a=+t.height,i=Object(n.useRef)(),c=Object(n.useRef)();Object(n.useEffect)((function(){h.g(c.current).selectAll("svg").remove(),o()}));var s=function(t){var e=h.g(t.node().parentNode),a=parseInt(t.style("width"),10),r=parseInt(t.style("height"),10),n=a/r;function i(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/n))}t.attr("viewBox","0 0 ".concat(a," ").concat(r)).attr("preserveAspectRatio","xMinYMid").call(i),h.g(window).on("resize."+e.attr("id"),i)};var o=function(){var r=(null===t||void 0===t?void 0:t.data)||[],n=(null===r||void 0===r?void 0:r.reduce(g(t.property.yprop),0))||0,i=h.g(c.current).append("svg").attr("width",e).attr("height",a),o=80,l=200,d=h.f().domain([0,n]).range([0,e]),u=h.e().range([0,a]).domain(r.map((function(e){return e[t.property.xprop]}))).padding(.1);i.attr("width",e+2*l).attr("height",a+2*o).call(s).attr("id","svg-horizontal-bar"),i.append("text").attr("x",e/2+l).attr("y",o/2).attr("class","hb-title").attr("text-anchor","middle").attr(t.title),i.append("text").attr("x",e/2+l).attr("y",2*o).attr("transform","translate(0,".concat(a-o/4,")")).attr("class","hb-title").text(t.xtitle),i.append("text").attr("x",-a/2-o).attr("y",l/2.4).attr("transform","rotate(-90)").attr("class","hb-title").text(t.ytitle);var p=i.append("g").attr("transform","translate(".concat(l,",").concat(o,")"));p.append("g").attr("class","hb-axis").call(h.b(u)),p.append("g").attr("class","hb-axis").attr("transform","translate(0,".concat(a,")")).call(h.a(d).tickFormat((function(t){return t.toLocaleString("it")}))).selectAll("text").attr("transform","translate(-10,0)rotate(-45)").style("text-anchor","end"),p.append("g").attr("class","hb-grid-hline").call(h.b().scale(u).tickSize(-e,0,0).tickFormat(""));var m=p.selectAll().data(r);m.enter().append("rect").attr("class","hb-bar").attr("x",d(0)).attr("y",(function(e){return u(e[t.property.xprop])})).attr("width",(function(e){return d(e[t.property.yprop])})).attr("height",u.bandwidth()).append("hb-title").attr("x",(function(e){return d(e[t.property.xprop])})).attr("y",(function(e){return u(e[t.property.yprop])})).text((function(e){return"Fascia ".concat(e[t.property.xprop]," totale: ").concat(e[t.property.yprop])})),m.enter().append("text").attr("class","hb-bartext").attr("text-anchor","middle").attr("fill","white").attr("x",(function(e){return d(e[t.property.yprop])+35})).attr("y",(function(e){return a-u(e[t.property.xprop])>=60?u(e[t.property.xprop])+60:u(e[t.property.xprop])})).text((function(e){return e[t.property.yprop].toLocaleString("it")})),m.exit().remove()};return Object(r.jsx)("div",{ref:c,className:"chart svg-container",children:Object(r.jsx)("svg",{ref:i,className:"svg-content-responsive"})})};var K=function(){var t,e,a,i,c,s=Object(n.useState)({}),u=Object(l.a)(s,2),m=u[0],x=u[1],j=Object(n.useState)({}),h=Object(l.a)(j,2),f=h[0],b=h[1],g=Object(n.useState)({}),v=Object(l.a)(g,2),y=v[0],O=v[1],w=Object(n.useState)([]),N=Object(l.a)(w,2),C=N[0],z=N[1];return Object(n.useEffect)((function(){W().then((function(t){x(t),z(t.categories)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(T,{className:"mb-3",summary:Object(o.a)({},m)}),Object(r.jsxs)("div",{className:"d-flex flex-column flex-sm-row justify-content-center w-75 h-100 mx-auto mt-3",style:{height:150},children:[Object(r.jsx)(A,{classes:"bg-primary text-white",text:"Il 27 dicembre sono state consegnate 9.750 dosi di vaccino, interamente somministrate."}),Object(r.jsx)(A,{classes:"bg-primary text-white",text:"Dal 30 Dicembre al 1\xb0 Gennaio sono state consegnate 469.950 dosi di vaccino."})]}),Object(r.jsx)("div",{className:"d-flex justify-content-center w-75 mx-auto",style:{height:150},children:Object(r.jsx)(A,{classes:"text-black text-uppercase font-weight-bold",text:"Le somministrazioni delle 469.950 dosi di vaccino su tutto il territorio sono iniziate il 31 dicembre"})}),Object(r.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center w-75 mx-auto h-100 mt-3",children:[Object(r.jsx)(D,{summary:Object(o.a)({},m),selected:f,className:"mr-5 h-100"}),Object(r.jsx)(_,{summary:Object(o.a)({},m),handleCountryClick:function(t){b(Object(o.a)({},m.deliverySummary[t]))},className:"ml-5 w-100 h-100"})]}),Object(r.jsx)("h4",{className:"text-center mt-5",children:"Vaccinazioni per fasce di et\xe0"}),Object(r.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center w-100 mx-auto h-100 mt-3",style:{backgroundColor:"#013366"},children:[Object(r.jsx)(X,{title:"",xtitle:"Fascia d'et\xe0",ytitle:"",width:"800",height:"300",property:{xprop:"fascia_anagrafica",yprop:"totale"},data:(null===m||void 0===m||null===(t=m.categoriesAndAges)||void 0===t?void 0:t.slice())||[]}),Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-center p-3",children:[Object(r.jsxs)("div",{className:"d-flex flex-row flex-xl-column justify-content-center align-items-center",children:[Object(r.jsx)("img",{src:"user_f.png",alt:"users",width:"80px"}),Object(r.jsx)("span",{className:"mx-3 text-center font-weight-light text-white",children:Object(r.jsx)("h3",{children:null===m||void 0===m||null===(e=m.gender)||void 0===e||null===(a=e.gen_f)||void 0===a?void 0:a.toLocaleString("it")})})]}),Object(r.jsxs)("div",{className:"d-flex flex-row flex-xl-column justify-content-center align-items-center",children:[Object(r.jsx)("img",{src:"user_m.png",alt:"users",width:"80px"}),Object(r.jsx)("span",{className:"mx-3 text-center font-weight-light text-white",children:Object(r.jsx)("h3",{children:null===m||void 0===m||null===(i=m.gender)||void 0===i||null===(c=i.gen_m)||void 0===c?void 0:c.toLocaleString("it")})})]})]})]}),Object(r.jsx)("h4",{className:"text-center mt-5",children:"Vaccinazioni per categoria"}),Object(r.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center mx-auto h-100 mt-3",children:[Object(r.jsx)(Z,{title:"",xtitle:"Vaccinazioni per categoria",ytitle:"",width:"400",height:"400",property:{xprop:"name",yprop:"total"},data:(null===C||void 0===C?void 0:C.slice())||[]}),Object(r.jsx)(_,{summary:Object(o.a)({},m),handleCountryClick:function(t){var e,a=null===(e=m.deliverySummary[t])||void 0===e?void 0:e.area,r=S[a],n=m.categoriesByRegions[r];z(t?(null===n||void 0===n?void 0:n.slice())||[]:m.categories)},className:"ml-5 w-100 h-100"})]}),Object(r.jsx)("h4",{className:"text-center mt-5",children:"Punti di somministrazione"}),Object(r.jsxs)("div",{className:"d-flex flex-column flex-xl-row justify-content-center w-75 mx-auto h-100 mt-3",children:[Object(r.jsx)(M,{summary:Object(o.a)({},m),selected:y,className:"mr-5 h-100"}),Object(r.jsx)(_,{summary:Object(o.a)({},m),handleCountryClick:function(t){O(Object(o.a)({},m.deliverySummary[t]))},className:"ml-5 w-100 h-100"})]}),Object(r.jsx)(p,{})]})},$=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,234)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),r(t),n(t),i(t),c(t)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),$()},24:function(t,e,a){}},[[233,1,2]]]);
//# sourceMappingURL=main.ccb67623.chunk.js.map