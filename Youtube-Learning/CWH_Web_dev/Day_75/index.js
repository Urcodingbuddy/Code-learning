// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")


// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 0);

// setTimeout(() => {
//     console.log("I am inside settimeout 2")
// }, 0);

// console.log("The End")

/**
 * This function logs "Nothing" to the console.
 */
const fn = () => {
    console.log("Nothing")
  }
 
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
const loadScript = (src, resolve) => {
    // Create a new script element
    let sc = document.createElement("script");

    // Set the source of the script element
    sc.src = src;

    // Set the onload event handler of the script element to the callback function
    sc.onload = () => resolve("Harry", fn);

    // Append the script element to the head of the document
    document.head.append(sc);
}

  /**
   * This line of code loads a script from the provided URL and calls the callback function once it's loaded.
   */
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )

