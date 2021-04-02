window.addEventListener("load", () => {
    console.log("Page loaded");
    
    let headerDate = document.querySelector(".header-date-text") as HTMLParagraphElement;
    let time = document.querySelector(".time") as HTMLHeadingElement;
    let addWatch = document.querySelectorAll<HTMLParagraphElement>(".add-watch-text");
    let months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov","Dec"];
    let days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



    addWatch.forEach((add) => {
        add.addEventListener("mouseover", (event) => {
            const target = event.target as HTMLParagraphElement;
            target.textContent = "✓ Added To Watch List";
            target.style.color = "blue";
        });
    });


    let showTime = (): void => {
        let date: Date = new Date();
        let getHour: number = date.getHours();
        let getMinute: number = date.getMinutes();
  
        const amPm = getHour >= 12 ? "PM" : "AM";
  
        getHour = getHour % 12 || 12;
  
        let addZero: string = getMinute <= 9 ? "0" : "";
  
        let addZeroHours: string = getHour <= 9 ? "0" : "";
  
        time.innerHTML = `${addZeroHours + getHour} : ${addZero + getMinute} ${amPm}`;
  
        setInterval(showTime, 1000);
    };

    let showHeaderDate = (): void => {
        let date: Date = new Date();
        let getHeaderMonth: string = months[date.getMonth()];
        let getHeaderDate: number = date.getDate();
        let getHeaderDay: string = days[date.getDay()];

        headerDate.innerHTML = `${getHeaderMonth} ${getHeaderDate} <br /> ${getHeaderDay}`

        
    }

    showHeaderDate();
    showTime();

})