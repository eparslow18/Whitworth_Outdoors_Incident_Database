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
        TripType = $('#OtherTripType').val();
    }
    else {
        TripType = "None Selected";
    }
   
}

function SubmitButton() {

    // Trip Type
    var vTripName = $('#TripName').val();
    var vTripStartDate = $('#TripStartDate').val();
    var vTripStartEndDate = $('#TripStartEndDate').val();
    var vAcademicYear = $('#AcademicYear').val();
    var vSemester = setSemester(vSemester);
    var vHeadLead = $('#HeadLead').val();
    var vCoLead = $('#CoLead').val();
    var vApprentice = $('#Apprentice').val();
    var vAdditionalLeaders = $('#AdditionalLeaders').val();
    var vTripType = setTripType(vTripType);

    // Type Of Enviorment
    var vDesert = $('#Desert').val();
    var vCliff = $('#Cliff').val();
    var vCold = $('#Cold').val();
    var vForest = $('#Forest').val();
    var vGlacier = $('#Glacier').val();
    var vLake = $('#Lake').val();
    var vMountain = $('#Mountain').val();
    var vOcean = $('#Ocean').val();
    var vRiver = $('#River').val();
    var vSnowIce = $('#SnowIce').val();
    var vOtherEnviorment = $('#OtherEnviorment').val();

    // Surface Condition
    var vDry = $('#Dry').val();
    var vFlat = $('#Flat').val();
    var vIce = $('#Ice').val();
    var vRock = $('#Rock').val();
    var vSloped = $('#Sloped').val();
    var vSnow = $('#Snow').val();
    var vTrail = $('#Trail').val();
    var vUneven = $('#Uneven').val();
    var vWet = $('#Wet').val();
    var vSnowAndIce = $('#SnowAndIce').val();
    var vOtherSurfaceCondition = $('#OtherSurfaceCondition').val();

    // Incident Basic Information
    var vDateOfIncident = $('#DateOfIncident').val();
    var vTimeOfIncident = $('#TimeOfIncident').val();
    var vPersonReportingIncident = $('#PersonReportingIncident').val();
    var vPersonReportedTo = $('#PersonReportedTo').val();
    var vDescriptionOfIncident = $('#DescriptionOfIncident').val();
    var vResponseActionsTaken = $('#ResponseActionsTaken').val();

    // Affected Person Information
    var vFirstName = $('#FirstName').val();
    var vLastName = $('#LastName').val();
    var vDOB = $('#DOB').val();
    var vAddress = $('#Address').val();
    var vPhone = $('#Phone').val();
    var vWhitowrthID = $('#WhitowrthID').val();

    // Type Of Incident
    var vDeath = $('#Death').val();
    var vIllness = $('#Illness').val();
    var vInjury = $('#Injury').val();
    var vMotivationBehavioral = $('#MotivationBehavioral').val();
    var vNearMiss = $('#NearMiss').val();
    var vVan = $('#Van').val();
    var vLostPerson = $('#LostPerson').val();
    var vOtherTypeOfIncident = $('#OtherTypeOfIncident').val();

    // Severity Of Incident
    var vDisabling = $('#Disabling').val();
    var vFatal = $('#Fatal').val();
    var vFire = $('#Fire').val();
    var vFirstAidOnly = $('#FirstAidOnly').val();
    var vMedialTreatment = $('#MedialTreatment').val();
    var vNoInjury = $('#NoInjury').val();
    var vPropertyDamage = $('#PropertyDamage').val();
    var vOtherSeverity = $('#OtherSeverity').val();

    // Type Of Illness
    var vAbdominalPain = $('#AbdominalPain').val();
    var vAllergicReaction = $('#AllergicReaction').val();
    var vAltitudeSickness = $('#AltitudeSickness').val();
    var vDehydration = $('#Dehydration').val();
    var vDiarrhea = $('#Diarrhea').val();
    var vEarInfection = $('#EarInfection').val();
    var vEyeInfection = $('#EyeInfection').val();
    var vFluCold = $('#FluCold').val();
    var vFoodIllness = $('#FoodIllness').val();
    var vHeatIllness = $('#HeatIllness').val();
    var vHyothermia = $('#Hyothermia').val();
    var vNauseaVomitting = $('#NauseaVomitting').val();
    var vFever = $('#Fever').val();
    var vSkinInfection = $('#SkinInfection').val();
    var vUpperRespiratory = $('#UpperRespiratory').val();
    var vUrinaryTract = $('#UrinaryTract').val();
    var vAsthma = $('#Asthma').val();
    var vOtherIllness = $('#OtherIllness').val();

    // Type Of Illness 
    var vBlister = $('#Blister').val();
    var vBurn = $('#Burn').val();
    var vDental = $('#Dental').val();
    var vDislocation = $('#Dislocation').val();
    var vEyeInjury = $('#EyeInjury').val();
    var vFracture = $('#Fracture').val();
    var vFrostbite = $('#Frostbite').val();
    var vHeadWOLOC = $('#HeadWOLOC').val();
    var vHeadWLOC = $('#HeadWLOC').val();
    var vImmersionFood = $('#ImmersionFood').val();
    var vLigamentsSprain = $('#LigamentsSprain').val();
    var vMuscleStrain = $('#MuscleStrain').val();
    var vNearDrowning = $('#NearDrowning').val();
    var vSoftTissue = $('#SoftTissue').val();
    var vSunBurn = $('#SunBurn').val();
    var vTendonitis = $('#Tendonitis').val();
    var vOtherInury = $('#OtherInury').val();

    // Questions
    var vQ1 = $('#Question1').val();
    var vQ2 = $('#Question2').val();
    var vQ3 = $('#Question3').val();
    var vQ4 = $('#Question4').val();
    var vQ5 = $('#Question5').val();
    var vQ6 = $('#Question6').val();

    //post to php

    $.post("file://cs1/CS_Projects/2016_Fall_CS374/WOIncidentTracking/public_html/PHP_Files/New_Entry.php",
                        {
                            TripName: vTripName,
                            TripStartDate: vTripStartDate,
                            TripStartEndDate: vTripStartEndDate,
                            AcademicYear: vAcademicYear,
                            Semester: vSemester,
                            HeadLead: vHeadLead,
                            CoLead: vCoLead,
                            Apprentice: vApprentice,
                            AdditionalLeaders: vAdditionalLeaders,
                            TripType: vTripType,
                            Desert: vDesert,
                            Cliff: vCliff,
                            Cold: vCold,
                            Forest: vForest,
                            Glacier: vGlacier,
                            Lake: vLake,
                            Mountain: vMountain,
                            Ocean: vOcean,
                            River: vRiver,
                            SnowIce: vSnowIce,
                            OtherEnviorment: vOtherEnviorment,
                            Dry: vDry,
                            Flat: vFlat,
                            Ice: vIce,
                            Rock: vRock,
                            Sloped: vSloped,
                            Snow: vSnow,
                            Trail: vTrail,
                            Uneven: vUneven,
                            Wet: vWet,
                            SnowAndIce: vSnowAndIce,
                            OtherSurfaceCondition: vOtherSurfaceCondition,
                            DateOfIncident: vDateOfIncident,
                            TimeOfIncident: vTimeOfIncident,
                            PersonReportingIncident: vPersonReportingIncident,
                            PersonReportedTo: vPersonReportedTo,
                            DescriptionOfIncident: vDescriptionOfIncident,
                            ResponseActionsTaken: vResponseActionsTaken,
                            FirstName: vFirstName,
                            LastName: vLastName,
                            DOB: vDOB,
                            Address: vAddress,
                            Phone: vPhone,
                            WhitowrthID: vWhitowrthID,
                            Death: vDeath,
                            llness: vIllness,
                            Injury: vInjury,
                            MotivationBehavioral: vMotivationBehavioral,
                            NearMiss: vNearMiss,
                            Van: vVan,
                            LostPerson: vLostPerson,
                            OtherTypeOfIncident: vOtherTypeOfIncident,
                            Disabling: vDisabling,
                            Fatal: vFatal,
                            Fire: vFire,
                            FirstAidOnly: vFirstAidOnly,
                            MedialTreatment: vMedialTreatment,
                            NoInjury: vNoInjury,
                            PropertyDamage: vPropertyDamage,
                            OtherSeverity: vOtherSeverity,
                            AbdominalPain: vAbdominalPain,
                            AllergicReaction: vAllergicReaction,
                            AltitudeSickness: vAltitudeSickness,
                            Dehydration: vDehydration,
                            Diarrhea: vDiarrhea,
                            EarInfection: vEarInfection,
                            EyeInfection: vEyeInfection,
                            FluCold: vFluCold,
                            FoodIllness: vFoodIllness,
                            HeatIllness: vHeatIllness,
                            Hyothermia: vHyothermia,
                            NauseaVomitting: vNauseaVomitting,
                            Fever: vFever,
                            SkinInfection: vSkinInfection,
                            UpperRespiratory: vUpperRespiratory,
                            UrinaryTract: vUrinaryTract,
                            Asthma: vAsthma,
                            OtherIllness: vOtherIllness,
                            Blister: vBlister,
                            Burn: vBurn,
                            Dental: vDental,
                            Dislocation: vDislocation,
                            EyeInjury: vEyeInjury,
                            Fracture: vFracture,
                            Frostbite: vFrostbite,
                            HeadWLOC: vHeadWLOC,
                            HeadWOLOC: vHeadWOLOC,
                            ImmersionFood: vImmersionFood,
                            LigamentsSprain: vLigamentsSprain,
                            MuscleStrain: vMuscleStrain,
                            NearDrowning: vNearDrowning,
                            SoftTissue: vSoftTissue,
                            SunBurn: vSunBurn,
                            Tendonitis: vTendonitis,
                            OtherInury: vOtherInury,
                            Question1: vQ1,
                            Question2: vQ2,
                            Question3: vQ3,
                            Question4: vQ4,
                            Question5: vQ5,
                            Question6: vQ6,
                        },
            function () {
                alert("successfully sent incident to php");
                window.location = "http://localhost:45082/Main.html"
            });
}