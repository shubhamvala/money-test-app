export const getMetersFromMiles = (miles: number): number => {
  if (miles && !isNaN(miles)) {
    return miles * 1609.34
  }
  return 0
}
