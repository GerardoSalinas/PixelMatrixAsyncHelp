/**
 *
 * @Author Emilio.Molina@unah.hn
 * @version 0.1.0
 * @date  2024/02/25
 * @since 2024/02/21
 */

 let action = new Action();
 let form = document.querySelector("div#form"); 
 let width = 25;
 let height = 25;
 
 /*let widthInput = document.querySelector("#width");
 widthInput.value = width;
 
 let heightInput = document.querySelector("#height");
 heightInput.value = height;
 */
 
 let html = action.createDivs(width*height);
 form.innerHTML += html;
 
 let pixels = document.querySelectorAll("div#form > div ");
 
 for (let pixel of pixels){
	 
	 pixel.addEventListener("mouseover", action.paint);
	 
 }
 let domObj = document.querySelector("div#answer");
 let inputPixels = document.querySelector("#pixels");
 let send = document.querySelector("input#sendButton");
 send.addEventListener("click", action.send.bind(action,pixels,inputPixels,domObj));

 
