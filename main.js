const postCodeURL = 'https://api.postcodes.io/postcodes/';
let postCode = '';
let tableContents = '';

const applyPostcodes = () => {  
    postCode = document.getElementById('input').value;
    
    var postCodesArray = postCode.split('\n');

    if (postCode) {
        $(".clear").css("display", "block");
        
    $("#find").css("display", "none");
        for (code in postCodesArray) {
            let searchURL = postCodeURL + postCodesArray[code];
            $.ajax({async: false, url: searchURL, success: function (returns){
                let ward = returns.result.parliamentary_constituency;
    
                tableContents += "<tr><td>" + postCodesArray[code] + "</td><td>" + ward + "</td></tr>";
            }
        });
    };

    
};

$("#tableBody").html(tableContents);

    if(postCode){
        $("table").css("display", "block");
    }
    
}

const makeClear = () => {

    $(".clear").css("display", "none");
    $("#find").css("display", "block");
    tableContents = '';
    $(".results").html(tableContents);
    document.getElementById('input').value = '';
    $("table").css("display", "none");

}
