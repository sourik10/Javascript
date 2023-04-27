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
   
//cloning(iteration/object/spread)
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

//string methods
let x='good morning';
let y=x.split('');
console.log(y);

//template literals
let t=`hii good night
see
u soon`
console.log(t);


//js (basics 3)

let a='sourik';
console.log(typeof(a)); //string type
let b=new String('babbar');
console.log(typeof(b)); //object type

//date & time object
//methods from pdf notes or mdn
let date=new Date();
console.log(date);
let date2=new Date('2023','3','28','20');
console.log(date2);


//arrays
let arr=[96,47,33,39,54];

//insertion
arr.push(10); //adding at the last
arr.unshift(15); //adding at the first
arr.splice(2,0,31,32); //specific position

//deletion
arr.pop(); //delete from end
arr.shift() //delete from begin
arr.splice(1,3); //delete from specific position
arr.length=0; //emptying an array
arr.splice(0,arr.length); //alternative empty

console.log(arr);
console.log(arr.indexOf(39)); //element found
console.log(arr.indexOf(40)); //element not found
console.log(arr.indexOf(96,2));
console.log(arr.indexOf(96,1));

//alternative way to search
console.log(arr.includes(32));

//array object/reference
let arr=[
  {no:1,name:'love'},
  {no:2,name:'babbar'}
];
console.log(arr);
console.log(arr.indexOf({no:1,name:'love'})); //different references


let arr=[
  {no:1,name:'love'},
  {no:2,name:'babbar'}
];
let op1=arr.find(function(value){ return value.name='babbar';}) //callbackfunction1(predicate function)
let op2=arr.find(function(value){ return value.name='love'; }) //callbackfunction2(predicate function)

//shortcut method->arrow function
let op3=arr.find(op3=>op3.no==3); //undefined
console.log(op3);
let op4=arr.find(op4=>op4.no==2); //undefined
console.log(op4);


//concat
let a=[1,2,3,4];
let b=[1,2,3,4];
let c=a.concat(b);

//sort in arrays
let arr=[13,34,45,23,11];
let st=arr.sort(function(a,b){return a-b;}); //ascending order
console.log(st);

//filtering in arrays
let arr=[13,34,45,-23,-11];
let st=arr.filter(function(x){return x>=0;});  //arr.filter(value => value>=0 );
console.log(st);

