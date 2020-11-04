console.log("Welcome");
showNotes();

// if user add a note, add it to the local storage
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addTxt");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notes);
    showNotes();
});
// function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
                <div class="notCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delet Note</button>
                    </div>
                </div>
                `
    });
    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        noitesElm.innerHTML = `Nothing int show! use "Add a Note" section aborve to add notes`
    }
}
// function to deleat a note
function deleteNote(index) {
    // console.log('I am Deleting..', index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('input event', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardtxt);


    });
});


