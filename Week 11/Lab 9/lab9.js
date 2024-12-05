//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
window.onload = pageReady;
function pageReady() {
    function createCookie(cookieName, cookieValue, lifespan) {
        document.cookie = cookieName + "=" + cookieValue + ";" + "max-age=" + lifespan;
    }
    function deleteCookie(cookieName) {
        document.cookie = cookieName + "=; max-age=0; path=/;";
    }
    var newMsgBox = document.getElementById("newMsgBox");
    if (document.cookie.length > 0) {
        var cookieArray = document.cookie.split(";");
        var oldName = cookieArray[0].split("=")[1];
        var oldcolour = cookieArray[1].split("=")[1];

        newMsgBox.innerHTML = "Welcome " + oldName + "!";
        document.body.style.background = oldcolour;
    }
    //#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
    formHandle = document.forms.infoForm;
    formHandle.onsubmit = handleFormSubmit;
    var dlteButton = document.getElementById("btnDel");
    dlteButton.onclick = deltecookie;
    //onsubmit Function
    function handleFormSubmit() {
        //get values from form
        var userName = formHandle.f_name.value;
        var userColour = formHandle.f_color.value;
        //console.log the form values
        console.log(userName, userColour);
        createCookie("storedName", userName, 80000);
        createCookie("storedColour", userColour, 80000);
    }
    function deltecookie() {
        deleteCookie("storedName");
        deleteCookie("storedColour");
        window.location.reload();
    }
}
