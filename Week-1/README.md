# Assignment 1.1

## a. Main functionality of a web browser ?

The main function of a web browser is to present the web resource that the client/user has requested. Then it gets from the server and display in the client browser window. The resource is the HTML document but it can also be an image or a PDF file.

## b. High level components of a browser ?

The main components are:
1. User Interface (Search bar)
2. Browser Engine (Intermediate between User Interface and Rendering engine)
3. The Rendering Engine (Displaying HTML and CSS content on the screen)
4. Networking (HTTP calls)
5. UI Backend
6. JavaScript Interprter (parse and execute JS code)
7. Storage (localStorage, Cookies)
 
 ## c. Rendering engine and its use

 The main use of rendering engine is to fetch the content that is been asked by the client. It goes through a series of process to display the content in the client's browser window. The rendering engine would parse the HTML document and convert it into the DOM nodes constructing the DOM tree. It will then parse the CSS both inline and external and along HTML will create another tree known as the render tree. After constructing the render tree it goes through a layout phase, giving each node the exact coordinates where to appear in the screen. The next stage is painting where it will traverse through each node and paints it.

 ## d. Parsers HTML, CSS and others

Parsing is translating a document into a structure that a code can use. The browser parses HTML into a DOM tree. HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags as well as attribute name and value. If the document is well informed, then parsing is straight forward and faster. The parser parses the input into the document constructing the tree.

When the HTML parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but script tag particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML.

When the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.

## e. Script Processors

Script processors parses JSON document into set of maps, lists and primitives. It also access the meta data fields.

## f. Tree Construction

When the parser is created the Document object is created. During the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor. For each token the specification defines which DOM element is relevant to it and will be created for this token. The element is added to the DOM tree, and also the stack of open elements. This stack is used to correct nesting mismatches and unclosed tags. The algorithm is also described as a state machine. The states are called "insertion modes".

The input to the tree construction stage is a sequence of tokens from the tokenization stage. The first mode is the initial mode. Receiving the HTML token will cause a move to the before HTML mode and a reprocessing of the token in that mode. This will cause creation of the HTMLHtmlElement element, which will be appended to the root Document object.

The state will be changed to before head. The body token is then received. An HTMLHeadElement will be created implicitly although we don't have a head token and it will be added to the tree.

We now move to the in head mode and then to after head. The body token is reprocessed, an HTMLBodyElement is created and inserted and the mode is transferred to in body.

The character tokens of string are now received. The first one will cause creation and insertion of a Text node and the other characters will be appended to that node.

The receiving of the body end token will cause a transfer to after body mode. We will now receive the html end tag which will move us to after after body mode. Receiving the end of file token will end the parsing.

## g. Order of scripting processing

The model of the web is synchronous. It is not expected  scripts to be parsed and executed immediately when the parser reaches a script tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

## h. Layout and painting

Layout calculates the position and size. Most of the time it is possible to compute the geometry in one go if not then it goes to every single element and apply the corresponding size and position. It follows a recursive process that begins from the root object.

It follows an algorithm where in the element that are changed only those are rendered rather than rendering the entire layout. If the position and sizes are globally changed then it affects at all renders.

After layout painting is done. It also recursively traverses each element and apply the respective color to that element. 
The painting order is basically:
1. background-color
2. backgroud image
3. border
4. children
5. outline