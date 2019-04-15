console.log("exercice 7");
var nbrline = 50;
var startline = 1;
var nbrpages = data.length / nbrline

$(document).ready(function () {
  displayDatas()
})

function getData() {
  return data; // data is defined in DATA.js file
}

function displayDatas() {
  addLineTotable();
  addPagination();
}

function addLineTotable() {
  let ip = (startline - 1) * nbrline;
  let l = nbrline * startline - 1;
  for (i=ip; i <= l; i++) {
    $("tbody").append(
      "<tr>\
    <td>"+ data[i].id + "</td>\
    <td>"+ data[i].email + "</td>\
    <td>" + data[i].name.first + "</td>\
    <td>" + data[i].name.last + "</td>\
    <td>"+ data[i].phone + "</td>\
    </tr>"
    );
  };
}


addPagination = () => {
  $nbrp = $('.pagination');
  $nbrp.empty();
  for (let i = 1; i <= nbrpages; i++) {
    $($nbrp).append(
      "<li class='page-item'><a class='page-link' href='#' id=" + [i] + ">" + [i] + "</a></li>");
    $('a').on('click', function () {
      startline = this.id;
      console.log(startline);
      displayDatas();
    });
  }
};




/*let $li = $('<li>');
$li.addClass("page-item");

let $span = $('<span>');
$span.addClass("page-link");

$span.attr("id", i);
$li.append($span);
$span.text(i);
$ul.append($li);
$span.on('click', function () {
  currentPage = this.id;
  displayDatas();*/

