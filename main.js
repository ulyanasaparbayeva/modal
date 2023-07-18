
const modal = document.getElementById("myModal");
const button = document.getElementById("btn");

const card = document.getElementById("card");
const span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
  card.style.display = "none";
}
function closeModal() {
  modal.style.display = "none";
  card.style.display = "block";
}

button.addEventListener("click", openModal);
span.addEventListener("click", closeModal);


