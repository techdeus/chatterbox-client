var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // get the text from userinput

    var userText = $('input:text').val();
    var userName = App.username;
    var roomName = Rooms.roomName;
    // create a message object
    var messageObject = { username: userName, text: userText, roomname: roomName};
    // AJAX call from Parse.create, to create message
    console.log(messageObject);
    Parse.create(messageObject);
    
      // check if message was a success
        // if success
          // render messages view
        // if not
          // console.log the error

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};