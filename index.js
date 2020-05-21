console.log("this is drag and drop");

const imgBox=document.querySelector('.imgBox');
const whiteBoxs=document.getElementsByClassName('whitebox');

imgBox.addEventListener('dragstart',(e)=>{
    console.log("dragstart has been tiggered");
    e.target.className+=' hold';
    setTimeout(() => {
        e.target.className='hide';
        
    }, 0);
    
})

imgBox.addEventListener('dragend',(e)=>{
    console.log("dragend has been tiggered")
    e.target.className='imgBox';

})

for(whiteBox of whiteBoxs){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("dragover has been tiggered")
        
    })
    whiteBox.addEventListener('dragenter',(e)=>{
        console.log("dragenter has been tiggered")
        e.target.className+=(' dashed');

    })
    whiteBox.addEventListener('dragleave',(e)=>{
        console.log("dragleave has been tiggered")
        e.target.className='whitebox'

    })
    whiteBox.addEventListener('drop',(e)=>{
        console.log("drop has been tiggered")
        e.target.append(imgBox)

    })
}