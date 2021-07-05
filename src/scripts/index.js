function theme() {
  const mood = document.querySelector("#light-dark").checked;
  const html = document.querySelector("html").style;
  if (mood) {
    html.backgroundColor = "black";
  } else {
    html.backgroundColor = "white";
  }
}
