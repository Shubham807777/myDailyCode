// Event Delegation for Performance Optimization & Event Bubbling

document.getElementById("grandParent").addEventListener("click", (e) => {
  console.log("grandparent clicked");
});
document.getElementById("Parent").addEventListener("click", (e) => {
  e.stopPropagation(); //Kabhi kabhi bubbling nahi chahiye. grandParent execute nahi hoga.
  console.log("parent clicked");
});
document.getElementById("child").addEventListener("click", (e) => {
  console.log("child clicked");
});

const menu = document.getElementById("menu");

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // LI bina quotes ke — JS soचता hai yeh koi variable hai. Variable nahi mila toh ReferenceError.
    // "LI" quotes ke saath — string hai — kaam karega. ✅
    console.log(e.target.textContent);
  }
});

// Event Bubbling Kya Hai?

// Event Bubbling ka matlab:
// Event sabse pehle jis element par hua hai, wahan execute hota hai, uske baad uske parent, phir grandparent aur aise hi upar ki taraf bubble karta hai.
// stopPropagation()

// Event Delegation Advantages
// Sirf ek event listener lagta hai.
// Memory kam use hoti hai.
// Performance improve hoti hai.
// Dynamic elements automatically support hote hain.
// Code clean aur maintainable hota hai.

// Event Delegation kya hota hai?

// Answer:
// Event Delegation ek technique hai jisme hum har child par listener lagane ki jagah parent par ek hi listener lagate hain aur event.target se identify karte hain ki kis child par event hua. Isse performance aur memory dono improve hote hain.

// Debouncing
// User jab tak event (typing, scrolling, resizing) karta rahega, function execute nahi hoga. User rukega, tab function sirf ek baar execute hoga.
//Debouncing is a technique that delays the execution of a function until the user stops triggering the event for a specified amount of time.

// Debouncing ek optimization technique hai jisme function ko tab tak execute nahi kiya jata
// jab tak user event trigger karna band na kar de. Har naye event par previous timer cancel ho
// jata hai aur naya timer start hota hai. Iska use search boxes, auto-suggestions aur resize events me
// kiya jata hai taaki unnecessary function calls aur API requests kam ho sake.

// Throttling
// Throttling is a technique that ensures a function executes at most once within a specified time interval, even if the event keeps firing continuously.
// User kitni bhi baar event trigger kare, function fixed interval me sirf ek baar chalega.
//Throttling limits function execution to once in a specified time interval.
// Scroll Events
// Mouse Move
// Resize Events
// Infinite Scroll
// Difference between Debouncing and Throttling?
// Debouncing waits for the user to stop triggering events before executing the function, whereas throttling executes the function at regular intervals regardless of how frequently the event occurs.
