
![Logo](https://raw.githubusercontent.com/Ozookevin/Sentiment_Reader/main/logo.png)


# Ozoo_Sentiment_Reader_Chrome

Sentiment reader is a chrome extension that takes the users current tab url and performs a sentiment analysis on it. It then returns the user a sentiment score and a face that represents the quality of the article that they are currently on.



## Authors
- [Github](https://github.com/Ozookevin)
- [Dev.to @Ozookevin](https://dev.to/ozookevin)


## Installation


#### - Google chrome store

Once the app has been uploaded and approved by the google store there will be a simple link to install the app to your browser.



####  - Install app in dev mode

    1. Go to chrome://extensions/ and check the box for Developer mode in the top right.

 ![image](https://www.cnet.com/a/img/resize/f2f6570076ded3f971181de43a2f940f04d8e1be/hub/2017/01/18/b9cd8c02-4a43-4c32-b5b9-65b5fa4e96bf/developer-mode-chrome.jpg?auto=webp&width=1200)


    2. Locate the ZIP file on your computer and unzip it. 

 
    3. Go back to the chrome://extensions/ page and click the Load unpacked extension button and select the unzipped folder for your extension to install it.

 
 
## Demo

Below is a image of the Sentiment reader. It takes the URL of the current tab and returns a face depending on the sentiment of the website. It also returns a numeric value of the sentiment of the website.

![image](https://i.ibb.co/4j2KXRD/Screen-Shot-2022-10-28-at-12-02-25-PM.png)

## Source Code Reference

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