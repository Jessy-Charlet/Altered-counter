$(document).ready(function () {


    $("#aPlayerArrowRight").hide();
    $("#aPlayerArrowLeft").hide();
    $("#bPlayerArrowRight").hide();
    $("#bPlayerArrowLeft").hide();
    $("#optionsWindow").hide();

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
            HigterAll()
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
        $("#" + player + "Reset").on("click", function () {
            $("#" + player + "PlanteLeft").text(0);
            $("#" + player + "TerreLeft").text(0);
            $("#" + player + "EauLeft").text(0);
            $("#" + player + "PlanteRight").text(0);
            $("#" + player + "TerreRight").text(0);
            $("#" + player + "EauRight").text(0);
            let rotation = 0
            rotation += 360;
            $("#" + player + "Reset > img").toggleClass("rotation");
            HigterAll()
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

    /*** */












    /******************************* Menu des options */

    /*** Ouverture du menu */
    $("#options").on("click", function () {
        $("#optionsWindow").fadeIn();
    })

    /*** Fermeture du menu */
    $("#close").on("click", function () {
        $("#optionsWindow").fadeOut();
    })

    /*** Changement de couleur des themes */
    function Background(player, couleur){
        $("#"+player+couleur).on("click", function(){
            $("#"+player+"Area").removeAttr("class");
            $("#"+player+"Area").addClass("playerArea", "backgroundWhite");
            console.log(couleur)
        })
    }
Background("aPlayer", "Black");
Background("aPlayer", "White");



})
