/*
 * Converts the default Google Sheets data format from an
 * 'array of arrays' to an 'array of objects'.
 * i.e., from this:
 * [ [ 'field1', 'field2', 'field3'  ],
 *   [ 'apple',  '1',      'dog'     ],
 *   [ 'orange', '13',     'cat'     ],
 *   [ 'carrot', '-12',    'scorpion'] ]
 * to this:
 * [ { field1: 'apple',  field2: '1',   field3: 'dog'      },
 *   { field1: 'orange', field2: '13',  field3: 'cat'      },
 *   { field1: 'carrot', field2: '-12', field3: 'scorpion' } ]
 */
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
