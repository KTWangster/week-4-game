$(document).ready(function() {
            // Array containing character objects.
            let charObj = [{
                    name: "Pikachu",
                    hp: 100,
                    image: "assets/images/pikachu.png",
                    gif: "assets/images/pikachuGIF.gif",
                },
                {
                    name: "Bulbasaur",
                    hp: 100,
                    image: "assets/images/bulbasaur.png",
                    gif: "assets/images/bulbasaurGIF.gif",
                },
                {
                    name: "Squirtle",
                    hp: 100,
                    image: "assets/images/squirtle.png",
                    gif: "assets/images/squirtleGIF.gif",
                },
                {
                    name: "Charmander",
                    hp: 100,
                    image: "assets/images/charmander.png",
                    gif: "assets/images/charmanderGIF.gif",
                },
            ]

            // function printToScreen() {
            //    document.getElementById('charactersRow').innerText = charObj.image;
            // }

            // Object variables.
            var wins = 0;
            var playerHP = 100;
            var enemyHP = 100;

            // Function to initiate game.
            function initGame() {
                var playerChoice = false;
                var enemyChoice = false;

                var num = Math.floor(12 / charArr.length)
                for (var i = 0; i < charObj.length; i++) {
                    //$("#charactersRow").prepend(charObj);
                    var charThing = $("<div id='characterRow-" + i + "' class = 'char col-md-" + num + "' value='" + i + "'></div>")
                    charThing.html("<img src='" + charObj[i].image + "' style = 'width:95px; height:155px;'/><h3>" + charObj[i].name + "</h3>")
                    $("#characterRow").append(charThing)
                }
            }

            $(document).on("click", ".char", function() {
                        $(".gameplay").show('1000')
                    }

                    // Get value of clicked character.
                    $(document).on("click", ".characters", function() {
                        console.log("Character clicked!!")
                    })
                    // First clicked character set as player.
                    // Sub

                    // Click event for "Attack" button.
                    $("#fightBtn").on("click", function() {
                            $("#fightBtn").hide('300')
                            setTimeout(function() {
                                    $("#attackBtn").show('300')
                                }, 3000)
                                // Enemy loses HP.
                                // ...When enemy HP reaches zero, enemy is removed from defender area.
                                // Enemy instantly counter attacks.
                                // ...Player loses HP.
                                // ......When player HP reachers zero, game over.