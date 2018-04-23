import {selectAll} from '../db'

const getAllBillings = () => {
  return selectAll('billing');
}

export { getAllBillings }
