import identity from 'lodash/identity'
import pickBy from 'lodash/pickBy'

export const omitNil = obj => pickBy(obj, identity)
