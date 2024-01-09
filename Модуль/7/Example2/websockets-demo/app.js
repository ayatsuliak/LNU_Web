window.onload = function() {

  var form = document.getElementById('message-form');  // Get references to elements on the page.
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');

  var socket = new WebSocket('wss://localhost');  // Create a new WebSocket.

  socket.onerror = function(error) {console.log('WebSocket Error: ' + error);};

  socket.onopen = function(event) { // Show a connected message when the WebSocket is opened.
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.URL;
    socketStatus.className = 'open'; };

  socket.onmessage = function(event) {  // Handle messages sent by the server.
    var message = event.data;
    messagesList.innerHTML += '<li class="received"><span>Received:</span>' +
                               message + '</li>';
  };
 
  socket.onclose = function(event) { socketStatus.innerHTML = 'Disconnected from WebSocket.';
    socketStatus.className = 'closed'; };

  form.onsubmit = function(e) {  // Send a message when the form is submitted.
    e.preventDefault();   
    var message = messageField.value; // Retrieve the message from the textarea.
    socket.send(message);// Send the message through the WebSocket.  
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +
                              '</li>'; // Add the message to the messages list.  
    messageField.value = ''; // Clear out the message field.
    return false;
  };
  
  closeBtn.onclick = function(e) {// Close the WebSocket connection when the close button is clicked.
    e.preventDefault(); socket.close();// Close the WebSocket.
    return false;
  };
};

