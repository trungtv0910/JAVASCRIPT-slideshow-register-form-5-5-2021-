document.addEventListener("DOMContentLoaded",function(){
   
    var slide=document.querySelectorAll(".anh ul li");

    var nut= document.querySelectorAll(".list-nut li");



    var chiSoHienTai =0;
    var soLuongSlice =slide.length-1;
    var trangThai="dangDungYen";
    

    var nutPhai1=document.querySelector(".nut-next");
    nutPhai1.addEventListener("click",nutPhai);
    var nutTrai1=document.querySelector(".nut-pre");
    nutTrai1.addEventListener("click",nutTrai);


    function nutPhai(){
    
        if(trangThai=="dangChuyenDong")
        {
            return false;
        }
       trangThai='dangChuyenDong';
       var trangThai2ChuyenDong=0;
        var ptHienTai=slide[chiSoHienTai];
        var nutHienTai=nut[chiSoHienTai];
      
        if(chiSoHienTai <soLuongSlice)
        {
            chiSoHienTai++;
        }
        else
        {
            chiSoHienTai=0;
        }
    
    var pTTiepTheo=slide[chiSoHienTai];
    var nutTiepTheo=nut[chiSoHienTai];

    ptHienTai.classList.add("bienMatKhiAnNext");
    pTTiepTheo.classList.add("diVaoKhiAnNext");
    // nút slide show
    nutTiepTheo.classList.add("nut-do")
    nutHienTai.classList.remove("nut-do")
    
    var chuyenDongHienTai= function(){
        ptHienTai.classList.remove("bienMatKhiAnNext");
        ptHienTai.classList.remove("diVaoKhiAnNext");
        ptHienTai.classList.remove("active");
        
        
       trangThai2ChuyenDong++;
       if(trangThai2ChuyenDong==2)
       {
           trangThai='dangDungYen';
       }
        
       };
    var chuyenDongTiepTheo =function(){
        pTTiepTheo.classList.remove("diVaoKhiAnNext")
        pTTiepTheo.classList.add("active");
     trangThai2ChuyenDong++; 
     if(trangThai2ChuyenDong==2)
    {
        trangThai='dangDungYen';
    }
        

    };
    ptHienTai.addEventListener("webkitAnimationEnd",chuyenDongHienTai);
    pTTiepTheo.addEventListener("webkitAnimationEnd",chuyenDongTiepTheo)
    
    
    
    
    mauchu(chiSoHienTai)
    }
    setInterval(nutPhai,5000)
    
    function nutTrai(){
       
        if(trangThai=="dangChuyenDong")
        {
            return false;
        }
       trangThai='dangChuyenDong';
       var trangThai2ChuyenDong=0;
        var ptHienTaiLeft=slide[chiSoHienTai];
        var nutHienTai=nut[chiSoHienTai];
        if(chiSoHienTai >0)
        {
            chiSoHienTai--;
        }
        else
        {
            chiSoHienTai=soLuongSlice;
        }
    
    var pTTiepTheoLeft=slide[chiSoHienTai];
    var nutTiepTheo=nut[chiSoHienTai];
       
      nutTiepTheo.classList.add("nut-do");
      nutHienTai.classList.remove("nut-do")
    //
    
    ptHienTaiLeft.addEventListener("webkitAnimationEnd",function(){
     this.classList.remove("active");
     this.classList.remove("bienMatKhiAnNext")
     
     trangThai2ChuyenDong++; 
     if(trangThai2ChuyenDong==2)
    {
        trangThai='dangDungYen';
    }
    
    
    });
    
    pTTiepTheoLeft.addEventListener("webkitAnimationEnd",function(){
        pTTiepTheoLeft.classList.remove("diVaoKhiAnNext");
        pTTiepTheoLeft.classList.add("active");
    
        trangThai2ChuyenDong++; 
        if(trangThai2ChuyenDong==2)
       {
           trangThai='dangDungYen';
       }
    })
    pTTiepTheoLeft.classList.add("active");
    pTTiepTheoLeft.classList.add("diVaoKhiAnNext");
    ptHienTaiLeft.classList.add("bienMatKhiAnNext");
    
    mauchu(chiSoHienTai);
    }
    
    function mauchu(index){
       
        var tieude=document.querySelector(".tieu-de")
        if(index==2)
        {
            tieude.classList.add("mauChuDen");
        } 
        else
        {
            tieude.classList.remove("mauChuDen");
          
        }
    
    }
        for (let i = 0; i < nut.length; i++) {
          
            nut[i].addEventListener("click",function(){
                
                for(var j=0;j<nut.length;j++)
                {
                    nut[j].classList.remove("nut-do");
                    slide[j].classList.remove("active")
                }
                nut[i].classList.add("nut-do");
                slide[i].classList.add("active");
                chiSoHienTai=i;
               
            })
        }
      
      
    
 





},false);
