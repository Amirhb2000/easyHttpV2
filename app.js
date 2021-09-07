const http = new EasyHTTP();

// Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Create Post
const data = {
  name: "Amir Hossein",
  username: "amirh",
  email: "amir@gmail.com",
};

// Create Post
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Update Post
// http
//   .put("https://jsonplaceholder.typicode.com/users/3", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete Post
http
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
