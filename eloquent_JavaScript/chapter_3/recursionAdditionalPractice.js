const categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' },
]

let makeTree = (catagories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(catagories, c.id))
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
)