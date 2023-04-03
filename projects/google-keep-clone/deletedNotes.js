// first receive all deleted data from localStorage
let deletedData = JSON.parse(localStorage.getItem('del'));

const delNote = document.getElementById('delNotes');

showDeleted();

function showDeleted(){
    let delNoteHTML = '';
    for(let i = 0; i < deletedData.length; ++i){
        delNoteHTML += 
        `
            <div class="note">
                <div class="title">${deletedData[i].title}</div>
                <div class="text">${deletedData[i].text}</div>
            </div>
        `
    }
    delNote.innerHTML = delNoteHTML;
}