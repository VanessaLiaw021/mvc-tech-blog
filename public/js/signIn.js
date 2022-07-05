//Handle the sign in form
const signInFormHandler = async (event) => {
    
  //Prevent default action from happening
  event.preventDefault();

  //Get the value of the username and password
  const username = document.querySelector("#signin-username").value.trim();
  const password = document.querySelector("#signin-password").value.trim();

  //Check to see if the credntial are true and matches, then fetch the request
  if (username && password) {

    //Read the fetch request
    const response = await fetch("/api/users/signin", {

        //Read from POST method
        method: "POST",

        //Convert data recieve to a string and display it on the page
        body: JSON.stringify({ username, password }),

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the signin is correct, then the template will be re-rendered to dashboard
    response.ok ? document.location.replace("/dashboard") : alert("Failed to sign in. Try again");
  };
};

//Grab the selector for button and call the function
document.querySelector("#sign-in-form").addEventListener("submit", signInFormHandler);