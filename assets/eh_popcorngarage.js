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

    if (words === "KLIMT" && !(wordsvalidated.includes('KLIMT: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "VAN GOGH" && !(wordsvalidated.includes('VAN GOGH: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Vincent, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "BANKSY" && !(wordsvalidated.includes('BANKSY: GENIUS OR VANDAL?'))) {
        $('#result').text("Banksy, you found it!");
        timeEvent()
        const count = wordsvalidated.push('BANKSY: GENIUS OR VANDAL?')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "DINOS ALIVE" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("Dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        addenter()
        countscreen();
    } else if (words === "MONET" && !(wordsvalidated.includes('CLAUDE MONET: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('CLAUDE MONET: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "THE TERRACOTTA ARMY" && !(wordsvalidated.includes('THE TERRACOTTA ARMY AND THE FIRST EMPEROR OF CHINA'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('THE TERRACOTTA ARMY AND THE FIRST EMPEROR OF CHINA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "ALICE IN WONDERLAND" && !(wordsvalidated.includes('ALICE IN WONDERLAND'))) {
        $('#result').text("Alice, you found it!");
        timeEvent()
        const count = wordsvalidated.push('ALICE IN WONDERLAND')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "THE POWER OF POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
        $('#result').text("Poison, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE POWER OF POISON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "THE ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "MOMENT WITH THE BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("Butterflies, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "MAGRITTE" && !(wordsvalidated.includes('MAGRITTE: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "DALI" && !(wordsvalidated.includes('DALI: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Dali, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DALI: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "TOUTANKHAMON" && !(wordsvalidated.includes('TOUTANKHAMON'))) {
        $('#result').text("you found it!");
        timeEvent()
        const count = wordsvalidated.push('TOUTANKHAMON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "POP MASTERS" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "INCA" && !(wordsvalidated.includes('INCA'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('INCA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "PHOTOCITY" && !(wordsvalidated.includes('PHOTOCITY'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('PHOTOCITY')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // add enter variable -----------------------------------------------------------------------------------------------------------------------------------
        // variation inca -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "INCAS" && !(wordsvalidated.includes('INCA'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('INCA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation pop master -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POP ART" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("Good answer!");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation klimt -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "GUSTAV KLIMT" && !(wordsvalidated.includes('KLIMT: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "KLIMT GUSTAV" && !(wordsvalidated.includes('KLIMT: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Klimt, you found it!");
        timeEvent()
        const count = wordsvalidated.push('KLIMT: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation van gogh -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "VINCENT VAN GOGH" && !(wordsvalidated.includes('VAN GOGH: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Vincent, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "VAN GOGH VINCENT" && !(wordsvalidated.includes('VAN GOGH: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Vincent, you found it!");
        timeEvent()
        const count = wordsvalidated.push('VAN GOGH: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation banksy -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "BANSKY" && !(wordsvalidated.includes('BANKSY: GENIUS OR VANDAL?'))) {
        $('#result').text("Bansky, Giiiiiiiilles?");
        timeEvent()
        const count = wordsvalidated.push('BANKSY: GENIUS OR VANDAL?')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation dinos alive -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "DINO" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("Dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation monet -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "CLAUDE MONET" && !(wordsvalidated.includes('CLAUDE MONET: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('CLAUDE MONET: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "MONET CLAUDE" && !(wordsvalidated.includes('CLAUDE MONET: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Monet, you found it!");
        timeEvent()
        const count = wordsvalidated.push('CLAUDE MONET: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation terracotta -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "TERRACOTTA" && !(wordsvalidated.includes('THE TERRACOTTA ARMY AND THE FIRST EMPEROR OF CHINA'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('THE TERRACOTTA ARMY AND THE FIRST EMPEROR OF CHINA')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation Alive -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "ALICE" && !(wordsvalidated.includes('ALICE IN WONDERLAND'))) {
        $('#result').text("Alice, you found it!");
        timeEvent()
        const count = wordsvalidated.push('ALICE IN WONDERLAND')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation Poison -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POISON" && !(wordsvalidated.includes('THE POWER OF POISON'))) {
        $('#result').text("Poison, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE POWER OF POISON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation Butterflies -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "BUTTERFLIES" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "BUTTERFLY" && !(wordsvalidated.includes('MOMENT WITH THE BUTTERFLIES'))) {
        $('#result').text("You found it!");
        timeEvent()
        const count = wordsvalidated.push('MOMENT WITH THE BUTTERFLIES')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation Lego -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "ART OF THE BRICK" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "LEGO" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "AOTB" && !(wordsvalidated.includes('THE ART OF THE BRICK'))) {
        $('#result').text("Lego, you found it!");
        timeEvent()
        const count = wordsvalidated.push('THE ART OF THE BRICK')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation Magritte -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "RENE MAGRITTE" && !(wordsvalidated.includes('MAGRITTE: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "MAGRITTE RENE" && !(wordsvalidated.includes('MAGRITTE: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Magritte, you found it!");
        timeEvent()
        const count = wordsvalidated.push('MAGRITTE: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation dali -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "SALVADOR DALI" && !(wordsvalidated.includes('DALI: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Dali, you found it");
        timeEvent()
        const count = wordsvalidated.push('DALI: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "DALI SALVADOR" && !(wordsvalidated.includes('DALI: THE IMMERSIVE EXPERIENCE'))) {
        $('#result').text("Dali, you found it");
        timeEvent()
        const count = wordsvalidated.push('DALI: THE IMMERSIVE EXPERIENCE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation TOUTANKHAMON -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "TOUTENCARTON" && !(wordsvalidated.includes('TOUTANKHAMON'))) {
        $('#result').text("haha, little kid ...");
        timeEvent()
        const count = wordsvalidated.push('TOUTANKHAMON')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // variation pop master -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "POP ART" && !(wordsvalidated.includes('POP MASTERS'))) {
        $('#result').text("You found it");
        timeEvent()
        const count = wordsvalidated.push('POP MASTERS')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
        // attention -----------------------------------------------------------------------------------------------------------------------------------
        // god mode -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "42" && !(wordsvalidated.includes('X'))) {
        $('#result').text("GOD MODE ON!");
        timeEvent()
        const count = wordsvalidated.push('X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventgodmod();
        // variation dinos alive -----------------------------------------------------------------------------------------------------------------------------------
    } else if (words === "DINOS" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("Dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "DINO ALIVE" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("Dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();
    } else if (words === "DINOSAUR" && !(wordsvalidated.includes('DINOS ALIVE'))) {
        $('#result').text("Dinos, you found it!");
        timeEvent()
        const count = wordsvalidated.push('DINOS ALIVE')
        console.log(count)
        console.log(wordsvalidated)
        countscreen()
        addenter()
        eventrue();    
    } else {
        $('#result').text("Well, try again!");
        timeEvent()
        eventfalse();
    }
});

function eventrue() {
    const music = new Audio('Sources/MACHAppl_ID 1631.ogg');
    music.play();
    music.loop = false;
}

function eventfalse() {
    const music = new Audio('Sources/MECHHydr_ID 1493.ogg');
    music.play();
    music.loop = false;
}

function eventgodmod() {
    const music = new Audio('Sources/h2g2.ogg');
    music.play();
    music.loop = false;
}



/**form win **/
formulaire = document.createElement('FORM2');
titre = document.createElement('LABEL');
titre.innerHTML = "";
menu = document.createElement('SELECT');
formulaire.appendChild(titre);
formulaire.appendChild(menu);
document.body.appendChild(formulaire);

/**form win function **/




function addenter() {

    const element = wordsvalidated.at(-1)
    options = document.createElement('OPTION');
    options.appendChild(document.createTextNode(element)); //le texte visible
    options.value = element; //la valeur r??el
    menu.appendChild(options); //on accroche chaque option
    ;
}