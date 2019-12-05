/*
 * Programming Quiz: Umbrella (7-1)
 Using the umbrella example from the previous video,
 see if you can follow the example open() method and create the close() method.
  
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
      if (umbrella.isOpen === false) {
        return "The umbrella is already closed!";
      } else {
        umbrella.isOpen = false;
        return "Julia closes the umbrella!";
      }
    }
};


