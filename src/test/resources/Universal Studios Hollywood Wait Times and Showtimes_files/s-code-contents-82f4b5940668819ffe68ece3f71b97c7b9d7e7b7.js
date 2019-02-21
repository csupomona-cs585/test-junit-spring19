/* SiteCatalyst code version: AppMeas 1.7
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

// NC - DC - 03/05/18 - Channel Manager updates

console.log('v11');
var scSite=_satellite.getVar('siteConfig');
console.log(scSite);

if(scSite.indexOf("ots")>-1){
    
}
else if(scSite.indexOf("ush")>-1){
 console.log('s_code loaded-ush')
s_getLoadTime();
s = new AppMeasurement();
  
  
s.debugTracking=false
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet="ISO-8859-1"
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,universalstudioshollywood.com,dev3.nbcupress.universalstudioshollywood.com" //complete comma separated list of what should be considered internal urls
s.linkLeaveQueryString=false
s.linkTrackVars="None" //Typically set to false at a global level this prevents eVars from sticking around longer than they should. 
s.linkTrackEvents="None" //Typically set to false at a global level this prevents events from sticking around longer than they should.
s.cookiePath="/";
//s.cookieDomain=document.location.hostname;

//var s=s_gi(s_account)
s.debugTracking=false
s.charSet = "UTF-8"

function getAnalyticsAccount() {
  for(var toolid in _satellite.tools) {
    if(_satellite.tools[toolid].settings.engine == "sc") {
      return _satellite.tools[toolid].settings.account;
    }
  }
}
var scReport=getAnalyticsAccount();
//var s=s_gi(s_account);
console.log('s.account#1-'+scReport);
if(typeof(_satellite.getVar('scRsid'))==="string"){
    s_account=s.account=_satellite.getVar('scRsid')+scReport;
    console.log('s.account#1-'+scReport);
}
else{
    s.account="notset";
}
console.log(_satellite.getVar('scDevice'));
if(typeof(_satellite.getVar('scDevice'))=="string"){
    var scDevice = _satellite.getVar('scDevice');
    if(scDevice==="mobile" && s.account.indexOf('dev201611')>-1){
        s_account=s.account="nbcuushmobiledev201611,nbcuushglobaldev201611,nbcuushenterprisedev201611";
    }
    else if(scDevice==="mobile" && s.account.indexOf('prod201611')>-1){
        s_account=s.account="nbcuushmobileprod201611,nbcuushglobalprod201611,nbcuushenterpriseprod201611,nbcuunistudioshollywoodwapbu";
    }
    else{
        s_account=s.account=s.account;
    }
}
if(s.account.indexOf('nbcuushdesktopprod201611')>-1){
    s.account=s_account=s.account+",nbcuuniversalhollywoodbu";
}
else if(s.account.indexOf('nbcuushmobileprod201611')>-1){
    //s.account=s_account=s.account+",nbcuunistudioshollywoodwapbu";
}
//s.account=_satellite.getVar('scRsid')+s.account;

/* Plugin config */

/* getPageName Plugin Config */ //Probably won't work in app measurement
s.siteID="";
s.defaultPage="default.aspx";
s.queryVarsList="";
s.pathExcludeDelim=";";
s.pathConcatDelim=":";


//Time parting configuration for US based clients
s._tpDST = {
    2012:'3/11,11/4',
    2013:'3/10,11/3',
    2014:'3/9,11/2',
    2015:'3/8,11/1',
    2016:'3/13,11/6',
    2017:'3/12,11/5',
    2018:'3/11,11/4',
    2019:'3/10,11/3'}

/* Media Module Config */
// s.loadModule('Media');
// s.Media.onLoad=function(s,m){
//     s.Media.autoTrack=true;
//     s.Media.trackWhilePlaying=false;
//     console.log('**** MEDIA module loaded1');
//     s.Media.trackVars='events,eVar22,eVar23';
//     s.Media.trackEvents='event24,event120,event23,event25,event26,event27,event28';
//     s.Media.playerName='youtube';
//     // s.Media.trackSeconds=5;
//     s.Media.segmentByMilestones=true;
//     s.Media.trackMilestones='25,50,75,100';
//     s.Media.trackUsingContextData=true;
//     console.log('**** MEDIA module loaded2');
//     s.Media.contextDataMapping={
//         'a.contentType':'',
//         'a.media.name':'eVar22',
//         'a.media.segment':'eVar23',
//         'a.media.view':'event24',
//         'a.media.segmentView':'event120',
//         'a.media.timePlayed':'event23',
//         "a.media.complete":"event28",
//         'a.media.milestones':{
//             25:'event25',
//             50:'event26',
//             75:'event27'
//         }
//     }
//     console.log('**** MEDIA module loaded3');
//     //s.Media.trackVars='events,eVar22,eVar23';
//     //s.Media.trackEvents='event24,event120,event23,event25,event26,event27,event28';
//     //if(s.linkTrackVars&&s.linkTrackVars!='None')s.Media.trackVars=s_apl(s.Media.trackVars,s.linkTrackVars,',',1);
//     //if(s.linkTrackEvents&&s.linkTrackEvents!='None')s.Media.trackEvents=s_apl(s.Media.trackEvents,s.linkTrackEvents,',',2);
//         /*
//     * can use the below IF wanna pass additional data --- Need to update s.Media.trackVars --- BUT we could potential set it on above var and avoid using the below
//     */
//     s.Media.monitor =function(s, media){
//   console.log('**** MEDIA module loaded4');
//     console.log(media);
//         //https://marketing.adobe.com/resources/help/en_US/sc/appmeasurement/video/video_mediamonitor.html
//         console.log('in the video monitor, can help add additional evar, prop or events', media);
//         if(media.event == "OPEN") {
//             s.contextData = s.Media.contextDataMapping
//             s.Media.track(media.name);
//             console.log('num 1');
//         } else if(media.event == "MILESTONE") {
//             s.contextData = s.Media.contextDataMapping
//             s.Media.track(media.name);
//             console.log('num 2');
//         } else if(media.event == "CLOSE") {
//             s.contextData = s.Media.contextDataMapping
//             s.Media.track(media.name);
//             console.log('num 3');
//         }
//     }
// };


