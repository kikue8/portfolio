//main content
//use tutorial 6 as a guide for card animations
const courses = [
    {'name':'cs110', 'description':'learned the basics of python. built my own animation and recommendation app using apis.'},
    {'name':'cs130', 'description':'learned the basics of web design, html, css and javascript. built this website and established a github!'},
    {'name':'jour201-1', 'description':'written reporting. final project was a feature story on hook-up culture in the lgbtq+ community at northwestern'},
    {'name':'jour201-2', 'description':"multimedia reporting. final story included coding, audio, video and written reporting on the disparity between men's and women's sports in higher education."},
    {'name':'jour301', 'description':'in-depth written reporting on the pullman neighborhood of chicago. i focused specifically on education in pullman and features the hbcu college tour program at butler college prep.'},
    {'name':'jour390', 'description':"sports writing. wrote beat reports and game stories on high school and college sports. also reported on the chicago sky's opening week"},
    {'name':'imc301', 'description':"learned the tenets of integrated marketing communications. worked with kohl's to curate and interpret results from a focus group."},
    {'name':'imc302', 'description':'marketing statistics. worked with excel and spss to analyze and produce a consumer segment for cbs use.'},
    {'name':'polisci240', 'description':'international relations. final project was an essay on the effects of existing structural violence on the treatment of rwandan women during and after the 1994 genocide.'},
    {'name':'polisci390', 'description':'studied the intersection of race and politics. examined the relationship pf the media and the story behind asian american support for affirmative action.'},
]

//initial screen
const initScreen = () => {
    courses.forEach((course, idx) => {
        document.querySelector('main').innerHTML += `
        <section class="card" id="${course.name}" data-index="${idx}">
            <h2>${course.name}</h2>
            <h4>click to learn more</h4>
        </section>`;
    });
};

initScreen();

//class descriptions
const revealDescription = (ev) => {
    const elem = ev.currentTarget;
    const index = parseInt(elem.dataset.index)
    const course = courses[index]
    const id = `#${course.name}`
    document.querySelector(id).innerHTML = `<h3>${course.description}</h3><p>double click to exit</p>`
    document.querySelector(id).style.backgroundColor = 'black'
    document.querySelector(id).style.border = 'black solid 1px'
}

const hideDescription = (ev) => {
    const elem = ev.currentTarget
    const index = parseInt(elem.dataset.index)
    const course = courses[index]
    const id = `#${course.name}`
    document.querySelector(id).innerHTML = `
        <h2>${course.name}</h2>
        <h4>click to learn more</h4>`
    document.querySelector(id).style.backgroundColor = 'white'
    document.querySelector(id).style.border = '#A9A9A9 solid 2px'
}

const courseElements = document.querySelectorAll('.card');

for (const elem of courseElements) {
    elem.onclick = revealDescription;
    elem.ondblclick = hideDescription;
}

//sidebar
const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
    document.querySelector("header").style.backgroundColor = "#D4D4D4";
    const courseElements = document.querySelectorAll('.card');
        for (const elem of courseElements) {
            elem.style.backgroundColor = "#D4D4D4"
        }

}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("body").style.backgroundColor = "initial";
    document.querySelector("header").style.backgroundColor = "initial";
    const courseElements = document.querySelectorAll('.card');
        for (const elem of courseElements) {
            elem.style.backgroundColor = "white"
        }
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-times").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;
