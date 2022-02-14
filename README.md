# Chuck Norris Joke Generator
This is a web app that displays a user-specified number of Chuck Norris jokes.

Using Ajax, the joke data is fetched from an external API - The Internet Chuck Norris Database API (https://www.icndb.com/api/)

## Features
* Takes a number of jokes to generate
* Getting data from an external API
* Displaying the user-specified number of jokes


## Built with
* HTML
* Skeleton CSS
* JavaScript
* The Internet Chuck Norris Database API - https://www.icndb.com/api/

### JS Concepts utilized:
1. Making a GET request asynchronously with the XMLHttpRequest Object (xhr) to get data from an external API
   1. ```xhr.open()``` method - initialize/open a request
   2. ```xhr.send()``` method - send the request
   3. Listening to xhr events for response and handling with event handlers:```xhr.onload```, ```xhr.onprogress```, ```xhr.onerror```
   4. XHR ```status``` attribute
   5. XHR ```responseText``` attribute - returns response as text (string)
2. DOM Selectors
3. Event listeners & Event handlers
4. Mouse & keyboard input events
5. ```JSON.parse()``` to convert a JSON object (a string) to a JS Object as described by the string


## See this project
This application is hosted on GitHub pages: https://helen-tan.github.io/chuck-norris-joke-generator/

Similarly, you may clone this project by running this command from your terminal:

```
git clone https://helen-tan.github.io/chuck-norris-joke-generator/
```

This will create a directory in the name of the project folder.

Once you have the project files, open index.html in your browser.