/*MEDIA MONITOR to send additional video data*/
// s.Media.monitor = function (s,media){

//     if(media.event=="OPEN") {
//         console.log("Media open");

//     }
//  if(media.event=="PLAY") {
//         console.log("Media play");

//     }
//  if(media.event=="STOP") {
//         console.log("Media stop");

//     }
//     if(media.event=="CLOSE") {
//        console.log("Media completed");

//     }

// }

s.usePlugins=true
function s_doPlugins(s) {
    console.log('doPlugins check');
    //Capture marketing query parameters cid,et_cid,et_mid,utm_medium, utm_campaign
    //s.campaign = s.Util.getQueryParam('cid'); //There is one required parameter and two optional parameters key, url, delimiter
    //Add exisiting value to the values for a given event that are already set
    //Ensures that you don't overwrite existing events when adding a new one.
    //s.events=s.apl(s.events,"event1",",",1);
    /* New Repeat */
    // var repeat_type = "";
    // s.eVar12=repeat_type=s.getNewRepeat(365); //Two optional parameters avialable (expiration number of days,'cookie name'); 
    // //Typically you can use the default cookie name but the cookie expiration should be set
    // s.eVar12=s.getValOnce(s.eVar12,'s_eVar12',0);
    // if(repeat_type&&s.pageName) s.prop13=repeat_type + ":" + s.pageName; //new repeat pathing
    //Determine which site the visitor is on
    var scHost=document.location.hostname;
    var scUrl=document.URL;
    // if(scHost==='dev3.nbcupress.universalstudioshollywood.com' || scHost==="www.universalstudioshollywood.com" || scHost==="espanol.universalstudioshollywood.com"){
    //     var scSite="ush";
    // }
    // else if(scHost==="store.universalstudioshollywood.com" || scHost==="ushdenaliqa.inbcu.com" || scHost==="universalstudioshollywood.uat.bbhosted.com" || scUrl.indexOf('m.universalstudioshollywood.com/bbhost')>-1){
    //     var scSite="ots";
    // }
    /* Plugin Example: getPagename v2.2*/
    //if(!s.pageName)s.pageName = s.getPageName().replace(/\.aspx/g,"").replace(/\:default/g,"").replace(/ *\: */g," : ");
        //s.pageName=s.pageName.toLowerCase();
        //if (s.pageName=='default') s.pageName='home';
        //Configure Page Names
  // 4/5/2017 Net Conversion Update for Virtual Page Execution  
  //if(vpp_page === undefined || vpp_page == null || vpp_page.length <= 0) {
     var scPath = document.location.pathname;    
     //console.log('vpp_page= '+ vpp_page); }
  //else {
    //var scPath = vpp_page; 
     //console.log('fake_page='+vpp_page); }
    
    console.log(scPath);
    var parts = scPath.replace(/\#.+/, '').replace(/\?.+/, '').replace(".html","").replace("index","").replace(".aspx","").split("/"),
    total = parts.length,
    count = 0,
    s_pageName = "",
    urlPath = document.URL.toLowerCase();
    console.log(total);
    if(total=="7"){
        s.pageName=parts[1]+'|'+parts[2]+'|'+parts[3]+'|'+parts[4]+'|'+parts[5];
        if(parts[6].length>0){
            s.pageName=s.pageName+'|'+parts[6];
        }
    }
    else if(total=="6"){
        s.pageName=parts[1]+'|'+parts[2]+'|'+parts[3]+'|'+parts[4];
        if(parts[5].length>0){
            s.pageName=s.pageName+'|'+parts[5];
        }
    }
    else if(total=="5"){
        s.pageName=parts[1]+'|'+parts[2]+'|'+parts[3];
        if(parts[4].length>0){
            s.pageName=s.pageName+'|'+parts[4];
        }
    }
    else if(total=="4"){
        s.pageName=parts[1]+'|'+parts[2];
        if(parts[3].length>0){
            s.pageName=s.pageName+'|'+parts[3];
        }
    }
    else if(total=="3"){
        s.pageName=parts[1];
        if(parts[2].length>0){
            s.pageName=s.pageName+'|'+parts[2];
        }
    }
    else if(total=="2"){
        if(parts[1].length>0){
            s.pageName=parts[1];
        }
    }

    if(typeof(parts[1]) !="undefined" && parts[1].length>0){
        s.channel=parts[1];
    }
    if(scPath=="/"){
        s.pageName='home'
    }
    if(typeof(_satellite.getVar('scChannel'))==="string"){
        s.channel=_satellite.getVar('scChannel');
        s.pageName=s.channel+"|"+s.pageName;
    }
    if(typeof(_satellite.getVar('scLanguage'))==="string"){
        s.eVar40=_satellite.getVar('scLanguage');
        if(s.eVar40) s.prop40="D=v40";
    }
    if(typeof(_satellite.getVar('scGlobalCat'))==="string"){
        s.prop39=_satellite.getVar('scGlobalCat');
        s.eVar39="D=c39";
    }
    if(document.location.hostname==="promotions.universalstudioshollywood.com"){
        if(parts[1].length>0){
            s.pageName='ush'+'|promotions|'+parts[1];
            s.pageName=s.pageName.replace(/-/g, " ");
        }
        else{
            s.pageName='ush|promotions';
        }
    }
    else if(document.location.hostname==="info.universalstudioshollywood.com"){
        if(total=="4"){
            s.pageName='ush|info|'+parts[1]+'|'+parts[2];
            if(parts[3].length>0){
                s.pageName=s.pageName+'|'+parts[3];
            }
        }
        if(total=="3"){
            s.pageName='ush|info|'+parts[1];
            if(parts[2].length>0){
                s.pageName=s.pageName+'|'+parts[2];
            }
        }
        else if(total=="2"){
            if(parts[1].length>0){
                s.pageName=s.pageName+'|'+parts[1];
            }
        }
        else{
            s.pageName='ush|info';
        }

    }
    if(s.pageName) s.pageName=s.pageName.toLowerCase();
    //Internal Campaign Parameters
    if(!s.eVar1) s.eVar1 = s.Util.getQueryParam('icid');
    if(!s.eVar1) s.eVar1 = s.Util.getQueryParam('intcmp');
    //s.prop24 = getQSParamValueFromString(qsString, 'intcmp');
    if(s.eVar1) s.prop1 = "D=v1";
    //Set pageName to eVar and prop
    if(s.pageName){
        s.eVar5=s.prop5="D=pageName";
    }
    s.eVar7=document.location.hostname+document.location.pathname;
    if(s.eVar7)s.prop7="D=v7";
    //Set eVar to URL
    s.eVar8=s.prop8="D=g";



    //Page Load Time
    s.eVar11=s.prop11=s_getLoadTime();

    //New vs Repeat
    s.eVar12=s.getNewRepeat(30,'s_gnr');
    if(s.eVar12)s.prop12 = "D=v12";

    /* Timeparting EST */
    //A classification should be performed to break this down into hour, day, weekend
    s.eVar13=s.getTimeParting('n','-5'); //Optional parameters are (hemisphere,gmt time zone)//Currently set as nothern hemisphere and eastern time zone
    if(s.eVar13)s.prop13="D=v13";

    /* Get Visit Number */
    s.eVar14=s.getVisitNum();
    s.prop14="D=v14";

    /*Days since last visit adobe plugin call*/
    //s.eVar15=s.getDaysSinceLastVisit('s_lv');
    if(s.eVar15)s.prop15="D=v15";



    //External Campaign Parameters
    s.channelManager('__source,_source,source,psoc','','s_cm','','s_cmtb','30','1');
    s.eVar48=s._channel;
    
  //GM: Bing Override
    if (document.referrer.indexOf('bing.com') > -1) {
        s.eVar48='Organic Search';
    }

  //DC: Yahoo Override
    if (document.referrer.indexOf('search.yahoo.com') > -1) {
        s.eVar48='Organic Search';
    }

    //Source Query Parameter
    var scSource1=s.Util.getQueryParam('source');
    var scSource2=s.Util.getQueryParam('_source');
    var scSource3=s.Util.getQueryParam('__source');
    //var scSource;
    if(typeof(scSource1)=="string" && scSource1.length> 0){
      scSource=scSource1;
    }
    else if(typeof(scSource2)=="string" && scSource2.length> 0){
        scSource=scSource2;
    }
    else if(typeof(scSource3)=="string" && scSource3.length> 0){
        scSource=scSource3;
    }
    if(typeof(scSource)!="undefined" && scSource.length>0){
        if(scSource.substring(scSource.length-1) == "."){
            var scSource = scSource.substring(0, scSource.length-1);
        }
        if(scSource=="fj"){
            var scSource="facebook";
        }
        else if(scSource=="gp"){
            var scScource="twitter";
        }
        else if(scSource=="bf"){
            var scSource="youtube";
        }
        s.eVar42=scSource;
    }
    else{
        s.eVar42="";
    };
    s.eVar41=s.Util.getQueryParam('channel');

    // else if(s.eVar41.indexOf('dis')>-1){
    //     s.eVar48='Display';
    // }

    //First Touch Channel Value
    if(s.eVar41) s.eVar2="D=v41";
    //Internal Search
    //Campaign Name Query Parameter
    s.eVar43=s.Util.getQueryParam('campaign');
    //Media Query Parameter
    s.eVar44=s.Util.getQueryParam('media');
    //Category Query Parameter
    s.eVar45=s.Util.getQueryParam('category');
    if(s.eVar41){
        scCChannel=s.eVar41;
    }
    else{
        scCChannel='notset';
    }
    if(s.eVar42){
        scCSource=s.eVar42;
    }
    else{
        scCSource='notset';
    }
    if(s.eVar43){
        scCCampaign=s.eVar43;
    }
    else{
        scCCampaign='notset';
    }
    if(s.eVar44){
        scCMedia=s.eVar44;
    }
    else{
        scCMedia='notset';
    }
    if(s.eVar45){
        scCCategory=s.eVar45;
    }
    else{
        scCCategory='notset';
    }

    var tcChannel = s.eVar41;
    switch (tcChannel) {
        case 'sem':
            s.eVar48='Paid Search';
            break;
        case 'psoc':
            s.eVar48='Paid Social';
            break;
        case 'dis':
        case 'disrsp':
        case 'distxt':
        case 'disrspt':
            s.eVar48='Display';
            break;
        case 'email':
            s.eVar48='Email';
            break;
        case 'vid':
        case 'streaming':
            s.eVar48='Video';
            break;
        case 'soc':
            s.eVar48='Owned Social';
            break;
    }
  
  if(s.eVar48 != 'null' && s.eVar48 != ''){
    s.linkTrackVars='eVar23, eVar24';
    s.eVar23=s.eVar48;
    s.eVar24=s.eVar48;
}


    if(s.eVar41!="" || s.eVar42!="" || s.eVar43!="" || s.eVar44!="" || s.eVar45!=""){
        if(!s.campaign) s.campaign=scCChannel+"|"+scCSource+"|"+scCCampaign+"|"+scCMedia+"|"+scCCategory;
    }


    /* Set eVar20 URL without query parameters*/ 
    s.prop21=s.server=document.location.hostname;

    s.eVar46=s.crossVisitParticipation(s.eVar43,'s_ev43', '30','5','|','',1);

    if(typeof(s.eVar53)!="undefined"){
        s.abort="true";
        //console.log('not undefined');
    }
    //Set page view event
    s.events=s.apl(s.events,"event2",",",1);

    if(jQuery('.error404').length >0){
        s.pageType='errorPage'
        s.pageName='';
        s.channel='';
        s.eVar55=document.URL+':404 Error';
    }
    // capture previous page name; if it exists, capture percent of page viewed
    s.eVar9=s.getPreviousValue(s.pageName,'gpv_pn');//prop is prev page name
    if (s.eVar9){
        s.prop9="D=v9";
        s.eVar10=s.getPercentPageViewed();
    }
    if(s.eVar10)s.prop10 = "D=v10";
    if(typeof(s.eVar49) === "string"){
        console.log('tester');
        if(s.eVar49.length === 1){
            s.eVar49 = "";
            console.log('less')
        }
    }
    setCookie('ushRefPage',s.pageName);
} s.doPlugins=s_doPlugins;


//tracking facebook and twitter on confirmation
jQuery('div#SocialMediaList img').on('click',function(){
    var scVal=jQuery(this).attr('id');
    var scFVal="confirmation|"+scVal;
    s.linkTrackVars='events,eVar17,prop17,prop18,eVar18';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.eVar18=scVal;
    s.prop18="D=v18";
    s.events=s.linkTrackEvents='event52';
    s.tl(this,'o','social interaction');
    s.eVar18=s.prop18=s.eVar19=s.prop19=s.events=s.linkTrackEvents='';
})



if(!s.eVar32) s.eVar32="D=mid";

//Current Ticket Pricing
    scPrice = jQuery('span.price').map(function(i, el) {
        return jQuery(el).text();
    }).get();
    var scFinal=scPrice.join();
    s.eVar21=scFinal.replace(/[^0-9,]/g, "");
//s.eVar21 = scPrice[0]+'|'+scPrice[1]'|'+scPrice[2];

if(typeof(getCookie('sc_nav_click'))==="string"){
    console.log(getCookie('sc_nav_click'));
    s.eVar16=getCookie('sc_nav_click');
    s.prop16="D=v16";
    //var scFVal='none';
    setCookie('sc_nav_click','', 0, -90000);
}


//Capture Submenu Clicks
jQuery('ul.sub-menu a').on('mousedown',function(){
    var scVal=jQuery(this).text().toLowerCase();
    if(typeof(scVal)!="undefined" && scVal.indexOf('front of line $179+save $10 online') > -1){
        console.log(scVal);
        scVal=scVal.replace('$179+save $10 online','');
        scVal='special offers|'+scVal;
    }
    else if(typeof(scVal)!="undefined" && scVal.indexOf('$129save $20 online') > -1){
        console.log(scVal);
        scVal=scVal.replace('$129save $20 online','');
        scVal='special offers|'+scVal;
    }
    else if(typeof(scVal)!="undefined" && scVal.indexOf('$329+save $10 online') > -1){
        console.log(scVal);
        scVal=scVal.replace('$329+save $10 online','');
        scVal='special offers|'+scVal;
    }
    var scFVal="header|"+scVal;
    //console.log(scVal);
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
})

//USH Header Click USH Desktop and Mobile
jQuery('h1#site-title a,a.title-bar-title').on('click',function(){
    var scVal='logo';
    var scFVal="header|"+scVal;
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
    s.eVar18=s.prop18=s.eVar19=s.prop19=s.events=s.linkTrackEvents='';
})

//Top Nav-Top Level Tracking
jQuery('li.top-level').on('click','a:first',function(){
    var scVal=jQuery(this).text().toLowerCase();
    var scFVal="header|"+scVal;
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
})

//
jQuery('p#nav-annual-pass-link a').on('click',function(){
    var scVal=jQuery(this).text().toLowerCase();
    var scFVal="header widget|"+scVal;
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    s.events=s.linkTrackEvents=s.eVar17=s.prop17="";
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
})

jQuery('ul#footer-legal-links li a').on('click',function(){
    var scVal=jQuery(this).text().toLowerCase();
    var scFVal="footer|"+scVal;
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
})

jQuery('#newsletter-footer a').on('click',function(){
    var scVal=jQuery(this).text().toLowerCase();
    var scLink=jQuery(this).attr('name');
    if(scLink==="newsletter-popup-init-et"){
        scVal="newsletter";
        s.events=s.linkTrackEvents='event44';
    }
    else{
        s.events=s.linkTrackEvents='event52';
    }
    var scFVal="footer|"+scVal;
    s.linkTrackVars='events,eVar17,prop17,prop18,eVar18';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.eVar18=scVal;
    s.prop18="D=v18";
    //s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
    s.events=s.linkTrackEvents=s.eVar17=s.prop17=s.eVar18=s.prop18="";
})

jQuery('ul#menu-footer-universal-studios-hollywood a,ul#menu-footer-plan-your-visit a').on('click',function(){
    var scVal=jQuery(this).text().toLowerCase();
    var scFVal="footer|"+scVal;
    console.log(scFVal);
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3';
    s.tl(this,'o','site navigation click');
})

if(typeof(getCookie('s_fid'))=="string"){
    s.eVar75=getCookie('s_fid');
    //s.eVar32=s.getValOnce(s.eVar32,'s_eVar32',0);
}

if(_satellite.getVar('ushSearchTerm').length > 0 && _satellite.getVar('ushPageNumber')==="0"){
    var scSearchTerm = _satellite.getVar('ushSearchTerm');
    s.eVar3 = scSearchTerm.toLowerCase().replace(new RegExp("\\+","g"),' ')
    s.prop3 = "D=v3";
    var scText = jQuery('div#search-details').text().toLowerCase();
    if(scText.indexOf('showing results 1 -')>-1){
        var arr=scText.split('f');
        var scVal = arr[1].replace(/\D+/g, '');
        var searchNumber = scVal;
        s.eVar4 = s.prop4= searchNumber;
    }
}
//Special Offers Banner Click
jQuery("div#special_offers section.ticket_prices a").on('click',function(){
    var scVal=jQuery(this).attr('title');
    if(scVal.indexOf('<br>')>-1){
        var result=jQuery('<div>',{html:scVal}).contents().first().text();
    }
    else{
        var result=scVal;
    }
    var scFVal="special offers banner|"+result;
    s.linkTrackVars='events,eVar17,prop17';
    s.eVar17=scFVal;
    if(s.eVar17)s.eVar17=s.eVar17.toLowerCase();
    s.prop17="D=v17";
    s.events=s.linkTrackEvents='event3,event42';
    s.tl(this,'o','special offer click');
    setCookie('sc_nav_click', scFVal, 0, 1800); // 1800 seconds, 30 minutes
})

// (function (jQuery) {
//     /**
//     * @function
//     * @property {object} jQuery plugin which runs handler function once specified element is inserted into the DOM
//     * @param {function} handler A function to execute at the time when the element is inserted
//     * @param {bool} shouldRunHandlerOnce Optional: if true, handler is unbound after its first invocation
//     * @example $(selector).waitUntilExists(function);
//     */
// jQuery.fn.waitUntilExists    = function (handler, shouldRunHandlerOnce, isChild) {
//     var found   = 'found';
//     var $this   = $(this.selector);
//     var $elements   = $this.not(function () { return $(this).data(found); }).each(handler).data(found, true);
//     if (!isChild)
//     {
//         (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
//             window.setInterval(function () { $this.waitUntilExists(handler, shouldRunHandlerOnce, true); }, 500)
//         ;
//     }
//     else if (shouldRunHandlerOnce && $elements.length)
//     {
//         window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
//     }
//     return $this;
// }
// }(jQuery));


// function scNewsConf(){
//     alert('scNewsConf called');
// }

// jQuery('div#newsletter_modal span h2').waitUntilExists('scNewsConf');


/**********Non SiteCatalyst Plugins***********/
function setCookie(c_name, value, exdays, exminutes) {
    var exdate = new Date();
    if (exdays > 0)
        exdate.setDate(exdate.getDate() + exdays);
    else
        exdate.setTime(exdate.getTime() + (exminutes * 60 * 1000));
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) + ";domain=" + s.cookieDomain + ";path=" + s.cookiePath;;
    document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return false;
}
}
/************************* PLUGINS SECTION **************************/
/*
 * Plugin: YouTube plugin v1.54
 */
