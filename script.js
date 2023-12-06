const profiles = [
    {
        imgSrc: "img1.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img2.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img3.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img4.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img5.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img6.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img7.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img8.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img9.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img10.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img11.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img12.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img13.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img14.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img15.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img16.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img17.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img18.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img19.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    {
        imgSrc: "img20.jpg",
        title: "على طريق القدس",
        place: "الشهيد المجاهد خضر سليم",
        description: " السلام عليك يا زهراء"
    },
    // Add more profiles as needed
];

const profileContainer = document.getElementById("profile-container");

profiles.forEach(profile => {
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("container");

    const wrapperDiv = document.createElement("div");
    wrapperDiv.classList.add("wrapper");

    const imgLink = document.createElement("a");
    imgLink.href = "#";

    const img = document.createElement("img");
    img.src = profile.imgSrc;
    img.alt = "";

    imgLink.appendChild(img);
    wrapperDiv.appendChild(imgLink);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.textContent = profile.title;

    const placeDiv = document.createElement("div");
    placeDiv.classList.add("place");
    placeDiv.textContent = profile.place;

    wrapperDiv.appendChild(titleDiv);
    wrapperDiv.appendChild(placeDiv);

    profileDiv.appendChild(wrapperDiv);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = `<br>${profile.description}`;

    contentDiv.appendChild(descriptionP);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Add heart icon
    const heartBtn = document.createElement("button");
    heartBtn.innerHTML = '<i class="far fa-heart"></i>';
    heartBtn.classList.add("btn"); // Add a class for styling

    // Add share icon
    const shareBtn = document.createElement("button");
    shareBtn.innerHTML = '<i class="fas fa-share"></i>';
    shareBtn.classList.add("btn"); // Add a class for styling

    buttonsDiv.appendChild(heartBtn);
    buttonsDiv.appendChild(shareBtn);

    buttonsDiv.appendChild(heartBtn);
    buttonsDiv.appendChild(shareBtn);

    contentDiv.appendChild(buttonsDiv);
    profileDiv.appendChild(contentDiv);

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("icons");
    const socialMediaLinks = [
        { class: "fab fa-facebook-f", href: "#" },
        { class: "fab fa-twitter", href: "#" },
        { class: "fab fa-instagram", href: "#" }
    ];

    socialMediaLinks.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        const span = document.createElement("span");
        span.classList.add(...link.class.split(" "));
        a.appendChild(span);
        li.appendChild(a);
        iconsDiv.appendChild(li);
    });

    profileDiv.appendChild(iconsDiv);

    profileContainer.appendChild(profileDiv);
});

const imgs = document.querySelectorAll("#profile-container img");
const icons = document.querySelectorAll(".icons");

imgs.forEach((img, index) => {
    img.onclick = function () {
        img.classList.toggle("active");
        icons[index].classList.toggle("active");
    };
});
;

imgs.forEach((img, index) => {
    let touchStartX, touchEndX;

    img.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
    });

    img.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].clientX;

        // Adjust the threshold based on your preference
        const swipeThreshold = 50;

        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left, you can add specific action here
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right, you can add specific action here
        } else {
            // Tap or touch, toggle the active class
            img.classList.toggle("active");
            icons[index].classList.toggle("active");
        }
    });
});


