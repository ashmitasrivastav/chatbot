const chatContainer = document.getElementById('chat');
const inputField = document.getElementById('input');
const sendButton = document.getElementById('button');
const botTyping = document.getElementById('botTyping'); 

function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', sender);

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

 
  const icon = document.createElement('i');
  if (sender === 'user') {
    icon.classList.add('fa-solid', 'fa-user');
  } else {
    icon.classList.add('fa-solid', 'fa-robot'); 
  }

  
  const messageText = document.createElement('span');
  messageText.textContent = message;

  
  icon.style.marginRight = '8px'; 

 
  bubble.appendChild(icon);
  bubble.appendChild(messageText);

  messageDiv.appendChild(bubble);
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}


sendButton.addEventListener('click', () => {
  const userInput = inputField.value.trim();

  if (userInput) {
    addMessage(userInput, 'user');
    inputField.value = '';
    botTyping.style.display = 'flex';

    setTimeout(() => {
     botTyping.style.display = 'none';
      addMessage("Hello! I'm here to assist you.", 'bot');
    }, 2000); 
  }
});
