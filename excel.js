var input = document.getElementById('input')
var divcontainer2 = document.querySelector(".container2")
input.addEventListener('change', function() {

    readXlsxFile(input.files[0]).then(function(data) {
        //Oppgave 1
        for (const i of data) {
            const param = document.createElement("p");
            param.innerText = i [1] + " " + i[2];
            divcontainer2.appendChild(param);
        }

        //Oppgave 2
        for (const i of data) {
            const para = document.createElement("img");
                para.src = i [6];
                divcontainer2.appendChild(para);
        }

        //Oppgave 3
        for (const i of data) {
            if (i[0] == 1) {
                const para = document.createElement("img");
                para.src = i [6];
                divcontainer2.appendChild(para);
            }
        }

        //Oppgave 4
        for (const i of data) {
            if (i [7] == "Asker") {
                const para = document.createElement("img");
                para.src = i [6];
                divcontainer2.appendChild(para);
            }
        }

        //Oppgave 5
        for (const i of data) {
            if (i [3] == 15) {
                const para = document.createElement("img");
                para.src = i[6];
                divcontainer2.appendChild(para);

                const param = document.createElement("p");
                param.innerText = i[1] +" "+ i[2];
                divcontainer2.appendChild(param);
                
            }
        }

        //Oppgave 6
        for (const i of data) {
            if (i [3] == 25) {
                const para = document.createElement("p");
                para.innerText = i[1] +" "+ i[2] +" "+ i[3];
                divcontainer2.appendChild(para);
            }
         }

        //Oppgave 7
        for (const i of data) {
            if (i[1] == "Enuella") {
                const para = document.createElement("img");
                para.src = i[6];
                divcontainer2.appendChild(para);
            }
        }
    })
  })

