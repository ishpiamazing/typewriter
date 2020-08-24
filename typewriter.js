const sentence = "hello there from lighthouse labs";
let num = 0;
for(const char of sentence) {
  
  setTimeout(()=>process.stdout.write(char),num);
  num = num + 500;
  
}
setTimeout(()=>process.stdout.write('\n'), (sentence.length*500));





