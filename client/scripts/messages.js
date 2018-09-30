var Messages = {
  
    _data: {},

    items: function() {
      return _.chain(Object.values(Messages._data)).sortBy('createdAt');
    }, 

    add: function(messages, callback = () => {}) {
      Messages._data[message.objectId] = message;
      callback();
    }, 

    update: function(messages, callback = () => {}) {
      var length = Object.keys(Messages._data).length;
      console.log(length);
      for ( let message of messages ) {
        Messages._data[messages.objectId] = Messages._conform(message);
      }
      if (Object.keys(Messages._data).length !== length) {
      console.log("Call");
        callback();
      }
    }, 

    _conform: function(message) {
      message.text = message.text || '';
      message.username = message.username || '';
      message.roomname = message.roomname || '';
      
      return message;
    }
};
