



function reformat(){
  
    function monthABCtoDate(mon) {
      if (mon == 'Jan') return mon = '01';
      if (mon == 'Feb') return mon = '02';
      if (mon == 'Mar') return mon = '03';
      if (mon == 'Apr') return mon = '04'
      if (mon == 'May') return mon = '05';
      if (mon == 'Jun') return mon = '06';
      if (mon == 'Jul') return mon = '07';
      if (mon == 'Aug') return mon = '08';
      if (mon == 'Sep') return mon = '09';
      if (mon == 'Oct') return mon = '10';
      if (mon == 'Nov') return mon = '11';
      if (mon == 'Dec') return mon = '12';
      return mon = "something is wrong"; 
    //use switch statement later
      //try datetime object next
    } 
  
  function deleteColumns() {
    ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var columns = ss.getLastColumn()
    var rows = ss.getMaxRows();
    var range = ss.getRange(1,1,rows, columns);
    var HiddenColumns_array = ['Settlement Amount', 'Settlement Currency', 'Settlement Date/Time', 'Authorization Amount', 'Authorization Currency', 'Transaction Type', 'Address Verification Status', 'Card Code Status', 'Fraudscreen Applied', 'Recurring Billing Transaction', 'Partial Capture Status', 'Card Number', 'Expiration Date', 'Bank Account Number', 'Routing Number', 'L2 - Tax', 'L2 - Freight', 'L2 - Duty', 'L2 - Tax Exempt', 'Order Number', 'Available Card Balance', 'Approved Amount', 'Market Type', 'Product', 'CAVV Results Code', 'Business Day','Order Number','Available Card','Balance	Approved','Amount','Market Type','Product','Reserved7','Reserved8','Reserved9','Reserved10','Reserved11','Reserved12','Reserved13','Reserved14','Reserved15','Reserved16','Reserved17','Reserved18','Reserved19','Reserved20'];
  
    for (var i=columns; i>= 1; i--) {
      col_Header = range.getCell(1, i).getValue();
      in_Array = HiddenColumns_array.indexOf(col_Header);
      if ( in_Array!= -1) {
        ss.deleteColumn(i);}}
    // figure out how to use this with dictionaries/object-oriented programming
  }
    
    function reformatDate() {
      ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var rows = ss.getLastRow();
      var range = ss.getRange(1, 3, rows, 3);
      for (var i = 2;  i <= rows;  i++) {
        row = range.getCell(i,1).getValue();
        var new_row = row.substring(0,11);
        var day= row.substring(0,2);
        var month = row.substring(3,6);
        month = monthABCtoDate(month);  
        var year = row.substring(7,11);
        var new_row = month + '/' + day + '/'+ year;
        Logger.log(new_row);
        range.getCell(i,1).setValue(new_row);    
        }
    }
  
    function rearrangeColumns() {
    ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var columns = ss.getLastColumn()
    var rows = ss.getMaxRows();
    var columnSpec = ss.getRange("A1:A1");
    ss.moveColumns(columnSpec, 5);
    var columnSpec = ss.getRange("F1:F1");
    ss.moveColumns(columnSpec, 3);
    var columnSpec = ss.getRange("U1:U1");
    ss.moveColumns(columnSpec, 1);
    var columnSpec = ss.getRange("I1:I1");
    ss.moveColumns(columnSpec, 1);
    }
    
    
  function insertColumns() {
    var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ss.insertColumnBefore(1);
    ss.insertColumnBefore(1);
    ss.insertColumnBefore(1);
  }  
    
  function labelColumns() {
  ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ss.getRange('A1').setValue('In SLX?');
  ss.getRange('B1').setValue('In SS?');
  ss.getRange('C1').setValue('In QB?');
  ss.getRange('D1').setValue('Inv#');
  ss.getRange('E1').setValue('LibbyID');
  ss.getRange('F1').setValue('Status');
  ss.getRange('G1').setValue('Date');
  ss.getRange('H1').setValue('Amount');
  ss.getRange('I1').setValue('AuthCode');
  ss.getRange('J1').setValue('TranID');
  ss.getRange('K1').setValue('RefID');
  ss.getRange('N1').setValue('FirstName');
  ss.getRange('O1').setValue('LastName');}
  
  
  function prerecordedMacros() {    
      var spreadsheet = SpreadsheetApp.getActive();
      spreadsheet.getRange('G2').activate();
      spreadsheet.getActiveSheet().autoResizeColumns(7, 1);
      spreadsheet.getActiveSheet().autoResizeColumns(8, 1);
      spreadsheet.getActiveSheet().autoResizeColumns(5, 1);
      spreadsheet.getActiveSheet().autoResizeColumns(4, 1);
      spreadsheet.getActiveSheet().setColumnWidth(4, 46);
      spreadsheet.getActiveSheet().setColumnWidth(11, 42);
      spreadsheet.getActiveSheet().autoResizeColumns(9, 1);
      spreadsheet.getActiveSheet().autoResizeColumns(10, 1);
      spreadsheet.getActiveSheet().setColumnWidth(6, 53);
      spreadsheet.getActiveSheet().setColumnWidth(12, 32);
      spreadsheet.getActiveSheet().setColumnWidth(13, 158);
      spreadsheet.getActiveSheet().setColumnWidth(13, 133);
      spreadsheet.getRange('1:1').activate();
      spreadsheet.setCurrentCell(spreadsheet.getRange('C1'));
      spreadsheet.getActiveRangeList().setFontWeight('bold');
      spreadsheet.getRange('A1:AG902').activate();
      spreadsheet.getRange('A1:AG902').applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
      spreadsheet.getRange('A1').activate();
    }
  
                                        
                                        
  deleteColumns();                                    
  reformatDate();
  rearrangeColumns();
  insertColumns();
  labelColumns();
  prerecordedMacros();}  
  
  
  
  