$('#joke-form').on('submit', function(event) {
    event.preventDefault();
    const words = $('#joke-form #userinput').val(); 
    console.log(words);
      if (words === "Klimt") {
        $('#result').text("Well, good answer!");
    }
    else {
        $('#result').text("Fail, try agin!");
    }
    });
    
    