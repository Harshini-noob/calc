var disp=document.querySelector(".display");
function diplay(i){
    disp.value+=i;
}
function allClear(){
    disp.value="";
}
function calculate(){
    try{
        disp.value=eval(disp.value);
    }
    catch(error){
        disp.value="Error";
    }
    
}