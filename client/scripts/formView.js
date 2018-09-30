var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    

    var message = {
      username: App.username, 
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };
    console.log(message);
    Parse.create(message, (data) => {
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
      });

    // // get the text from userinput

    // var userText = $('#message').val();
    // var userName = App.username;
    // var roomName = $('#dropdown option:selected').text();
    // // create a message object
    // var messageObject = { username: userName, text: userText, roomname: roomName};
    // // AJAX call from Parse.create, to create message
    // console.log(messageObject);
    // Parse.create(messageObject);
    
    // MessagesView.render();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};