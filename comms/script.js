//sidebar
const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("header").style.backgroundColor = "#D4D4D4";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
    document.querySelector("main").style.filter = "brightness(50%)";
}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("main").style.filter = "initial";
    document.querySelector("body").style.backgroundColor = "initial";
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-x").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;

//images
const images = [
    {'id':' images/laxbigtenchamps.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2021/3/29/womens-lacrosse-northwestern-sweeps-maryland-to-stay-undefeated.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjABegQIBxAB&usg=AOvVaw2RasAHboqd2m3S4Hsgv4CM'},
    {'id': 'images/wbbjhamilton.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2020/11/25/womens-basketball-q-and-a-jordan-hamilton.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAJegQIAxAB&usg=AOvVaw0iPg79eQOeOzubATvhzYUv'},
    {'id': 'images/wbblosslouisville.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2021/3/24/womens-basketball-northwestern-ends-ncaa-run.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAEegQIARAB&usg=AOvVaw1GoDv39NENwvLoClYoxAaA'},
    {'id': 'images/wbblpulliam.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2020/11/20/womens-basketball-lindsey-pulliam-locks-in-ahead-of-senior-season.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAHegQICRAB&usg=AOvVaw3m_0j6522MViI2S5TDdtu5'},
    {'id': 'images/wbbohiostate.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2021/2/1/womens-basketball-pulliam-and-burton-post-double-doubles-to-take-down-no-11-ohio-state.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAIegQIBhAB&usg=AOvVaw1Ct_JnVc6Jl-xQ1cK3PfMc'},
    {'id': 'images/wbbucf.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2021/3/22/womens-basketball-northwestern-stays-at-the-big-dance.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAFegQIABAB&usg=AOvVaw2rDwUgy5dfK0NcK9BesQH5'},
    {'id': 'images/wbbvburton.jpeg', 'url':'https://www.google.com/url?client=internal-element-cse&cx=016306950182310286156:rzggxeatszs&q=https://nusports.com/news/2020/11/24/womens-basketball-veronica-burton-hungry-for-more-ahead-of-junior-campaign.aspx&sa=U&ved=2ahUKEwjDiNPJn8rwAhVSVs0KHWsjBQoQFjAGegQIBBAB&usg=AOvVaw2LKOOF5jwe57-0TgoQODpA'},
    {'id': 'images/zimmer.jpeg', 'url':'https://nusports.com/news/2021/10/31/field-hockey-wildcats-close-out-regular-season-with-6-0-win.aspx'},
    {'id': 'images/team.jpeg', 'url':'https://nusports.com/news/2021/11/3/field-hockey-cats-prepare-for-competitive-big-ten-tournament.aspx'},
    {'id': 'images/celebration.jpeg', 'url':'https://nusports.com/news/2021/11/19/field-hockey-cats-advance-to-national-championship.aspx'},
    {'id': 'images/baekers.jpeg', 'url':'https://nusports.com/news/2021/11/20/field-hockey-cats-set-to-face-liberty-in-ncaa-championship.aspx'},
];

currentIndex = 0

//inital screen
const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image.id}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

//thumbnail click events
const thumbnailImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage
}

const imageElements = document.querySelectorAll('.image');

for (const elem of imageElements) {
    elem.onclick = thumbnailImage;
}

//next and previous click events
const nextImage = (ev) => {
    currentIndex += 1;
    if (currentIndex > 11){
        currentIndex = 0
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}


const previousImage = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0){
        currentIndex = 11
    };
    const image = (imageElements[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
}

//image links
const showArticle = (ev) =>{
    const image = (images[currentIndex])
    window.open(image.url, '_blank') 
}

//click events
document.querySelector('.next').onclick = nextImage;
document.querySelector('.prev').onclick = previousImage;
document.querySelector('.featured_image').onclick = showArticle;

