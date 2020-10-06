
// // search id for search
// // title newtextarea for textarea2
// // mycard for card
// // small for add title
// // textarea for textarea 1
// // mybtn for add note button
// // notesarea for container fluid
show();
let h1=document.createElement('h1')
h1.setAttribute('id','born')
h1.setAttribute('class','myh1');
let container=document.getElementById('mycontainer')
let newcard=document.getElementById('mycard');
container.insertBefore(h1,newcard);
let myname=localStorage.getItem('name');
let my;
if (myname==null) {
    let my=prompt(`what's your name`)
    h1.innerHTML=`<b>Welcome to MYnotes.com <u>${my}</u>`
    localStorage.setItem('name',my);
} else {
    h1.innerHTML=`<b>Welcome to MYnotes.com <u>${myname}</u>`
}
let btn=document.getElementById("mybtn1")
let addtxt=document.getElementById("textarea1");
addtxt.addEventListener('focus',function(){
    addtxt.style.background='black';
    addtxt.style.color='white';
})
addtxt.addEventListener('blur',function(){
    addtxt.style.background='white';
    addtxt.style.color='black';
})
let addtxt2=document.getElementById('newtextarea');
addtxt2.addEventListener('focus',function(){
    addtxt2.style.background='black';
    addtxt2.style.color='white';
    addtxt2.style.fontSize="18px";
})
addtxt2.addEventListener('blur',function(){
    addtxt2.style.background='white';
    addtxt2.style.color='black';
    addtxt2.style.fontSize="18px";
})
btn.addEventListener('click',function(){
    let mynotes=localStorage.getItem('mynotes');
    let mytitle=localStorage.getItem('mytitle');
    if (mytitle==null) {
        titleobj=[];
    } else {
        titleobj=JSON.parse(mytitle)
    }
    titleobj.push(addtxt2.value);
    localStorage.setItem('mytitle',JSON.stringify(titleobj))
    if (mynotes==null) {
        notes=[];
    } else {
        notes=JSON.parse(mynotes);
    }
    notes.push(addtxt.value)
    localStorage.setItem('mynotes',JSON.stringify(notes))
    addtxt.value='';
    addtxt2.value='';
    show();
})
function show(){
    let mynotes=localStorage.getItem('mynotes');
    if (mynotes==null) {
        notes=[];
    } else {
        notes=JSON.parse(mynotes);
    }
    let html="";
    let date= new Date();
    notes.forEach(function(Element,index){
        html +=`
        <div class="noteCard mx-2 my-2 " style="width: 18rem; border:2px solid black; border-radius:10px;">
            <div class="card-body">
                <h5  class=" titletarget card-title"></h5>
                <p class="card-text">${Element}<p>
                <button id=${index} onclick="deletenote(this.id)" class="btn btn-primary id='del">Delete</a>
            </div>
            </div>`
    })
    let mytitle=localStorage.getItem('mytitle');
    if (mytitle==null) {
        titleobj=[];
    } else {
        titleobj=JSON.parse(mytitle)
    }
    let notestarget=document.getElementById('notesarea')
    if(notes!=0){
        notestarget.innerHTML=html;
    }
    else {
        notestarget.innerHTML=`<b> Nothing to show here please Add some notes`;
    }
    let h=document.getElementsByClassName('titletarget')
    titleobj.forEach(function(element,index) {
    h[index].innerHTML=`<u>${element}</u>`
});
}

function deletenote(index){
    let mynotes=localStorage.getItem('mynotes');
    if (mynotes==null) {
        notes=[];
    } else {
        notes=JSON.parse(mynotes);
    }
    let mytitle=localStorage.getItem('mytitle');
    if (mytitle==null) {
        titleobj=[];
    } else {
        titleobj=JSON.parse(mytitle)
    }
    titleobj.splice(index,1)
    notes.splice(index,1)
    localStorage.setItem('mynotes',JSON.stringify(notes));
    localStorage.setItem('mytitle',JSON.stringify(titleobj));
    show();
}
let searchtxt=document.getElementById('search');
searchtxt.addEventListener('input',function(e){
    let mynotes=localStorage.getItem('mynotes');
    if (mynotes==null) {
        notes=[];
    } else {
        notes=JSON.parse(mynotes);
    }
    let card=document.getElementsByClassName('noteCard');
    let search=searchtxt.value.toLowerCase();
   Array.from(card).forEach(function(element){
    let cardtxt=element.getElementsByTagName('p')[0].innerText;
    let cardtxt2=cardtxt.toLowerCase()
    if (cardtxt2.includes(search)) {
        element.style.display="block";
    } 
    else {
        element.style.display="none";
    }
   })
})
