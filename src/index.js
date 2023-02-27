
// You should implement your task here.
module.exports = function towelSort (matrix) {
 let res = []
  if (!matrix) {
    return []
  } 
  else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          res.push(matrix[i][j])
        }
      
        } else {
          for (let j = 0; j < matrix[i].length; j++) {
            matrix[i].sort((a, b) => b - a)
            res.push(matrix[i][j])
          }
        }
    
    } 
  }
  return res
}