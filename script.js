$(document).ready(function(){

    $(".heart").on("click", function like(){
        const heart =  $(this)

        if(heart.attr("class") == "heart bi bi-heart"){
            heart.removeClass("bi bi-heart")
            heart.addClass("bi bi-heart-fill")

        }
        else{
            heart.removeClass("bi bi-heart-fill")
            heart.addClass("bi bi-heart")
        }
    }
    )

    const sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal(".content_post", {delay:200});
    ScrollReveal().reveal(".post_hour_like", {delay:400 });
    ScrollReveal().reveal(".title", {delay:500});
    ScrollReveal().reveal(".text", {delay:600});
        
    
})

