# jquerydesignpatterns
All the code examples can be tested on any up-to-date browser, by opening them for example with a simple double-click on their respective *.html file. They have been tested an work both on Windows and Linux with the latest versions of Firefox and Chrome.
The examples of chapters 7, 9 and 11 use AJAX requests and in order to work in Chrome, the example pages have to be served using any web server like Apache, IIS or nginx. That's because of a limitation of Chrome when loading pages through the filesystem (Firefox does not have this limitation).
In case that a web server is already installed on your system, feel free to use it for serving the examples from their respective B05018_ChXX_Code folder.
Otherwise, please follow the instructions below to install and use a simple developing web server.
Software specifications
Chapter number	Software required (With version)	Free/Proprietary	If proprietary, can code testing be performed using a trial version	If proprietary, then cost of the software	Download links to the software	Hardware specifications	OS required
7, 9, 11	NodeJS	Free & Open-Source
MIT license
		https://nodejs.org/	Any	Any
7, 9, 11	http-server	Free & Open-Source
MIT license 
		https://www.npmjs.com/package/http-server	Any capable of running NodeJS	Any capable of running NodeJS

Detailed installation steps (software-wise)
1.	Installing NodeJS
a.	Navigate to https://nodejs.org/ and download & run the appropriate NodeJS setup for your system.
2.	Installing NodeJS's Http-Server package:
a.	Open a terminal/console and run “npm install http-server -g”
Running the code samples
**This is only required for testing chapters 7,9 & 11 in Chrome**
Open a terminal in that chapter's Code directory (for example B05018_Ch09_Code) and run the “http-server” command. You can then use the displayed address on your browser to load the code samples. For example, for chapter 9 you should navigate to:
http://0.0.0.0:8080/underscore/Dashboard%20Example%20Undescore.html

