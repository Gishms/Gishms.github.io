let ptarray = [
  {
    src: `./图片/长江大学1.jpg`,
  },
  {
    src: `./图片/天门山5.jpeg`,
  },
  {
    src: `./图片/骑行1.jpeg`,
  }
];

let i = 0;
setInterval(function () {
  i++;
  if (i >= ptarray.length) {
    i = 0;
  }
  const img = document.querySelector(".sliderhu img");
  img.classList.add("imgtr")
  img.src = ptarray[i].src;
}, 1000);

let picture1 = [
  {
    src: `./图片/天门山1.png`,
  },
  {
    src: `./图片/天门山2.jpg`,
  },
  {
    src: `./图片/天门山4.jpeg`,
  },
  {
    src: `./图片/长江大学1.jpg`,
  },
  {
    src: `./图片/天门山5.jpeg`,
  },
  {
    src: `./图片/天门山镇1.jpeg`,
  },
  {
    src: `./图片/七星山1.jpeg`,
  }

]

let picture2 = [
  {
    src: `./合照/2023a.jpg`,
  },
  {
    src: `./合照/2023b.jpg`,
  },
  {
    src: `./图片/2022d.jpg`,
  },
  {
    src: `./图片/2023f.jpg`,
  },
  {
    src: `./图片/2022a.jpg`,
  },
  {
    src: `./图片/2022c.jpg`,
  },
  {
    src: `./合照/2022e.jpg`,
  },
  {
    src: `./合照/2023a.jpg`,
  },
  {
    src: `./合照/2023b.jpg`,
  },
  {
    src: `./图片/2022d.jpg`,
  },
  {
    src: `./图片/2023f.jpg`,
  }
]

let picture3 = [
  {
    src: `./图片/2022c.jpg`,
  },
  {
    src: `./合照/2022e.jpg`,
  },
  {
    src: `./合照/2023a.jpg`,
  },
  {
    src: `./合照/2023b.jpg`,
  },
  {
    src: `./图片/2022d.jpg`,
  }
]

for (let i = 0; i < picture1.length; i++) {
  document.write(`
<div class="picture1 ptdisplay">
<img src=${picture1[i].src}>
</div>`)
}

for (let i = 0; i < picture2.length; i++) {
  document.write(`
<div class="picture2">
<img src=${picture2[i].src}>
</div>`)
}

for (let i = 0; i < picture3.length; i++) {
  document.write(`
<div class="picture3">
<img src=${picture3[i].src}>
</div>`)
}

let pts = document.querySelectorAll(".pts");
for (let i = 0; i < pts.length; i++) {
  pts[i].addEventListener("mouseenter", function () {
    document.querySelector(".active").classList.remove(`active`);
    this.classList.add("active");
    t = i + 1;
    pts[i].addEventListener("mouseenter", function () {
      let pt1 = document.querySelectorAll(".picture" + t);
      let ptds = document.querySelectorAll(".ptdisplay");
      for (let i = 0; i < ptds.length; i++) {
        ptds[i].classList.remove("ptdisplay");
      }
      for (let i = 0; i < pt1.length; i++) {
        pt1[i].classList.add("ptdisplay");
      }
    })
  })
}

// pts[1].addEventListener("mouseenter", function () {
//   let pt1 = document.querySelectorAll(".picture1");
//   let ptds = document.querySelectorAll(".ptdisplay");
//   for (let i = 0; i < ptds.length; i++) {
//     ptds[i].classList.remove("ptdisplay");
//   }
//   for (let i = 0; i < pt1.length; i++) {
//     pt1[i].classList.add("ptdisplay");
//   }
// })

// pts[1].addEventListener("mouseenter", function () {
//   let pt1 = document.querySelectorAll(".picture2");
//   let ptds = document.querySelectorAll(".ptdisplay");
//   for (let i = 0; i < ptds.length; i++) {
//     ptds[i].classList.remove("ptdisplay");
//   }
//   for (let i = 0; i < pt1.length; i++) {
//     pt1[i].classList.add("ptdisplay");
//     console.log(pt1[i])
//   }
// })

// pts[2].addEventListener("mouseenter", function () {
//   let pt1 = document.querySelectorAll(".picture3");
//   let ptds = document.querySelectorAll(".ptdisplay");
//   for (let i = 0; i < ptds.length; i++) {
//     ptds[i].classList.remove("ptdisplay");
//   }
//   for (let i = 0; i < pt1.length; i++) {
//     pt1[i].classList.add("ptdisplay");
//     console.log(pt1[i])
//   }
// })




