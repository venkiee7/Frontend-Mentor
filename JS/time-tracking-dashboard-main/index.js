dailybtn = document.querySelector(".daily");
weeklybtn = document.querySelector(".weekly");
monthlybtn = document.querySelector(".monthly");
cards = document.querySelectorAll(".card");
pages = document.querySelectorAll(".page");

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
    loadData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// function loadData(data) {
//   dailybtn.addEventListener("click", () => {
//     dailyLoadData(data);
//   });

//   weeklybtn.addEventListener("click", () => {
//     weeklyLoadData(data);
//   });

//   monthlybtn.addEventListener("click", () => {
//     monthlyLoadData(data);
//   });
// }

function resetStyles() {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
}

function loadData(data) {
  pages.forEach((page) => {
    page.addEventListener("click", (e) => {
      //   console.log(e.target.innerText);
      //   page.style.color = "";
      resetStyles();
      page.classList.add("active");
      let val = e.target.innerText.toLowerCase();
      console.log(val);
      universalLoad(data, val);
    });
    // console.log(page.innerText);
  });
}

function universalLoad(data, page) {
  cards.forEach((card, index) => {
    const option = data[index];
    if (option) {
      const currenthrs = option.timeframes[page].current;
      const previoushrs = option.timeframes[page].previous;

      frontcard = card.querySelector(".frontcard");
      if (frontcard) {
        frontcard.innerHTML = `<div class="header">
                    <h4>${option.title}</h4>
                    <img class="more" src="images/icon-ellipsis.svg" alt="">
                    </div>
                    <h1 class="current">${formattedTime(currenthrs)}</h1>
                    <p class="previous">Last week - ${formattedTime(
                      previoushrs
                    )}</p>`;
      }
    }
  });
}

// function dailyLoadData(data) {
//   cards.forEach((card, index) => {
//     const option = data[index];
//     if (option) {
//       const currenthrs = option.timeframes.daily.current;
//       const previoushrs = option.timeframes.daily.previous;

//       frontcard = card.querySelector(".frontcard");
//       if (frontcard) {
//         frontcard.innerHTML = `<div class="header">
//                 <h4>${option.title}</h4>
//                 <img class="more" src="images/icon-ellipsis.svg" alt="">
//                 </div>
//                 <h1 class="current">${formattedTime(currenthrs)}</h1>
//                 <p class="previous">Last week - ${formattedTime(
//                   previoushrs
//                 )}</p>`;
//       }
//     }
//   });
// }

// function weeklyLoadData(data) {
//   cards.forEach((card, index) => {
//     const option = data[index];
//     if (option) {
//       const currenthrs = option.timeframes.weekly.current;
//       const previoushrs = option.timeframes.weekly.previous;

//       frontcard = card.querySelector(".frontcard");
//       if (frontcard) {
//         frontcard.innerHTML = `<div class="header">
//                     <h4>${option.title}</h4>
//                     <img class="more" src="images/icon-ellipsis.svg" alt="">
//                     </div>
//                     <h1 class="current">${formattedTime(currenthrs)}</h1>
//                     <p class="previous">Last week - ${formattedTime(
//                       previoushrs
//                     )}</p>`;
//       }
//     }
//   });
// }

// function monthlyLoadData(data) {
//   cards.forEach((card, index) => {
//     const option = data[index];
//     if (option) {
//       const currenthrs = option.timeframes.monthly.current;
//       const previoushrs = option.timeframes.monthly.previous;

//       frontcard = card.querySelector(".frontcard");
//       if (frontcard) {
//         frontcard.innerHTML = `<div class="header">
//                         <h4>${option.title}</h4>
//                         <img class="more" src="images/icon-ellipsis.svg" alt="">
//                         </div>
//                         <h1 class="current">${formattedTime(currenthrs)}</h1>
//                         <p class="previous">Last week - ${formattedTime(
//                           previoushrs
//                         )}</p>`;
//       }
//     }
//   });
// }

function formattedTime(hours) {
  if (hours == 1) {
    formattedHours = hours + "hr";
  } else {
    formattedHours = hours + "hrs";
  }
  return formattedHours;
}

fetchData();
