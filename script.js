//js practices
let container=['sourik','souvik','sourav'];
console.log(container[1]); //souvik
console.log(container[3]); //undefined

let x=1;
let y='1';
console.log(x==y); //loose equality operator
console.log(x===y); //strict equality operator

// datatypes(primitive && non-primitives)
// primitives dt -> number/boolean/string/null/undefined
// non-primitives dt-> objects/arrays/functions -->also called references types

//objects
let product={
  id:'ID01',name:'laptop',price:99999,
};
console.log(product);
console.log(product.name); //accessing using dot(.) operator
console.log(product['price']);

let r={                   //let -> type, r->variable
  length:10,breadth:5,    // length,breadth -> property key
  draw:function(){        //draw() -> method
    console.log('Drawing');
  },
  paint:function(){ //paint() -> method created
  console.log('Painting');
  }
};
console.log(r);
console.log(r.draw());
console.log(r['length']);
r.paint();


