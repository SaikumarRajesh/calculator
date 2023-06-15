var headdiv =document.createElement('div')
headdiv.setAttribute('class','card-header')

var heading=document.createElement('h1')
heading.setAttribute('id','title')
heading.innerHTML="Calculator"

headdiv.append(heading)
document.body.append(headdiv)

var div =document.createElement('div')
div.setAttribute('class','Calcydiv')

var input=document.createElement('input')
input.setAttribute('id','result')
div.append(input)

var buttonValues = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '+', 'C', '0', '=', '-'];
for(var i=0;i<16;i++)
{
    var button=document.createElement('button')
    button.innerHTML= buttonValues[i];
    button.addEventListener('click',infunc)
    if(buttonValues[i] === 'C')
    {
        button.setAttribute('id','clear')
    };
    if(buttonValues[i] === '+')
    {
        button.setAttribute('id','add')
    }
    if(buttonValues[i] === '-')
    {
        button.setAttribute('id','subtract')
    }
    if(buttonValues[i] === '*')
    {
        button.setAttribute('id','multiplication')
    }
    if(buttonValues[i] === '/')
    {
        button.setAttribute('id','division')
    }
    if(buttonValues[i] === '=')
    {
        button.setAttribute('id','equal')
    }
    if(buttonValues[i] === '1')
    {
        button.setAttribute('id','1')
    }
    if(buttonValues[i] === '2')
    {
        button.setAttribute('id','2')
    }
    if(buttonValues[i] === '3')
    {
        button.setAttribute('id','3')
    }
    if(buttonValues[i] === '4')
    {
        button.setAttribute('id','4')
    }
    if(buttonValues[i] === '5')
    {
        button.setAttribute('id','5')
    }
    if(buttonValues[i] === '6')
    {
        button.setAttribute('id','6')
    }
    if(buttonValues[i] === '7')
    {
        button.setAttribute('id','7')
    }
    if(buttonValues[i] === '8')
    {
        button.setAttribute('id','8')
    }
    if(buttonValues[i] === '9')
    {
        button.setAttribute('id','9')
    }
    if(buttonValues[i] === '0')
    {
        button.setAttribute('id','0')
    }
    div.append(button)
}


function infunc()
{
    if (this.innerHTML === 'C')
    {
        input.value = '';
    }
    else if (this.innerHTML === '=') 
    {
        
       try 
       {
         input.value = eval(input.value);
       } 
       catch (error) 
       {
          alert('Only numbers are allowed')
       }
        
    }
   
    else 
    {
        input.value += this.innerHTML;
    }
}  


document.body.append(div);

var footerdiv =document.createElement('div')
footerdiv.setAttribute('class',"card-footer text-muted")

var para=document.createElement('p')
para.innerHTML="This calculator page was developed by HTML,CSS,Javascript & Bootstrap"
para.setAttribute('id','description')

footerdiv.append(para);
document.body.append(footerdiv)



