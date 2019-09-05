const preTreatmentDate = (date) => {
  try {
    if(date.includes('/')) {
      const dateArr = date.split('/')
      const yy = dateArr[0]
      const mm = dateArr[1]
      const dd = dateArr[2]
      if(yy.length === 2 && (mm * 1) <= 12 && (yy * 1) <= 31 ) return dateArr.reduceRight((p, v) => p + '/' + v)
      else if(yy.length == 4 && (mm * 1) <= 12 && (dd * 1) <= 31) return date
    } else if (date.includes('-')){
      const dateArr = date.split('-')
      const mm = dateArr[0] * 1
      const dd = dateArr[1] * 1
      const yy = dateArr[2]
      if(yy.length == 4 && dd <= 31 && mm <= 12) return date
    }
    return null
  } catch (e) {
    return null
  }
}

const  getFormatDate = (date) => {
  const year = date.getFullYear()
  let month = (1 + date.getMonth())
  month = month >= 10 ? month : '0' + month
  let day = date.getDate()
  day = day >= 10 ? day : '0' + day
  return year + '' + month + '' + day
}


function changeDateFormat(dates) {
  // Write the code that goes here
  const result = dates
    .map(v => preTreatmentDate(v))
    .filter(v => v !== null)
    .map(v => new Date(v))
    .filter(v => v.getFullYear())
    .map(v => getFormatDate(v))
  return result
}

var dates = changeDateFormat(["2010/03/30", "15/12/2016", "11-15-2012", "20130720"]);
for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}
