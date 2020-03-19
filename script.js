var rIndex,
                table = document.getElementById("table");
            

            function checkEmptyInput()
            {
                var isEmpty = false,
                    num = document.getElementById("num").value,
                    titulo = document.getElementById("titulo").value,
                    autor = document.getElementById("autor").value;
                    preco = document.getElementById("preco").value;
                    quant = document.getElementById("quant").value;
            
                if(num === ""){
                    alert("Número de Registro não pode estar vazio");
                    isEmpty = true;
                }
                else if(titulo === ""){
                    alert("Título não pode estar vazio");
                    isEmpty = true;
                }
                else if(autor === ""){
                    alert("Autor não pode estar vazio");
                    isEmpty = true;
                }
                else if(preco === ""){
                    alert("Preço não pode estar vazio");
                    isEmpty = true;
                }
                else if(quant === ""){
                    alert("Quantidade não pode estar vazio");
                    isEmpty = true;
                }
                return isEmpty;
            }
            

            function addHtmlTableRow()
            {

                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    num = document.getElementById("num").value,
                    titulo = document.getElementById("titulo").value,
                    autor = document.getElementById("autor").value;
                    preco = document.getElementById("preco").value;
                    quant = document.getElementById("quant").value;
            
                cell1.innerHTML = num;
                cell2.innerHTML = titulo;
                cell3.innerHTML = autor;
                cell4.innerHTML = preco;
                cell5.innerHTML = quant;

                selectedRowToInput();
            }
            }
            

            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {

                      rIndex = this.rowIndex;
                      document.getElementById("num").value = this.cells[0].innerHTML;
                      document.getElementById("titulo").value = this.cells[1].innerHTML;
                      document.getElementById("autor").value = this.cells[2].innerHTML;
                      document.getElementById("preco").value = this.cells[3].innerHTML;
                      document.getElementById("quant").value = this.cells[4].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var num = document.getElementById("num").value,
                    titulo = document.getElementById("titulo").value,
                    autor = document.getElementById("autor").value;
                    preco = document.getElementById("preco").value;
                    quant = document.getElementById("quant").value;

                    
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = num;
                table.rows[rIndex].cells[1].innerHTML = titulo;
                table.rows[rIndex].cells[2].innerHTML = autor;
                table.rows[rIndex].cells[3].innerHTML = preco;
                table.rows[rIndex].cells[4].innerHTML = quant;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);

                document.getElementById("num").value = "";
                document.getElementById("titulo").value = "";
                document.getElementById("autor").value = "";
                document.getElementById("preco").value = "";
                document.getElementById("quant").value = "";
            }