"use strict";
$(document).ready(function(){
    const header = $("#game > header");
    const orangeBox = $("#displayChoices");
    const span = orangeBox.children("span");

    const goodJobElement = $("#done");

    goodJobElement.css({"display":"none"});

    const elementsWithClassTarget = $(".target");
    let lengthOfTargetElements = elementsWithClassTarget.length;
    console.log(lengthOfTargetElements);
    let count =0;
    elementsWithClassTarget.on({
        mouseenter: function () {
            $(this).css({backgroundColor:"lightgreen"});
        },
        mouseleave: function(){
            $(this).css({backgroundColor:"white"});
        },
        click: function () {
            count++;
            lengthOfTargetElements--;
            if(count <=1){
                header.slideUp(1000);
            }
            $(this).addClass("selected").text("\u2714").fadeOut("slow");
            if(lengthOfTargetElements === 0){
                goodJobElement.hide().slideDown(1000);
                $(this).removeClass("selected").text("A").show();
            }
            goodJobElement.on("click",function(){
                $(this).slideUp("slow");
                $(elementsWithClassTarget).removeClass("selected").text("A").show();
            });
        }
    });

    const yellowBox = $("#choices");
    yellowBox.on("click",function(){
        if(span.text()==="-"){
            span.text("+")
        }
        else
        {
            span.text("-")
        }
        $(this).slideToggle("slow");
    });
    orangeBox.on("click", function(){
        yellowBox.slideToggle("slow");
        if(span.text()==="-"){
            span.text("+")
        }
        else
        {
            span.text("-")
        }
    });


    header.on("click",function(){
        $(this).slideUp(1000);
    });
});
