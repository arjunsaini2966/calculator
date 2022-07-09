const screen = document.getElementById("display");

const btns = Array.from(document.getElementsByTagName("button"));

btns.map((btn) => {
  btn.addEventListener("click", (e) => {
    let num = e.target.innerText;
    if (num === "C") {
      screen.value = "";
    } else if (num === "←") {
      screen.value = screen.value.slice(0, -1);
    } else if (num === "=") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error !";
      }
    } else {
      screen.value += e.target.innerText;
    }
  });
});
