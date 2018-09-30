var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);

    // get current messages
    // call readAll to get messages
    // Parse.readAll(function(messagesJSON){
    //   //_.filter messages with full properties
    
    //   var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
    //     return messageObject.username && messageObject.text;
    //   });
      
    //   console.log(filtJSONResults);  
    //   //For each message object, 
    //   _.each(filtJSONResults, function(messageObject){
    //     if (messageObject.username.length > 8) {
    //       messageObject.username = messageObject.username.substr(0, 8).concat('...');
    //     }
    //     //call render template function to create view
    //     // debugger;
    //     let mView = MessageView.render(messageObject);
    //     // append them to the chats DIV
    //     MessagesView.$chats.append(mView);
    //   });
    // });
    // //setInterval(MessagesView.initialize.bind(this), 3000);
 
  },

  render: function() { 
    // call readAll to get messages
    console.log("render");
    MessagesView.$chats.html(''); // empty the messages
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));

    
    
    // Prior code
    // Parse.readAll(function(messagesJSON){
    //   //_.filter messages with full properties
    
    //   var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
    //     return messageObject.username && messageObject.text;
    //   });
    //   console.log(filtJSONResults);
    //   // Empty the chat messages
    //   $chats.empty();   
    //   //For each message object, 
    //   _.each(filtJSONResults, function(messageObject){
    //     //call render template function to create view
    //     // debugger;
    
        
    //     let mView = MessageView.render(messageObject);
    //     // append them to the chats DIV
    //     MessagesView.$chats.append(mView);
    //   });
    // })
  },
  
  renderMessage: function(message) {
    
    var $message = MessageView.render(message);
console.log($message);
    MessagesView.$chats.prepend($message);
  },

  // selectRoom: function(selectedRoom){
  //   Parse.readAll(function(messagesJSON){
  //     //_.filter messages with full properties
    
  //     var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
  //       return messageObject.username && messageObject.text && (messageObject.roomname === selectedRoom);
  //     });
      
  //     console.log(filtJSONResults);  
  //     //For each message object, 
  //     _.each(filtJSONResults, function(messageObject){
  //       if (messageObject.username.length > 8) {
  //         messageObject.username = messageObject.username.substr(0, 8).concat('...');
  //       }
  //       //call render template function to create view
  //       // debugger;
  //       let mView = MessageView.render(messageObject);
  //       // append them to the chats DIV
  //       MessagesView.$chats.append(mView);
  //     });
  //   });
  // }
  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {return;}

    Friends.toggleStatus(username, MessagesView.render);
  }
};