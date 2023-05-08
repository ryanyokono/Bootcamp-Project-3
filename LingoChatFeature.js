document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const messageForm = document.getElementById("message-form");
    const messageList = document.getElementById("message-list");
  
    function createMessageElement(messageText, sender) {
      const newMessage = document.createElement("div");
      newMessage.classList.add(sender === "user" ? "chatbubbleuser" : "chatbubblelingo");
      newMessage.textContent = messageText;
      return newMessage;
    }
  
    function getLingoReply(userMessage) {
      // Replace this with a more sophisticated method for generating responses if desired
      return "Lingo says: " + userMessage;
    }
  
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const userMessage = messageInput.value.trim();
      if (userMessage !== "") {
        messageList.appendChild(createMessageElement(userMessage, "user"));
  
        setTimeout(() => {
          const lingoReply = getLingoReply(userMessage);
          messageList.appendChild(createMessageElement(lingoReply, "lingo"));
        }, 1000); // Wait 1 second before displaying Lingo's reply
  
        messageInput.value = "";
      }
    });
  });
  