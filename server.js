(function() {
  const sendBtn = document.querySelector('#send');
  const messages = document.querySelector('#messages');
  const messageBox = document.querySelector('#messageBox');

  let ws;
  let username = localStorage.getItem('username');

  function showMessage(message) {
      messages.textContent += `\n\n${message}`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = '';
  }

  function init() {
      if (ws) {
          ws.onerror = ws.onopen = ws.onclose = null;
          ws.close();
      }

      ws = new WebSocket('ws://localhost:6969');
      ws.onopen = () => {
          console.log('Connection opened!');
      }
      ws.onmessage = ({ data }) => showMessage(data);
      ws.onclose = function() {
          ws = null;
      }
  }

  sendBtn.onclick = function() {
      if (!ws) {
          showMessage("No WebSocket connection :(");
          return ;
      }

      // Envoyer le message avec le nom d'utilisateur
      const message = `${username}: ${messageBox.value}`;
      ws.send(message);
      showMessage(message);
  }

  init();
})();
