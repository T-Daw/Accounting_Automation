function deleteBlankCellsInColumn3 () {
    ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var columns = ss.getLastColumn()
    var rows = ss.getLastRow();
    var range = ss.getRange(1,1,rows, columns);
  
    for (var i=rows; i>= 1; i--) {
      cell_value = range.getCell(i,3).getValue();
      if (cell_value == '') {
        celllocation = 'C' + i;
        Logger.log(celllocation);
        ss.getRange(celllocation).deleteCells(SpreadsheetApp.Dimension.ROWS);
      }}}

      
 


