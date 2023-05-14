function setItemStatus(e) {
  if (
    e.parentElement.className == "option__header" ||
    e.parentElement.className == "option__header open__links"
  ) {
    e.parentElement.children[1].classList.add("title__done");
    e.parentElement.children[0].classList.add("checkbox__done");
    e.parentElement.classList.add("done");
  } else {
    e.parentElement.children[1].classList.remove("title__done");
    e.parentElement.children[0].classList.remove("checkbox__done");
    e.parentElement.classList.remove("done");
  }
}

function showLinks(e) {
  if (e.className == "option__arrow") {
    e.classList.add("flip");
    e.parentElement.classList.add("open__links");
    e.parentElement.parentElement.children[1].style.display = "flex";
  } else {
    e.classList.remove("flip");
    e.parentElement.classList.remove("open__links");
    e.parentElement.parentElement.children[1].style.display = "none";
  }
}
