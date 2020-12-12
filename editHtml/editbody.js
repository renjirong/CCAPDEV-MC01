const bio = document.querySelector('#bio');
const links = document.querySelector('#myLinks');
const email = document.querySelector('#myEmail');
const works = document.querySelector('#myWork');
const educ = document.querySelector('#myEduc');
const orgs = document.querySelector('#myOrgs');


//create element and render bio
function renderBio(doc){
    let img = document.createElement('img'); // prof pic
    let p = document.createElement('p');    // intro
    let h1 = document.createElement('h1');  // header
    let h3 = document.createElement('h3');  // name

    img.setAttribute('src',doc.data().img);
    h1.textContent = doc.data().header;
    h3.textContent = "My Name: "+doc.data().name;
    p.textContent = doc.data().bio;
    
    bio.appendChild(img);
    bio.appendChild(h1);
    bio.appendChild(h3);
    bio.appendChild(p);
}

//renders BIO in Intro 
db.collection('Intro').get().then((snapshot) => {
    console.log(snapshot.docs)
    snapshot.docs.forEach(doc =>{
   
        renderBio(doc);
    })
})

//Render Links
function renderLink(doc){
    a = document.createElement('a');
    h4  = document.createElement('h2');
    li = document.createElement('li');
    li.setAttribute("style", "list-style: none;")
    a.setAttribute("href",doc.data().link)
    a.textContent   =  doc.data().name;
    li.appendChild(a);
    links.appendChild(li);
}
db.collection('Links').get().then((snapshot) => {
    console.log(snapshot.docs)
    snapshot.docs.forEach(doc =>{
        renderLink(doc)
    })
})

//Render my emails
function renderEmail(doc){
    div = document.createElement('div');
    li = document.createElement('li');
    li.setAttribute("style", "list-style: none;")
    div.textContent   =  doc.data().email;
    li.appendChild(div);
    email.appendChild(li);
}
db.collection('Email').get().then((snapshot) => {
    console.log(snapshot.docs)
    snapshot.docs.forEach(doc =>{
        renderEmail(doc)
    })
})

//Render previous works Column
function renderMyWorks(doc){
    div = document.createElement('div');
    h4  = document.createElement('h2');
    img = document.createElement('img');
    p   = document.createElement('p');

    img.setAttribute('src',doc.data().img);
    h4.textContent = doc.data().name;
    p.textContent   = doc.data().desc;

    div.setAttribute('class', 'works');
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(p);
    works.appendChild(div);
}

db.collection('Works').get().then((snapshot) => {

    snapshot.docs.forEach(doc =>{
        renderMyWorks(doc)
    })
})

//Render Education Column
function renderEduc(doc){
    div = document.createElement('div');
    h4  = document.createElement('h2');
    img = document.createElement('img');
    level = document.createElement('div');

    li = document.createElement('li');
    li.setAttribute("style", "list-style: none;")

    img.setAttribute('src',doc.data().img);
    h4.textContent = doc.data().name;
    
    level.textContent = "Level of Education: " + doc.data().level;
    div.textContent   = "School Year: " + doc.data().yearStart + " - " + doc.data().yearEnd;
    li.setAttribute("class", "educList");
    li.appendChild(h4);
    li.appendChild(img);
    li.appendChild(level);
    li.appendChild(div);

    educ.appendChild(li);


}

db.collection('Educ').orderBy('yearStart').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        renderEduc(doc)
    })
})


//render Orgs

function renderOrgs(doc){
    

    div = document.createElement('div');
    h4  = document.createElement('h2');
    img = document.createElement('img');
    desc = document.createElement('div');
    li = document.createElement('li');
    li.setAttribute("style", "list-style: none;")

    img.setAttribute('src',doc.data().img);
    h4.textContent = doc.data().name;
    
    desc.textContent = "Org Position Description: " + doc.data().desc;
    div.textContent   = "Active Years: " + doc.data().yearJoin + " - " + doc.data().yearQuit;
    li.setAttribute("class","orgList");
    li.appendChild(h4);
    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(desc);

    orgs.appendChild(li);
}

db.collection('Orgs').orderBy('yearJoin').get().then((snapshot) => {
   
    snapshot.docs.forEach(doc =>{
        renderOrgs(doc)
    })
})


