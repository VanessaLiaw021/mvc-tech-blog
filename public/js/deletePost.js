//Delete the post to the dashboard
const deletePostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Send fetch request to add a new post 
    const deleteResponse = await fetch (`/api/posts/${id}`, {
        
        //Read from POST method 
        method: "DELETE"
    });

    //If the post is added, then the template will be re-rendered 
    deleteResponse.ok ? document.location.replace("/dashboard") : alert("Failed to delete post");
};

//Grab the selector for button and call the function 
document.querySelector("#delete-post").addEventListener("click", deletePostHandler);