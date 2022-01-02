import { utcToZonedTime } from 'date-fns-tz'

export const getKstDate = (date) => {
  const timeZone = 'Asia/Seoul'
  return utcToZonedTime(date, timeZone)
}
