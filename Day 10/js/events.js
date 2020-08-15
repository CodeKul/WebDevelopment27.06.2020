
function callAlert (event,text)
{
    alert ("Text :"+text);
    
    event.stopPropagation();
    event.stopDefault();
}

function deleteInfo(event)
{
    // let button = event.target;
    // let tile = event.target.parentElement;
    // let parentDiv = tile.parentElement;
    // parentDiv.removeChild(tile);
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    //let sdiv = document.getElementById(id);
    //sdiv.parentElement.removeChild(sdiv);
}

function newStudentTile()
{
    let sname = document.getElementById("sname").value;
    let sclass = document.getElementById("sclass").value;
    let scity = document.getElementById("scity").value;
    let parent = document.getElementById("StudentInfo");
    
    if (sname.length<5 || sclass.length<5 || scity.length<5 || scity=="" || sname=="" || sname=="")
    {
        alert ('Small Name. Please correct it');
        return;
    }
    
    let html =     
    `<div class="lightSBTile">
    <table>
        <tr>
            <td>Name</td>
            <td>${sname}</td>
        </tr>
        <tr>
            <td>Class</td>
            <td>${sclass}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>${scity}</td>
        </tr>
    </table>
    <button onclick="deleteInfo(event)">Delete Student Info</button>
    </div>
    `;
    let newElement = document.createElement('div');
    newElement.innerHTML = html;
    parent.appendChild(newElement);
}





function addStudent ()
{
    let sname = document.getElementById('sname').value;
    let sclass = document.getElementById('sclass').value;
    let scity = document.getElementById('scity').value;
    alert('In Add Student Info : '+sname+","+sclass+","+scity);

    document.getElementById('StudentInfo').innerHTML=
    document.getElementById('StudentInfo').innerHTML+
    "<div class=lightSBTile><p>"+sname+","+sclass+","+scity+"</div>";
}




 let divs = document.querySelectorAll('div');

 for (let i in divs)
 {
     divs[i].onclick = changeBackground;
 }

 function changeBackground()
 {
     document.getElementById('div1').setAttribute("style","background-color:"+randomColor());
 }



function addHTMLElement (parent,element,id,ihtml)
{
    let parentElement = document.getElementById(parent);
    let newElement = document.createElement(element);
    newElement.setAttribute('id',id)
    newElement.innerHTML = ihtml;
    parentElement.appendChild(newElement);
}
function removeElement (id)
{
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function deleteStudent (event)
{
    console.log(event.target.parentNode.id);
    removeElement(event.target.parentNode.id);
}

function createStudentTile ()
{
    let sname = document.getElementById("sname").value;
    let sclass = document.getElementById("sclass").value;
    let scity = document.getElementById("scity").value;
    
    let studentTile = `<div id='SingleStudentInfo' class='lightSBTile'>
                        <table>
                        <tr>
                        <td>Name</td>
                        <td>${sname}</td>
                        </tr>
                        <tr>
                        <td>Class</td>
                        <td>${sclass}</td>
                        </tr>
                        <tr>
                        <td>City</td>
                        <td>${scity}</td>
                        </tr>
                        </table>
                        <button onclick='deleteStudent(event)'>Delete</button>
                        </div>
                        `;
    addHTMLElement ('StudentInfo','div',sname+scity,studentTile);
}
//let divs = document.querySelectorAll('div');

// for (let i in divs)
// {
//      divs[i].onclick = changeBackground;
// }

 function randomColor() 
 {
     const rnd = 'rgb(' + Math.random(255)*255 + ',' + Math.random(255)*255 + ',' + Math.random(255)*255 + ')';
     console.log(rnd);
     return rnd;
     //Output : rgb(123,434,43)
 }  

// function changeBackground (event)
// {

//     //document.getElementById('div1').setAttribute("style","background-color:"+randomColor());
//     console.log(event);
//     event.target.setAttribute("style","background-color:"+randomColor());
//     event.target.innerHTML = "<h1>Clicked on the</h1>"+event.target.id;
//     //event.target.text="We clicked on this DIV";
//     //alert(event.target.id);
// }


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