/*
@startuml

Detail.reducers o-- PageParams : pageParams

class Detail.reducers << (R,green) Reducer>>{
    +pageParams: PageParams
    +devices: Array<Device>,
    +currentDevice: Device,
    +currentBundles: MobilePromotion,
    +plans: Array<Plan>,
    +selectedCapacity: string,
    +selectedColor: string,
    +selectedPlan: string,
    +inventories: Array<Inventory>,
}

'class PageParams {
'    deviceType: string,
'    pageType: string,
'    type: string,
'    offerType: string,
'    planCategory: string,
'}

@enduml

 */
// @flow
import { ACTION_SUBMIT } from './constants';
import { parser } from './formhelper';

export const initialState = {
  denomination: [50, 50000, 20000, 100000, 10000, 5000, 1000, 500, 100],
  result: null,
  leftover: null
};

export const calculateChange = (totalVal, denomination) => {
  // const denomination = [100000,50000,20000,10000,5000,1000,500,100,50];
  // sanitize input from action.payload
  let total = parser.currencyParser(totalVal);
  // sort through denomination descendingly
  let denominators = denomination ? denomination.sort((a, b) => Number(a) - Number(b)).reverse() : [];
  let leftover = 0;
  const result = [];
  // iterate through all possible denominators from the highest to lowest
  for (const denom of denominators) {
    if (total >= denom) {
      // find how many qty needed for current denominator
      const qty = Math.floor(total / denom);
      result.push([qty, denom]);
      // update total with the remainder value
      total = total % denom;
      // if no more remainder, exit loop
      if (total === 0) break;
    }
  }
  // whatever left from total is updated to leftover variable
  if (total > 0) leftover = total;
  return { result, leftover };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SUBMIT:
      if (action.payload) {
        const { result, leftover } = calculateChange(action.payload, state.denomination);
        return {
          ...state,
          result,
          leftover
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
