//Handle the sign out form 
const signOutFormHandler = async () => {
    
    //Try to run the code inside
    try {

        //Get the value of the username and password 
        const username = document.querySelector("#signup-username").value;
        const password = document.querySelector("#signup-password").value;

        //Read the fetch request 
        const destroyResponse = await fetch("/api/users/signout", {

            //Read the method 
            method: "POST",

            //Indicate the request body format is json
            headers: { "Content-Type": "application/json"}
        });

        //If the signout is correct, then the template will be re-rendered to dashboard
        destroyResponse.ok ? document.location.redirect("/") : alert("Failed to logout");

        //Catch error if any
    }   catch (err) {
        
        //Display error if any
        res.json(err);
    }
};

//Grab the selector for button and call the function 
document.querySelector("#sign-out").addEventListener("click", signOutFormHandler);