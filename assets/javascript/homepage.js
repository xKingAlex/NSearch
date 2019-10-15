var firebaseConfig = {
    apiKey: "AIzaSyBNbx0JW21-f2EJeIbpsDHcNdftO96nvBY",
    authDomain: "nsearch-d5965.firebaseapp.com",
    databaseURL: "https://nsearch-d5965.firebaseio.com",
    projectId: "nsearch-d5965",
    storageBucket: "nsearch-d5965.appspot.com",
    messagingSenderId: "484120172576",
    appId: "1:484120172576:web:469c250d4a9b1d0ec54445",
    measurementId: "G-MZYT0H4D0L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  var database = firebase.database();

  //these vars are for adding new posts to a specific place
  var postRef = "/posts";
  var booksPostsRef = "/posts/books";
  var moviesPostsRef = "/posts/movies";
  var musicPostsRef = "/posts/music";
  var videoGamesPostsRef = "/posts/videogames";


$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
})

$("#makeAPost-btn").on("click", function(){
    console.log ("post btn clicked");
    $("#createAPost-Modal").modal();
})

//this is the function the pushes the post info the the correct db category
function createNewPost(){
    console.log("Create a new post btn clicked");

    var newPostRef = "";

    var post_username = $("#post-username").val().trim();
    //this is only because the dropdown on the modal isn't working
    var post_category = "video games";
    var post_title = $("#post-title").val().trim();
    var post_content = $("#post-content").val().trim();

    console.log(post_username + " : " + post_category + " : " + post_title + " : " + post_content);

    if(post_category === "video games"){
        newPostRef = videoGamesPostsRef + "/" + post_title;
        console.log("newPostRef: " + newPostRef);

        database.ref(newPostRef).set({
            postUsername: post_username,
            postCategory: post_category,
            post_content: post_content
        })
    }
}