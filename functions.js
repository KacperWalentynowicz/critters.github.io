var inImgSrc = "images/in.png";
var outImgSrc = "images/out.png";
var inputField = document.getElementById("number");

function changeImg(id) {
  var img = document.getElementById(String(id));
  if (img.src == inImgSrc) {
    img.src = outImgSrc;
  } else {
    img.src = inImgSrc;
  }
}

function clickImg(img) {
  if (img.src == inImgSrc) {
    return;
  }

  var id = parseInt(img.id);
  var v = parseInt(inputField.value);

  if (v > 1) {
    if (id > v) { //not first row
      changeImg(id - v);
    }

    if (v * v - id + 1 > v) { //not last row
      changeImg(id + v);
    }

    if (id % v != 0) { //not last column
      changeImg(id + 1);
    }

    if (id % v != 1) { //not first column
      changeImg(id - 1);
    }
  }

  changeImg(id)
}


function genDivs() {
  var v = parseInt(document.getElementById("number").value);

  // grab main container
  var e = document.getElementById("main");
  var size = Math.max(Math.min(e.offsetWidth / v - 40, 100), 10);
  console.log(size);

  // clear previous display
  e.innerHTML = "";

  for (var i = 0; i < v; i++) {
    var row = document.createElement("div");
    row.className = "row";
    for (var x = 1; x <= v; x++) {
      var cell = document.createElement("div");
      cell.className = "col-sm";
      var id = String((i * v) + x);

      var elem = document.createElement("img");

      var choice = Math.random() < 0.5;
      if (choice) {
        elem.src = outImgSrc;
      } else {
        elem.src = inImgSrc;
      }

      elem.setAttribute("height", size);
      elem.setAttribute("width", size);
      elem.setAttribute("id", id);
      elem.setAttribute("onclick", "clickImg(this)");

      cell.appendChild(elem)
      row.appendChild(cell);
    }
    e.appendChild(row);
  }
}


inputField.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("generateBtn").click();
  }
});
