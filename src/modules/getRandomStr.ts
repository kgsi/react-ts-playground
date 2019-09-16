const getRandomStr = () => {
  const LENGTH = 8; //生成したい文字列の長さ
  const SOURCE = "abcdefghijklmnopqrstuvwxyz0123456789"; //元になる文字
  let result = "";

  for (let i = 0; i < LENGTH; i++) {
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }

  return result; //p9zh1ziw
};

export default getRandomStr;
