import SmallTable from "./medium-table"
import MediumTable from "./small-table"
import BigTable from "./big-table"

export default class TableFactory {

    static getTable(table: string) {
        if (table == 'BigTable') {
            return new BigTable()
        } else if (table == 'MediumTable') {
            return new MediumTable()
        } else if (table == 'SmallTable') {
            return new SmallTable()
        } else {
            throw new Error('No Table Found');
        }
    }
}