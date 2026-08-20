function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.parameter.data);

  sheet.appendRow([
    new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
    data.resultado,
    data.puntaje,
    data.nombre || '',
    data.empresa || '',
    data.telefono || '',
    data.email || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
