document.addEventListener("DOMContentLoaded", () => {
    let addWatch = document.querySelectorAll(".add-watch");
    let time = document.querySelector(".time");
    // let searchBtn = document.querySelector(".search-btn");
    // let searchInput = document.querySelector("input");
    addWatch.forEach((add) => {
      add.addEventListener("click", (e) => {
        e.target.textContent = "✓ Added To Watch List";
        e.target.style.color = "blue";
      });
    });

    // searchBtn.addEventListener("click", () => {
    //     searchInput.style.width = "200px";
    //     searchInput.style.padding = "20px";
    // })

    let showTime = () => {
      let date = new Date();
      let getDay = date.getDay();
      let getHour = date.getHours();
      let getMinute = date.getMinutes();
      let getMonth = date.getMonth();

      const amPm = getHour >= 12 ? "PM" : "AM";

      getHour = getHour % 12 || 12;

      let addZero = getMinute < 10 ? "0" : "";

      time.innerHTML = `${getHour} : ${addZero + getMinute} ${amPm}`;

      // setInterval(showTime, 1000);
    };

    // showTime();
})


