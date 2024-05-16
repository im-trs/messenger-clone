document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");

    function appendMessage(content, className) {
        const message = document.createElement("div");
        message.className = `message ${className}`;
        message.textContent = content;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    window.sendMessage = function() {
        const message = messageInput.value.trim();
        if (message) {
            appendMessage(message, "user");
            messageInput.value = "";
            setTimeout(() => botResponse(message), 1000);
        }
    };

    function botResponse(userMessage) {
        const botMessage = "This is a simulated response to: " + userMessage;
        appendMessage(botMessage, "bot");
    }
});
