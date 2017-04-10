export default function googleSpreadsheetValuesToObjectArray(spreadsheetValues) {
  const fields = spreadsheetValues[0]
  return spreadsheetValues.slice(1).map(
    row => fields.reduce(
      (obj, field, index) => {
        obj[field] = row[index]
        return obj
      }
    , {}
    )
  )
}
