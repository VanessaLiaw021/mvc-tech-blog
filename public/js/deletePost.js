//Add the post to the dashboard
const addPostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Get the value of the text and title of blog post
    const post_title = document.querySelector("#add-title").value;
    const post_text = document.querySelector("#add-text").value;

    //Send fetch request to add a new post 
    const deleteResponse = await fetch (`/api/posts/${id}`, {
        
        //Read from POST method 
        method: "DELETE",
        
        body: JSON.stringify({
            post_title, 
            post_text
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    //If the post is added, then the template will be re-rendered 
    deleteResponse.ok ? document.location.replace("/dashboard") : alert("Failed to delete post");
};

//Grab the selector for button and call the function 
document.querySelector("#create-post").addEventListener("click", addPostHandler);