/*
// window.s_YTO={s_name:'s'}
// window.onYouTubePlayerReady=function(id){if(id&&document.getElementById(id)&&!s_YTO.v[id])s_YTO.v[id]=new s_YTv(id,1)}
// window.s_YTp=function(){try{var D=document,f=D.getElementsByTagName('iframe'),k,id,t,i,j,I=function(n){var i=0;try{eval('var '+n)}catch(e){i=1};return i};if(s_YTisa())s_YTO.ya=2;for(i=0;i<f.length;i++){k=s_YTgk(f[i].src);id=f[i].id;if(k){if(!id||I(id)){id='YouTubeV';for(j=1;j<99;j++)if(!D.getElementById(id+j))break;id=j<99?id+j:'';f[i].id=id}if(id)if(!s_YTO.ya){s_YTO.ya=1;t=D.createElement('script'),f;t.src='//www.youtube.com/player_api';f=D.getElementsByTagName('script')[0];f.parentNode.insertBefore(t,f)}else if(s_YTO.ya==2&&!s_YTO.v[id])s_YTO.v[id]=new s_YTv(id)}}}catch(e){};s_YTO.ut=setTimeout('s_YTp()',1000)}
// window.s_YTisa=function(){return typeof window.YT=='object'&&YT.Player}
// window.s_YTism=function(){var s=s_YTO.s=window[s_YTO.s_name||'s']||0;return typeof s=='object'&&typeof s.Media=='object'&&s.Media.open?s:0}
// window.s_YTgk=function(u){var r='',a,f='',v=u.toLowerCase();if(v.indexOf('//www.youtube.com')>-1){if(v.indexOf('/watch')>-1)f='v';if(!f&&v.indexOf('/apiplayer')>-1)f='video_id';if(!f&&v.indexOf('/v/')>-1)f='/v/';if(!f&&v.indexOf('/embed/')>-1)f='/embed/';if(f>'A'){a=v.indexOf('?'+f+'=');if(a<0)a=v.indexOf('&'+f+'=');if(a>-1)r=u.substring(a+f.length+2)}else if(f){a=v.indexOf(f);r=u.substring(a+f.length)}if(r){a=r.indexOf('?');if(a<0)a=r.indexOf('&');if(a<0)a=r.indexOf('#');if(a>-1)r=r.substring(0,a)}}return r}
// window.onYouTubePlayerAPIReady=function(){try{s_YTO.ya=2;if(s_YTO.ut)clearTimeout(s_YTO.ut);s_YTp()}catch(e){}}
// window.s_YTdi=function(){var s=s_YTism();if(s){if(typeof s.Media.trackWhilePlaying!='undefined'){s_YTO.twp=s.Media.trackWhilePlaying;s.Media.trackWhilePlaying=false}if(typeof s.Media.trackSeconds!='undefined'){s_YTO.ts=s.Media.trackSeconds;delete s.Media.trackSeconds}}}
// window.s_YTei=function(){var s=s_YTism();if(s){if(typeof s_YTO.twp!='undefined'){s.Media.trackWhilePlaying=s_YTO.twp;delete s_YTO.twp}if(typeof s_YTO.ts!='undefined'){s.Media.trackSeconds=s_YTO.ts;delete s_YTO.ts}}}
// window.s_YTut=function(){s_YTO.uf=0;s_YTei()}
// window.s_YTdv=function(id){try{if(!id)return;var v=s_YTO.v[id]||0;if(v){if(v.ss){if(s_YTism())s_YTO.s.Media.close(v.sv);v.ss=0}}v.vc()}catch(e){}}
// window.s_YTv=function(id){var t=this;t.vc=function(){var t=this;t.id=t.sn=t.sl=t.yt=t.yk=t.kl='';t.yd=t.yp=t.ys=t.pt=t.ss=t.ts=t.qs=t.ql=0};t.vg=function(yp){var t=this,D=document,N='number',u='',a,b,c,i,x=0,y;if(yp){if(yp.getVideoUrl)u=yp.getVideoUrl();if(!u)u=yp.a.src||'';if(yp.getVideoData)x=yp.getVideoData();if(x&&x.title)t.yt=x.title;y=x&&x.video_id?x.video_id:s_YTgk(u);if(y&&y!=t.yk){t.kl=t.yk;t.yk=y;t.ts=t.qs=t.ys=0;if(t.yd){delete t.yd;t.yd=0}t.yt='';a='s_YTdata_'+t.id+'_'+t.yk;b=D.getElementById(a);if(b)b.parentNode.removeChild(b);b=D.createElement('script');b.id=a;b.src='//gdata.youtube.com/feeds/api/videos/'+t.yk+'?v=2&alt=json-in-script&callback=window.s_YTO.v.'+t.id+'.fc';a=D.getElementsByTagName('script')[0];a.parentNode.insertBefore(b,a)}if(yp.getDuration){x=yp.getDuration();t.ts=typeof x==N?Math.round(x):0}t.qs=0;if(yp.getCurrentTime){x=yp.getCurrentTime();t.qs=typeof x==N?Math.round(x):0}if(yp.getPlayerState){x=yp.getPlayerState();t.ys=x||0}}};t.ve=function(){var s=s_YTism();if(s){var t=this,d,O=function(){t.sl=t.sn;t.sn='YouTube|'+(t.yk||t.id||'')+'|'+(t.yt||'');s.Media.open(t.sn,t.ts,s_YTO.vp);t.ss=1},P=function(){s.Media.play(t.sn,t.qs);t.ql=t.qs;t.ss=2},S=function(n,q){s.Media.stop(n||t.sn,q||t.qs);t.ss=1;t.ql=t.qs},C=function(n){s.Media.close(n||t.sn);t.ss=t.qs=t.ql=0};t.vg(t.yp);if(t.sk&&t.sk!=t.kl){if(t.ss){if(t.ss==2)S(t.sl,t.ql);C(t.sl)}}switch(t.ys){case 1:if(t.ss==2){d=Math.abs(t.qs-t.ql);if(d>1)S(t.sn,t.ql)}if(!t.ss){O();t.qs=t.ql=0}P();break;case 0:if(t.ss){if(t.ss!=1){if(Math.abs(t.qs-t.ts)<=1)t.qs=t.ts;S()}C()}break;case 2:if(!t.ss)O();if(t.ss!=1)S();break;case 3:if(s_YTO.uf)clearTimeout(s_YTO.uf);else s_YTdi();s_YTO.uf=setTimeout('s_YTut()',3000);break;case-1:case 5:default:break}}};t.fsc=function(ye){try{t.ys=ye;t.vg(t.yp);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)}catch(e){}};t.isc=function(ye){try{t.ys=ye.data;t.vg(ye.target);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)}catch(e){}};t.fc=function(d){try{t.yd=d;var T=d.entry&&d.entry.title?t.sn=d.entry.title.$t:'';if(T)t.yt=T}catch(e){}};try{var o=id&&typeof id=='string'?document.getElementById(id):'';if(!o)return null;t.vc();t.id=id;var W=window,ar=arguments;if(ar.length>1&&ar[1]==1){t.pt=1;t.yp=o;if(W.addEventListener)t.yp.addEventListener('onStateChange','s_YTO.v.'+id+'.fsc',false);else if(W.attachEvent)W.attachEvent('onStateChange','s_YTO.v.'+id+'.fsc')}else{t.pt=2;var a=new Object();if(ar.length>1)a.videoId=ar[1];if(ar.length>3){a.width=w;a.height=h}a.events=new Object();a.events.onStateChange=t.isc;t.yp=new YT.Player(id,a);t.vg(t.yp)}}catch(e){}return t}
// window.s_aE=function(o,e,f){if(arguments.length<3){f=e;e=o;o=window}if(o.attachEvent){o['e'+e+f]=f;o[e+f]=function(){o['e'+e+f](window.event)};o.attachEvent('on'+e,o[e+f])}else o.addEventListener(e,f,false)}
// window.s_YTi=function(){if(typeof s_YTO.v!='object')s_YTO.v={};s_YTO.ya=s_YTisa()?2:0;s_YTO.ut=s_YTO.uf=0;s_YTO.vp='YouTube Player';s_YTp()}
//window.s_aE('load',s_YTi);
*/
/*
 * Plugin: Days since last Visit 1.1 - capture time from last visit
 * confirmed current as of 5/13/2016
 */
