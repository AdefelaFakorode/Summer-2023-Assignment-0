class MySolution {
  countDownSum(num) {
    if (num === 1) {
      return 1; 
    } else {
      return num + this.countDownSum(num - 1);
    }
  }
}

let studentSolution = new MySolution();
console.log(studentSolution.countDownSum(9));


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;