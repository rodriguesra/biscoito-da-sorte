document.addEventListener("DOMContentLoaded", () => {
  const mainScreen = document.getElementById("main-screen");
  const messageScreen = document.getElementById("message-screen");
  const biscoitoImage = mainScreen.querySelector("img");
  const openAnotherCookieButton = messageScreen.querySelector("button");

  const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.",
    // Adicione mais mensagens aqui...
  ];

  function showRandomMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageScreen.querySelector("p").textContent = randomMessage;
  }

  function toggleScreens() {
    if (messageScreen.style.display !== "flex") {
      showRandomMessage();
      mainScreen.style.display = "none";
      messageScreen.style.display = "flex";
    } else {
      mainScreen.style.display = "flex";
      messageScreen.style.display = "none";
    }
  }

  biscoitoImage.addEventListener("click", toggleScreens);
  openAnotherCookieButton.addEventListener("click", toggleScreens);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      toggleScreens();
    }
  });
});
