function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (userInput.value.trim() !== "") {
      const message = document.createElement("div");
      message.className = "message";
      message.textContent = userInput.value;
      chatBox.appendChild(message);

      userInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
  }
}
