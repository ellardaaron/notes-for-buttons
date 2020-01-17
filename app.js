let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    alert('Hello World!');
});

let cells = document.querySelectorAll('.cell');

// cells.forEach(function(cell){
//     cell.addEventListener("click", function (cellClicked) {

//     });
// });

// function cellClicked(){

// }    BELLOW IS THE CLEANED UP VERSION



cells.forEach(function(cell){
        cell.addEventListener("dblclick", cellDblClicked);
});

function cellDblClicked (e) {

alert(e.target.textContent);

}



cells.forEach(function(cell){
        cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {

    e.target.textContent = "X"

}