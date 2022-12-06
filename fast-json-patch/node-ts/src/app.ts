import jsonPatch, {
  applyOperation,
  applyPatch,
  compare,
  deepClone,
} from "fast-json-patch";

const oldOffer = {
  state: 0,
};

const newOffer = {
  state: 1,
};

// fe sends operations
const operations = compare(oldOffer, newOffer); //?

JSON.stringify(operations); //?

const offerInDB = {
  state: 0,
};

const result = applyPatch(offerInDB, operations); //?

result.newDocument; //?

//save operations to table

// deepClone(a) //?

// const operations = compare(a,b) //?
// JSON.stringify(operations) //?

// const result = applyPatch(a, operations) //?

// result[result.length  -1 ].newDocument //?

// try{
//   const error = jsonPatch.validate([{op: 'test', path: '/name/path', value: 'John'}], b) //?
//   console.log(error.message)//?
// }catch(e){
//   console.log(e) //?
// }

// operations.forEach(operation => {
//   const paths = operation.path.split('/') //?
//   console.log(operation)
// })
