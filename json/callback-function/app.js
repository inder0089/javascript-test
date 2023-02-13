const posts = [
  { title: "Post One", body: "This is Post One" },
  { title: "Post two", body: "This is Post two" },
];

// function creatPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// creatPost({ title: "post three", body: "This is post three" });

// getPost();

function creatPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPost() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

creatPost({ title: "post three", body: "This is post three" }, getPost);

// getPost();
