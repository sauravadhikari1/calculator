let buttons=document.querySelectorAll('.btn');
let string =''
let display=document.querySelector('.display2')
let arr= Array.from(buttons)
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== 'x'){
            e.target.innerHTML= '*'
        }
       
        
        if(e.target.innerHTML== '='){
            string=eval(string);
           
            display.textContent=string
        
        }
        else if(e.target.innerHTML== 'C' || e.target.innerHTML== 'AC' ){
            string="";
            document.querySelector('input').value=string
            display.textContent='0'
        }
        else{
            
            string=string+e.target.innerHTML
            document.querySelector('input').value=string
        }

    })
})
