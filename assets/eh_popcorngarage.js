
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
                                    const count = wordsvalidated.push('INCA')
                                    console.log(count)
                                    console.log(wordsvalidated)
                                    countscreen();
                                }
                                    else if (words === "PHOTOCITY" && !(wordsvalidated.includes('PHOTOCITY'))) {
                                      $('#result').text("Good answer!");
                                      timeEvent()
                                      const count = wordsvalidated.push('PHOTOCITY')
                                      console.log(count)
                                      console.log(wordsvalidated)
                                      countscreen();
                                  }
                                // Add variation text
                                      else if (words === "INCAS" && !(wordsvalidated.includes('INCA'))) {
                                        $('#result').text("Good answer!");
                                        timeEvent()
                                        const count = wordsvalidated.push('INCA')
                                        console.log(count)
                                        console.log(wordsvalidated)
                                        countscreen();
                                    }
                                        else if (words === "SALVADOR DALI" && !(wordsvalidated.includes('DALI'))) {
                                          $('#result').text("Good answer!");
                                          timeEvent()
                                          const count = wordsvalidated.push('DALI')
                                          console.log(count)
                                          console.log(wordsvalidated)
                                          countscreen();
                                      }
                                          else if (words === "DALI SALVADOR" && !(wordsvalidated.includes('DALI'))) {
                                            $('#result').text("Good answer!");
                                            timeEvent()
                                            const count = wordsvalidated.push('DALI')
                                            console.log(count)
                                            console.log(wordsvalidated)
                                            countscreen();
                                        }
                                            else if (words === "RENE MAGRITTE" && !(wordsvalidated.includes('MAGRITTE'))) {
                                              $('#result').text("Good answer!");
                                              timeEvent()
                                              const count = wordsvalidated.push('MAGRITTE')
                                              console.log(count)
                                              console.log(wordsvalidated)
                                              countscreen();
                                          }
                                              else if (words === "RENÉ MAGRITTE" && !(wordsvalidated.includes('MAGRITTE'))) {
                                                $('#result').text("Good answer!");
                                                timeEvent()
                                                const count = wordsvalidated.push('MAGRITTE')
                                                console.log(count)
                                                console.log(wordsvalidated)
                                                countscreen();
                                            }
                                                else if (words === "MAGRITTE RENÉ" && !(wordsvalidated.includes('MAGRITTE'))) {
                                                  $('#result').text("Good answer!");
                                                  timeEvent()
                                                  const count = wordsvalidated.push('MAGRITTE')
                                                  console.log(count)
                                                  console.log(wordsvalidated)
                                                  countscreen();
                                              }
                                                  else if (words === "BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
                                                    $('#result').text("Good answer!");
                                                    timeEvent()
                                                    const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
                                                    console.log(count)
                                                    console.log(wordsvalidated)
                                                    countscreen();
                                                }
                                                    else if (words === "ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
                                                      $('#result').text("Good answer!");
                                                      timeEvent()
                                                      const count = wordsvalidated.push('THE ART OF THE BRICK')
                                                      console.log(count)
                                                      console.log(wordsvalidated)
                                                      countscreen();
                                                  }
                                                      else if (words === "AOTB" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
                                                        $('#result').text("Good answer!");
                                                        timeEvent()
                                                        const count = wordsvalidated.push('THE ART OF THE BRICK')
                                                        console.log(count)
                                                        console.log(wordsvalidated)
                                                        countscreen();
                                                    }
                                                        else if (words === "POWER OF POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
                                                          $('#result').text("Good answer!");
                                                          timeEvent()
                                                          const count = wordsvalidated.push('THE POWER OF POISON')
                                                          console.log(count)
                                                          console.log(wordsvalidated)
                                                          countscreen();
                                                      }
                                                          else if (words === "TERRACOTTA ARMY" && !(wordsvalidated.includes('THE TERRACOTTA ARMY'))) {
                                                            $('#result').text("Good answer!");
                                                            timeEvent()
                                                            const count = wordsvalidated.push('THE TERRACOTTA ARMY')
                                                            console.log(count)
                                                            console.log(wordsvalidated)
                                                            countscreen();
                                                        }
                                                            else if (words === "CLAUDE MONET" && !(wordsvalidated.includes('MONET'))) {
                                                              $('#result').text("Good answer!");
                                                              timeEvent()
                                                              const count = wordsvalidated.push('MONET')
                                                              console.log(count)
                                                              console.log(wordsvalidated)
                                                              countscreen();
                                                          }
                                                              else if (words === "MONET CLAUDE" && !(wordsvalidated.includes('MONET'))) {
                                                                $('#result').text("Good answer!");
                                                                timeEvent()
                                                                const count = wordsvalidated.push('MONET')
                                                                console.log(count)
                                                                console.log(wordsvalidated)
                                                                countscreen();
                                                            }
                                                                else if (words === " VINCENT VAN GOGH" && !(wordsvalidated.includes('VAN GOGH'))) {
                                                                  $('#result').text("Good answer!");
                                                                  timeEvent()
                                                                  const count = wordsvalidated.push('VAN GOGH')
                                                                  console.log(count)
                                                                  console.log(wordsvalidated)
                                                                  countscreen();
                                                              }
                                                                  else if (words === "VAN GOGH VINCENT" && !(wordsvalidated.includes('VAN GOGH'))) {
                                                                    $('#result').text("Good answer!");
                                                                    timeEvent()
                                                                    const count = wordsvalidated.push('VAN GOGH')
                                                                    console.log(count)
                                                                    console.log(wordsvalidated)
                                                                    countscreen();
                                                                }
                                                                    if (words === "GUSTAV KLIMT" && !(wordsvalidated.includes('KLIMT'))) {
                                                                      $('#result').text("Good answer!");
                                                                      timeEvent()
                                                                      const count = wordsvalidated.push('KLIMT')
                                                                      console.log(count)
                                                                      console.log(wordsvalidated)
                                                                      countscreen();
                                                                  }
                                                                      if (words === "KLIMT GUSTAV" && !(wordsvalidated.includes('KLIMT'))) {
                                                                        $('#result').text("Good answer!");
                                                                        timeEvent()
                                                                        const count = wordsvalidated.push('KLIMT')
                                                                        console.log(count)
                                                                        console.log(wordsvalidated)
                                                                        countscreen();
                                                                    }  
                                                                  
    else {
      $('#result').text("Well, try again!");
      timeEvent();
  }
    });
    