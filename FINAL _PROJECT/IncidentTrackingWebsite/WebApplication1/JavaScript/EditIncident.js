function LoadTable()
{
    $.post("http://cs1/WOIncidentTracking/PHP_Files/Load_Edit_Table.php",
              function ()
              {
                  alert("successfully sent incident to php");
                  window.location = "http://localhost:45082/Main.html"
              });
}