import googleSpreadsheetValuesToObjectArray from 'utils/googleSpreadsheetValuesToObjectArray'

/*
 * Fetches a Google Sheets document by ID and executes a callback on the document.
 */
export default function gSheetsApi (spreadSheetId, sheetName, callback) {
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${ spreadSheetId }/values/${ sheetName }?&key=${ process.env.GOOGLE_API_KEY }`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(
    response => response.json()
  ).then(
    spreadsheet => callback(googleSpreadsheetValuesToObjectArray(spreadsheet.values))
  )
}
