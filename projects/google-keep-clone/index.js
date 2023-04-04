const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteBtn = document.getElementById('addBtn');
const newNoteDiv = document.getElementById('newNote');
let yourNote = document.getElementById('yourNotes');

// from deletedNotes.html
// const delNotesDiv = document.getElementById('delNotes');
let deleteArray = [];

// from archiveNotes
// const archNotesDiv = document.getElementById('archNotes');
let archiveArray = [];


showNotes();
// Local storage vs session storage
// JSON : javascript object notation (with the help of local storage)


function addNoteFunc() {
    let notes = localStorage.getItem('notes');  // getting 'notes' data from our browser localstorage
    if(notes === null){
        notes = [];
    }else{
        notes = JSON.parse(notes);  // string 'notes' into object i.e array
    }

    if (addText.value == '') {
        alert('Add your note, its empty!!');
        return;
    }
    // console.log(note);

    // if addText.value is not empty then we are ready to add this data to our localStorage as well as to display it to user
    const noteObj = {
        title: addTitle.value,  // to get the value of the input
        text: addText.value,
    }
    addTitle.value = '';   
    addText.value = '';
    notes.push(noteObj);  // object got pushed to object type 'notes'
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function showNotes() {
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if(notes == null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    for (let i = 0; i < notes.length; ++i) {
        if(notes[i] === null) continue;
        notesHTML += 
        `
            <div class="note">
                <button class = "deleteNote" id = ${i} onclick="deleteNote(${i})">Delete</button>
                <button class = "deleteNote" id = ${i} onclick="archiveNote(${i})">Archive</button>
                <button class = "deleteNote" id = ${i} onclick="editNote(${i})">Edit</button>
                <div class="title">${notes[i].title === "" ? "Note" : notes[i].title}</div>
                <div class="text">${notes[i].text}</div>
            </div>
        `
    }
    
    // deleted notes | deletedNotes.html
    /* deletedNotesHTML = '';
    for (let i = 0; i < deleteArray.length; ++i) {
        deletedNotesHTML += 
        `
            <div class="note">
                <div class="title">${deleteArray[i].title}</div>
                <div class="text">${deleteArray[i].text}</div>
            </div>
        `
    } */
    // delNotesDiv.innerHTML = deletedNotesHTML;
    
    // archive notes 
    /* archiveNotesHTML = '';
    for (let i = 0; i < archiveArray.length; ++i) {
        archiveNotesHTML += 
        `
            <div class="note">
                <div class="title">${archiveArray[i].title}</div>
                <div class="text">${archiveArray[i].text}</div>
            </div>
        `
    } */
    // archNotesDiv.innerHTML = archiveNotesHTML;
    
    
    
    newNoteDiv.innerHTML = notesHTML;
    
    /* Note checks */
    if(notes.length == 0){
        yourNote.innerText = "No notes found, create one!!✍";
    }else{
        yourNote.innerText = "Your Notes 📚";
    }
}



function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    
    // deleteArray stores the deleted array
    // deleteArray.push(notes[ind]);
    // console.log(deleteArray);  // got the array of objects
    // to get the title and text: deleteArray[0].title, deleteArray[0].text
    
    // Now, I want to show this deleted notes...
    
	let deleteArray = JSON.parse(localStorage.getItem('del'));
	if(deleteArray === null){
        deleteArray = [];
	}
    deleteArray.push(notes[ind]);
    localStorage.setItem('del', JSON.stringify(deleteArray));
    
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function archiveNote(ind){
    let notes = JSON.parse(localStorage.getItem('notes'));
    
    archiveArray = JSON.parse(localStorage.getItem('arch'));
    if(archiveArray === null) archiveArray = [];
    archiveArray.push(notes[ind]);
    notes.splice(ind, 1); // now that archived note removed from notes
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('arch', JSON.stringify(archiveArray));
    showNotes();
}

function editNote(ind){
    let notes = JSON.parse(localStorage.getItem('notes'));
    // console.log(notes[ind]);  // getting an object of that note(title + noteText)
    // console.log(notes[ind].title, notes[ind].text);
    addTitle.value = notes[ind].title;
    addText.value = notes[ind].text;
    notes.splice(ind, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

addNoteBtn.addEventListener('click', addNoteFunc);


// assignments
/* 
1. delete notes: implementation delete array
2. archive notes: implementation archive array
3. sorting, filter, iterate through all the notes and check
4. remainder
*/