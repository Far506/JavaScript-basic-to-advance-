//Error handling -> try, catch, finally, throw
//try ... catch handle run time errors (Programs which is )
// Error object
// The finally statement -> execute code, after try and catch



/*alert("Hi Everyone");
alert(x);
alert("Bye Everyone");*/



//code test
/*try {
    alert("Hi everyone");
    alert(x);
    alert("Bye Everyone ! ");
} catch (err) {
    console.log(error);
}*/




try {
    //code test
    alert("Hi Everyone");
    alert(x);
} catch (err) {
    console.log(err);
} finally {
    alert("Bye Everyone");
}