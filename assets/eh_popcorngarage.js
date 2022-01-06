
const wordsvalidated = [];

// function countscreen html
function countscreen (){
  document.getElementById("countwin").innerHTML = wordsvalidated.length;
}

// function time event text
function timeEvent (){
  setTimeout(() => {
    $('.eventtext').empty();
  },10000);
}

// function garage
$('#formgarage').on('submit', function(event) {
    

  event.preventDefault();
    const words = $('#formgarage #userinput').val(); 
    console.log(words);

      if (words === "KLIMT" && !(wordsvalidated.includes('KLIMT'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    }
        else if (words === "VAN GOGH" && !(wordsvalidated.includes('VAN GOGH'))) {
          $('#result').text("Good answer!");
          timeEvent()
          const count = wordsvalidated.push('VAN GOGH')
          console.log(count)
          console.log(wordsvalidated)
          countscreen();
      }
          else if (words === "BANKSY" && !(wordsvalidated.includes('BANKSY'))) {
            $('#result').text("Good answer!");
            timeEvent()
            const count = wordsvalidated.push('BANKSY')
            console.log(count)
            console.log(wordsvalidated)
            countscreen();
        }
            else if (words === "DINOS ALIVE" && !(wordsvalidated.includes('DINOS ALIVE'))) {
              $('#result').text("Good answer!");
              timeEvent()
              const count = wordsvalidated.push('DINOS ALIVE')
              console.log(count)
              console.log(wordsvalidated)
              countscreen();
          }
              else if (words === "MONET" && !(wordsvalidated.includes('MONET'))) {
                $('#result').text("Good answer!");
                timeEvent()
                const count = wordsvalidated.push('MONET')
                console.log(count)
                console.log(wordsvalidated)
                countscreen();
            }
                else if (words === "THE TERRACOTTA ARMY" && !(wordsvalidated.includes('THE TERRACOTTA ARMY'))) {
                  $('#result').text("Good answer!");
                  timeEvent()
                  const count = wordsvalidated.push('THE TERRACOTTA ARMY')
                  console.log(count)
                  console.log(wordsvalidated)
                  countscreen();
              }
                  else if (words === "ALICE IN WONDERLAND" && !(wordsvalidated.includes('ALICE IN WONDERLAND'))) {
                    $('#result').text("Good answer!");
                    timeEvent()
                    const count = wordsvalidated.push('ALICE IN WONDERLAND')
                    console.log(count)
                    console.log(wordsvalidated)
                    countscreen();
                }
                    else if (words === "THE POWER OF POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
                      $('#result').text("Good answer!");
                      timeEvent()
                      const count = wordsvalidated.push('THE POWER OF POISON')
                      console.log(count)
                      console.log(wordsvalidated)
                      countscreen();
                  }
                      else if (words === "THE ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
                        $('#result').text("Good answer!");
                        timeEvent()
                        const count = wordsvalidated.push('THE ART OF THE BRICK')
                        console.log(count)
                        console.log(wordsvalidated)
                        countscreen();
                    }
                        else if (words === "MOMENT WITH THE BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
                          $('#result').text("Good answer!");
                          timeEvent()
                          const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
                          console.log(count)
                          console.log(wordsvalidated)
                          countscreen();
                      }
                          else if (words === "MAGRITTE" && !(wordsvalidated.includes('MAGRITTE'))) {
                            $('#result').text("Good answer!");
                            timeEvent()
                            const count = wordsvalidated.push('MAGRITTE')
                            console.log(count)
                            console.log(wordsvalidated)
                            countscreen();
                        }
                            else if (words === "DALI" && !(wordsvalidated.includes('DALI'))) {
                              $('#result').text("Good answer!");
                              timeEvent()
                              const count = wordsvalidated.push('DALI')
                              console.log(count)
                              console.log(wordsvalidated)
                              countscreen();
                          }
                              else if (words === "TOUTANKHAMON" && !(wordsvalidated.includes('TOUTANKHAMON'))) {
                                $('#result').text("Good answer!");
                                timeEvent()
                                const count = wordsvalidated.push('TOUTANKHAMON')
                                console.log(count)
                                console.log(wordsvalidated)
                                countscreen();
                            }
                                else if (words === "POP MASTERS" && !(wordsvalidated.includes('POP MASTERS'))) {
                                  $('#result').text("Good answer!");
                                  timeEvent()
                                  const count = wordsvalidated.push('POP MASTERS')
                                  console.log(count)
                                  console.log(wordsvalidated)
                                  countscreen();
                              }
                                  else if (words === "INCA" && !(wordsvalidated.includes('INCA'))) {
                                    $('#result').text("Good answer!");
                                    timeEvent()
                                    const count = wordsvalidated.push('POP MASTER')
                                    console.log(count)
                                    console.log(wordsvalidated)
                                    countscreen();
                                }
                                // Add variation text
                                
    else {
      $('#result').text("Well, try again!");
      timeEvent();
  }
    });
    