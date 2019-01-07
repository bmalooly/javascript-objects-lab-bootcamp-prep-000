var recipes = {
  'breakfast': 'huevos rancheros',
  'lunch': 'taquitos',
  'dinner': 'enchiladas'
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = 'value'
}