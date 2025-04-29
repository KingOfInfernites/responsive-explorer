
const rowData = [
    {header1: "Data 1", header2: "Details 1"},
    {header1: "Data 2", header2: "Details 2"}
];

function initTable() {
    rowData.forEach((row, index) => {
        $('#dynamicContent').append(`
            <tr class="collapse show" id="row${index}">
                <td>${row.header1}</td>
                <td>${row.header2}</td>
                <td><button class="btn btn-sm btn-success">Edit</button> <button class="btn btn-sm btn-danger" onclick="toggleCollapse(${index})">Toggle Collapse</button></td>
            </tr>
        `);
    });
}

function addRow() {
    let count = document.querySelectorAll("#dynamicContent tr").length;
    $('#dynamicContent').append(`
        <tr class="collapse show" id="row${count}">
            <td>Data ${count+1}</td>
            <td>Data ${count+1}</td>
            <td><button class="btn btn-sm btn-success">Edit</button> <button class="btn btn-sm btn-danger" onclick="toggleCollapse(${count})">Toggle Collapse</button></td>
        </tr>
    `);
}

function toggleCollapse(rowId) {
    $(`#row${rowId}`).collapse('toggle');
}

$(document).ready(() => {
    initTable();
    $('#addBtn').prop('disabled', rowData.length > 0);
});