// https://www.codewars.com/kata/511ed4593ba69cba1a000002/train

// 给Function实现wrap
Function.prototype.wrap = wrap

// function wrap(fn){
//   // this: original
//   const original = this
//   // return 一个函数 能接收fn的rest参数
//   return (...arg)=>{
//     return fn.apply(this,[original].concat(arg))
//   }
// }

// // best practice 1
// function wrap(fn){
//   return fn.bind(this, this)
// }

// best practice 2
function wrap(fn){
  return (...args)=>fn(this,...args)
}

module.exports = wrap