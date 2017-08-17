import generateRandomFlavor from 'utils/generateRandomFlavor'

/*
 * Data model for a team member. 'Member' should follow exactly the schema defined
 * in the Google Sheets roster list. If the Sheet is updated, you must also update
 * this class appropriately.
 * It's a dated pattern that doesn't work well in JavaScript, but pulling off
 * Google Sheets was already a hack anyways so whatever.
 */
export default class Member {
  constructor({ name, school, year, picture, boardPosition, flavor, quote, saName }) {
    if (!name) throw new Error('Must have a name.')
    if (!year) throw new Error('Must have year.')
    this.name = name
    this.school = school
    this.year = year
    this.picture = picture
    this.boardPosition = boardPosition
    this.flavor = flavor || generateRandomFlavor()
    this.quote = quote
    this.saName = saName
  }
}
