import {selectAll} from './db'

export const getAllBillings = () => {
  return selectAll('billing');
}

export const getAllCompanies = () => {
  return selectAll('company');
}

export const getAllSubcribers = () => {
  return selectAll('subscribers');
}
