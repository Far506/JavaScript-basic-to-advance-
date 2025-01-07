//<input/> - text, number, password, email, color,
//checkbox, search, radio, time, date, 
//datetime, week, month, url, tel, file

//<select>
//<textarea>






console.clear();
/*const input = document.querySelector("input[name = name]");
input.addEventListener("change", changeHandler);

function changeHandler(e) {

    console.log(e);
    console.log(e.target.value);
}*/




/*const programs = document.querySelectorAll("input[name=program]");
//console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler);
})

function programHandler(e) {
    if (e.target.checked) {
        console.log(e.target.value);
    }
}*/



const department = document.querySelector("#department");
//console.log(department);

department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
    console.log(e.target.value);
}