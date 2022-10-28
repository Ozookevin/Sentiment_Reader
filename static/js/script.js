/* Get URL from current user tab URL is then passed to Kut.Cards API

Kut.Cards API will return a Json object with the following structure: 
[ { "Score": "float", "Error": "List of Errors"} ]

The score is a float between 0 and 1, where 0 is the lowest score and 1 is the highest score.
The error is a list of errors that may have taken place during the process of scoring the URL.

Error codes:
0 - No errors
1 - URL is not a valid URL
2 - No valid username was found
3 - No valid school was found
4 - Invalid response from Kut.Cards API
5 - Kut.Cards was not able to download the URL provided
6 - TextBlob analysis failed
7 - Vadar analysis failed


Part of Kut.Cards Chrome Extension all rights reserved to Kevin Ozomaro 2022
*/

document.addEventListener('DOMContentLoaded', async function () {

    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
        var activetab = tabs[0];
        var url = activetab.url;

        var api_url = 'http://localhost:2000/sentimentAPI?sentimentURL=' + url;

        response = await fetch(api_url);

        // add parsed json to the page

        var json = await response.json();

        var score = json

        var paragraph = document.getElementById("sentiment_score");

        paragraph.innerHTML = json;

        /*
                 if score is less than 0.39, change image to sad face */

        if (score < 0.39) {
            document.getElementById('image').src = 'static/images/negative.png';
            document.getElementById('sentiment_rate').innerText = "Tilted Negatively Source";
        }

        /*  if score is between 0.39 and 0.50, change image to neutral face */

        else if (score >= 0.39 && score <= 0.50) {
            document.getElementById('image').src = 'static/images/neutral.png';
            document.getElementById('sentiment_rate').innerHTML = 'Neutral Source';
        }
        /*  if score is greater than 0.50, change image to happy face */
        else {
            document.getElementById('image').src = 'static/images/positive.png';
            document.getElementById('sentiment_rate').innerHTML = 'Tilted Positively Source ';
        }

        const words = ['hello', 'world', 'the', 'The', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud'];
        const text = document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span,div,a,caption,td,th,article,section,blockquote,pre,code,em,strong,small,mark,del,ins,sup,sub,dfn,abbr,blockquote,figure,figcaption,hr,dl,dt,dd,ol,ul,table,thead,tbody,tfoot,tr,td,th,form,label,input,textarea,button,select,optgroup,option,fieldset,legend,iframe,object,embed,param,video,audio,source,track,canvas,map,area,svg,math,table,thead,tbody,tfoot,tr,td,th,article,aside,footer,header,hgroup,nav,section,div,span,a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr');

        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (text[i].innerHTML.includes(words[j])) {
                text[i].innerHTML = text[i].innerHTML.replace(text[i], `<span style="background-color: yellow;">${text[i].innerHTML}</span>`);
                console.log(text[i].innerHTML);
            }
        }

}
    });
});







