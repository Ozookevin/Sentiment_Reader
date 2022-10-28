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



// get current tab URL

document.addEventListener('DOMContentLoaded', function() {

    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
        var activetab = tabs[0];
        var url = activetab.url;

        var api_url = 'http://10.0.0.186:2000/sentimentAPI?sentimentURL=' + url;

        // send URL to Kut.Cards API
        let response = await fetch(api_url)

        let data = await response.json()

        /*.then(response => response.json())
        .then(data => { */

        console.log(data);
        var score = data[0].Score;
        var error = data[1].Error;

        // display score and error
            document.getElementById('score').innerHTML = score;
            document.getElementById('error').innerHTML = error;
        }
        )

/* update the score and error  */
        document.getElementById('score').innerHTML = score;      
        document.getElementById('error').innerHTML = error;

        /*
         if score is less than 0.39, change image to sad face */

        if (score < 0.39) {
            document.getElementById('image').src = 'negative.png';
            document.getElementById('sentiment'),InnerHTML = 'A Bias Source';
        }

        /*  if score is between 0.39 and 0.50, change image to neutral face */
       
        else if (score >= 0.39 && score <= 0.50) {
            document.getElementById('image').src = 'neutral.png';
            document.getElementById('sentiment').innerHTML = 'A Neutral Source';
        }
        /*  if score is greater than 0.50, change image to happy face */
        else {
            document.getElementById('image').src = 'positive.png';
            document.getElementById('sentiment').innerHTML = 'A Good Objective Source';
        }
    });

