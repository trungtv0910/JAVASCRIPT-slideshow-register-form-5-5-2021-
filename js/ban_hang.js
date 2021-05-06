var ban_hang =document.getElementsByClassName("ban-hang")[0];
var tr=ban_hang.querySelectorAll('tr');
var thanh_tien=document.querySelectorAll(".thanh_tien_1sp");
var tong_tien=document.querySelector(".tong");
var giaTien=document.querySelector(".giaTien");
var checkbox=document.querySelectorAll('[type=checkbox]');
// ------------------------------------
function hien(min,max){
    var sum=0;
for(var i=1;i<tr.length-1;i++)
{   var kt_checkbox=tr[i].querySelectorAll('td')[0].querySelector('input');
    kt_checkbox.checked=false;
    tr[i].querySelectorAll("td")[3].querySelector('input').value=0;
    tr[i].querySelectorAll('td')[3].querySelector('input').disabled=true;
    tr[i].querySelectorAll('td')[4].innerText=0;
        var value_dongia=tr[i].querySelectorAll('td')[2].getAttribute('value');
    if(value_dongia>min && value_dongia<max)
    {
        tr[i].style.display="";
    }
    else
    {
        tr[i].style.display="none";
    }
    sum= tong(i,sum);
}
tong_tien.innerText=sum;
giaTien.innerText=sum;
}
//-------------------------------------------------------

var muc_gia=document.getElementById("muc-gia");
function myFunction(){
    document.querySelector(".form-massage").style.display="none";
    console.log(muc_gia.value)
    switch(muc_gia.value){
        case '1':    hien(0,200);break;
        case '2':  hien(200,500); break;
        case '3':  hien(500,1200);break;
        case '4':  hien(0,1200);break;
    }
}
//---------------------------------------------------

function myTinhTien(){
var sum=0;  
    for(var i=1;i<tr.length-1;i++)
    {   var kt_checkbox=tr[i].querySelectorAll('td')[0].querySelector('input');
        if(kt_checkbox.checked)
        {   
            var kt_soLuong=tr[i].querySelectorAll('td')[3].querySelector('input').value;
            
            if(kt_soLuong == 0)
            {
                tr[i].querySelectorAll("td")[3].querySelector('input').value=1;
                tr[i].querySelectorAll('td')[3].querySelector('input').disabled=false;

            }
        }
        else
        {
            tr[i].querySelectorAll("td")[3].querySelector('input').value=0;
            tr[i].querySelectorAll('td')[3].querySelector('input').disabled=true;   
        }
         var tien=tinh(i); 
            tr[i].querySelectorAll('td')[4].innerHTML=tien;
         sum= tong(i,sum);

    }
    tong_tien.innerText=sum;
    giaTien.innerText=`${sum} USD`;

}
//----------------------
function tinh(i){
    var  dongia=tr[i].querySelectorAll('td')[2].getAttribute('value') 
    var soluong=tr[i].querySelectorAll('td')[3].querySelector('input').value;
    var tien= soluong * dongia;
    return tien;
}
//------------------------
function tong(i,sum)
{
    var x= Number(tr[i].querySelectorAll('td')[4].outerText);
    if(x>0)
    {
        sum= sum+x;
    }
    return sum;
}
//-------------------------
var count=0;
function datHang(){
    
  for(var i=0;i<checkbox.length-1;i++)
  {
    if(checkbox[i].checked){count++;break}
    count=0;
  }
  count!=0? alert("Chúc Mừng Bạn Đặt Hàng Thành Công"): alert("bạn chưa chọn sản phẩm");
 
    
}
