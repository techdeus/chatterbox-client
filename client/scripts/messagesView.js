var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get current messages
    // call readAll to get messages
    Parse.readAll(function(messagesJSON){
      //_.filter messages with full properties
    
      var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
        return messageObject.username && messageObject.text;
      });
      
      console.log(filtJSONResults);  
      //For each message object, 
      _.each(filtJSONResults, function(messageObject){
        //call render template function to create view
        // debugger;
        let mView = MessageView.render(messageObject);
        // append them to the chats DIV
        MessagesView.$chats.append(mView);
      });
    });
    //setInterval(MessagesView.initialize.bind(this), 3000);
    
  },

  renderMessage: function(messageJSON) { 
    // call readAll to get messages
    Parse.readAll(function(messagesJSON){
      //_.filter messages with full properties
    
      var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
        return messageObject.username && messageObject.text;
      });
      console.log(filtJSONResults);  
      //For each message object, 
      _.each(filtJSONResults, function(messageObject){
        //call render template function to create view
        // debugger;
    
        
        let mView = MessageView.render(messageObject);
        // append them to the chats DIV
        MessagesView.$chats.append(mView);
      });
    })
  },
  // refresh: function(){
    
  // }
};