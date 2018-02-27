$(document).ready(function() {
    // Array containing character objects.
    var characters = {
        pikachu: {
            name: "Pikachu",
            hp: 100,
            image: "assets/images/pikachu.png",
            gif: "assets/images/pikachuGIF.gif"
        },
        bulbasaur: {
            name: "Bulbasaur",
            hp: 100,
            image: "assets/images/bulbasaur.png",
            gif: "assets/images/bulbasaurGIF.gif",
        },
        squirtle: {
            name: "Squirtle",
            hp: 100,
            image: "assets/images/squirtle.png",
            gif: "assets/images/squirtleGIF.gif",
        },
        charmander: {
            name: "Charmander",
            hp: 100,
            image: "assets/images/charmander.png",
            gif: "assets/images/charmanderGIF.gif",
        }
    };

    // Object variables.
    var playerChoice = false;
    var opponentChoice = false;
    var wins = 0;
    var playerHP = 100;
    var opponentHP = 100;

    // Instructions on how to get started.
    $("#gameComments").text("Choose a character to get started.").hide().fadeIn('3000');

    // Creates seperate div for each character.
    for (var key in characters) {
        var obj = characters[key];
        var newDiv = $("<div>").attr("id", obj.id).addClass("characters")
            .append($("<img>").attr("src", obj.image).attr("alt", obj.name).attr("width", "100"))
            .append($("<h5>").text(obj.name))

        console.log("Pokemon yay!");

        $("#characterRow").prepend(newDiv);
    }

    // Click function for characters.
    $(".characters").on("click", function() {
        var characterChoice = $(this);
        console.log("Pokemon clicked!");

        // First character clicked becomes player choice.
        if ($("#playerGame").is(":empty")) {
            $("#playerGame").html(characterChoice).hide().fadeIn('2000').height('250');
            playerChoice = characters[characterChoice.attr("id")];
            $("#gameComments").text('Now choose an opponent.').fadeIn('3000');


            // Subsequent characters are selected as the opponent when clicked.
        } else {
            $("#opponentGame").is(":empty"); {
                $("#opponentGame").html(characterChoice).hide().fadeIn('2000');
                opponentChoice = characters[characterChoice.attr("id")];
                $("h1").hide();
                $("#characterRow").hide('1000');
                $("#gameComments").text("Now click the 'ATTACK' button to start playing!").fadeIn('3000');
            }
        }
    });

    // Function for attack button.
    $("#attackBtn").on("click", function() {
        console.log("Attack button clicked!!")

        // Hides 'ATTACK' button as play-by-play updates.
        $("#attackBtn").hide('fast');
        setTimeout(function() {
            $("#attackBtn").show('fast');
        }, 1000);
        $("#gameComments").hide('fast');
        // Checks if both player and opponent HP's are above 0.
        if (playerHP > 0 && opponentHP > 0) {
            console.log("Player and Opponent HP still good!");

            var attackDamage = Math.floor(Math.random() * 30);
            var opponentHPLoss = (opponentHP - attackDamage);
            // Updates game comments with play-by-play.
            $("#gameComments").text("Damage inflicted! " + opponentHPLoss + " HP Lost.").fadeIn('3000');

            // UPDATE HP STATS

        };
    });


})