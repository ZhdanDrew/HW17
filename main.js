const data = {a: 10, b: 20};

function sol1(data) {
  const P = (data.a + data.b) * 2; 
  const S = data.a * data.b;

  return {s: S, p: P};
}

const result = sol1(data);
console.log(result); 
