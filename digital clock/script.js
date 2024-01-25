
setInterval
(()=>

    {
        let a=new Date()
        let b=a.getHours()
        if(b.toString().length==1){
            b='0' +b;
        }
        document.querySelector(".hour").innerHTML=b;
        let c=a.getMinutes()
        if(c.toString().length==1){
            c='0' +c;
        }
        document.querySelector(".min").innerHTML=c;
        let d=a.getSeconds()
        if(d.toString().length==1){
            d='0' +d;
        }
        document.querySelector(".sec").innerHTML=d;
        // let f=a.toDateString()
        // document.querySelector(".date").innerHTML=f;
        

    },1000)
