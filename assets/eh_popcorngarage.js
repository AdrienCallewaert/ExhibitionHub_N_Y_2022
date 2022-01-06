const wordsvalidated = [];

// function countscreen html
function countscreen() {
    document.getElementById("countwin").innerHTML = wordsvalidated.length;
}

// function time event text
function timeEvent() {
    setTimeout(() => {
        $('.eventtext').empty();
    }, 10000);
}

// function garage
$('#formgarage').on('submit', function(event) {


    event.preventDefault();
    const words = $('#formgarage #userinput').val();
    console.log(words);

    if (words === "KLIMT" && !(wordsvalidated.includes('KLIMT'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "VAN GOGH" && !(wordsvalidated.includes('VAN GOGH'))) {
        $('#result').text("Van Gogh, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "BANKSY" && !(wordsvalidated.includes('BANKSY'))) {
        $('#result').text("Banksy, you found it!");
        timeEvent()
        const count = wordsvalidated.push('BANKSY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "DINOS ALIVE" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("The dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "MONET" && !(wordsvalidated.includes('MONET'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MONET')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "THE TERRACOTTA ARMY" && !(wordsvalidated.includes('THE TERRACOTTA ARMY'))) {
        $('#result').text("Terracotta, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE TERRACOTTA ARMY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "ALICE IN WONDERLAND" && !(wordsvalidated.includes('ALICE IN WONDERLAND'))) {
        $('#result').text("Alice, you found it!");
        timeEvent()
        const count = wordsvalidated.push('ALICE IN WONDERLAND')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "THE POWER OF POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
        $('#result').text("Poison, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE POWER OF POISON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "THE ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "MOMENT WITH THE BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("Butterflies, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "MAGRITTE" && !(wordsvalidated.includes('MAGRITTE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "DALI" && !(wordsvalidated.includes('DALI'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('DALI')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "TOUTANKHAMON" && !(wordsvalidated.includes('TOUTANKHAMON'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('TOUTANKHAMON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "POP MASTERS" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "INCA" && !(wordsvalidated.includes('INCA'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('INCA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "PHOTOCITY" && !(wordsvalidated.includes('PHOTOCITY'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('PHOTOCITY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // add enter variable -----------------------------------------------------------------------------------------------------------------------------------
        // variation inca -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "INCAS" && !(wordsvalidated.includes('INCA'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('INCA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation pop master -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POP ART" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation klimt -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "GUSTAV KLIMT" && !(wordsvalidated.includes('KLIMT'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "KLIMT GUSTAV" && !(wordsvalidated.includes('KLIMT'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation van gogh -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "VINCENT VAN GOGH" && !(wordsvalidated.includes('VAN GOGH'))) {
        $('#result').text("Van Gogh, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "VAN GOGH VINCENT" && !(wordsvalidated.includes('VAN GOGH'))) {
        $('#result').text("Van Gogh, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation banksy -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "BANSKY" && !(wordsvalidated.includes('BANKSY'))) {
        $('#result').text("Bansky, are you serious?");
        timeEvent()
        const count = wordsvalidated.push('BANKSY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation dinos alive -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "DINO" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("The dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation monet -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "CLAUDE MONET" && !(wordsvalidated.includes('MONET'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MONET')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "MONET CLAUDE" && !(wordsvalidated.includes('MONET'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MONET')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation terracotta -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "TERRACOTTA" && !(wordsvalidated.includes('THE TERRACOTTA ARMY'))) {
        $('#result').text("Terracotta, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE TERRACOTTA ARMY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation Alive -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "ALICE" && !(wordsvalidated.includes('ALICE IN WONDERLAND'))) {
        $('#result').text("Alice, you found it!");
        timeEvent()
        const count = wordsvalidated.push('ALICE IN WONDERLAND')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation Poison -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
        $('#result').text("Poison, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE POWER OF POISON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation Butterflies -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("Butterflies, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "BUTTERFLY" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("Butterflies, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation Lego -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "AOTB" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "AOTB" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation Magritte -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "RENE MAGRITTE" && !(wordsvalidated.includes('MAGRITTE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "MAGRITTE RENE" && !(wordsvalidated.includes('MAGRITTE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation dali -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "SALVADOR DALI" && !(wordsvalidated.includes('DALI'))) {
        $('#result').text("Dali, you found it");
        timeEvent()
        const count = wordsvalidated.push('DALI')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else if (words === "DALI SALVADOR" && !(wordsvalidated.includes('DALI'))) {
        $('#result').text("Dali, you found it");
        timeEvent()
        const count = wordsvalidated.push('DALI')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation TOUTANKHAMON -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "TOUTENCARTON" && !(wordsvalidated.includes('TOUTANKHAMON'))) {
        $('#result').text("haha, little kid ...");
        timeEvent()
        const count = wordsvalidated.push('TOUTANKHAMON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // variation pop master -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POP ART" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
        // attention -----------------------------------------------------------------------------------------------------------------------------------
        // god mode -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "ADRIEN THE BEST" && !(wordsvalidated.includes('X'))) {
        $('#result').text("GOD MODE ON!");
        timeEvent()
        const count = wordsvalidated.push('X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X')
        console.log(count)
        console.log(wordsvalidated)
        countscreen();
    } else {
        $('#result').text("Well, try again!");
        timeEvent();
    }
});