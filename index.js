const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header-with-border");
    header.classList.remove("header-without-border");
  } else {
    header.classList.remove("header-with-border");
    header.classList.add("header-without-border");
  }
});

const screenshots = [
  {
    id: 1,
    image: "images/screenshots/homePage.jpg",
  },
  {
    id: 2,
    image: "images/screenshots/pq_page.jpg",
  },
  {
    id: 3,
    image: "images/screenshots/select_course.jpg",
  },
  {
    id: 4,
    image: "images/screenshots/study_pastQuestion.jpg",
  },
  {
    id: 5,
    image: "images/screenshots/cbt_practice.jpg",
  },
  {
    id: 6,
    image: "images/screenshots/invites.jpg",
  },
  {
    id: 7,
    image: "images/screenshots/receipt.jpg",
  },
  {
    id: 8,
    image: "images/screenshots/cgpa.jpg",
  },
];

const screenshotsUI = document.getElementById('screenshots');

const displayScreenshots = () => {
  screenshots.forEach((screenshot) => {
    const div = document.createElement('div');
    div.classList.add('page');
    div.id = `screenshot-${screenshot.id}`;
    div.innerHTML = `<img src="${screenshot.image}" alt="App preview ${screenshot.id}" />`;

    screenshotsUI.appendChild(div);

    const screenshotID = document.getElementById(`screenshot-${screenshot.id}`);
    const fullScreenshot = document.getElementById('screenshot');
    const screenshotSection = document.getElementById('screenshot-section');
    const closeBtn = document.getElementById('close-btn');

    screenshotID.addEventListener('click', () => {
      // show the particular screenshot
      fullScreenshot.innerHTML = `<img src="${screenshot.image}" alt="full screenshot" />`;

      // remove the hide class
      screenshotSection.classList.remove('hide');
    });

    closeBtn.addEventListener('click', () => screenshotSection.classList.add('hide'));
  });
}

displayScreenshots();
