window.onload = pageReady;
function pageReady() {
    formHandle = document.forms.ixdForm;
    var header = document.getElementById("welcome");
    var resultMsg = document.getElementById("result");
    var firstName = formHandle.f__fName;
    var lastName = formHandle.f__lName;
    var humberId = formHandle.f__id;
    var humberProgram = formHandle.f__program;
    var selectedProject = formHandle.f__project;
    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultHid = document.getElementById("result__id");
    var program = document.getElementById("result__program");
    var project = document.getElementById("result__project");
    var captionProject=document.getElementById("caption_project");
    var pattern=/^N\d{8}$/;
    function submitForm() {
        if (firstName.value === "") {
            firstName.style.background = "red";
            firstName.focus();
            return false;
        } if (lastName.value === "") {
            lastName.style.background = "red";
            lastName.focus();
            return false;
        }
        if (humberId.value === "" || !pattern.test(humberId.value)) {
            humberId.style.background = "red";
            humberId.focus();
            return false;
        } if (humberProgram.value === "X") {
            humberProgram.style.background = "red";
            humberProgram.focus();
            return false;
        }if(!selectedProject.value){
           captionProject.style.background="red";
            return false;            
        }
        header.style.display = "none";
        resultMsg.style.display = "block";
        formHandle.style.display = "none";
        // console.log(firstName.value,lastName.value,humberId.value,humberProgram.value,selectedProject.value);
        resultFname.innerHTML = firstName.value;
        resultLname.innerHTML = lastName.value;
        resultHid.innerHTML = humberId.value;
        program.innerHTML = humberProgram.options[humberProgram.selectedIndex].text;
        project.innerHTML = selectedProject.value;
        return false;
    }
    formHandle.onsubmit = submitForm;
}