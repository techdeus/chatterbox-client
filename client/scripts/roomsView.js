var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  
  initialize: function() {
    //Call Ajax for messages
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);

    // Parse.readAll(function(messagesJSON){
    //   //_.filter messages with full properties
    
    //   var filtJSONResults = _.filter(messagesJSON.results, function(messageObject) {
    //     return messageObject.username && messageObject.text && messageObject.roomname;
    //   });
      
    
    //   //For each message object, 
     
    //   //create a set for roomname
    //   var set = new Set();
    //   _.each(filtJSONResults, function(message, i) {
    //     // console.log("IM INSIDE of EACH")
    //     set.add(message.roomname);       
    //   });
    //   RoomsView.roomNames = set;
    // });
    
    // setTimeout(RoomsView.generateRoomOptions.bind(this), 1000);
    
    // $('option').on('click', function(selected){
    //     MessagesView.selectRoom(selected.text());
    // });

    // $('#btnAddRoom').click(function(){

    //   RoomsView.addRoom();
    //   });
  },

  render: function() { 
    
    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
    // _.template(`
    //     <option value="<%- roomname %>"><%- roomname %></option>
    //   `
    //   )

  },

  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  }, 

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();  
  },

  handleClick: function(event) {
    var roomname = $('#roomname').val();
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  
    }
  

};
