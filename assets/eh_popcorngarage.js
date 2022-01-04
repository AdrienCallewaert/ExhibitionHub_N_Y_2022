function timeEvent (){
  setTimeout(() => {
    $('.eventtext').empty();
  },10000);
}

$('#formgarage').on('submit', function(event) {
    
  event.preventDefault();
    const words = $('#formgarage #userinput').val(); 
    console.log(words);
      if (words === "KLIMT") {
        $('#result').text("Well, good answer!");
        timeEvent();
    }
        else if (words === "VAN GOGH") {
          $('#result').text("Well, good answer!");
          timeEvent();
      }
          else if (words === "BANKSY") {
            $('#result').text("Well, good answer!");
            timeEvent();
        }
            else if (words === "DINOS ALIVE"){
              $('#result').text("Well, good answer!");
              timeEvent();
          }
              else if (words === "MONET") {
                $('#result').text("Well, good answer!");
                timeEvent();
            }
                else if (words === "THE TERRACOTTA ARMY") {
                  $('#result').text("Well, good answer!");
                  timeEvent();
              }
                  else if (words === "ALICE IN WONDERLAND") {
                    $('#result').text("Well, good answer!");
                    timeEvent();
                }
                    else if (words === "THE POWER OF POISON") {
                      $('#result').text("Well, good answer!");
                      timeEvent();
                  }
                      else if (words === "THE ART OF THE BRICK") {
                        $('#result').text("Well, good answer!");
                        timeEvent();
                    }
                        else if (words === "MOMENT WITH THE BUTTERFLIES") {
                          $('#result').text("Well, good answer!");
                          timeEvent();
                      }
                          else if (words === "MAGRITTE") {
                            $('#result').text("Well, good answer!");
                            timeEvent();
                        }
                            else if (words === "DALI") {
                              $('#result').text("Well, good answer!");
                              timeEvent();
                          }
                              else if (words === "TOUTANKHAMON") {
                                $('#result').text("Well, good answer!");
                                timeEvent();
                            }
                                else if (words === "POP MASTER") {
                                  $('#result').text("Well, good answer!");
                                  timeEvent();
                              }
    else {
      $('#result').text("Fail, try again!");
      timeEvent();
  }
    });
    
    
