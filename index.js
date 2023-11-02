let names = []
const getLongestName = (isMax, ...names) => {
  let dlname = []
  let korotName = names[0]

  if (isMax) {
      for (let i = 0; i < names.length; i++) {
          if (names[i].length > dlname.length) {
              dlname = names[i];
          }
      }
      return dlname;
  } else {
      return korotName
  }
}

console.log(getLongestName(false, 'alex',  'jasur'), (getLongestName(true, 'alex', 'jasur')));
function dlName (a,b){
    let imya = [a,b]
    let dlImya =  imya.reduce((a, b) => (b.length > a.length) ? b : a) 
    return dlImya
  };
  let maxIm = dlName('alex', 'jasur') 
  console.log(maxIm);