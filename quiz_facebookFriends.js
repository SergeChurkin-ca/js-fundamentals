/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here


var facebookProfile = {
  name: "Serge",
  friends : 700,
  messages : ['Hi, my Dear!', 'Glad to see you!'],
  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index)  {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    return facebookProfile.friends+=1;
  },
  removeFriend: function() {
    facebookProfile.friends-=1;
  } 
};
