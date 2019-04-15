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
  addLineTotable(data);
  addPagination();
}

function addLineTotable(d) {
  let ip = (startline - 1) * nbrline;
  let l = nbrline * startline - 1;
  $("tbody").empty()
  for (i = ip; i <= l; i++) {
    $("tbody").append(
      "<tr>\
    <td>"+ d[i].id + "</td>\
    <td>"+ d[i].email + "</td>\
    <td>" + d[i].name.first + "</td>\
    <td>" + d[i].name.last + "</td>\
    <td>"+ d[i].phone + "</td>\
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
      displayDatas();
    });
  }
};


searchData = () => {
  var compare = $(".form-control").val()
  data.forEach(function(element){
    var result = element.name.first.search(compare)
    console.log(result)
    //if (result> -1){
    //addLineTotable(element)}
   })
};