// s.getDaysSinceLastVisit=new Function("c",""
// +"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
// +"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;if(!c||c==''){c='s_dslv';}e.setTime(ct+3*365*day);es.s"
// +"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
// +"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
// +"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
// +"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
// +"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
// +"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
// +"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
// +"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
// +"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
// +"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
// +"!=f5) return '';else return cval_s;");
/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 * confirmed current as of 5/13/2016
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getTimeParting 3.4
 * confirmed current as of 05/13/2016
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
* Plugin: getVisitNum - version 3.0
* confirmed current as of 5/13/2016
*/
s.getVisitNum=new Function("tp","c","c2",""
+"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
+"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
+"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
+"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
+"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
+"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
+";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo=new Function("m","y",""
+"var d=new Date(y,m+1,0);return d.getDate();");
s.endof=new Function("x",""
+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
+"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
+"t;");
/*
 * Plugin: getValOnce_v1.11
 * confirmed current 05/13/2016
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");


/* p_gh Utility Function required in all implementations */
s.p_gh=new Function("",""
+"var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o"
+"),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o"
+"=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot"
+"(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");

/* Utility Function: p_c */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/* Join Utility Function required in all implementations */
s.join=new Function("v","p",""
+"var s=this,f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d="
+"p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.l"
+"ength;x++){if(typeof(v[x])=='object')str+=s.join(v[x],p);else str+="
+"w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/* s.repl - Replace Utility Function required for several plugins */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x"
+".substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 * confirmed current as of 5/13/2016
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 * confirmed current as of 5/13/2016
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 *   confirmed current as of 5/13/2016
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getPercentPageViewed v1.71
 * confirmed current as of 5/13/2016
 */
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");

/* channelManager v2.85AM - Tracking External Traffic */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;h.setTime(h.getTime()+1800000);if(e)"
+"{i=1;if(s.c_r(e))i=0;if(!s.c_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0"
+";if(f&&s.c_r('s_tbm'+f))i=0;}j=s.referrer?s.referrer:document.refer"
+"rer;j=unescape(j.toLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1"
+"?j.indexOf('?'):j.length;m=j.substring(0,l);n=s.split(j,'/');n=s.sp"
+"lit(n[2],'?');o=n[0].toLowerCase();p=s.linkInternalFilters.toLowerC"
+"ase();p=s.split(p,',');for(q=0;q<p.length;q++){r=o.indexOf(p[q])==-"
+"1?'':j;if(r)break;}}if(!r&&!k){t=j;u=v=o;w='Referring Sites"
+"';x=s.seList+'>'+s._extraSearchEngines;if(d==1){m=s.replace(m,'oogl"
+"e','%');m=s.replace(m,'ahoo','^');j=s.replace(j,'as_q','*');}y=s.sp"
+"lit(x,'>');for(z=0;z<y.length;z++){A=y[z];A=s.split(A,'|');B=s.spli"
+"t(A[0],',');for(C=0;C<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A"
+"[2])E=v=A[2];else E=o;if(d==1){E=s.replace(E,'#',' - ');j=s.replace"
+"(j,'*','as_q');E=s.replace(E,'^','ahoo');E=s.replace(E,'%','oogle')"
+";}F=s.split(A[1],',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]+'='"
+")>-1||j.indexOf('https://www.google.')==0||j.indexOf('http://r.sear"
+"ch.yahoo.com')==0)H=1;I=s.Util.getQueryParam(F[G],j).toLowerCase();"
+"if(H||I)break;}}if(H||I)break;}if(H||I)break;}}if(!r||g!='1'){J=s.s"
+"plit(a,',');K=0;while(!T&&K<J.length){T=s.Util.getQueryParam(J[K],'"
+"',b);K++;}if(T){v=T;if(E)w='Paid Search';else w='Unknown Paid Chann"
+"el';}if(!T&&E&&H){v=E;w='Organic Search';}}if(i&&k&&!T)t=u=v=w='Typ"
+"ed/Bookmarked';J=s._channelDomain;if(J&&o&&!r){K=s.split(J,'>');for"
+"(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',');O=N.le"
+"ngth;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=o.indexOf(Q);if(R>-1){"
+"w=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;if(J){K=s.spli"
+"t(J,'>');for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1]"
+",',');O=N.length;for(P=0;P<O;P++){R=s.Util.getQueryParam(N[P]);if(R"
+"){w=M[0];break;}}if(R)break;}}J=s._channelPattern;if(J){K=s.split(J"
+",'>');for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',"
+"');O=N.length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=T.toLowerCase"
+"();S=R.indexOf(Q);if(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w"
+"+I:'';c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaign"
+"ID=T?T:'n/a';s._referrer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._"
+"campaign=v?v:'n/a';s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._key"
+"words=H?I?I:'Keyword Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'"
+"){h.setTime(h.getTime()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._"
+"campaignID=s._referrer=s._referringDomain=s._campaign=s._channel=s."
+"_partner=s._keywords='';");

