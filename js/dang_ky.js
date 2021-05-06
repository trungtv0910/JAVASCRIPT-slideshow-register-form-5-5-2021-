var form_group = document.querySelectorAll(".form-group");
var count=0;
var massage_error=document.querySelector('.form-massage');
// với mã số
var masv_sv= document.getElementsByName("masv");
var id_masv=document.getElementById("masv");

// với họ và tên
var fullname= document.getElementById("fullname");
// với email
var email= document.getElementById("email");
// với giới tính
var sex= document.getElementsByName('sex');

// với checkbox
var hobby= document.getElementsByName('hobby');
// với select
var quocTich =document.getElementById("quocTich");

// với ghi chú
var note =document.getElementById('note');


function kiemTraChuaThoaManDK(bien1,ten)
{
    if(bien1.getAttribute('type')=='text'||bien1.getAttribute("name")=='note'||bien1.getAttribute("name")=='quocTich'){
        
        bien1.parentElement.querySelector(".form-massage").innerText=`Vui lòng nhập ${ten}`
        bien1.style="border:1px solid red";
   
        if(bien1.getAttribute('name')!='quocTich')
        {
            bien1.style.background ="#EAB159";
        }
    }
    else if(bien1.getAttribute('type')=='radio'||bien1.getAttribute('type')=='checkbox' )
    {
        // console.log(bien1.parentElement.parentElement)
        bien1.parentElement.parentElement.querySelector(".form-massage").innerText=`Vui lòng chọn ${ten}`
        bien1.parentElement.style="border:1px solid red";
    }
    
}
function ThoaManDk(bien1)
{
    if(bien1.getAttribute('type')=='text'||bien1.getAttribute("name")=='quocTich'||bien1.getAttribute("name")=='note'){
    bien1.parentElement.querySelector(".form-massage").innerText='';
    bien1.style="border:1px solid";}
    else if(bien1.getAttribute('type')=='radio'||bien1.getAttribute('type')=='checkbox')
    {
        bien1.parentElement.parentElement.querySelector(".form-massage").innerText=``;
        bien1.parentElement.style="border:1px solid black";
    }

}



 
function kiem_tra(){
    var count=0;
if(id_masv.value.length==0)
{
   kiemTraChuaThoaManDK(id_masv,'Mã sinh viên');
    count ++;
}
else{
    ThoaManDk(id_masv);
}
console.log(count)

if(fullname.value.length==0)
{
    kiemTraChuaThoaManDK(fullname,'Họ và tên');
   count++;
} else
{
    ThoaManDk(fullname);
    
} 
// email
var kiemtra_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.length==0)
{
    kiemTraChuaThoaManDK(email,'Email');
    count++;
}
else if(kiemtra_email.test(email.value)==false )
{
    kiemTraChuaThoaManDK(email,'Đúng định dạng email: VD trungtv@gmail.com');
    count++;
   
}
else if(kiemtra_email.test(email.value)==true )
 {
     ThoaManDk(email);
 }
//  gioiws tinhs
if(sex[0].checked==false && sex[1].checked ==false)
{
    kiemTraChuaThoaManDK(sex[0],'Giới tính');
    count++;
}else {
    ThoaManDk(sex[0]);
}
// sở thích
var kiemtra_hobby=0
for(var i=0;i<hobby.length;i++)
{
    if(hobby[i].checked==true)
    {
        kiemtra_hobby++;
    }
}
if(kiemtra_hobby==0)
{
    kiemTraChuaThoaManDK(hobby[0],'Sở thích');
    count++;
}
else
{
    ThoaManDk(hobby[0]);
}
// quốc tịch
if(quocTich.value.length==0)
{
    kiemTraChuaThoaManDK(quocTich,"Quốc tịch");
    count++;
}
else {
    ThoaManDk(quocTich);
}

//  ghi chú
if(note.value.length>200)
{
    kiemTraChuaThoaManDK(note,'ít hơn 200 ký tự ghi chú');
    count++;
}
else
{
    ThoaManDk(note);
}














 if (count !=0)
 {return false;} 
  else{
//   document.querySelector(".dk_thanhcong").style="display:''"
alert("Đăng Ký Thành Công")
      return true;}
  

}
function hien_thi(){
    
    if(hobby[hobby.length-1].checked)
    {
        // hobby[hobby.length-1].parentElement.querySelector('.hobby-defferent').style.display='';
        console.log(hobby[hobby.length-1].parentElement.querySelector(".hobby-defferent").setAttribute('style','display:""'))
    }
    else
    {
        hobby[hobby.length-1].parentElement.querySelector('.hobby-defferent').style.display='none'   
    }
}