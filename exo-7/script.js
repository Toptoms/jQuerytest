console.log('exercice 7');

let allDatas = [];
let currentDatas = [];
let currentPage = 1;
let currentRadio = -1;
let nextIndex = -1;
let valueBeforeEditing;
let idDataEditing;

function displayDatas() {
    let $newTbody = $('<tbody>');
    let firstData = (currentPage - 1) * 50;
    let latestData = (currentPage * 50 <= currentDatas.length) ? (currentPage * 50) : currentDatas.length;
    for (let iterate = firstData; iterate < latestData; iterate++) {
        $newTbody.append(addLineToTable(currentDatas[iterate]));
    }
    $('tbody').replaceWith($newTbody);
    displayPagination();
}

function addLineToTable(data) {
    let newLine = $('<tr>');
    newLine.append(createCell(data.id, null, 'radio'));
    newLine.append(createCell(data.id));
    newLine.append(createCell(data.name.last, data.id));
    newLine.append(createCell(data.name.first, data.id));
    newLine.append(createCell(data.email, data.id));
    newLine.append(createCell(data.phone, data.id));
    return newLine;
}

function createCell(data, id = null, type = null) {
    let newCell = $('<td>');
    if (!type) {
        newCell.text(data);
        if (id) {
            newCell.attr('id', id);
            newCell.on('click', function () {
                startEditObject($(this));
            });
        }
        return newCell;
    }
    let newRadio = $('<input>');
    newRadio.attr('type', type);
    newRadio.val(data);
    newRadio.attr('name', 'radio');
    if (data === currentRadio) {
        newRadio.attr('checked', true);
    }
    newRadio.on('click', function () {
        currentRadio = data;
        $('#deleteButton').removeAttr('disabled');
    });
    newCell.append(newRadio);
    return newCell;
}

function displayPagination() {
    $('nav ul').remove();
    if (countPage(currentDatas) !== 1) {
        let pagination = $('<ul>');
        pagination.addClass('pagination pagination-sm justify-content-center');
        for (let iterate = 1; iterate <= countPage(currentDatas); iterate++) {
            pagination.append(createLi(iterate));
        }
        $('nav').append(pagination);
    }
}

function createLi(page) {
    let li = $('<li>');
    (page === currentPage) ? li.addClass('page-item disabled') : li.addClass('page-item');
    let a = $('<a>');
    (page === currentPage) ? a.addClass('page-link bg-primary text-white') : a.addClass('page-link');
    a.attr('href', '#');
    a.text(page);
    a.on('click', function () {
        currentPage = page;
        displayDatas();
    });
    li.append(a);
    return li;
}

function countPage(datas) {
    return (Math.ceil(datas.length / 50));
}

function getFilterDatas() {
    let filtredDatas = [];
    let filter = $('#searchInput').val();
    let regExp = new RegExp(filter.toLowerCase());
    allDatas.forEach(function (data) {
        if (regExp.test(data.name.first.toLowerCase()) ||
            regExp.test(data.name.last.toLowerCase()) ||
            regExp.test(data.email.toLowerCase()) ||
            regExp.test(data.phone.toLowerCase())) {
            filtredDatas.push(data);
        }
    });
    return filtredDatas;
}

function updateHeadTable(element) {
    let $element = $('#' + element + ' i');
    let memoryState = $element.hasClass('fa-sort-asc');
    let $elements = $('th i');
    $elements.removeClass();
    $elements.addClass('fa fa-sort');
    memoryState ? $element.addClass('fa fa-sort-desc') : $element.addClass('fa fa-sort-asc');
    sortDatas(element, memoryState ? 'desc' : 'asc');
    displayDatas();
}

function sortDatas(column, order) {
    currentDatas.sort(compareValues(column, order));
}

