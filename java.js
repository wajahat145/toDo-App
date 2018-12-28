
            // create an array
            var myArr = [];
            
            function pushData()
            {
                // get value from the input text
                var inputText = document.getElementById('inputText').value;
                
                // append data to the array
                myArr.unshift(inputText);
                
           }

            function showData()
            {
                var temp = "";
                
                for(i = 0; i < myArr.length; i++)
                {
                    temp = temp + myArr[i] + "<br/>";
                
                // display array data
                document.getElementById('pText').innerHTML = temp;
                
                }
                
            }

            function updateData()
            {
                var temp="";
                var indexof=prompt("Give the index where you want to update the string (note: indexing strat from 0 till tasklist lenght");
                var indexData=prompt("Give the string data to update");
                
                if(myArr[indexof]==null)
                {
                    alert("Index is not correct");
                }
                else
                {
                        myArr[indexof]=indexData;
                }
            }

            function deleteData()
            {
            var temp="";
            var indexof=prompt("Give the index where you want to delete the string (note: indexing strat from 0 till tasklist lenght");
            
            if(myArr[indexof]==null)
            {
                alert("Index is not correct");
            }
            else
            {
                    myArr.pop(indexof);
            }

            }

            