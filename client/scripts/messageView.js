var MessageView = {
  
  render: _.template(`
      
      <div class="chat"> 
        <div class="username"><%= _.escape(username) %>:</div> 
        <div class="message"><%= _.escape(text) %></div>
      </div>
    
    `, settings
  )

};

var settings =  {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
}