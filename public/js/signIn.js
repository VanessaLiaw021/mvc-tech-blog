//Handle the sign in form 
const signInFormHandler = async (event) => {

    //Prevent default action from happening 
    event.preventDefault();

    //Try to run the code inside 
    try {

        //Get the value of the username and password 
        const username = document.querySelector("#signin-username").value;
        const password = document.querySelector("#signin-password").value;

        //Read the fetch request 
        const createResponse = await fetch("/api/users/signin", {

            //Read from POST method 
            method: "POST",

            //Convert data recieve to a string and display it on the page
            body: JSON.stringify({ username, password }),

            //Indicate the request body format is json
            headers: { "Content-Type": "application/json" }
        });

        //If the signin is correct, then the template will be re-rendered to dashboard
        createResponse.ok ? document.location.redirect("/dashboard") : alert("Failed to sign in. Try again");

        //Catch error if any
    }   catch (err) {

        //Display error if any
        res.json(err);
    };
};

//Grab the selector for button and call the function 
document.querySelector("#sign-in").addEventListener("click", signOutFormHandler);