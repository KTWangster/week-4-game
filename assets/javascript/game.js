$(document).ready(function() {
    // Array containing character objects.
    var characters = [{
            //pikachu: {
            name: "Pikachu",
            hp: 100,
            image: "assets/images/pikachu.png",
            gif: "assets/images/pikachuGIF.gif"
        },
        //bulbasaur: 
        {
            name: "Bulbasaur",
            hp: 100,
            image: "assets/images/bulbasaur.png",
            gif: "assets/images/bulbasaurGIF.gif",
        },
        //squirtle: 
        {
            name: "Squirtle",
            hp: 100,
            image: "assets/images/squirtle.png",
            gif: "assets/images/squirtleGIF.gif",
        },
        //charmander: 
        {
            name: "Charmander",
            hp: 100,
            image: "assets/images/charmander.png",
            gif: "assets/images/charmanderGIF.gif",
        }
    ]


    // Object variables.
    var playerChoice = characters[key];
    var opponentChoice = characters[key];
    var characterChoice;
    var wins = 0;
    var playerHP = 100;
    var opponentHP = 100;

    // Instructions on how to get started.
    $("#gameComments").text("Choose a character to get started.").hide().fadeIn('3000');

    // Creates seperate div for each character.
    for (var key in characters) {
        var obj = characters[key];
        // Creates new class of characters and their images and names.
        var newDiv = $("<div>").attr("id", obj.id).addClass("characters")
            .append($("<img>").attr("src", obj.image).attr("alt", obj.name).attr("width", "100"))
            .append($("<h5>").text(obj.name))

        console.log("Pokemon yay!");
        $("#characterRow").prepend(newDiv);
    }

    // Click function for characters.
    $(".characters").on("click", function() {
        characterChoice = $(this);
        console.log("Pokemon poked!");

        // First character clicked becomes player choice.
        if ($("#playerGame").is(":empty")) {
            var playerChoice = characters[$(this).attr("value")];
            $("#playerGame").html(characterChoice).hide().fadeIn('2000').height('250');

            console.log("Player choice - chosen!")
            playerHP = 100;
            $("#gameComments").text('Now choose an opponent.').fadeIn('3000');

            // Subsequent characters are selected as the opponent when clicked.
        } else {
            $("#opponentGame").is(":empty"); {
                var opponentChoice = characters[$(this).attr("value")];
                $("#opponentGame").html(characterChoice).hide().fadeIn('2000');
                console.log("Opponent choice - chosen!")
                opponentHP = 100;

                $("h1").hide();
                // Hides row of characters to prevent further selection.
                $("#characterRow").hide('1000');
                $("#gameComments").text("Now click the 'ATTACK' button to start playing!").fadeIn('3000');
            }
        }
    });

    // Player attack function.
    function playerAttack() {
        // Generate random HP value.
        var attackDamage = Math.floor(Math.random() * 31) + 1;
        opponentHP = opponentHP -= attackDamage;
        // Updates opponent HP stats with loss.
        $("#opponentHP").html("Opponent HP: " + opponentHP);
        // Updates game comments with play-by-play.
        $("#gameComments").text("You inflicted " + attackDamage + " HP damage!").fadeIn('3000');
        // Displays fighting character GIF.
        var playerGIF = $("#playerGame").html($("<img>").attr("src", obj.gif).attr("alt", obj.name).attr("width", "200")).append($("<h5>").text(obj.name))

        console.log("Pokemon yay!");

    };

    // Opponent attack function.
    function opponentAttack() {
        // Generate random HP value.
        attackDamage = Math.floor(Math.random() * 26) + 1;
        playerHP = playerHP -= attackDamage;
        // Updates player HP stats with loss.
        $("#playerHP").html("Player HP: " + playerHP);
        // Updates game comments with play-by-play.
        $("#gameComments").text("Damage inflicted! You lost " + attackDamage + " HP!").fadeIn('3000');
        // Displays fighting character GIF.
        var opponentGIF = $("#opponentGame").html($("<img>").attr("src", obj.gif).attr("alt", obj.name).attr("width", "200")).append($("<h5>").text(obj.name))
        console.log("Pokemon yay!")

    }

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

        //if (playerChoice.hp > 0 && opponentChoice.hp > 0) {
        if (!$("#playerGame").is(":empty") && !$("#opponentGame").is(":empty")) {
            console.log("Player and Opponent HP still good!");
            // Function initiates player attack.
            playerAttack();
            console.log("Attaaack!")
                // Delayed function initiates opponent attack.
            setTimeout(function() {
                opponentAttack()
                console.log("OMG ouch!")
            }, 1000);

            // If player HP falls below zero, player loses game.
            if (playerHP <= 0) {
                $("#gameComments").text("YOU LOSE! Select a new character to try again.");
                console.log("Oh no! Opponent wins!")
                reset();
            }

            // If opponent HP falls below zero, oppoonent loses game..
            if (opponentHP <= 0) {
                $("gameComments").text("YOU WIN! Select another opponent to defeat.");
                console.log("Hooray! Player wins!")
                $("#opponentGame").empty();
                $("#opponentHP").empty();
                $("#characterRow").show('3000');
                wins++
            }

        };

        function reset() {
            $("#characterRow").show('3000');
            $("#gameRow").removeAttr();
        }
    });


})