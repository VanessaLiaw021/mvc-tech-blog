//Update the post to the dashboard
const addPostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Get the value of the text and title of blog post
    const post_title = document.querySelector("#add-title").value;
    const post_text = document.querySelector("#add-text").value;

    //Send fetch request to add a new post 
    const updateResponse = await fetch (`/api/posts/${id}`, {
        
        //Read from POST method 
        method: "PUT",
        
        //Convert data recieve to a string and display it on the page
        body: JSON.stringify({ post_title, post_text }),

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the post is added, then the template will be re-rendered 
    updateResponse.ok ? document.location.replace("/dashboard") : alert("Failed to edit post");
};

//Grab the selector for button and call the function 
document.querySelector("#update-post").addEventListener("click", addPostHandler);