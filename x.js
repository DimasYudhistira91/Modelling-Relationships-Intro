// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSYNTENCY
let author = {
  name: 'Dimas'
}

let course = {
  author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
  author: {
    name: 'Dimas'
  }
}


// HYBRID
let course = {
  author: {
    id: 'ref',
    name: 'Dimas'
  }
}