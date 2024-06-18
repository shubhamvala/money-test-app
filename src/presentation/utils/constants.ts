// import { EventEmitter } from 'fbemitter'

// export const emitter = new EventEmitter()

export const defaultPurchaseValue = {
  currency: 'USD',
  affiliation: 'The CoBuilders',
  itemBedroomName: 'Bedroom',
  itemBathroomName: 'Bathroom',
}

export const defaultRegion = {
  latitude: 37.0902,
  longitude: -95.7129,
  latitudeDelta: 60,
  longitudeDelta: 60,
}

export const delta = {
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

export const constantRef: { permissionDialog: any; updateDialog: any } = {
  permissionDialog: null,
  updateDialog: null,
}

export const dateFormat = {
  serverDateFormat: 'YYYY-MM-DD',
  serverTimeFormat: 'HH:mm:ss',
  serverDateTimeFormat: 'YYYY-MM-DD[T]HH:mm:ss',
  dateFullMonthFormat: 'DD MMMM YYYY',
  dateSmallMonthFormat: 'DD MMM, YYYY',
  dateTimeFullFormat: 'MM/DD/YYYY, hh:mm A',
  dateFormat: 'MM/DD/YYYY',
  timeFormat: 'hh:mm a',
  timeMinuteFormatServer: 'mm:ss',
  dayFormat: 'DD',
  monthFormat: 'MM',
  yearFormat: 'YYYY',
}

export const sortType = {
  idDesc: 'id DESC',
  gigIdDesc: 'gig.id DESc',
  invIdDesc: 'inv.status ASC, gig.id DESC',
}
