function startOver () {
    document.loan_form.loan_amt.value="";
    document.loan_form.years.value=""; 

    document.getElementById ("loan_table").innerHTML="";
    document.getElementById ("table").innerHTML="";
}

function validation() {
    var loan_amt = document.loan_form.loan_amt.value;
    var years = document.loan_form.years.value;

    if (loan_amt <= 0 || isNaN(Number(loan_amt))) {
        alert ("Please enter a valid loan amount");
        document.loan_form.loan_amt.value = "";
    }

    else if (years <=0 || parseInt (years) != years) {
        alert ("Please enter a valid years amount");
        document.loan_form.years.value = "";

    }

    else {
        calculate (parseFloat(loan_amt), parseInt (years), parseFloat(rate));
    }

}