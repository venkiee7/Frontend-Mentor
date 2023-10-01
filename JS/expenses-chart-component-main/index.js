// fetch("./data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let days = data;
//     console.log(days);
//   });
diagram = document.querySelectorAll(".diagram");

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    let days = data;

    const highestAmount = days.reduce(
      (max, day) => (day.amount > max ? day.amount : max),
      0
    );

    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    days.forEach((day) => {
      let assign = document.querySelector(`.${day.day}`);
      val = day.amount * 2.5;
      assign.style.height = val + "px";
      assign.style.width = "40px";
      // let temp = `${day.day}`;
      let temp = day.day;
      if (temp === dayOfWeek) {
        assign.style.backgroundColor = "hsl(186, 34%, 60%)";
      } else {
        assign.style.backgroundColor = "hsl(10, 79%, 65%)";
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
