//Handle the sign out form 
const signOutFormHandler = async () => {
    
    //Read the fetch request 
    const signOutResponse = await fetch("/api/users/signout", {

        //Read the method 
        method: "POST",

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the signout is correct, then the template will be re-rendered to dashboard
    signOutResponse.ok ? document.location.replace("/") : alert("Failed to logout");
};

//Grab the selector for button and call the function 
document.querySelector("#sign-out").addEventListener("click", signOutFormHandler);