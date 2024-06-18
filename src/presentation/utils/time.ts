import moment from 'moment'

export const fromNow = (time: number) => {
  return moment(time).local().fromNow()
}

export const formateFromUnix = (time: number, format: string) => {
  return moment(time).local().format(format)
}

export const formateFromDate = (date: Date, format: string) => {
  return moment(date).local().format(format)
}

export const formateFromTo = (
  dateTime: string,
  fromFormat: string,
  format: string,
) => {
  return moment(dateTime, fromFormat).format(format)
}

export const formateToDate = (time: number) => {
  return moment.unix(time).local().toDate()
}

export const formateToDateFromUnix = (time: number) => {
  return moment(time).local().toDate()
}

export const getTimeInMillisecond = () => {
  return moment().valueOf()
}

export const isToday = (time: number) => {
  const date = moment(time)
  return date.isSame(moment(), 'day')
}

export const isYesterday = (time: number) => {
  const date = moment(time)
  const yesterday = moment().subtract(1, 'days')
  return date.isSame(yesterday, 'day')
}

export const isOldEnoughDate = value => {
  const currentDate = moment()
  const sixteenYearsAgo = moment(value).subtract(16, 'years')
  return currentDate.isAfter(sixteenYearsAgo)
}
