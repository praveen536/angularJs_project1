var app = angular.module("myApp", []);
app.controller("loginController", function ($scope) {
    // password validtion start here
    $scope.password = "";$scope.passDisable=false;
    console.log($scope.password);
    $scope.validatePass=function(password,type) {
        // console.log(password);
        if (type=="keyup") {
            var re = /[a-z]/;var re2 = /[A-Z]/;var re3 = /[0-9]/;
            $scope.cap=false;$scope.samll=false;$scope.num=false;$scope.min=false;
            // for small
            if (re.test(password)) {ac("#small",'green');rc("#small","red");$scope.samll=true;
            }else{rc("#small","green");ac("#small",'red');$scope.samll=false;}
            // for capital letter
            if (re2.test(password)) {ac("#cap",'green');rc("#cap","red");$scope.cap=true;;
            }else{rc("#cap","green");ac("#cap",'red');$scope.cap=false;}
            // for number
            if (re3.test(password)) {ac("#num",'green');rc("#num","red");$scope.num=true;
            }else{rc("#num","green");ac("#num",'red');$scope.num=false;}
            // for min 8 letter
            if (password.length > 8) {ac("#min",'green');rc("#min","red");$scope.min=true;
            }else{rc("#min","green");ac("#min",'red');$scope.min=false;}
            borader();
        }else if(type=="blur"){
            if (password=="") {
                angular.element(document.querySelector("#pass_col_div")).css ({"display":"none"});
            }else if(password!="" && $scope.passDisable==true){
                angular.element(document.querySelector("#pass_col_div")).css ({"display":"none"});
            }
        }else if(type=="click"){
            angular.element(document.querySelector("#pass_col_div")).css ({"display":"block"});
            borader();
        }
    };
    function rc(el,val) {angular.element(document.querySelector(el)).removeClass(val);}
    function ac(el,val) {angular.element(document.querySelector(el)).addClass(val);}
    function borader() {
        // console.log($scope.cap);
        // console.log($scope.samll);
        // console.log($scope.num);
        // console.log($scope.min);
        if ($scope.cap==true && $scope.samll==true && $scope.num==true && $scope.min==true) {
            angular.element(document.querySelector("#password")).css ({"border":"1px solid green"});
            $scope.passDisable=true;
        }else{
            $scope.passDisable=false;
            angular.element(document.querySelector("#password")).css ({"border":"1px solid red"});
        }
    }
    // password validtion start end
})