/* Social Channels */
s._channelDomain='Organic Social|facebook.com,linkedin.com,/t.co,twitter.com,plus.google.com,plus.url.google.com,pinterest.com,orkut.com,friendster.com,livejournal.com,blogspot.com,wordpress.com,friendfeed.com,myspace.com,digg.com,reddit.com'
+'stumbleupon.com,twine.com,yelp.com,mixx.com,delicious.com,tumblr.com,disqus.com,intensedebate.com,plurk.com,slideshare.net,backtype.com,netvibes.com,mister-wong.com,'
+'diigo.com,flixster.com,youtube.com,vimeo.com,12seconds.tv,zooomr.com,identi.ca,jaiku.com,flickr.com,imeem.com,dailymotion.com,photobucket.com,fotolog.com,smugmug.com,'
+'classmates.com,myyearbook.com,mylife.com,tagged.com,brightkite.com,ning.com,bebo.com,hi5.com,yuku.com,cafemom.com,xanga.com>'
+'comparison shopping engines|pricegrabber.com,shopping.com,nextag.com>'
+'Email|mail.live.com,mail.yahoo.com,mail.google.com,mail.comcast.net,mail.verizon.com,mail.aol.com';

/* Top 130 - Grouped */
s.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>www.bing.com,bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,altavi"
+"sta.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>webcraw"
+"ler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>blekko"
+".com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckgo.com|"
+"q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>www.baidu."
+"com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway."
+"com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>nets"
+"cape.com|query,search|Netscape Search>reference.com|q|Reference.com"
+">seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.c"
+"o.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.r"
+"u>optimum.net|q|Optimum Search";

