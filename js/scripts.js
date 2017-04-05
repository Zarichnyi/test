          function getE(a) {
               return document.getElementsByClassName(a)[0];
          }
          var df = document.forms;
    
          /*кнопка редагування з головно вікна*/
          df.control.Editbtn.addEventListener('click', function () {
               df.editform.txt.innerHTML = getE('window').innerHTML;
               df.editform.style.display = 'block';
               getE('stylebox').style.display = 'none';
          });
          
          /*зберігаємо зміни в тескті*/
          df.editform.savebtn.addEventListener('click', function () {
               getE('window').innerHTML = df.editform.txt.value; 
               df.editform.txt.value = '';
          });
          
          /*додаємо новий/існуючий текст до існуючого*/
          df.editform.addbtn.addEventListener('click', function () { 
               getE('window').innerHTML += df.editform.txt.value; //
          });
          
          /*з'являється стилізаційна форма*/
          df.control.Stylebtn.addEventListener('click', function () { 
               getE('stylebox').style.display = 'block';
          });
          
          /*розмір тексту в поінтах*/
          for (var i = 0; i < df.textsize.length; i++) {
               df.textsize.elements[i].addEventListener('click', function () {
                    getE('window').style.fontSize = this.value;
               })
          };
          
          /*задаємо тип шрифту*/
          for (var i = 0; i < df.texttype.length; i++) {
               df.texttype.elements[i].addEventListener('click', function () {
                    getE('window').style.fontFamily = this.value;
               })
          };          

          var colorboxlist = document.querySelectorAll('.colorboxlist');
          var bgcolorlist = document.querySelectorAll('.bgcolorlist');
          
          /*табл. кольорів для фону */
          df.color.bgcolor.addEventListener('click', function () {
               document.getElementById('colorboxbg').style.display = 'table';
               document.getElementById('colorbox').style.display = 'none';
               for (var i = 0; i < bgcolorlist.length; i++) {
                    bgcolorlist[i].addEventListener('click', function () {
                         getE('window').style.background = this.style.background;
                    })
               }
          });
          
        /*табл. кольорів для тексту */
          df.color.txtcolor.addEventListener('click', function () {
               document.getElementById('colorbox').style.display = 'table';
               document.getElementById('colorboxbg').style.display = 'none';
               for (var i = 0; i < colorboxlist.length; i++) {
                    colorboxlist[i].addEventListener('click', function () {
                         getE('window').style.color = this.style.color;
                    })
               }
          });
         /*кнопка закриття табл.*/
         df.color.closesb.addEventListener('click', function(){
             document.getElementById('colorbox').style.display = 'none';
             document.getElementById('colorboxbg').style.display = 'none';
             getE('window').style.background = '';
             getE('window').style.color = '';
         });
            
          /*жирність тексту*/
          df.bolder.boldtxt.addEventListener('click', function () {
               if (this.checked) {
                    getE('window').style.fontWeight = 'bold';
               }
               else {
                    getE('window').style.fontWeight = 'normal';
               }
          });
          
          /*курсивність тексту*/
          df.bolder.italictxt.addEventListener('click', function () {
               if (this.checked) {
                    getE('window').style.fontStyle = 'italic';
               }
               else {
                    getE('window').style.fontStyle = 'normal';
               }
          });
          
          /*зникає головна панель /з'являэться форма для ств. таблиці/списку*/
          df.editform.addproperbtn.addEventListener('click', function () {
               getE('main').style.display = 'none';
               getE('addtable').style.display = 'block';
          });
          
          /*форма створення таблиці*/
          
            var inputs = document.getElementsByTagName('input');
            var permission;
            function validate (input){
            if (input.type == 'text'){
            if (input.value == '' || input.value!=input.value*1 || input.value >= 100 || input.value <= 0){
                input.style.borderColor = 'red';
                input.nextElementSibling.style.display = 'inLine';
                permission = false;
            } else {
                input.style.borderColor = 'green';
                input.nextElementSibling.style.display = 'none';
                permission = true;
                }
            }
        }
     
     for (var i = 0;i <inputs.length;i++){
         inputs[i].addEventListener('input', function(){
             validate(this);
         })
     }



          df.submit.tablebtn.addEventListener('click', function (){
            
         if (permission){
          var rows = df.chsnumberline.nmbrrows.value;
          var col = df.chsnumberline.nmbrcolumn.value;
          var widthcell = df.sizecell.widthcell.value;
          var heightcell = df.sizecell.heightcell.value;
          var sizeline = df.stylizeline.sizeline.value;
          var linetype = df.stylizeline.linetype.value;
          var colortp = df.stylizeline.colortp.value;
          var tablewindow = '<table style="border:' + sizeline + 'px ' + linetype + ' ' + colortp + ';">';     
          
          for(i=0; i<rows;i++){
               tablewindow += '<tr>';
          for (j=0;j<col;j++){
                    tablewindow += '<td style="width:' + widthcell + 'px; height:' + heightcell + 'px;' + 'border:' + sizeline + 'px ' + linetype + ' ' + colortp + ';"></td>';
               }
          tablewindow += '</tr>';
          }     
          tablewindow += '</table>';
          df.editform.txt.value += tablewindow;
          
          getE('addtable').style.display = 'none';
          getE('main').style.display = 'block';                   
         } else {
             alert('Внесіть корректні дані')
         }
         });

     /*зникає форма для створення табл./з'являєтся форма списку*/
          document.getElementById('table').onclick = function(){
               getE('listoption').style.display = 'none';
               getE('optiontable').style.display = 'block';
          }
          document.getElementById('list').onclick = function(){
               getE('listoption').style.display = 'block';
               getE('optiontable').style.display = 'none';
          }

     
     /*форма створення списку */    
     df.listbtn.listbtnsub.addEventListener('click', function(){
          var list = ('<li>text</li>');
          var texttype = df.typelist.chstypelist.value;
          var nmbrlist = df.listitems.numerosity.value;
          var listwindow = '<ul type="' + texttype + '">';
          for(var i=0;i<nmbrlist;i++){
             listwindow += list;
          }
          listwindow += '</ul>';
          df.editform.txt.value += listwindow;
          
          getE('addtable').style.display = 'none';
          getE('main').style.display = 'block'; 
     });



