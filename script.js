// Script
const like = document.getElementById("like");
const likes = document.getElementById("likeNr");

let addLikes = 0;

function addLike() {
  addLikes++;
  likes.innerHTML = addLikes;
}
