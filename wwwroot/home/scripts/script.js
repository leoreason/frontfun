
/********************************BEGIN SEARCH AND CLOCK*******************************/
$(document).ready(function () {
    $("#searchBox").focus(function () {
        $("#searchBox").animate({
            backgroundColor: "#FFFFFF",
            width: 360
        }, 300);
        $("#clock").animate({
            color: "#002b2b"
        }, 200);
    });
    $("#searchBox").blur(function () {
        $("#searchBox").animate({
            backgroundColor: "#CCBBCC",
            width: 200
        }, 300);
        $("#clock").animate({
            color: "#FFFFFF"
        }, 700);
    });
});
/********************************END SEARCH AND CLOCK*******************************/



/********************************BEGIN SCROLL AND NAV*******************************/
$(document).ready(function () {
    $(".scrollmenu").click(function (event) {
        event.preventDefault();
        $("#right").animate({ scrollTop: $(this.hash)[0].offsetTop }, 400);
    });

    $('#navigation li a').click(function () {
        $('#navigation li a').removeClass("active");
        $(this).addClass("active");
    });

    $('#logo h1 a').click(function () {
        $('#navigation li a').removeClass("active");
        $('#navigation li:first a').addClass("active");
    });
});
/********************************END SCROLL AND NAV*******************************/



/********************************BEGIN CLOCK*******************************/
function startClockTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkClockTime(m);
    s = checkClockTime(s);
    document.getElementById('clock').innerHTML = h + " : " + m + " : " + s;
    t = setTimeout('startClockTime()', 500);
}
function checkClockTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
$(document).ready(function () {
    startClockTime();
});
/********************************END CLOCK*******************************/



/********************************BEGIN CONTACT****************************/
function checkMessage(name, email, message) {
    if ($("#message-name").val() == null || $("#message-email").val() == null || $("#message-text").val() == null
        || $("#message-name").val() == "" || $("#message-email").val() == "" || $("#message-text").val() == "") {
        alert("Name, Email and Message could not be empty!");
        return false;
    }
    else if ($("#message-name").val().length > 20) {
        alert("The characters of Name should be less than 20!");
        return false;
    }
    else if ($("#message-email").val().length > 50) {
        alert("The characters of Email should be less than 50!");
        return false;
    }
    else if ($("#message-email").val().search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1) {
        alert("Email format is error!");
        return false;
    }
    else if ($("#message-text").val().length > 500) {
        alert("The characters of Email should be less than 500!");
        return false;
    }
    return true;
}

function enableMessageInput(enabled) {
    $("#message-submit").attr("disabled", !enabled);
    $("#message-name").attr("disabled", !enabled);
    $("#message-email").attr("disabled", !enabled);
    $("#message-text").attr("disabled", !enabled);
}

$(document).ready(function () {
    $("#message-submit").click(function () {
        var name = $("#message-name").val();
        var email = $("#message-email").val();
        var message = $("#message-text").val();
        if (checkMessage(name, email, message)) { // check input format
            enableMessageInput(false); // disable input
            $.post("message.php",
            {
                name: name,
                email: email,
                message: message
            },
            function (data, status) {
                if (data == null || data == "") {
                    // request failure
                    alert("Request error. Please check and try later!");
                    enableMessageInput(true); // enable input
                }
                else {
                    // request success
                    alert("Request successfully. Thanks a lot!");
                    setTimeout("enableMessageInput(true);", 60000); // enable input
                }
            });
        }
    });
});


/********************************END CONTACT****************************/


