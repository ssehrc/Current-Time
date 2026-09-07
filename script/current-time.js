const dayjs = require('dayjs/locale/de')
dayjs.locale('de')
function date(){
    date = dayjs().locale('de').format('dddd, d MMMM, YYYY')
}