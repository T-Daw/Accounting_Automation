function deletePreviusOrders() {
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var lr = ss.getLastRow();
	var lc = ss.getLastColumn();
	var lookupRange = ss.getRange(1, 3, lr);
	var lookupValuesArr = lookupRange.getValues();
	var lookupValuesArr_1D = lookupValuesArr.map(function (v) {
		return v[0]
	});
	var indexOfRowToDelete = (lookupValuesArr_1D.indexOf('2019-05-30 21:03:12 UTC')) - 1;
	ss.deleteRows(2, indexOfRowToDelete);
}

//filter to other events, delete other events, remove filter

function deleteIDRS() {
	// sort alphabetically
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var lr = ss.getLastRow();
	var lc = ss.getLastColumn();
	var range = ss.getRange(2, 1, lr, lc);
	range.sort(1);
	// find location of cell before the first instance of PB 2019 event and delete all rows including that
	var lookupRange = ss.getRange(1, 3, lr);
	var lookupValuesArr = lookupRange.getValues();
	var lookupValuesArr_1D = lookupValuesArr.join().split(',').filter(Boolean);
	var indexOfRowToDelete = lookupValuesArr_1D.indexOf('2019-05-30 21:03:12 UTC') - 1;
	ss.deleteRows(2, indexOfRowToDelete);
}

function deleteUPMicro() {
	// find location of cell after the last instance of PB 2019 event and delete all rows after that
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var lr = ss.getLastRow();
	var lc = ss.getLastColumn();
	var range = ss.getRange(2, 1, lr, lc);
	range.sort({
		column: 1,
		ascending: false
	});
	var lookupRange = ss.getRange(1, 1, lr);
	var lookupValuesArr = lookupRange.getValues();
	var lookupValuesArr_1D = lookupValuesArr.join().split(',').filter(Boolean);
	var indexOfRowToDelete = lookupValuesArr_1D.indexOf('Produced Water Society Permian Basin 2019 - Operators Portal') - 1;
	ss.deleteRows(2, indexOfRowToDelete);
}

function sortAndDeleteRegStatus() {
	// sort alphabetically
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var lr = ss.getLastRow();
	var lc = ss.getLastColumn();
	var range = ss.getRange(2, 1, lr, lc);
	range.sort({
		column: 2,
		ascending: false
	});
	// find location of cell before the first instance of pending  and delete all rows including that
	var lookupRange = ss.getRange(1, 2, lr);
	var lookupValuesArr = lookupRange.getValues();
	var lookupValuesArr_1D = lookupValuesArr.join().split(',').filter(Boolean);
	var indexOfRowToDelete = lookupValuesArr_1D.indexOf('confirmed');
	Logger.log(indexOfRowToDelete);
	ss.deleteRows(2, indexOfRowToDelete - 1);
}

function sortDate() {
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var lr = ss.getLastRow();
	var lc = ss.getLastColumn();
	var range = ss.getRange(2, 1, lr, lc);
	range.sort(18);
}

function deleteColumns() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	//delete registrationstatus, create_date,LibbyID
	ss.deleteColumns(2, 3);
	// delete address, primary, and add_on
	ss.deleteColumns(12, 3);
	//Bonnie asked to move badge column to end instead of deleting it
	badge_column = ss.getRange("E1:E1");
	ss.moveColumns(badge_column, 13);
}

function portal() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	ss.insertColumnBefore(2);
	var rows = ss.getLastRow();
	var range = ss.getRange(2, 2, rows);
	range.setValue('Libby');
	var header_events = ss.getRange(1, 2);
	header_events.setValue('Portal');
}

