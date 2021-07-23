import _ from "lodash"
export default class Transformer {

    calculatePoints(amount) {
        let points = 0
        let points50 = 0
        let points100 = 0
        //(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
        if (parseFloat(amount) > 100) {
            points100 = (amount - 100) * 2
            console.log("POINTS OVER 100", amount, amount - 100, points100)
            points50 = (amount - 50) * 1
            console.log("POINTS OVER 50",amount, amount - 50, points50)
            points = points100 + points50;
            console.log("POINTS TOTAL TRANSACTION",points)

        } else if (parseFloat(amount) >= 50 && parseFloat(amount) <= 100) {
            points = (amount - 50) * 1
            console.log("POINTS TOTAL TRANSACTION",points)

        } else {
            points = 0
        }

        return points
    }

    getPoints(records) {

        //add derived column
        records.forEach((record, i) => {
            console.log("USER",record.userId)
            records[i].points = this.calculatePoints(record.transactionAmount);
            records[i].month = new Date(parseInt(record.timestamp) * 1000).toLocaleString('default', { month: 'long' });;
        })

        //get a sorted list of users
        let users = _.uniqBy(records, 'userId');
        const array_column = (array, column) => array.map(e => e[column]);
        users = array_column(users, 'userId');
        users.sort();
        
        let tables = []
        let result;
        users.forEach(user => {
            //console.log("USER", user)

            //filter transactions by user
            let ledger = records.filter(transaction => transaction.userId === user)
            //filter transactions by user, by month
            let rawTransactionsByMonth = _.uniqBy(ledger, 'month');
            //console.log('rawTransactionsByMonth', rawTransactionsByMonth)
            let transactionsByMonth = []
            transactionsByMonth = array_column(rawTransactionsByMonth, 'month');
            
            let trans // running out of var names
            transactionsByMonth.sort()
            transactionsByMonth.forEach(month => {
                trans = ledger.filter(tran => tran.month === month)
                //add points to result set
                let points = trans.map(record => {
                    return record.points
                }).reduce((acc, current) => {
                    return acc + current
                })

                tables.push({ user: user, month: month, points: points })
                //console.log("MONTH PER USER", trans, points)
            })

            //console.log("USER TABLE", tables)

        })

        let finalResult = []
        users.forEach(user => {

            let filt = tables.filter(table => table.user === user)
            
            //calculate total points, per user, per month
            let total = filt.map(record => {
                return record.points
            }).reduce((acc, current) => {
                return acc + current
            })
            // add totals row
            filt[filt.length] = { user: '', month: 'Total', points: total }

            filt.forEach(rec => {
                finalResult.push(rec)
            })

        })

        result = { users: users, table: finalResult }

        //console.log("RESULT", result)

        return result;
    }

}
