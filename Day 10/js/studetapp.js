
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



