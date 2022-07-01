//Handle the sign in form 
const signInFormHandler = async (event) => {

    //Get the value of the username and password 
    const username = document.querySelector("#signin-username").value;
    const password = document.querySelector("#signin-password").value;

    //Try to run the code inside 
    try {

        //Read the fetch request in controller folder
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