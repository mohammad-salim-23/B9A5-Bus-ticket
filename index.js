function scrollsection(){
    const target = document.getElementById('target')
    target.scrollIntoView({
        behavior:'smooth'
    })
}
function applybtn(){
    
}
let seatLeft=40;
let seatBook=0;
let totalprice=0;
let grandprice=0;
let discountprice=0;
const allBtn = document.getElementsByClassName('btn')
    for(const btn of allBtn){
        btn.addEventListener('click', function(){
           

            seatLeft--;
            seatBook++;
            if(seatBook>=5){
                alert("You don't buy no more ticket ")
                return;
            }
            btn.style.backgroundColor = '#1DD100';
            SetInnerText('remaining-seat',seatLeft);
            SetInnerText('seat-count',seatBook);
            btn.setAttribute('disabled',true);
            // append child taable
            const ticektsection = document.getElementById('table-information')
            const p = document.createElement('p');
            p.innerText =btn.innerText;
            const p1 = document.createElement('p');
            p1.innerText="Economy";
            const p2 = document.createElement('p');
           
            p2.innerText=550;
            ticektsection.appendChild(p);
            ticektsection.appendChild(p1);
            ticektsection.appendChild(p2);

            

            totalprice+=550;
            SetInnerText('total-price',totalprice);
            grandprice=totalprice;
            SetInnerText('grand-price',grandprice);   

            
        })
    }
    const btn = document.getElementById("apply-btn");
    btn.addEventListener('click',function(){
        if(seatBook===4){
            const apply = document.getElementById('apply-btn')
            apply.removeAttribute('disabled')
           
         const couponCode = document.getElementById("input-field").value;
         if(couponCode==="NEW15"){
            discountprice=totalprice*0.15;
            grandprice=totalprice-discountprice;
            SetInnerText('grand-price',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+discountprice.toFixed(2);
            discountPrice.appendChild(p1);
            
            const hawa= document.getElementById('gaibul-hawa')
            hawa.classList.add('hidden')
            
         }
         else if(couponCode==="Couple 20"){
            discountprice=totalprice*0.20;
            grandprice=totalprice-discountprice;
            SetInnerText('grand-price',grandprice);
            const discountPrice = document.getElementById('discount-price');
            const p = document.createElement('p');
            p.innerText = "Discount Price"
            discountPrice.appendChild(p);
            const p1 = document.createElement('p');
            p1.innerText = "BDT"+discountprice.toFixed(2);
            discountPrice.appendChild(p1);
            
            const hawa= document.getElementById('gaibul-hawa')
            hawa.classList.add('hidden')

         }else{
            alert('wrong coupon Sir')
         }

            
        }

    })
    function SetInnerText(elementId,value){
        document.getElementById(elementId).innerText=value;
    }

