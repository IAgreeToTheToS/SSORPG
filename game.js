let color = ['', "blue", "black", "white", "green", "purple", "pink", "red", "yellow"]
window.addEventListener("keyup", function() {
  let helpMyEyes = window.createElement("div");
  helpMyEyes.width = 100%;
  helpMyEyes.height = 100%;
  helpMyEyes.color = color[Math.ceil(Math.random() * 7)];
})
