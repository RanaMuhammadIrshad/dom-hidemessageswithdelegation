const container = document.getElementById("container");

container.addEventListener("click", function (e) {
  if (e.target.className !== "remove-button") {
    return;
  }
  let targetClass = e.target.closest(".pane");
  targetClass.remove();
});
