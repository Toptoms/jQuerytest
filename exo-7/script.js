console.log("exercice 7");
var nbrline = 50;
var startline = 1;
var useData = data;
var nbrpages = useData.length / nbrline;
var dataSearch;

function getData() {
  return data; // data is defined in DATA.js file
}

$(document).ready(function () {
  displayDatas(data)
})

function displayDatas(data) {
  addLineTotable(data);
  addPagination();
}
$('i').on('click', (event) => {
  let $target = $(event.currentTarget);
  let $sortclass=$target.attr('id');
  console.log($sortclass)

  if ($target.hasClass('fa-sort-up')) {
    
    $('i').removeClass().toggleClass('fas fa-sort')
     $target.toggleClass('fa-sort-down')
    useData.reverse(function (a, b) {
      return a[$sortclass].localeCompare(b[$sortclass]) 
    })
    displayDatas(useData)
  }

  else if ($target.hasClass('fa-sort-down')) {
    $('i').removeClass().toggleClass('fas fa-sort')
    useData.sort(function (a, b) {
      return a['id']-(b['id'])
    })
    displayDatas(useData)
  }

  else {
    $('i').removeClass().toggleClass('fas fa-sort')
     $target.toggleClass('fa-sort-up')
    useData.sort(function (a, b) {
      return a[$sortclass].localeCompare(b[$sortclass])
    })
    displayDatas(useData)
  };
  console.log($target.attr('id'))
});

$('#search').on('keyup', function () {
  searchData()
  useData = dataSearch
  nbrpages = dataSearch.length / nbrline
  displayDatas(useData)
});

function addLineTotable(d) {
  let ip = (startline - 1) * nbrline;
  let l = nbrline * startline - 1;
  if (l > d.length) {
    l = d.length - 1
  }
  $("tbody").empty()
  for (i = ip; i <= l; i++) {
    $("tbody").append(
      "<tr>\
    <td>"+ [i + 1] + "</td>\
    <td>"+ d[i].id + "</td>\
    <td>"+ d[i].email + "</td>\
    <td>"+ d[i].name.first + "</td>\
    <td>"+ d[i].name.last + "</td>\
    <td>"+ d[i].phone + "</td>\
    </tr>"
    );
  };
}

addPagination = () => {
  $nbrp = $('.pagination');
  $nbrp.empty();
  let nrb = Math.ceil(nbrpages)
  for (let i = 1; i <= nrb; i++) {
    $($nbrp).append(
      "<li class='page-item'><a class='page-link' href='#' id=" + [i] + ">" + [i] + "</a></li>");
    $('a').on('click', function () {
      startline = this.id;
      displayDatas(useData);
    });
  }
};

searchData = () => {
  dataSearch = []
  var compare = $('#search').val()
  data.forEach(function (element) {
    if (element.name.first.toLowerCase().search(compare.toLowerCase()) === 0)/*||
      element.name.last.toLowerCase().search(compare.toLowerCase()) === 0)*/ {
      dataSearch.push(element);
    }
  })
};


loopData = () => {
  /*for (let i = 0; i < useData.length; i++) {
    console.log(useData[i].name.first)
  };*/

  useData.forEach(function (element) {
    console.log(element.name.first)
  });

  /*for (let element in useData) {
     console.log(useData[element].name.first)
   };*/

  /*$.each(useData, function (index,element){
    console.log(element.name.first)
   });*/
}