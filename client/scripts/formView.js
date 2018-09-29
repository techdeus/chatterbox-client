var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // get the text from userinput
    // escape characters to prevent XSS
    // AJAX call from Parse.create, to create message
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