// 13: Write a JavaScript functionality to add a new link into the navbar

function example13() {
  let node = document.querySelector(".nav");
  let newLink = document.createElement("span");
  newLink.innerText = "New Link";

  node.appendChild(newLink);
}

// 14: Write a JavaScript functionality to change the color of the main heading title

function example14() {
  let node = document.querySelector("h1");
  node.style.color = "red";
}

// 15: Write a JavaScript functionality to change the background of the jumbotron

function example15() {
  let node = document.querySelector(".jumbotron");
  node.style.background = "red";
}

// 16: Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere” section in the aside element. It should happen when the page loads, automatically

function example16() {
  let node = document.querySelector(
    ".col-md-4.blog-sidebar div:last-of-type ol"
  );
  let twitterLink = document.querySelector(
    ".col-md-4.blog-sidebar div:last-of-type ol li:nth-child(2)"
  );
  node.removeChild(twitterLink);
}

window.onload = example16();

// 17: Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post

function example17() {
  let nodes = document.querySelectorAll(".blog-post > p:nth-child(3)");

  for (let node of nodes) {
    node.style.color = "green";
    let string = node.innerText;
    let result = string.slice(49);
    console.log(result);
    node.innerText = result;
  }
}

// Write a JavaScript functionality to add a new Blog Post (div with title and text)

function example18() {
  let node = document.querySelector(
    "main div.row div.col-md-8 div:last-of-type"
  );

  let newDiv = document.createElement("div");
  newDiv.className = "blog-post";

  let blogTitle = document.createElement("h2");
  blogTitle.className = "blog-post-title";
  blogTitle.innerText = "Blog title";

  let blogText = document.createElement("p");
  blogText.innerText = "This is the blog content";

  newDiv.appendChild(blogTitle);
  newDiv.appendChild(blogText);
  node.appendChild(newDiv);
}

// 19: Write a JavaScript functionality to remove the last Blog Post when the user clicks on the “Older” button

function example19() {
  let node = document.querySelector("main div.row div.col-md-8");
  let nodeToRemove = document.querySelector(
    "main div.row div.col-md-8 div:last-of-type"
  );
  node.removeChild(nodeToRemove);
}

function example19Listener() {
  let button = document.querySelector(".blog-pagination a");
  button.addEventListener("click", example19);
}

window.onload = example19Listener();

// Write a JavaScript functionality that will create an alert with the name of the author every time the user hovers the mouse on an author’s name

function example20() {
  let nodes = document.querySelectorAll(".blog-post .blog-post-meta a");
  for (let node of nodes) {
    let authorName = node.innerText;
    node.addEventListener("mouseout", function () {
      alertName(authorName);
    });
  }
}

function alertName(authorName) {
  alert(authorName);
}

window.onload = example20();

// EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, upon clicking on their “Continue reading” link

function extra() {
  document.addEventListener("click", function (event) {
    // Check if the clicked element is a "Continue reading" link
    if (event.target.matches(".stretched-link")) {
      // Get the parent card element
      const card = event.target.closest(".no-gutters");
      // Remove the parent card element from the DOM
      card.parentNode.removeChild(card);
    }
  });
}

function extra2() {
  document.addEventListener("click", function (event) {
    // Check if the clicked element is a "Continue reading" link
    if (event.target.matches(".stretched-link")) {
      // Get the parent card element
      const card = event.target.closest(".no-gutters");
      // Remove the parent card element from the DOM
      card.parentNode.removeChild(card);
    }
  });
}
