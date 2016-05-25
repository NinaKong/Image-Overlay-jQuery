/*Nina Kong*/
$(document).ready(function(){
    $(".ImagePart").mouseover(function(){
        $(".Overlay").show();
    });
    $(".ImagePart").mouseout(function(){
        $(".Overlay").hide();
    });
});
