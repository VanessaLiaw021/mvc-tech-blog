//Handle the sign up form 
const signUpFormHandler = async (event) => {

    //Prevent default action from happening 
    event.preventDefault();

    //Get the value of the username and password 
    const username = document.querySelector("#signup-username").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    //Check to see if the username and password meet the requirement
    if (username && password) {

        //Read the fetch request 
        const signUpResponse = await fetch("/api/users", {

            //Read from POST method 
            method: "POST",

            //Convert data recieve to a string and display it on the page
            body: JSON.stringify({ username, password }),

            //Indicate the request body format is json
            headers: { "Content-Type": "application/json" }
        });

        //If the signin is correct, then the template will be re-rendered to dashboard
        signUpResponse.ok ? document.location.replace("/dashboard") : alert("Failed to sign up. Try again");
    };
};

//Grab the selector for button and call the function 
document.querySelector("#sign-up-form").addEventListener("submit", signUpFormHandler);