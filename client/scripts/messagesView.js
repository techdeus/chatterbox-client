var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get current messages
    // call readAll to get messages
    Parse.readAll(function(messagesJSON){
      console.log("================");
      console.log(messagesJSON);
      console.log("================");
      //For each message object, 
      _.each(messagesJSON.results, function(messageObject, i){
        //call render template function to create view
        // debugger;
        let mView = MessageView.render(messageObject);
        // append them to the chats DIV
        MessagesView.$chats.append(mView);
      });
    });
    
    
  },

  render: function() { 
    Parse.readAll(function(messagesJSON){
      //console.log("Get All Messages");
    });
    //For each message object, 
    _.each(messagesJSON, function(messageObject){
      //call render template function to create view
      let mView = MessageView.render(messageObject);
      // append them to the chats DIV
      $chats.append(mView);
    });
  }

};