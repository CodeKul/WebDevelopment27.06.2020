let divs = document.querySelectorAll('div');

for (let i in divs)
{
      divs[i].onclick = changeBackground;
}

function randomColor() 
{
    const rnd = 'rgb(' + Math.random(255)*255 + ',' + Math.random(255)*255 + ',' + Math.random(255)*255 + ')';
    console.log(rnd);
    return rnd;
     //Output : rgb(123,434,43)
}  

function changeBackground (event)
{

     //document.getElementById('div1').setAttribute("style","background-color:"+randomColor());
     console.log(event);
     event.target.setAttribute("style","background-color:"+randomColor());
     //event.target.innerHTML = "<h1>Clicked on the</h1>"+event.target.id;
     //event.target.text="We clicked on this DIV";
     //alert(event.target.id);
}


// function submitStudentInfo()
// {
//     alert ("Student Info Submitted");
// }


// function validate()
// {
//     let val = document.getElementById('Name').value;
//     console.log(val);
//     if (val=='')
//     {
//         document.getElementById('valName').innerHTML='';
//         return;
//     }
//     var matches = val.match(/\d+/g);
//     if (matches != null) 
//     {
//         document.getElementById('valName').innerHTML='Funny, There is a number in a Name';
//     }
// }



// function randomColor() {
//     const rnd = 'rgb(' + Math.random(255)*1000 + ',' + Math.random(255)*1000 + ',' + Math.random(255)*1000 + ')';
//     console.log(rnd);
//     return rnd;
// }  

// function changeBackground(event)
// {
//     event.target.style.backgroundColor = randomColor();
// }

//const divs = document.querySelectorAll('div');

// for (let i = 0; i < divs.length; i++) {
//     divs[i].onclick = function(e) {
//       //e.target.style.backgroundColor = bgChange();
//       changeBackground(e);
//     }
//   }


// function a(event)
// {
//  alert("in a");
//  event.stopPropagation();
// }
// function b()
// {
//     alert("in b");
// }
// function c()
// {
//     alert("in c");
// }
// function d()
// {
//     alert("in d")   ;
// }

// function dos()
// {
//     alert('b');
// }
// function doSomething () {
//     return new Promise ((resolve, reject)=>{

//         setTimeout(alert,2000,"Hello From A");

//     });
// }
// doSomething()
//     .then(dos());