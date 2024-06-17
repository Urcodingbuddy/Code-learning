

document.addEventListener("DOMContentLoaded", function () {
    let addbtnhtml = `<div class="inputbox">
        <h3>Add Website</h3>
        <label for="nameInput">Name</label>
        <input type="text" id="nameInput">
        <label for="urlInput">URL</label>
        <input type="text" id="urlInput">
        <div class="add-cancel">
            <button class="add" id="add">Add</button>
            <button class="cancel" id="cancel">Cancel</button>
        </div>
    </div>`;

    let addbtn = document.querySelector(".add-btn");
    addbtn.addEventListener("click", function (event) {
        event.preventDefault();
        let inputpopup = document.querySelector(".input-popup");
        inputpopup.innerHTML = addbtnhtml;

        // Add event listener for the "Add" button inside this click event handler
        let addurlname = document.getElementById("add");
        addurlname.addEventListener("click", () => {
            let webUrl = document.getElementById("urlInput").value;
            let webname = document.getElementById("nameInput").value;
            let faviconUrl = webUrl + "/favicon.ico";

            let newShortcut = `<a href="${webUrl}">
                <div class="shorts short-box">
                    <div class="favicon-img">
                        <img src="${faviconUrl}">
                    </div>
                    <h6>${webname}</h6>
                </div>
            </a>`;

            let newShortcutContainer = document.createElement('div');
            newShortcutContainer.classList.add('shortcut-container');
            newShortcutContainer.innerHTML = newShortcut;

            let existingShortcuts = document.querySelector('.newbtn');
            existingShortcuts.appendChild(newShortcutContainer);

            let inputpopup = document.querySelector(".input-popup");
            inputpopup.innerHTML = '';
        });
        let cancelBtn = document.getElementById("cancel");
        cancelBtn.addEventListener("click", function() {
            let inputpopup = document.querySelector(".input-popup");
            inputpopup.innerHTML = '';});
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     let addbtnhtml = `<div class="inputbox">
//         <h3>Add Website</h3>
//         <label for="nameInput">Name</label>
//         <input type="text" id="nameInput">
//         <label for="urlInput">URL</label>
//         <input type="text" id="urlInput">
//         <div class="add-cancel">
//             <button class="add" id="add">Add</button>
//             <button class="cancel" id="cancel">Cancel</button>
//         </div>
//     </div>`;

//     let addbtn = document.querySelector(".add-btn");
//     let newshorcutbox = document.querySelector(".newbtn");
//     let gridContainer = document.querySelector('.box2');

//     addbtn.addEventListener("click", function (event) {
//         event.preventDefault();
//         let inputpopup = document.querySelector(".input-popup");
//         inputpopup.innerHTML = addbtnhtml;
//     });

//     document.addEventListener("click", function (event) {
//         if (event.target.id === "add") {
//             let webUrl = document.getElementById("urlInput").value;
//             let webname = document.getElementById("nameInput").value;
//             let faviconUrl = webUrl + "/favicon.ico";

//             let newShortcut = `<a class="grid-item" href="${webUrl}">
//                 <div class="shorts">
//                     <div class="favicon-img">
//                         <img src="${faviconUrl}">
//                     </div>
//                     <h6>${webname}</h6>
//                 </div>
//             </a>`;

//             let existingShortcuts = document.querySelectorAll('.short-box');
//             let gridColumnCount = gridContainer.style.gridTemplateColumns.split(' ').length;
//             let currentRowCount = Math.ceil(existingShortcuts.length / gridColumnCount);

//             newshorcutbox.insertAdjacentHTML('beforeend', newShortcut);

//             let newRowCount = Math.ceil((existingShortcuts.length + 1) / gridColumnCount);
//             if (newRowCount > currentRowCount) {
//                 gridContainer.style.gridTemplateRows = `repeat(${newRowCount}, 1fr)`;
//             }

//             let inputpopup = document.querySelector(".input-popup");
//             inputpopup.innerHTML = '';
//         } else if (event.target.id === "cancel") {
//             let inputpopup = document.querySelector(".input-popup");
//             inputpopup.innerHTML = '';
//         }
//     });
// });
