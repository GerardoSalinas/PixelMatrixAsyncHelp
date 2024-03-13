/**
 * @Author Emilio.Molina@unah.hn
 * @version 0.1.0
 * @date  2024/02/25
 * @since 2024/02/21
 */

 class Action{
	 constructor(){
		 
	 }
	 createDivs (amount){
		 
		 let list = [];
		 
		 while(amount>0){
			 
			 list.push("<div></div>");
			 amount--;
		 }
		 return list.join("");
	 }
	 
	 paint(event){
		 let me = this;
		 
		 me.style.backgroundColor = "blue";
	 }
	 
	 
	 send (pixels,inputPixels,domObj, event){// inputPixles en lugar de inputPixels
		
		 let action = this;
		 
		 let xhr = new XMLHttpRequest();
		 
		 xhr.open("POST", "service.jsp");
		 
		 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		 
		 xhr.addEventListener("readystatechange", action.processResponse.bind(xhr,domObj));
		 
		 	xhr.send(action.data(height,width,pixels));
		
	 }
	 
	 data(height,width,pixels){
		 
		 let list = [];
		 let pixel
		 for(pixel of pixels){
			 
			 if (pixel.style.backgroundColor === ""){ 
				 list.push(0);
				 
			 }else{
				 list.push(1);
				 
			}
			 
		 }
		 
		 let data = list.join("");
 	
 		return `?h=${height}&?w=${width}&?pixels=${data}`;
	 }
	 
	 
	 processResponse(domObj, event){
		 
		 let xhr = this;
		
		if(xhr.readyState == 4 && xhr.status==200){
			
			let obj = JSON.parse(xhr.responseText);
			
			if (obj.status){
				
				domObj.parentNode.style.backgroundColor = "green";
				domObj.parentNode.style.color = "white";
				domObj.innerHTML = `${obj.message}, la ruta del archivo es : ${obj.path}`;
			}else{
				domObj.parentNode.style.backgroundColor= "yellow";
			}
			}else{
				domObj.parentNode.style.backgroundColor= "red";
			}
		 
	 }
	 
	 
 }
