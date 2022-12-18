function about(params) {
    let ab = document.getElementById('aboutUs')
    console.log('weoojip');
    
ab.scrollIntoView(true)
    }

function scrolltoId(){
    window.scrollTo({
    top: access.scrollTop,
    left: access.scrollLeft});
    }
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });