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
        url: baseUrl + "/members",
        cache: false,
        success: function (response) {
            console.log(response)
            var data = response.data;
            data.forEach((member) => {
                addRecordToTable(member);
            });
        }
    });
});

function addRecordToTable(data) {
    var memberslist = document.getElementById("memberslist").getElementsByTagName("tbody")[0];
    var newRecord = memberslist.insertRow(memberslist.length);

    cell1 = newRecord.insertCell(0);
    cell1.innerHTML = data.MemberID;
    cell2 = newRecord.insertCell(1);
    cell2.innerHTML = data.Name;
    cell3 = newRecord.insertCell(2);
    cell3.innerHTML = data.Gender;
    cell4 = newRecord.insertCell(3);
    cell4.innerHTML = data.Email;
    cell5 = newRecord.insertCell(4);
    cell5.innerHTML = data.PhoneNumber;
    cell6 = newRecord.insertCell(5);
    cell6.innerHTML = data.BirthDate;
    cell7 = newRecord.insertCell(6);
    cell7.innerHTML = data.Address;
    cell8 = newRecord.insertCell(7);
    cell8.innerHTML = data.ReferralID;
    cell9 = newRecord.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                        <a href="index.php?page=memberdash&id="` + data.MemberID + `>View</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}

function onFormSubmit() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    formData["BirthDate"] = document.getElementById("BirthDate").value;
    formData["Address"] = document.getElementById("Address").value;
    formData["ReferralID"] = document.getElementById("ReferralID").value;

    if (selectedRecord == null) {
        saveFormData(formData);
        console.log(formData)
    } else {
        updateFormRecord(formData);
    }
    clearForm();
}

function saveFormData(data) {
    var postData = JSON.stringify(data);
    $.ajax({
        type: "POST",
        url: baseUrl + "/members",
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
    document.getElementById("Name").value = selectedRecord.cells[1].innerHTML;
    document.getElementById("Gender").value = selectedRecord.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRecord.cells[3].innerHTML;
    document.getElementById("PhoneNumber").value = selectedRecord.cells[4].innerHTML;
    document.getElementById("BirthDate").value = selectedRecord.cells[5].innerHTML;
    document.getElementById("Address").value = selectedRecord.cells[6].innerHTML;
    document.getElementById("ReferralID").value = selectedRecord.cells[7].innerHTML;
}

function updateFormRecord(data) {
    var updateData = JSON.stringify(data);
    $.ajax({
        type: 'PUT',
        url: baseUrl + "/members/" + selectedRecordID,
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
    selectedRecord.cells[1].innerHTML = data.Name;
    selectedRecord.cells[2].innerHTML = data.Gender;
    selectedRecord.cells[3].innerHTML = data.Email;
    selectedRecord.cells[4].innerHTML = data.PhoneNumber;
    selectedRecord.cells[5].innerHTML = data.BirthDate;
    selectedRecord.cells[6].innerHTML = data.Address;
    selectedRecord.cells[7].innerHTML = data.ReferralID;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById("memberslist").deleteRow(row.rowIndex);
        clearForm();
    }

}

function clearForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("BirthDate").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("ReferralID").value = "";
}
