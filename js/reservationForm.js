var inputs = $('input');
var errors = document.querySelectorAll('.error');
var check_list = [];

check_list.push(function() {
    if (inputs[0].value.length < 1 || inputs[0].value.split(' ').length < 2){
        return false;
    }
    return true;
});

check_list.push(function() { 
    if (inputs[1].value.length < 1 || inputs[1].value.lastIndexOf('@') == -1){
        return false;
        }
        return true;
});


check_list.push(function () {
    if (inputs[2].value.length < 10) {
        return false;
    }
    return true;
});


check_list.push(function () {
    if (inputs[3].value.length < 1 || (input[3].value >= 7 && input[3].value <= 10) || (input[3].value >= 19 && inputs[3].value <= 22)){
        return false;
    }
    return true;
})


function clearAlert(){
    for (var i=0; i< errors.length; i++){
        errors[i].style.display='none';
    }
};

function Check() {
    clearAlert();
    var count = 0;
    for (var i=0; i<check_list.length; i++) {
        if (check_list[i]() == false){
            errors[i].style.display='block';
            errors[i].position='absolute';
            errors[i].style.marginTop = '20px';
			errors[i].style.color='#CD5C5C';
            ++count;
        }
        if (count == 0) {
            document.querySelector('#submit-info').style.display='block';
            document.querySelector('#myForm').style.display='none';
        }
    }
}