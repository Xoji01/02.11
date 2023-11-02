function dlName (a,b,c){
    let name = [a,b,c]
    let dlName = name.reduce((a, b) => (b.length > a.length) ? b : a) 
    return dlName
  };
  let maxname = dlName('Alex', 'George', 'Michael') 
  console.log(maxname);