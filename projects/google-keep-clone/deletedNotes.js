// first receive all deleted data from localStorage
let delArray = JSON.parse(localStorage.getItem('del'));

const delNote = document.getElementById('delNotes');

showDeleted();

function showDeleted(){
    let delNoteHTML = '';
    for(let i = 0; i < delArray.length; ++i){
        delNoteHTML += 
        `
            <div class="note">
                <button class = "deleteNote" id = ${i} onclick="deletePermanently(${i})">Delete Permanently</button>
                <button class = "deleteNote" id = ${i} onclick="restore(${i})">Restore</button>
                <div class="title">${delArray[i].title}</div>
                <div class="text">${delArray[i].text}</div>
            </div>
        `
    }
    delNote.innerHTML = delNoteHTML;
}


function restore(ind){
    let notes = JSON.parse(localStorage.getItem('notes'));
    delArray = JSON.parse(localStorage.getItem('del'));
    
    // console.log(delArray[ind]);
    notes.push(delArray[ind]);
    delArray.splice(ind, 1);  // ok
    
    // console.log(notes);
    
    localStorage.setItem('del', JSON.stringify(delArray));
    localStorage.setItem('notes', JSON.stringify(notes));
    showDeleted();
}

// working fine...........................................
function deletePermanently(ind){  
    delArray = JSON.parse(localStorage.getItem('del'));
    if(delArray === null) delArray = [];
    
    let response = confirm("Are you sure to delete?")
    if(response){
        delArray.splice(ind, 1); // permanently remove this notes from localStorage
    }
    
    localStorage.setItem('del', JSON.stringify(delArray));
    showDeleted();
}