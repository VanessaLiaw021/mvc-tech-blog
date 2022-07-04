//Delete the post to the dashboard
const deletePostHandler = async (event) => {

    //Prevent any default value from happening 
    event.preventDefault();

    //Giving us access to the URL
    const id = window.location.toString().split("/")[window.location.toString().split("/").length - 1]

    //Send fetch request to add a new post 
    const deleteResponse = await fetch (`/api/posts/${id}`, {
        
        //Read from PUT method 
        method: "DELETE",

        //Convert data recieve to a string and display it on the page
        body: JSON.stringify({ post_id: id }),

        //Indicate the request body format is json
        headers: { "Content-Type": "application/json" }
    });

    //If the post is added, then the template will be re-rendered 
    deleteResponse.ok ? document.location.replace("/dashboard") : alert("Failed to delete post");
};

//Grab the selector for button and call the function 
document.querySelector("#delete-post").addEventListener("click", deletePostHandler);