function compareValues(key, order = 'asc') {
    return function (a, b) {
        let varA;
        let varB;
        let comparison = 0;
        let underKey;
        switch (key) {
            case 'firstname':
                underKey = 'first';
                varA = a['name'][underKey].toUpperCase();
                varB = b['name'][underKey].toUpperCase();
                break;
            case 'lastname':
                underKey = 'last';
                varA = a['name'][underKey].toUpperCase();
                varB = b['name'][underKey].toUpperCase();
                break;
            default:
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }
                varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
                varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        }
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return ((order === 'desc') ? (comparison * -1) : comparison);
    };
}

function addData() {
    let data =
        {
            "id": nextIndex,
            "name": {
                "first": $('#firstnameInput').val(),
                "last": $('#lastnameInput').val()
            },
            "email": $('#emailInput').val(),
            "gender": $('#genderInput').val(),
            "phone": $('#phoneInput').val(),
            "country": $('#countryInput').val()
        };
    allDatas.push(data);
    nextIndex++;
}

function hideAddForm() {
    $('.mask').css('display', 'none');
}

$(document).ready(function () {
    allDatas = getData();
    nextIndex = allDatas.length + 1;

    $('#refreshButton').on('click', function () {
        $('#searchInput').val('');
        currentPage = 1;
        currentDatas = allDatas;
        displayDatas();
    });
    $('#searchButton').on('click', function () {
        currentPage = 1;
        currentDatas = getFilterDatas();
        displayDatas();
    });
    $('th').on('click', function () {
        if ($(this).find('i').hasClass('fa')) {
            updateHeadTable($(this).attr('id'));
        }
    });
    $('#newButton').on('click', function () {
        $('.mask input').val("");
        $('.mask').css('display', 'flex');
    });
    $('#cancelButton').on('click', function () {
        hideAddForm();
    });
    $('#deleteButton').on('click', function () {
        for (let index = 0; index < allDatas.length; index++) {
            if (allDatas[index].id === currentRadio) {
                allDatas.splice(index, 1);
                currentRadio = -1;
                $('#deleteButton').attr('disabled', 'disabled');
                displayDatas();
                return true;
            }
        }
    });
    $('#addForm').on("submit", function (event) {
        event.preventDefault();
        addData();
        displayDatas();
        hideAddForm();
    });
    $('#downloadButton').on('click', function () {
        exportToCsv();
    });
    currentDatas = allDatas;
    displayDatas();
});

function getData() {
    return data; // data is defined in DATA.js file
}

function startEditObject($object) {
    // Save value before editing
    valueBeforeEditing = $object.text();
    idDataEditing = $object.attr('id');

    // Create input to edit object
    let $inputText = $('<input>');
    $inputText.attr('type', 'text');
    $inputText.attr('id', 'editObject');
    $inputText.addClass('form-control');
    $inputText.val(valueBeforeEditing);
    let $editingObject = $('<td>');
    $editingObject.append($inputText);

    // Replace current object by input
    $object.replaceWith($editingObject);

    // Add events
    let $editObject = $('#editObject');
    $editObject.on('focusout', function (event) {
        updateData($(event.currentTarget).val());
        displayDatas();
    });
    $editObject.on('keydown', function (event) {
        if (event.keyCode === 13) {
            updateData($(event.currentTarget).val());
            displayDatas();
        }
    });
    // Set focus into input
    $editObject.focus();
}

function updateData(value) {
    currentDatas.forEach(function (data) {
        if (data.id === parseInt(idDataEditing)) {
            if (data.name.first === valueBeforeEditing) {
                data.name.first = value;
                return true;
            } else if (data.name.last === valueBeforeEditing) {
                data.name.last = value;
                return true;

            } else if (data.email === valueBeforeEditing) {
                data.email = value;
                return true;
            } else if (data.phone === valueBeforeEditing) {
                data.phone = value;
                return true;
            } else {
                return false;
            }
        }
    });
}

function exportToCsv() {
    let csv = createArray().map(function (row) {
        return row.join(',');
    }).join('\n');

    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'download.csv';
    hiddenElement.click();
}

function createArray() {
    let array = [];
    currentDatas.forEach(function (data) {
        array.push([
            String(data.name.last),
            String(data.name.first),
            String(data.email),
            String(data.phone)
        ]);
    });
    return array;
}