function rearrangeColumns() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var range = ss.getRange(1, 1, rows);
	date_column = ss.getRange("L1:L1");
	ss.moveColumns(date_column, 1);
	portal_col = ss.getRange("C1:C1")
	ss.moveColumns(portal_col, 2)
	order_col = ss.getRange("D1:D1");
	ss.moveColumns(order_col, 14);
	lname_column = ss.getRange("E1:E1");
	ss.moveColumns(lname_column, 4);
	company_col = ss.getRange("H1:H1");
	ss.moveColumns(company_col, 6);
	email_column = ss.getRange("J1:J1");
	ss.moveColumns(email_column, 7);
	title_column = ss.getRange("J1:J1");
	ss.moveColumns(title_column, 8);
	ss.insertColumnsBefore(10, 1);
	var range = ss.getRange(1, 10);
	range.setValue("Delegate Type");
	var range = ss.getRange(1, 9);
	range.setValue("Delegate Status");
	var range = ss.getRange(1, 11);
	range.setValue("Amount");
	var range = ss.getRange(1, 12);
	range.setValue("Notes");
	ss.insertColumnsBefore(14, 3);
	var range = ss.getRange(1, 14);
	range.setValue("In SLX");
	var range = ss.getRange(1, 15);
	range.setValue("Opp Created");
	var range = ss.getRange(1, 16);
	range.setValue("Opp Created");
	ss.insertColumnsBefore(12, 1);
	var range = ss.getRange(1, 12);
	range.setValue("Paid?");

}

function delegateType() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var columns = ss.getLastColumn();
	var range = ss.getRange(1, 1, rows, columns);
	for (var i = 2; i <= rows; i++) {
		if (range.getCell(i, 3).getValue() === 'Produced Water Society Permian Basin 2019 - Operators Portal') {
			range.getCell(i, 2).setValue('Operator Portal');
			range.getCell(i, 9).setValue('Operator');
			range.getCell(i, 10).setValue('Free');
			range.getCell(i, 12).setValue('n/a');
		} else {
			range.getCell(i, 10).setValue('Full')
		}
	};
}

function relabelColumns() {
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	ss.getRange("A1").setValue("Reg Date");
	ss.getRange("B1").setValue("Reg Portal");
	ss.getRange("C1").setValue("Event");
	ss.getRange("D1").setValue("Last Name");
	ss.getRange("E1").setValue("First Name");
	ss.getRange("F1").setValue("Company");
	ss.getRange("G1").setValue("Email");
	ss.getRange("H1").setValue("Title");
	ss.getRange("A1:Z1").setFontWeight("bold");

}

function eventLabel() {
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var range = ss.getRange(2, 3, rows);
	range.setValue('PWSPB');

}

function dateFormat() {
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var range = ss.getRange(2, 1, rows);
	range.setNumberFormat('d"-"mmm"-"yy')

	//d-mmm-y
}


function reformatDate() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var columns = ss.getLastColumn();
	var range = ss.getRange(1, 1, rows, columns);
	for (var i = 2; i <= rows; i++) {
		row = range.getCell(i, 1).getValue();
		var year = row.substring(0, 4);
		var day = row.substring(8, 10);
		var month = row.substring(5, 7);
		var new_date = day + '-' + month + '-' + year;
		Logger.log(new_date);
		range.getCell(i, 1).setValue(new_date);
	}
}

function resizecolumn() {
	ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	ss.autoResizeColumns(3, 1);
}


function prices() {
	// find better way to convert string to currency later.
	// parse out $ sign first? 
	var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var rows = ss.getLastRow();
	var columns = ss.getLastColumn();
	var range = ss.getRange(1, 1, rows, columns);
	for (var i = 2; i <= rows; i++) {
		var price = range.getCell(i, 11).getValue();
		if (price == '$750.00') {
			range.getCell(i, 11).setValue(735);
		} else if (price == '$1500.00') {
			range.getCell(i, 11).setValue(1500);
		} else if (price == '$3000.00') {
			range.getCell(i, 11).setValue(3000);
		} else if (price == '$150.00') {
			range.getCell(i, 11).setValue(150);
		} else if (price == '$0.00') {
			range.getCell(i, 11).setValue(0);
		} else if (price == '$75.00') {
			range.getCell(i, 11).setValue(75);
		} else {
			range.getCell(i, 11).setValue('Needs Review');
		}
	}
}


function All() {
	deletePreviusOrders();
	deleteIDRS();
	deleteUPMicro();
	sortAndDeleteRegStatus();
	sortDate();
	deleteColumns();
	portal();
	rearrangeColumns();
	delegateType();
	relabelColumns();
	eventLabel();
	reformatDate();
	dateFormat();
	resizecolumn();
	prices();
}