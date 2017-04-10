import generateRandomFlavor from 'utils/generateRandomFlavor'

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
