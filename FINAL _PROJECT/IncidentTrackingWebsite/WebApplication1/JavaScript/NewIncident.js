function setSemester(Semester)
{

    if ($('#Fall').val = 1) {
        Semester = "Fall";
    }
    else if ($('#January').val = 1) {
        Semester = "January"
    }
    else if ($('#Spring').val = 1) {
        Semester = "Spring";
    }
    else
    {
        Semester = "None Selected";
    }

    return Semester;
}
function setTripType(TripType)
{
    if($('#DayHike').val())
    {
        TripType = "DayHike";
    }
    else if($('#Backpacking').val())
    {
        TripType = "BackPacking";
    }
    else if($('#Climbing').val())
    {
        TripType = "Climbing";
    }
    else if($('#Snowshoeing').val())
    {
        TripType = "Snowshoeing";
    }
    else if($('#MountainBiking').val())
    {
        TripType = "Mountainbiking";
    }
    else if($('#Mountaineering').val())
    {
        TripType = "Mountaineering";
    }
    else if($('#Camping').val())
    {
        TripType = "Camping";
    }
    else if ($('#IceClimbing').val()) {
        TripType = "IceClimbing";
    }
    else if ($('#Rafting').val()) {
        TripType = "Rafting";
    }
    else if ($('#SkiVan').val()) {
        TripType = "SkiVan";
    }
    else if ($('#SnowboardingSnowshoeing').val()) {
        TripType = "SnowboardingSnowshoeing";
    }
    else if ($('#SUP').val()) {
        TripType = "SUP";
    }
    else if ($('#MultiSport').val()) {
        TripType = "MultiSport";
    }
    else if ($('#OtherTripType').val()) {
        TripType = "OtherTripType";
    }
    else {
        TripType = "None Selected";
    }
   
}

function post()
{
    // Trip Type
    var TripName = $('#TripName').val();
    var TripStartDate = $('#TripStartDate').val();
    var TripStartEndDate = $('#TripStartEndDate').val();
    var AcademicYear = $('#AcademicYear').val();
    var Semester = setSemester(Semester);
    var HeadLead = $('#HeadLead').val();
    var CoLead = $('#CoLead').val();
    var Apprentice = $('#Apprentice').val();
    var AdditionalLeaders = $('#AdditionalLeaders').val();
    var TripType = setTripType(TripType);

    // Type Of Enviorment
    var Desert = $('#Desert').val();
    var Cliff = $('#Cliff').val();
    var Cold = $('#Cold').val();
    var Forest = $('#Forest').val();
    var Glacier = $('#Glacier').val();
    var Lake = $('#Lake').val();
    var Mountain = $('#Mountain').val();
    var Ocean = $('#Ocean').val();
    var River = $('#River').val();
    var SnowIce = $('#SnowIce').val();
    var OtherEnviorment = $('#OtherEnviorment').val();

    // Surface Condition
    var Dry = $('#Dry').val();
    var Flat = $('#Flat').val();
    var Ice = $('#Ice').val();
    var Rock = $('#Rock').val();
    var Sloped = $('#Sloped').val();
    var Snow = $('#Snow').val();
    var Trail = $('#Trail').val();
    var Uneven = $('#Uneven').val();
    var Wet = $('#Wet').val();
    var SnowAndIce = $('#SnowAndIce').val();
    var OtherSurfaceCondition = $('#OtherSurfaceCondition').val();

    // Incident Basic Information
    var DateOfIncident = $('#DateOfIncident').val();
    var TimeOfIncident = $('#TimeOfIncident').val();
    var PersonReportingIncident = $('#PersonReportingIncident').val();
    var PersonReportedTo = $('#PersonReportedTo').val();
    var DescriptionOfIncident = $('#DescriptionOfIncident').val();
    var ResponseActionsTaken = $('#ResponseActionsTaken').val();

    // Affected Person Information
    var FirstName = $('#FirstName').val();
    var LastName = $('#LastName').val();
    var DOB = $('#DOB').val();
    var Address = $('#Address').val();
    var Phone = $('#Phone').val();
    var WhitowrthID = $('#WhitowrthID').val();

    // Type Of Incident
    var Death = $('#Death').val();
    var Illness = $('#Illness').val();
    var Injury = $('#Injury').val();
    var MotivationBehavioral = $('#MotivationBehavioral').val();
    var NearMiss = $('#NearMiss').val();
    var Van = $('#Van').val();
    var LostPerson = $('#LostPerson').val();
    var OtherTypeOfIncident = $('#OtherTypeOfIncident').val();

    // Severity Of Incident
    var Disabling = $('#Disabling').val();
    var Fatal = $('#Fatal').val();
    var Fire = $('#Fire').val();
    var FirstAidOnly = $('#FirstAidOnly').val();
    var MedialTreatment = $('#MedialTreatment').val();
    var NoInjury = $('#NoInjury').val();
    var PropertyDamage = $('#PropertyDamage').val();
    var OtherSeverity = $('#OtherSeverity').val();

    // Type Of Illness
    var AbdominalPain = $('#AbdominalPain').val();
    var AllergicReaction = $('#AllergicReaction').val();
    var AltitudeSickness = $('#AltitudeSickness').val();
    var Dehydration = $('#Dehydration').val();
    var Diarrhea = $('#Diarrhea').val();
    var EarInfection = $('#EarInfection').val();
    var EyeInfection = $('#EyeInfection').val();
    var FluCold = $('#FluCold').val();
    var FoodIllness = $('#FoodIllness').val();
    var HeatIllness = $('#HeatIllness').val();
    var Hyothermia = $('#Hyothermia').val();
    var NauseaVomitting = $('#NauseaVomitting').val();
    var Fever = $('#Fever').val();
    var SkinInfection = $('#SkinInfection').val();
    var UpperRespiratory = $('#UpperRespiratory').val();
    var UrinaryTract = $('#UrinaryTract').val();
    var Asthma = $('#Asthma').val();
    var OtherIllness = $('#OtherIllness').val();

    // Type Of Illness 
    var Blister = $('#Blister').val();
    var Burn = $('#Burn').val();
    var Dental = $('#Dental').val();
    var Dislocation = $('#Dislocation').val();
    var EyeInjury = $('#EyeInjury').val();
    var Fracture = $('#Fracture').val();
    var Frostbite = $('#Frostbite').val();
    var HeadWOLOC = $('#HeadWOLOC').val();
    var HeadWLOC = $('#HeadWLOC').val();
    var ImmersionFood = $('#ImmersionFood').val();
    var LigamentsSprain = $('#LigamentsSprain').val();
    var MuscleStrain = $('#MuscleStrain').val();
    var NearDrowning = $('#NearDrowning').val();
    var SoftTissue = $('#SoftTissue').val();
    var SunBurn = $('#SunBurn').val();
    var Tendonitis = $('#Tendonitis').val();
    var OtherInury = $('#OtherInury').val();

    // Questions
    var Q1 = $('#Question1').val();
    var Q2 = $('#Question2').val();
    var Q3 = $('#Question3').val();
    var Q4 = $('#Question4').val();
    var Q5 = $('#Question5').val();
    var Q6 = $('#Question6').val();

    //post to php

    //redirect to ?


}