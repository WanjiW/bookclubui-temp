/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var selectedRecord = null;
var selectedRecordID = null;
var baseUrl = "http://localhost:5004";

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: baseUrl + "/books", //could put heroku url here
        cache: false,
        success: function (response) {
            var data = response.data;
            data.forEach((book) => {
                addRecordToTable(book);
            });
        }
    });
});

function addRecordToTable(data) {
    var bookslist = document.getElementById("bookslist").getElementsByTagName("tbody")[0];
    var newRecord = bookslist.insertRow(bookslist.length);

    cell1 = newRecord.insertCell(0); // we start from 0 bcse javascript starts from index 0
    cell1.innerHTML = data.Title;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.Genre;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.ISBN;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.Author;
    cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.PublishDate;
    cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.NumberOfCopies;
    cell7 = newRecord.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                        <a href="index.php?page=booksdash&id="` + data.ISBN + `>View</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onFormSubmit() {
    var formData = {};
    formData["Title"] = document.getElementById("Title").value;
    formData["Genre"] = document.getElementById("Genre").value;
    formData["ISBN"] = document.getElementById("ISBN").value;
    formData["Author"] = document.getElementById("Author").value;
    formData["PublishDate"] = document.getElementById("PublishDate").value;
    formData["NumberOfCopies"] = document.getElementById("NumberOfCopies").value;

    if (selectedRecord == null) {
        saveFormData(formData); // saved only to the page for right now
    } else {
        updateFormRecord(formData);
    }
    clearForm();
}

function saveFormData(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/books",
        dataType: 'json',
        data: postData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (response) {
            addRecordToTable(response.data);
        }
    });
}

function onEdit(td) {
    selectedRecord = td.parentElement.parentElement;
    selectedRecordID = selectedRecord.cells[0].innerHTML;
    document.getElementById("Title").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("Genre").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("ISBN").value = selectedRecord.cells[3].innerHTML;
    document.getElementById("Author").value = selectedRecord.cells[4].innerHTML;
    document.getElementById("PublishDate").value = selectedRecord.cells[5].innerHTML;
    document.getElementById("NumberOfCopies").value = selectedRecord.cells[6].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/books/" + selectedRecordID,
        dataType: 'json',
        data: updateData,
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function () {
            updateTableRecord(data);
        }
    });

}

function updateTableRecord(data) {
    selectedRecord.cells[0].innerHTML = selectedRecordID;
    selectedRecord.cells[1].innerHTML = data.Title;
    selectedRecord.cells[2].innerHTML = data.Genre;
    selectedRecord.cells[3].innerHTML = data.ISBN;
    selectedRecord.cells[4].innerHTML = data.Author;
    selectedRecord.cells[5].innerHTML = data.PublishDate;
    selectedRecord.cells[6].innerHTML = data.NumberOfCopies;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookslist").deleteRow(row.rowIndex);
        clearForm();
    }

}

function clearForm() {
    document.getElementById("Title").value = "";
    document.getElementById("Genre").value = "";
    document.getElementById("ISBN").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("PublishDate").value = "";
    document.getElementById("NumberOfCopies").value = "";
}
