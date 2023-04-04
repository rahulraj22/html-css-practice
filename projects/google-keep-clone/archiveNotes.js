// first receive all deleted data from localStorage
let archArray = JSON.parse(localStorage.getItem('arch'));

const archNoteDiv = document.getElementById('archNotes');

showArchives();

function showArchives() {
    let delNoteHTML = '';
    for (let i = 0; i < archArray.length; ++i) {
        delNoteHTML +=
            `
            <div class="note">
                <button class = "deleteNote" id = ${i} onclick="deletePermanently(${i})">Delete Permanently</button>
                <button class = "deleteNote" id = ${i} onclick="restore(${i})">Restore</button>
                <div class="title">${archArray[i].title}</div>
                <div class="text">${archArray[i].text}</div>
            </div>
        `
    }
    archNoteDiv.innerHTML = delNoteHTML;
}

function restore(ind){
    let notes = JSON.parse(localStorage.getItem('notes'));
    archArray = JSON.parse(localStorage.getItem('arch'));
    
    // console.log(archArray[ind]);
    notes.push(archArray[ind]);
    archArray.splice(ind, 1);  // ok
    
    // console.log(notes);
    
    localStorage.setItem('arch', JSON.stringify(archArray));
    localStorage.setItem('notes', JSON.stringify(notes));
    showArchives();
}

// working fine...........................................
function deletePermanently(ind){  
    archArray = JSON.parse(localStorage.getItem('arch'));
    if(archArray === null) archArray = [];
    
    let response = confirm("Are you sure to delete?")
    if(response){
        archArray.splice(ind, 1); // permanently remove this notes from localStorage
    }
    
    localStorage.setItem('arch', JSON.stringify(archArray));
    showArchives();
}