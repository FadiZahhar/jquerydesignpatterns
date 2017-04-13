The Observer Pattern is an integral part of developing web interfaces that respond to user actions, 
and every web developer has used it to some degree, even without noticing it. 
This is because the first thing that a web developer needs to do while creating a rich user interface is to add event listeners to page elements and define how the 
browser should respond to them.
This is traditionally achieved by using the EventTarget.addEventListener() method on the page elements that we need to listen to for events such as a "click", 
and providing a callback function with the code that needs to be executed when that event occurs. It is worth mentioning that in order to support older versions 
of Internet Explorer, testing for the existence of EventTarget.attachEvent(), and using that instead, is required.