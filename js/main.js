var viewportWidth = jQuery(window).width();
if (viewportWidth <= 768) {
    $(".vendors").slick({
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        focusOnSelect: true,
        swipeToSlide: true
    });
}
  jQuery(window).resize(function() {
    viewportWidth = jQuery(window).width();
      console.log(viewportWidth);
    if (viewportWidth > 768) {
        $('.vendors').slick("unslick");
    }
    else {
        $(".vendors").slick({
            centerMode: true,
            arrows: false,
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            focusOnSelect: true,
            swipeToSlide: true
        })
    }
});

    $("#nav-open").click(function() {
        // CG: jQuery won't animate the class change when it's relative so I changed to animate action
        //$(".gb-nav").addClass("active");        
        let xPos = (window.innerWidth - 360) + 'px';
        $(".gb-nav").animate({left: xPos});
        $("#nav-open").css("display","none");
        $("#nav-close").css("display","inline")
      });
      $("#nav-close").click(function(){          
        // $(".gb-nav").removeClass("active");
        // CG: as above
        let xPos = (window.innerWidth - 40) + 'px';
        $(".gb-nav").animate({left: xPos});
        $("#nav-open").css("display","inline");
        $("#nav-close").css("display","none");
      });
//Coupon Information
function delInfo(){
    document.getElementById("referal-info").style.display = "none";
}

//Postal Code Look Up
const PostalArea = ["V5K","V5L","V5M","V5N","V5P","V5R","V5S","V5T","V5V","V5W","V5X","V5Y","V5Z","V6A","V6B","V6C","V6E","V6G","V6H","V6J","V6K","V6L","V6M","V6N","V6P","V6R","V6S","V6T","V6Z","V7G","V7H","V7J","V7K","V7L","V7M","V7N","V7P","V7R","V7S","V7T","V7V","V7W","V7X","V7Y","V6V","V6W","V6X","V6Y","V7A","V7B","V7C","V7E","V4C","V4G","V4L","V4E","V4K","V4M","V3N","V5A","V5B","V5C","V5E","V5G","V5H","V5J","V3B","V3C","V3E","V3J","V3K","V3R","V3S","V3T","V3V","V3W","V3X","V4A","V4N","V4P"]
function serviceCheck(){
    var pcodeAuth = 0;
    var pcode = document.getElementById("postalCode").value;
    for(i=0;i<pcode.length;i++){
        if(i%2 == 1){
            console.log(pcode.charAt(i) + " should be a number");
            if(!isNaN(pcode.charAt(i))){
                pcodeAuth += 1;
            }

        }
        else{
            if(pcode.charAt(i).match(/[a-z]/i) ){
                pcodeAuth += 1;
            }
        }
    }
    if(pcodeAuth == 6){
        let acceptedPostal = false;
        document.getElementById("pcodeError").style.display = "none";
        for(i=0;i<PostalArea.length;i++){
            if(pcode.slice(0,3).toUpperCase() == PostalArea[i]){
                acceptedPostal = true;
            }
            else{
                console.log("no service");
            }
        }
        if(acceptedPostal){
            window.location='#service';
            document.getElementById("serviceArea").innerHTML = "We Serve your Area";
        }
        else{
            document.getElementById("pcodeError").innerHTML = "We apologize, Happy Times Delivery isn't in your area yet."
            document.getElementById("serviceArea").innerHTML = "Areas we Service";
            document.getElementById("pcodeError").style.display = "block";
        }
    }
    else{
        document.getElementById("pcodeError").innerHTML = "Please enter your postal code in the correct format!"
        document.getElementById("pcodeError").style.display = "block";
    }
    
}

