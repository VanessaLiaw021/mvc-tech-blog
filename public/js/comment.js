//Add the post to the dashboard
const editPostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Get the value of the text and title of blog post
    const comment_text = document.querySelector("#add-title").value;

    //Send fetch request to add a new post 
    const createResponse = await fetch ("/api/comments", {
        
        //Read from POST method 
        method: "POST",
        
        //Convert data recieve to a string and display it on the page
        body: JSON.stringify({
            comment_text
        }),

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the post is added, then the template will be re-rendered 
    createResponse.ok ? document.location.reload() : alert("Failed to add post");
};

//Grab the selector for button and call the function 
document.querySelector("#create-post").addEventListener("click", editPostHandler);