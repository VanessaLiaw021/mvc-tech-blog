//Add the post to the dashboard
const addPostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Get the value of the text and title of blog post
    const post_title = document.querySelector("#add-title").value.trim();
    const post_text = document.querySelector("#add-text").value.trim();

    //Send fetch request to add a new post 
    const createResponse = await fetch ("/api/posts", {
        
        //Read from POST method 
        method: "POST",
        
        //Convert data recieve to a string and display it on the page
        body: JSON.stringify({ post_title, post_text }),

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the post is added, then the template will be re-rendered 
    createResponse.ok ? document.location.replace("/dashboard") : alert("Failed to add post");
};

//Grab the selector for button and call the function 
document.querySelector("#add-post-form").addEventListener("submit", addPostHandler);