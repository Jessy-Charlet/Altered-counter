$(document).ready(function () {


    /******************************* Functions */

    /*** Augmentation des valeurs */

    function Up(elementClick, cible) {
        $(elementClick).on("click", function () {
            let value = $(cible).text();
            value++;
            $(cible).text(value)
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


    /*** Augmentation des valeurs */

    function Down(elementClick, cible) {
        $(elementClick).on("click", function () {
            let value = $(cible).text();
            if (value > 0) {
                value--;
            } else {
                value = 0;
            }
            $(cible).text(value)
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


    /*** Activer et désacriver des biomes*/

    $("#aPlayerPlanteLeft , #aPlayerTerreLeft, #aPlayerEauLeft, #aPlayerPlanteRight , #aPlayerTerreRight, #aPlayerEauRight, #bPlayerPlanteLeft , #bPlayerTerreLeft, #bPlayerEauLeft, #bPlayerPlanteRight , #bPlayerTerreRight, #bPlayerEauRight").on("click", function () {
        $(this).toggleClass("off");
    })

    /*** Reset les compteurs */
function Reset(player){
    $("#"+player+"PlayerReset").on("click", function(){
        $("#"+player+"PlayerPlanteLeft").text(0);
        $("#"+player+"PlayerTerreLeft").text(0);
        $("#"+player+"PlayerEauLeft").text(0);
        $("#"+player+"PlayerPlanteRight").text(0);
        $("#"+player+"PlayerTerreRight").text(0);
        $("#"+player+"PlayerEauRight").text(0);
        let rotation = 0
        rotation += 360;
        $("#"+player+"PlayerReset > img").toggleClass("rotation");
    });
}
Reset("a");
Reset("b");

})