//LAB 9-DATA STORAGE: PRODUCTS PAGE
window.onload = pageReady;
function pageReady() {
   var newMsgBox = document.getElementById("newMsgBox");
   if (document.cookie.length > 0) {
      var cookieArray = document.cookie.split(";");
      var oldName = cookieArray[0].split("=")[1];
      var oldcolour = cookieArray[1].split("=")[1];

      newMsgBox.innerHTML = "Welcome " + oldName + "!";
      document.body.style.background = oldcolour;
   }

}