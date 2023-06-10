function titleCaseEdit(title) {
  let words = title.split('');

  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase + words[i].slice(i).toLowerCase();
  }

  let result = words.join('');
  
  return result;
}

console.log(titleCaseEdit("the cow jumped over the moon"));

// Do not edit this line;
module.exports = titleCaseEdit;