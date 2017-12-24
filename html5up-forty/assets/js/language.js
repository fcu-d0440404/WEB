
//创建一个link来引入控制语言的css  
 function languageLink (type) {  
    var link = document.createElement('link');  
    link.id = "lang";  
    link.type = "text/css";  
    link.rel = "stylesheet";  
    link.href = "assets/css/"+type+".css";  
    link.langType = type;  
    return link;  
}  
//根据语言类型切换  
 function changeLang(type){  
    var defaultLang = "tc";  
    if(type) defaultLang= type;  
    var link = document.getElementById('lang');  
    if(link) {  
        if(link.langType == defaultLang) return;  
        link.parentNode.removeChild(link);  
    }  
    var head = document.getElementsByTagName('head');  
    head[0].appendChild(languageLink(defaultLang));  
}  
//文档加载到这里时加载默认语言  
 +function () {  
    changeLang();  
}();  
//toggle 两种语言切换  
 function changeLanguage (){  
    var link = document.getElementById('lang');  
    var currentLangType = 'tc';  
    if(link){  
        var langtype = link.langType;  
        switch(langtype){  
            case 'tc': currentLangType = 'en';break;  
            case 'en': currentLangType = 'tc';break;  
        }  
    }  
        changeLang(currentLangType);  
}  
