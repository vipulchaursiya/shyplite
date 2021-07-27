


async function part1(){
  try{
    //1-done
    let filled = Array.apply(null, { length: 100 }).map(function (_, i) {
      return i + 1;
    });
    // console.info(filled);
    
    /// 2-done
    let evenArray = filled.filter(el => el%2==0 )
    // console.info(evenArray);

    ///2 -done
   var result = await getSquare(3);

    //// 4 -done
    let evenSqureArray = evenArray.map(el => el*el)
    // console.log(evenSqureArray)


    let sumOfevenSqureArrayEle = evenSqureArray.reduce((el,i) => el + i, 0 )
    // console.log(sumOfevenSqureArrayEle)

      
    // 5 not able to done in time 
    let resultantArr = [], errCount = 0
    // filled.forEach( element => {
    //   if(element %2 == 0){
    //     getSquare(element)
    //     .then( el =>  resultantArr.push(el))
    //     .catch(err=> console.log(err))
    //   }
    // });


    console.log(resultantArr,errCount,resultantArr.length  )

    resultantArr = await Promise.all(filled.map(el => {if(el%2 ==0){getSquare(el)}})).then(results => {
      // do something with results here
      // resultantArr.push(results)
    })
  } catch(err){
    console.log(err)
  }
}





function part2(params) {

  ///6
  let t = 'title'
  let s = `<button>${t}</button>`

  ////7
  let unOrderedlist = (n) =>{
    let temp = new Array(30).fill(0)
    let val = temp.map((el,i)=> `${i+1} .<li></li>` ).join('\n')
    return val
  }
  // console.log(unOrderedlist)

  ///8
  let evenUnOrderedlist = (n) =>{
    let temp = new Array(30).fill(0)
    let val = temp.map((t,i)=> {  if((i +1) % 2 == 0)  return `${i+1} .<li></li>` }).filter(el=> !!el).join('\n')
    return val
  }
  // console.log(evenUnOrderedlist)

  ///9
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, getRandomArbitrary(1,3) * 1000);
  });

  let arr = new Array(10).fill(0).map(()=> myPromise)
  Promise.all(arr).then((values) => {
    console.log(values);
  });


}


function getSquare( elem){
  return new Promise( (resolve, reject) =>{
    if(elem % 2 == 0) resolve (elem*elem)
    else reject("number should be even")
  })
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}



part2()


part1()
