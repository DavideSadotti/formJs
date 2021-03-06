function checkModule() {

    //CREAZIONE VARIABILI CON VALORE IL VALORI DEI CAMPI DEL FORM
    var valueName = document.modulo.name.value;
    var valueSurname = document.modulo.surname.value;
    var valueEmail = document.modulo.email.value;
    var valueAddress = document.modulo.address.value;
    var valuePw = document.modulo.password.value;
    var valueCheckPw = document.modulo.checkPw.value;

    //ESPRESSIONI REGOLARI O PATTERN PER DETERMINARE LE CONDIZIONI DELL'EMAIL E DELLA PASSWORD
    var emailReg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
    var pwReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[!@#\$%\^&\*])(?=.*[!@#\$%\^&\*])(?=.{10,})/;
    var noWhitespace = /\s/g;
    var mail = !emailReg.test(valueEmail);
    var pw = !pwReg.test(valuePw) || noWhitespace.test(valuePw);
    var noName = valuePw.toLowerCase().includes(valueName.toLowerCase());
    var noSurname = valuePw.toLowerCase().includes(valueSurname.toLowerCase());

    //OGGETTO CONTENENTE I NOMI DEI CAMPO E LA CONDIZIONE DA SODDISFARE
    var fields = [
        {
            name : 'name',
            condition : valueName == ""
        },
        {
            name : 'surname',
            condition : valueSurname == ""
        },
        {
            name : 'email',
            condition : mail || (valueEmail == '')
        },
        {
            name : 'address',
            condition : valueAddress != "" && valueAddress.length < 10
        },
        {
            name : 'password',
            value : valuePw,
            condition : pw || noName || noSurname || valuePw == ''
        },
        {
            name : 'checkPw',
            condition : valuePw != valueCheckPw || valueCheckPw == ""
        }
    ]

    
    //CICLO FOR PER VALUTARE OGNI CAMPO DEL FORM ED ASSEGNARGLI UN COLORE SE CORRETTO O NO
    for(var i = 0; i < fields.length; i++){
        if(fields[i].condition){
            console.log(i)
            document.getElementById("error" + i).classList.remove("noError")
            document.getElementById(fields[i].name).classList.remove("is-valid")
            document.getElementById(fields[i].name).classList.add("is-invalid")
        }else{
            console.log('ciao')
            document.getElementById("error" + i).classList.add("noError")
            document.getElementById(fields[i].name).classList.remove("is-invalid")
            document.getElementById(fields[i].name).classList.add("is-valid")
        }
    }
}
