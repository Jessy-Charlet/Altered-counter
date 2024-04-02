$(document).ready(function () {


    $("#aPlayerArrowRight").hide();
    $("#aPlayerArrowLeft").hide();
    $("#bPlayerArrowRight").hide();
    $("#bPlayerArrowLeft").hide();
    $("#optionsWindow").hide();
    $("#character").hide();

    /******************************* Gestion individuelle des values */

    /*** Augmentation des valeurs */

    function Up(elementClick, cible) {
        $(elementClick).on("click", function () {
            let value = $(cible).text();
            value++;
            $(cible).text(value)
            HigterAll();
            ArrowAll();
        })
    }

    Up("#aPlayerUpPlanteLeft", "#aPlayerPlanteLeft");
    Up("#aPlayerUpTerreLeft", "#aPlayerTerreLeft");
    Up("#aPlayerUpEauLeft", "#aPlayerEauLeft");

    Up("#aPlayerUpPlanteRight", "#aPlayerPlanteRight");
    Up("#aPlayerUpTerreRight", "#aPlayerTerreRight");
    Up("#aPlayerUpEauRight", "#aPlayerEauRight");

    Up("#bPlayerUpPlanteLeft", "#bPlayerPlanteLeft");
    Up("#bPlayerUpTerreLeft", "#bPlayerTerreLeft");
    Up("#bPlayerUpEauLeft", "#bPlayerEauLeft");

    Up("#bPlayerUpPlanteRight", "#bPlayerPlanteRight");
    Up("#bPlayerUpTerreRight", "#bPlayerTerreRight");
    Up("#bPlayerUpEauRight", "#bPlayerEauRight");


    /*** Diminution des valeurs */

    function Down(elementClick, cible) {
        $(elementClick).on("click", function () {
            let value = $(cible).text();
            if (value > 0) {
                value--;
            } else {
                value = 0;
            }
            $(cible).text(value)
            HigterAll();
            ArrowAll();
        })
    }
    Down("#aPlayerDownPlanteLeft", "#aPlayerPlanteLeft");
    Down("#aPlayerDownTerreLeft", "#aPlayerTerreLeft");
    Down("#aPlayerDownEauLeft", "#aPlayerEauLeft");

    Down("#aPlayerDownPlanteRight", "#aPlayerPlanteRight");
    Down("#aPlayerDownTerreRight", "#aPlayerTerreRight");
    Down("#aPlayerDownEauRight", "#aPlayerEauRight");

    Down("#bPlayerDownPlanteLeft", "#bPlayerPlanteLeft");
    Down("#bPlayerDownTerreLeft", "#bPlayerTerreLeft");
    Down("#bPlayerDownEauLeft", "#bPlayerEauLeft");

    Down("#bPlayerDownPlanteRight", "#bPlayerPlanteRight");
    Down("#bPlayerDownTerreRight", "#bPlayerTerreRight");
    Down("#bPlayerDownEauRight", "#bPlayerEauRight");


    /******************************* Gestion des boost et deboost */

    /*** Boost +1 */

    function Boost(player, zone) {
        $("#" + player + "Up" + zone).on("click", function () {
            let valuePlante = $("#" + player + "Plante" + zone).text();
            let valueTerre = $("#" + player + "Terre" + zone).text();
            let valueEau = $("#" + player + "Eau" + zone).text();
            valuePlante++;
            valueTerre++;
            valueEau++;
            $("#" + player + "Plante" + zone).text(valuePlante);
            $("#" + player + "Terre" + zone).text(valueTerre);
            $("#" + player + "Eau" + zone).text(valueEau);
            HigterAll()
            ArrowAll();
        })
    }

    Boost("aPlayer", "Right");
    Boost("aPlayer", "Left");
    Boost("bPlayer", "Right");
    Boost("bPlayer", "Left");


    /*** DeBoost -1 */

    function DeBoost(player, zone) {
        $("#" + player + "Down" + zone).on("click", function () {
            let valuePlante = $("#" + player + "Plante" + zone).text();
            let valueTerre = $("#" + player + "Terre" + zone).text();
            let valueEau = $("#" + player + "Eau" + zone).text();
            if (valuePlante > 0) {
                valuePlante--;
            } else {
                valuePlante = 0;
            }
            if (valueTerre > 0) {
                valueTerre--;
            } else {
                valueTerre = 0;
            }
            if (valueEau > 0) {
                valueEau--;
            } else {
                valueEau = 0;
            }
            $("#" + player + "Plante" + zone).text(valuePlante);
            $("#" + player + "Terre" + zone).text(valueTerre);
            $("#" + player + "Eau" + zone).text(valueEau);
            HigterAll();
            ArrowAll();
        })
    }

    DeBoost("aPlayer", "Right");
    DeBoost("aPlayer", "Left");
    DeBoost("bPlayer", "Right");
    DeBoost("bPlayer", "Left");


    /******************************* Activer, désactiver et reset */

    /*** Activer et désacriver des biomes*/

    $("#aPlayerPlanteLeft , #aPlayerTerreLeft, #aPlayerEauLeft, #aPlayerPlanteRight , #aPlayerTerreRight, #aPlayerEauRight, #bPlayerPlanteLeft , #bPlayerTerreLeft, #bPlayerEauLeft, #bPlayerPlanteRight , #bPlayerTerreRight, #bPlayerEauRight").on("click", function () {
        $(this).toggleClass("off");
        ArrowAll();
    })

    /*** Reset les compteurs */
    function Reset(player) {
        $("#" + player + "Reset img").on("click", function () {
            $("#" + player + "PlanteLeft").text(0);
            $("#" + player + "TerreLeft").text(0);
            $("#" + player + "EauLeft").text(0);
            $("#" + player + "PlanteRight").text(0);
            $("#" + player + "TerreRight").text(0);
            $("#" + player + "EauRight").text(0);
            let rotation = 0
            rotation += 360;
            $("#" + player + "Reset > img").toggleClass("rotation");
            HigterAll();
            ArrowAll();
        });
    }
    Reset("aPlayer");
    Reset("bPlayer");


    /******************************* Gestion des victoires */

    /*** Detection et changement des biomes les plus hauts*/
    function Higter(biome, zone) {
        let aPlayer = $("#aPlayer" + biome + zone).text();
        let bPlayer = $("#bPlayer" + biome + zone).text();
        if (parseInt(aPlayer) > parseInt(bPlayer)) {
            $("#aPlayer" + biome + zone).addClass("higter");
            $("#bPlayer" + biome + zone).removeClass("higter");
        } else if (parseInt(aPlayer) < parseInt(bPlayer)) {
            $("#aPlayer" + biome + zone).removeClass("higter");
            $("#bPlayer" + biome + zone).addClass("higter");
        } else {
            $("#aPlayer" + biome + zone).removeClass("higter");
            $("#bPlayer" + biome + zone).removeClass("higter");
        }
    }
    function HigterAll() {
        Higter("Plante", "Left");
        Higter("Plante", "Right");
        Higter("Eau", "Left");
        Higter("Eau", "Right");
        Higter("Terre", "Left");
        Higter("Terre", "Right");
    }

    function Arrow(player, zone) {
        if ($("#" + player + "Terre" + zone + ":not(.off).higter").text() || $("#" + player + "Plante" + zone + ":not(.off).higter").text() || $("#" + player + "Eau" + zone + ":not(.off).higter").text()) {
            $("#" + player + "Arrow" + zone).show();
        } else {
            $("#" + player + "Arrow" + zone).hide();
        }
    }

    function ArrowAll() {
        Arrow("aPlayer", "Left");
        Arrow("aPlayer", "Right");
        Arrow("bPlayer", "Left");
        Arrow("bPlayer", "Right");
    }


    /******************************* Ajouter un personnage */

    /*** Ouverture et mechanique des quartes menus*/
    function addCharacter(zone, player) {
        $("#" + player + "Add" + zone).on("click", function () {
            $("#character").html("<div class='frame'>" +
                "<div class='area'>" +
                "<button id='characterUpPlante' class='modify mPlante'>▲</button>" +
                "<button id='characterUpTerre' class='modify mTerre'>▲</button>" +
                "<button id='characterUpEau' class='modify mEau'>▲</button>" +
                "<div id='characterPlante' class='value plante'>0</div>" +
                "<div id='characterTerre' class='value terre'>0</div>" +
                "<div id='characterEau' class='value eau'>0</div>" +
                "<button id='characterDownPlante' class='modify mPlante')'>▼</button>" +
                "<button id='characterDownTerre' class='modify mTerre'>▼</button>" +
                "<button id='characterDownEau' class='modify mEau'>▼</button>" +
                "</div>" +
                "<div class='framebutton'>" +
                "<button id='characterClose' class='close'>✖</button>" +
                "<button id='" + player + "CharacterCheck" + zone + "' class='check'>✔</button>" +
                "</div>" +
                "</div>");
            $("#character").fadeIn("fast");
            Up("#characterUpPlante", "#characterPlante");
            Up("#characterUpTerre", "#characterTerre");
            Up("#characterUpEau", "#characterEau");
            Down("#characterDownPlante", "#characterPlante");
            Down("#characterDownTerre", "#characterTerre");
            Down("#characterDownEau", "#characterEau");
            /*** Fermeture des quartes menus*/
            Check(zone, player);
            $("#characterClose").on("click", function () {
                $("#character").fadeOut("fast");
            })
        })
    }

    addCharacter("Right", "aPlayer");
    addCharacter("Left", "aPlayer");
    addCharacter("Right", "bPlayer");
    addCharacter("Left", "bPlayer");

    /*** Validation des stats de biomes */
    function Check(player, zone) {
        $("#" + player + "CharacterCheck" + zone).on("click", function () {
            console.log(player);
            let valuePlante = $("#" + player + "Plante" + zone).text();
            let valueTerre = $("#" + player + "Terre" + zone).text();
            let valueEau = $("#" + player + "Eau" + zone).text();
            let characterPlante = $("#" + player + "Plante" + zone).text();
            let characterTerre = $("#" + player + "Terre" + zone).text();
            let characterEau = $("#" + player + "Eau" + zone).text();
            valuePlante = valuePlante + characterPlante;
            valueTerre = valueTerre + characterTerre;
            valueEau = valueEau + characterEau;
            $("#" + player + "Plante" + zone).text(valuePlante);
            $("#" + player + "Terre" + zone).text(valueTerre);
            $("#" + player + "Eau" + zone).text(valueEau);
            HigterAll();
            ArrowAll();
            $("#character").fadeOut("fast");
        })
    }









    /******************************* Menu des options */

    /*** Ouverture du menu */
    $("#options").on("click", function () {
        $("#optionsWindow").fadeIn("fast");
    })

    /*** Fermeture du menu */
    $("#close").on("click", function () {
        $("#optionsWindow").fadeOut("fast");
    })

    /*** Changement de couleur des themes */
    function Background(player, color) {
        $("#" + player + color).on("click", function () {
            $("#" + player + "Area").removeClass();
            $("#" + player + "Area").addClass("playerArea background" + color);

        })
    }
    Background("aPlayer", "Black");
    Background("aPlayer", "White");
    Background("aPlayer", "Axiom");
    Background("aPlayer", "Bravos");
    Background("aPlayer", "Lyra");
    Background("aPlayer", "Muna");
    Background("aPlayer", "Ordis");
    Background("aPlayer", "Yzmir");
    Background("bPlayer", "Black");
    Background("bPlayer", "White");
    Background("bPlayer", "Axiom");
    Background("bPlayer", "Bravos");
    Background("bPlayer", "Lyra");
    Background("bPlayer", "Muna");
    Background("bPlayer", "Ordis");
    Background("bPlayer", "Yzmir");



})
