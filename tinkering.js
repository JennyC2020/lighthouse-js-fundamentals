let n = 150;


for (let n = 100; n <= 200; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (n % 3 === 0){
    console.log("loopy");
  }
  else if (n % 4 === 0){
    console.log("Lighthouse");
  }
  else {
    console.log(n);
  }
}