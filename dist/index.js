window.addEventListener("load", function () {
    console.log("Page loaded");
    var headerDate = document.querySelector(".header-date-text");
    var time = document.querySelector(".time");
    var addWatch = document.querySelectorAll(".add-watch-text");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    addWatch.forEach(function (add) {
        add.addEventListener("mouseover", function (event) {
            var target = event.target;
            target.textContent = "✓ Added To Watch List";
            target.style.color = "blue";
        });
    });
    var showTime = function () {
        var date = new Date();
        var getHour = date.getHours();
        var getMinute = date.getMinutes();
        var amPm = getHour >= 12 ? "PM" : "AM";
        getHour = getHour % 12 || 12;
        var addZero = getMinute <= 9 ? "0" : "";
        var addZeroHours = getHour <= 9 ? "0" : "";
        time.innerHTML = addZeroHours + getHour + " : " + (addZero + getMinute) + " " + amPm;
        setInterval(showTime, 1000);
    };
    var showHeaderDate = function () {
        var date = new Date();
        var getHeaderMonth = months[date.getMonth()];
        var getHeaderDate = date.getDate();
        var getHeaderDay = days[date.getDay()];
        headerDate.innerHTML = getHeaderMonth + " " + getHeaderDate + " <br /> " + getHeaderDay;
    };
    showHeaderDate();
    showTime();
});
