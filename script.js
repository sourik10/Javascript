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

//factory fucntions
// function createR(){   //using factory functions
//                       //no input pararmeter
//   let r={                   //let -> type, r->variable
//   length:10,breadth:5,    // length,breadth -> property key
//   draw:function(){        //draw() -> method
//     console.log('Drawing');
//     }
//   };
//   return r;
// }
// let x=new createR();
// console.log(x);
// x.draw();

// x.erase=function(){  //adding methods outside the function
//   console.log("Erase rectangle");
// }
// x.erase();

// delete x.erase; // deleted x.erase method()
// // x.erase(); //na bcoz erase() method is eliminated in the prev line.

function createR(len,wid){   //using factory functions
                              //yes input pararmeter
  return r={                   //let -> type, r->variable
   length:len,breadth:wid,    // length,breadth -> property key
   draw:function(){        //draw() -> method
     console.log('Drawing');
     }
  };
  // return r;
}
let x=createR(5,6);
console.log(x);



//constructor functions

function Rectangle(a,b){
  this.length=a;
  this.breadth=b;
  this.perimeter=2*(a+b);
  this.draw=function(){console.log('drawing')};
}

let r=new Rectangle(10,20);
console.log(r);
r.draw();


//pass by value VS pass by reference

// increment(a){a++;}  //pass by value
// let a=10;
// increment(a);
// console.log(a);

// let a={value:10};  //pass by reference
// incr(a){a.value++;}
// incr(a);
// console.log(a);


//For-In loop
let r={
  length:10,breadth:5
}
for(let key in r){ 
  console.log(key,r[key]);
}


//FOR-OF LOOP
// for(let key of r){ //object r is not iterable
//   console.log(key,r[key]);
// }

 for(let key of Object.entries(r)){ 
   console.log(key);}
//   [ 'length', 10 ]
// [ 'breadth', 5 ]
 for(let key of Object.keys(r)){ 
   console.log(key);} //length breadth
   

//iteration cloning
let src={ abc:10,def:20,pqr:30 };
let dest={};
for(let key in src){
  dest[key]=src[key];
}
console.log(dest);

//object cloning
let src={ abc:10,def:20,pqr:30 };
let dest=Object.assign({},src);
console.log(dest);

//spread cloning
let src={ abc:10,def:20,pqr:30 };
let dest={...src};
console.log(dest);









