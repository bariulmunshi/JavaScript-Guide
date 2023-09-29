# Table of Contents
- [DOM](#dom)
- [DOM node, NodeList, htmlcollection, parentNode, childnodes, createElement](#dom-node-nodelist-htmlcollection-parentnode-childnodes-createelement)
# DOM
## What's DOM defines?
- JavaScript Dom/document এর সাহায্য HTML এর প্রতিটা element কে manipulate করে |
- HTML এর element গুলিকে DOM এর সাহায্য Objects  বানিয়ে JavScript manipulate করে
  - Example:
  `Input:`
  ```sh
  const liCollection = document.getElementsByTagName("li");
      console.log(liCollection);
  ```
>`output`: Array Like object
![DOM](images/photo2.png)
  - In More:
  `Input::`
  ```sh
  const liCollection = document.getElementsByTagName("li");
      console.log(liCollection);
      for (const li of liCollection) {
        console.log(li);
      }
  ```
  `Output:`
  ![DOM](images/photo3.png)
  - In More More Details:
  `Input::`
  ```sh
  const liCollection = document.getElementsByTagName("li");
      console.log(liCollection);
      for (const li of liCollection) {
        console.log(li.innerText);
      }
  ```
  `Output:`
  ![DOM](images/photo4.png)



![DOM](images/photo1.png)
## What can JavaScript do with DOM? 
- JavaScript can change all the HTML elements in the page.
- JavaScript can change all the HTML attributes in the page.
- JavaScript can change all the CSS styles in the page.
- JavaScript can remove existing HTML elements and attributes 
- JavaScript can new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page.
- The events for all HTML elements
- The Properties of all HTML elements
- The methods to access all HTML elements
- All Elements as objects

## Find the HTML element in 4 ways
1. getElementById
2. getElementByClassName
3. getElementByTagName
4. querySelector & querySelectorAll
## Dynamic style, getAttribute, setAttribute, innerText, innerHTML
- `style:` document.getElementById("myH1").style.color = "red";
- `getAttribute:` let text = element.getAttribute("class");
- `setAttribute:` element.setAttribute("class", "democlass");
- `innerText:` let text = element.innerText;
- `innerHTML:` document.getElementById("demo").innerHTML = "I have changed!";
- `innerHTML:` document.getElementById("demo").innerHTML = "<p>I have changed!</p>";
## Styling dom properties, add and remove css class using JS
```sh
const sections= document.querySelectorAll('section');
for (const section of sections){
   section.style.border= '3px solid blue';
   section.style.marginBottom='5px';
   section.style.borderRadius='15px';
   section.style.paddingLeft='7px';
   section.style.background='lightgray';
}
/* const placesContainer=document.getElementById('places-container');
placesContainer.style.background='blue'; */

/* Add,remove class */
const placesContainer=document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');
placesContainer.classList.remove('large-text');
```
## DOM node, NodeList, htmlcollection, parentNode, childnodes, createElement
![Node-Structure](images/photo5.png)
- DOM node: Tags are element nodes (or just elements) and form the tree structure: `<html>` is at the root, then `<head>` and `<body>` are its children, etc. The text inside elements forms text nodes, labelled as #text . A text node contains only a string. It may not have children and is always a leaf of the tree.
- NodeList: Elements_NODE,ATTRIBUTE_NODE,TEXT_NODE etc.
- 
## Event, addEventListener, Event bubble
1. What's event in JS? Find buttons with event handlers 
- An Event handler is a routine that deals with the event, allowing a programmer to write code that is executed when the event occurs with the help of event attributes.
2. event bubbling, event capturing, stop  propagation and event delegation
- event capturing is the event starts from top element to the target element.
- The stop propagation() method of the event interface prevents further propagation of the current event in the capturing and bubbling phases.
- 
2. some javascript events:
  - ONCHANGE
  - ONCLICK
  - ONMOUSEOVER
  - ONKEYDOWN
  - ONBLUR
  - ONLOAD

> The following