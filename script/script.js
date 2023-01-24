"use strict"

     

    let region = [ "Buxoro ", "Farg'ona ", "Jizzax ", "Namangan ", "Navoiy ", "Qashqadaryo ", "Qaraqalpog'iston Respublikasi", "Samarqand ", "Sirdaryo ", "Surxondaryo ", "Toshkent Shahri", "Toshkent ", "Xorazm "]

        const cards = $$(".fs-2")

    function dinamikOption(){
        region.forEach((el) =>{
            let option = createElement("option" , "item", el)

            $("#region").appendChild(option)                                                    
        })
    }
    dinamikOption()

const getTime = async(region="Andijon") =>{
    console.log(region);
    try{
        
        const todey =await fetch(`https://islomapi.uz/api/present/day?region=${region}`)
        const result =await todey.json();
        const week = await fetch(`https://islomapi.uz/api/present/week?region=${region}`)
        const weekResult = await week.json()
        console.log(weekResult);
        // console.log(result);

        const {weekday,date , } = result;
        $("#data-time").innerHTML = ` ${date } ${ weekday } `

        localStorage.setItem("day" , JSON.stringify(result))
       
    }catch(err) {
              
    }        
}
getTime()

    function renderTime(){
        let data = JSON.parse(localStorage.getItem("day"))
        console.log(data);
        
        const{times:{
            asr ,
            hufton,
            peshin,
            quyosh, 
            shom_iftor, 
            tong_saharlik

        }} = data;

        
        cards[0].innerHTML = tong_saharlik 
        cards[1].innerHTML =  quyosh
        cards[2].innerHTML = peshin 
        cards[3].innerHTML = asr 
        cards[4].innerHTML = shom_iftor 
        cards[5].innerHTML = hufton 

        
    }
    renderTime()



$("#region").addEventListener("click" , (e)=>{
            localStorage.setItem("select-region" , e.target.value)
        $("#select-region").innerHTML = e.target.value
    switch(e.target.value){
        case "Farg'ona": getTime("marg'ilon") ; break; 
        case "Qaraqalpog'iston Respublikasi": getTime("nukus"); break;
        case "Qashqadaryo": getTime("qarshi"); break;
        case "Surxondaryo": getTime("Termiz");  break;
        case "Buxoro": getTime("buxoro");  break;
        // case "Andijon": getTime("andijon");  break;
        case "Namangan": getTime("namangan");  break;
        case "Jizzax": getTime("jizzax");  break;
        case "Sirdaryo": getTime("guliston");  break;
        case "Xorazm": getTime("urganch");  break;
        case "Navoiy": getTime("Navoiy");  break;
        case "Toshkent": getTime("Toshkent");  break;
        default: getTime("Toshkent")
    }
    getTime(region)
})



