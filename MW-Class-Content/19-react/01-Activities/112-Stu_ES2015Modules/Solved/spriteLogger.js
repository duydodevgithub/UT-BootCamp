const spriteLogger = (spriteArr) => {
  let res = "";
  for (let i = 0; i < spriteArr.length; i++) {
    for (let j = 0; j < spriteArr[i].length; j++) {
      res += spriteArr[i][j];
    }
    res += "\n";
  }
  console.log(res);
};

export default spriteLogger;
