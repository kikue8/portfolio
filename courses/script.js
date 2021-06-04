//main content
//use tutorial 6 as a guide for card animations
const courses = [
    {'name':'cs110', 'img':'photos/cs110.jpg', 'description':'intro to python. built my own animation and recommendation app using apis.'},
    {'name':'cs130', 'img':'photos/cs130.jpg','description':'intro to the web. established a working knowledge of web design, html, css and javascript. built this website through github'},
    {'name':'jour201-1', 'img':'photos/jour201-1.jpg', 'description':'written reporting. wrote an enterprise story on hook-up culture in the lgbtq+ community at northwestern'},
    {'name':'jour201-2', 'img':'photos/jour201-2.jpeg','description':"multimedia reporting. used coding, audio, video and written reporting to uncover the disparity between men's and women's sports in higher education."},
    {'name':'jour301', 'img':'photos/jour301.jpeg','description':'social change and urban dynamics. three months of in-depth written reporting on the pullman neighborhood of chicago. i focused specifically on education in pullman and featured the hbcu college tour program at butler college prep.'},
    {'name':'jour390', 'img':'photos/jour390.jpg','description':"intro to sports writing. wrote multiple beat reports and game stories on high school and college sports. also reported on the chicago sky's opening week against the atlanta dream."},
    {'name':'imc301', 'img':'photos/imc301.jpeg','description':"intro to integrated marketing communicationcs. learned the tenets of imc through case studies. worked with kohl's to curate and interpret results from a focus group."},
    {'name':'imc302', 'img':'photos/imc302.jpg','description':'marketing statistics. worked with excel and spss to analyze and produce a consumer segment for cbd use.'},
    {'name':'polisci240', 'img':'photos/ps240.jpg','description':'international relations. final project was an essay on the effects of existing structural violence on the treatment of rwandan women during and after the 1994 genocide.'},
    {'name':'polisci390','img':'photos/ps390.jpg', 'description':'racial and ethnic politics. studied the intersection of race and politics. examined the relationship between the media and asian american support for affirmative action.'},
]

//initial screen
const initScreen = () => {
    courses.forEach((course, idx) => {
        document.querySelector('main').innerHTML += `
        <div class="card" id="${course.name}" data-index="${idx}" style="background-image: url('${course.img}')">
            <h2>${course.name}</h2>
            <h4>click to learn more</h4>
        </div>`;
    });
};

initScreen();

//class descriptions
const revealDescription = (ev) => {
    const elem = ev.currentTarget;
    const index = parseInt(elem.dataset.index);
    const course = courses[index];
    const id = `#${course.name}`;
    document.querySelector(id).innerHTML = `<h3>${course.description}</h3><p>double click to exit</p>`
    document.querySelector(id).style.backgroundColor = 'black'
    document.querySelector(id).style.backgroundImage = 'none'
    document.querySelector(id).style.boxShadow = '0px 0px'
}

const hideDescription = (ev) => {
    const elem = ev.currentTarget
    const index = parseInt(elem.dataset.index)
    const course = courses[index]
    const id = `#${course.name}`
    document.querySelector(id).innerHTML = `
        <h2>${course.name}</h2>
        <h4>click to learn more</h4>`
    document.querySelector(id).style.backgroundImage = `url('${course.img}')`
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