/*
 * Plugin: getLoadTime
 */
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}




/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "nbcuni"
s.trackingServer = "oimg.nbcuni.com"
s.trackingServerSecure = "osimg.nbcuni.com"


// function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
// Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
// (f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.track=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
// !0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
// !0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
// q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
// "s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
// u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
// 4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
// "OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
// (a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
// "_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
// 1),b.s.track(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
// d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
// 1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}


function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}


/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
 */

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");


/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.7.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.7.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.pb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.pb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ha=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ia)for(a.ia=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.ia=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ia||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.va();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ha("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.O,(m=a.lightTrackVars)&&(m=","+m+","+a.ma.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)m=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Hb,f=a[e].Gb));m&&(m=","+m+","+a.G.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+m+","))){k=!1;if(n)for(p=0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.r(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m=
"v0";break;default:a.Ha(w)&&("prop"==k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.sb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ma.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Hb,r=a[e].Gb));
n&&(n=","+n+","+a.G.join(",")+",");r&&(r=","+r+",",n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];
g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&
(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e=
"vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&
(g+=(""!=g?",":"")+s);if(r)for(m=g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;
case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],n,e));g="";break;default:a.Ha(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Mb||"undefined"!=""+a.Cb&&"HTML"!=(""+a.Cb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==
b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.L=function(c){var b=a.D(c),
d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Kb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Bb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.na=1;d||(a.na=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.na=1;!e&&d&&
(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ga(p)&&(a.linkInternalFilters||(a.linkInternalFilters=
k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.tb=function(){var c=a.na,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),
p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",m)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,
1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ub=function(){if(!a.Fb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",
c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Lb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Fb=1}};a.P={};a.loadModule=function(c,b){var d=a.P[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.P[c]=a[c]=d;d.Xa=function(){return d.ab};d.bb=function(b){if(d.ab=b)a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Xa,set:d.bb}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.P)if(!Object.prototype[b]&&(d=a.P[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.wb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.Q=
function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ob=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==
e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};
a.Wa=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.da=!1;a.I=!1;a.eb=function(){a.I=!0;a.j()};a.ba=!1;a.U=!1;a.$a=function(c){a.marketingCloudVisitorID=c;a.U=!0;a.j()};a.ea=!1;a.V=!1;a.fb=function(c){a.visitorOptedOut=c;a.V=!0;a.j()};a.Y=!1;
a.R=!1;a.Sa=function(c){a.analyticsVisitorID=c;a.R=!0;a.j()};a.aa=!1;a.T=!1;a.Ua=function(c){a.audienceManagerLocationHint=c;a.T=!0;a.j()};a.Z=!1;a.S=!1;a.Ta=function(c){a.audienceManagerBlob=c;a.S=!0;a.j()};a.Va=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.ca=!1;a.H=!1;a.va=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.da||a.I||(a.Wa(a.eb)?a.I=!0:a.da=!0);if(a.da&&!a.I)return!1;b&&b.isAllowed()&&
(a.ba||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ba=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.$a]),a.marketingCloudVisitorID&&(a.U=!0)),a.ea||a.visitorOptedOut||!b.isOptedOut||(a.ea=!0,a.visitorOptedOut=b.isOptedOut([a,a.fb]),a.visitorOptedOut!=q&&(a.V=!0)),a.Y||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Y=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Sa]),a.analyticsVisitorID&&(a.R=!0)),a.aa||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.aa=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ua]),a.audienceManagerLocationHint&&(a.T=!0)),a.Z||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.Z=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ta]),a.audienceManagerBlob&&(a.S=!0)),c=a.ba&&!a.U&&!a.marketingCloudVisitorID,b=a.Y&&!a.R&&!a.analyticsVisitorID,d=a.aa&&!a.T&&!a.audienceManagerLocationHint,f=a.Z&&!a.S&&!a.audienceManagerBlob,e=a.ea&&!a.V,c=c||b||d||f||e?!1:!0);a.ca||a.H||(a.Va(a.va)?a.H=!0:a.ca=
!0);a.ca&&!a.H&&(c=!1);return c};a.o=q;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.jb=c;f.ib=b;f.gb=d;a.o==q&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.cb(),a.o!=q))for(;0<a.o.length;)c=a.o.shift(),c.ib.apply(c.jb,c.gb)};a.cb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.Ya=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.qb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.p("_s");a.Ya(c)||(b&&a.Q(b),c&&(d={},a.Qa(d,0),a.Q(c)),a.wb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=
a.qb()),a.Bb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(a.referrer=r.document.referrer),a.Ra=1,a.referrer=a.ob(a.referrer),a.p("_g")),a.tb()&&!a.abort&&(a.ub(),g+=a.sb(),a.Ab(e,g),a.p("_t"),a.referrer=""))),c&&a.Q(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=
a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==
b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ab=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?
"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Eb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.mb(d);a.ja()};a.Pa=/{(%?)(.*?)(%?)}/;a.Ib=RegExp(a.Pa.source,"g");a.nb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)if(o=c.dests[b],"string"==
typeof o.c&&"aa."==o.id.substr(0,3))for(var d=o.c.match(a.Ib),b=0;b<d.length;++b){match=d[b];var f=match.match(a.Pa),e="";"%"==f[1]&&"timezone_offset"==f[2]?e=(new Date).getTimezoneOffset():"%"==f[1]&&"timestampz"==f[2]&&(e=a.rb());o.c=o.c.replace(match,a.escape(e))}};a.rb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ra={};a.doPostbacks=function(c){if("object"==typeof c)if(a.nb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)dest=
c.dests[b],"object"==typeof dest&&"string"==typeof dest.c&&"string"==typeof dest.id&&"aa."==dest.id.substr(0,3)&&(a.ra[dest.id]=new Image,a.ra[dest.id].alt="",a.ra[dest.id].src=dest.c)};a.mb=function(c){a.i||a.vb();a.i.push(c);a.la=a.C();a.Na()};a.vb=function(){a.i=a.xb();a.i||(a.i=[])};a.xb=function(){var c,b;if(a.qa()){try{(b=k.localStorage.getItem(a.oa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.qa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};
a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ja=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.ua(),a.q))return;a.Fa=q;if(a.pa)a.la>a.N&&a.La(a.i),a.ta(500);else{var c=a.hb();if(0<c)a.ta(c);else if(c=a.Ba())a.q=1,a.zb(c),a.Db(c)}};a.ta=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.ja,c))};a.hb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};
a.zb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.yb(b)}};a.Za=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.W=function(a){return k.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Db=function(c){var b,d,f;a.Za()&&2047<c.length&&("undefined"!=
typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.xa=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.za=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ua=function(){b.za();a.lb();a.fa();a.q=0;a.ja();if(b.xa){b.xa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(c){}}};b.onabort=b.onerror=b.Ca=function(){b.za();(a.trackOffline||a.pa)&&a.q&&a.i.unshift(a.kb);a.q=0;a.la>a.N&&a.La(a.i);a.fa();a.ta(500)};b.onreadystatechange=function(){4==
b.readyState&&(200==b.status?b.ua():b.Ca())};a.Ka=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.ua():(a.trackOffline&&b.abort&&b.abort(),b.Ca()))},5E3);a.kb=c;a.B=k["s_i_"+
a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ga=setTimeout(a.fa,a.forcedLinkTrackingTimeout)};a.lb=function(){if(a.qa()&&!(a.Ja>a.N))try{k.localStorage.removeItem(a.oa()),a.Ja=a.C()}catch(c){}};a.La=function(c){if(a.qa()){a.Na();try{k.localStorage.setItem(a.oa(),k.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>
a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.pa=!0};a.forceOnline=function(){a.pa=!1};a.oa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Eb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.Q(d);if(d.lmq)for(b=
0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,
getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ma="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ma.slice(0);a.wa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.g.push("prop"+n),a.O.push("prop"+n)),a.g.push("eVar"+n),a.O.push("eVar"+n),6>n&&a.g.push("hier"+n),4>n&&a.g.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ka=0;a.la=0;a.N=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Oa=!0}}catch(z){}a.fa=function(){a.ga&&(k.clearTimeout(a.ga),a.ga=q);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Ma=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ya)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ya=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.M=a.clickObject;a.ka&&(clearTimeout(a.ka),a.ka=0);a.ka=setTimeout(function(){a.M==m&&(a.M=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ya=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ma,30)};a.Ma();a.loadModule("ActivityMap")}
function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
