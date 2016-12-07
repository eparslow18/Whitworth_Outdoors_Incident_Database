$(TripStartDate).ready(function() {
    $("#TripStartDate").keyup(function () {
        if ($(this).val().length == 2 || $(this).val().length == 5){
            $(this).val($(this).val() + "/");
        }
    });
});
