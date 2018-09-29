var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomNames: undefined,
  initialize: function() {
    //Call Ajax for messages
    
    Parse.readAll(function(messagesJSON){
      //_.filter messages with full properties
    
      var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
        return messageObject.username && messageObject.text && messageObject.roomname;
      });
      
      console.log("----------------");
      console.log(filtJSONResults);  
      console.log("----------------");
      //For each message object, 
     
      //create a set for roomname
      var set = new Set();
      _.each(filtJSONResults, function(message, i) {
        set.add(message[i].roomname);       
      });
      
      console.log(set);
      this.roomNames = set;
    });
    
    RoomsView.generateRoomOptions();
  },

  render: function() {
    _.template(`
        <option value="<%= _.escape(roomname) %>"><%= _.escape(roomname) %></option>
      `,  settings
      )
  },

  generateRoomOptions: function(){
    for(var i = 0; i < this.roomNames.length; i++){
      var optionTemplate = render({roomname: this.roomNames[i]});
      $select.append(optionTemplate)
    }
  }

  

};
