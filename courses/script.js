//main content
//use tutorial 6 as a guide for card animations
const courses = [
    {'name':'cs110', 'img':'photos/cs110.jpg', 'description':'intro to python. worked with loops, lists, functions and apis to build my own <a href="https://drive.google.com/file/d/1wbjVcGM-yV1A3PgbzF3aYeLP55dRQQgt/view?usp=sharing" target = "_blank" >animation</a> and <a href="https://drive.google.com/file/d/1vHgNuXY3RnnL5Qx0elo3JoK5lSGp-9DQ/view?usp=sharing" target = "_blank" >recommendation app</a> through the terminal and idle.'},
    {'name':'cs130', 'img':'photos/cs130.jpg','description':'intro to the web. established a working knowledge of web design, html, css and javascript in order to build this <a href="../homepage.html">website</a> through <a href="https://github.com/kikue8" target="_blank">github</a>.'},
    {'name':'jour201-1', 'img':'photos/jour201-1.jpg', 'description':'written reporting. learned the fundamentals of journalism through guest speakers and exercises. out of the classroom, covered <a href="jour201/event/period-day.html" target = "_blank">newsworthy events</a> and wrote <a href="jour201/enterprise/hookups.html" target = "_blank">feature stories</a>.'},
    {'name':'jour201-2', 'img':'photos/jour201-2.jpeg','description':"multimedia reporting. used coding, audio, video and written reporting to uncover the disparity between men's and <a href='https://codepen.io/kikueee/full/wvarMrG' target = '_blank'>women's sports</a> in higher education."},
    {'name':'jour301', 'img':'photos/jour301.jpeg','description':'journalism in practice. three months of in-depth written reporting on <a href = "jour301/hbcu.html" target = "_blank">education in the pullman neighborhood of chicago</a>.'},
    {'name':'jour390', 'img':'photos/jour390.jpg','description':'exploring asian american stories. traveled to san francisco to report on family-owned businesses in <a href = "jour390/japantown.html" target = "_blank">japantown</a>.'},
    {'name':'jour391', 'img':'photos/jour391.jpg','description':'intro to sports writing. produced game stories for <a href = "jour391/soccer/soccer.html" target = "_blank"> high school teams</a> and covered the <a href = "jour391/sky/chicago-sky.html" target = "_blank">2021 chicago sky season opener</a>.'},
    {'name':'imc301', 'img':'photos/imc301.jpeg','description':"intro to integrated marketing communicationcs. learned the tenets of imc through case studies. worked with kohl's to curate and interpret results from a <a href='imc301/kohls.html' target='_blank'>focus group</a>."},
    {'name':'imc302', 'img':'photos/imc302.jpg','description':'marketing statistics. worked with excel, powerpoint and spss to analyze and produce a coherent <a href="https://docs.google.com/presentation/d/1i8jlhw-l0VALtnSk7fK9jk6i7ny_7ZpHq39Ks5wJJp4/edit?usp=sharing" target = "_blank">consumer segment</a> for cbd use.'},
    {'name':'imc390', 'img':'photos/imc390.jpg','description':'network theory. used netlytic and wordij to scrape and analyze data from twitter to generate a <a href="https://docs.google.com/presentation/d/1irtSGNGYMDGJaKcIicWwtE7pc23JMlD3Cofg6QcmILY/edit?usp=sharing" target = "_blank">network visualization</a> through gephi for telfar after the release of a new bag.'},
    {'name':'polisci240', 'img':'photos/ps240.jpg','description':'international relations. <a href="polisci240/rwanda.html" target = "_blank">final project</a> was an essay on the effects of existing structural violence on the treatment of rwandan women during and after the 1994 genocide.'},
    {'name':'polisci390','img':'photos/ps390.jpg', 'description':'racial and ethnic politics. studied the intersection of race and politics. examined the relationship between the media and  <a href="polisci390/aapi.html" target = "_blank">asian american support for affirmative action</a>.'},
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
    document.querySelector(id).style.justifyContent = 'flex-start';

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
    document.querySelector(id).style.justifyContent = 'center';
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
document.querySelector(".fa-x").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;
