let statusWidth=false;
function rightPlace(){
    if(window.innerWidth<1180){
        let aside=document.createElement('aside');
        const asid='<div id="toc-container"><h2>Содержание</h2><div id="toc"></div></div><hr></hr>'
        aside.innerHTML=`${asid}`;
        aside.setAttribute('id','aside');
        document.querySelector('article').insertBefore(aside,document.querySelector('#blog'));
        statusWidth=true;
    }else{
        // statusWidth=false;
        let min1180=document.querySelector('body > main > article > aside');
        if(min1180=!undefined){

        }
        setTimeout(()=>{
            document.querySelector('#aside').remove();
            statusWidth=true;
        },3000);
    }
}
rightPlace();

setInterval(()=>{
    if(statusWidth==false){
        rightPlace();
        console.log('yest aside');
    }else{
        console.log('all oK');
        if(window.innerWidth>1180){
            statusWidth=false;
        }
    }
},3000);