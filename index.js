var recipes = {
  'breakfast': 'huevos rancheros',
  'lunch': 'taquitos',
  'dinner': 'enchiladas'
}
var newObj = { key, variable }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
 var newObj = 
 
 return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}