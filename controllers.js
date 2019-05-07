

// CONTROLLERS
weatherApp.controller('homeController', ['$scope','$sce', function ($scope,$sce ) {

    // $scope.testId = testService.testId;
    // $scope.testName = paramService.testName;
    // $scope.testSex = paramService.testSex;

    // $scope.$watch('testId', function () {
    //     testService.city = $scope.testId;
    // });
    // $scope.$watch('testName', function () {
    //     testService.testName = $scope.testName;
    // });
    // $scope.$watch('testSex', function () {
    //     testService.testSex = $scope.testSex;
    // });
    
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    
	$scope.t1="Empty";
	$scope.t2="ASC";
    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender/"+$scope.t1+'/'+$scope.t2 + '');
	console.log("$scope.src="+$scope.src);
	
	$scope.refresh = function(item){
		$scope.t2= $scope.t2 == "ASC"?"DESC":"ASC";

    	$scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender/"+$scope.t1+'/'+$scope.t2 + '');
		console.log("$scope.src="+$scope.src);

	}
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$sce', '$http', function ($scope, $resource, $sce, $http) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }


    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAll" + '');

    $scope.weatherAPI = $resource($scope.src + '');

    $scope.weatherResult = $scope.weatherAPI.get({});


}]);
weatherApp.controller('createController', ['$scope', '$sce', '$http', function ($scope, $sce, $http) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender" + '');

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.genderList = { "results": response.data };
        $scope.genderOption = 3;
    }, function (errorResponse) {
    });


}]);
weatherApp.controller('updateController', ['$scope', '$sce', '$http', function ($scope, $sce, $http) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender" + '');

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.genderList = { "results": response.data };
        $scope.genderOption = 3;
    }, function (errorResponse) {
    });

    console.log($scope.genderList);

}]);
weatherApp.controller('deleteController', ['$scope', '$sce', '$routeParams', function ($scope, $sce, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }
    if (angular.isUndefined($routeParams)) {
        $scope.testId = null;
    } else {
        $scope.testId = $routeParams.testId;
    }

}]);
weatherApp.controller('createController2', ['$scope', '$sce', '$http', '$routeParams', function ($scope, $sce, $http, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/postTest" + '');
    $http({
        method: 'POST',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        data: { "id": null, "name": $routeParams.testName, "sex": $routeParams.testSex }
    }).then(function (response) {
        $scope.resultData = response.data;
        $scope.testId = $scope.resultData.id;
        $scope.testSex = $scope.resultData.sex;
        $scope.testName = $scope.resultData.name;
        $scope.genderOption = $scope.testSex;
    }, function (errorResponse) {
    });
    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender" + '');

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.genderList = { "results": response.data };

    }, function (errorResponse) {
    });

    console.log($scope.genderList);
}]);
weatherApp.controller('updateController2', ['$scope', '$sce', '$http', '$routeParams', function ($scope, $sce, $http, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/putTest" + '');
    $http({
        method: 'PUT',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        data: { "id": $routeParams.testId, "name": $routeParams.testName, "sex": $routeParams.testSex }
    }).then(function (response) {
        $scope.resultData = response.data;
        $scope.testId = $scope.resultData.id;
        $scope.testSex = $scope.resultData.sex;
        $scope.testName = $scope.resultData.name;
        $scope.genderOption = $scope.testSex;
    }, function (errorResponse) {
    });

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender" + '');

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.genderList = { "results": response.data };
    }, function (errorResponse) {
    });

    console.log($scope.genderList);
}]);
weatherApp.controller('deleteController2', ['$scope', '$sce', '$http', '$routeParams', function ($scope, $sce, $http, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    if ($routeParams.testId !== null) {
        $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/deleteTest/" + $routeParams.testId);
        $http({
            method: 'DELETE',
            url: $scope.src
            // headers: {
            //   'Content-Type': undefined
            // },
        }).then(function (response) {
            $scope.testId = $routeParams.testId;
            if (response.data === true) alert("Successful Deletion");
            else alert("Deletion Failed");
        }, function (errorResponse) {
        });
    } else {
        alert("Invalid param:" + $routeParams.testId);
    }
}]);
weatherApp.controller('updateController3', ['$scope', '$sce', '$http', '$routeParams', function ($scope, $sce, $http, $routeParams) {
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getAllGender" + '');

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.genderList = { "results": response.data };
    }, function (errorResponse) {
    });

    $scope.testId = $routeParams.testId;
    $scope.src = $scope.trustSrc("http://localhost:8080/jpa-test/test/getOneTest/" + $scope.testId);

    $http({
        method: 'GET',
        url: $scope.src,
        // headers: {
        //   'Content-Type': undefined
        // },
        //data: {"id": null, "name": $routeParams.testName, "sex": $routeParams.testSex}
    }).then(function (response) {
        $scope.testSex = response.data.sex;
        $scope.testName = response.data.name;
        $scope.genderOption = $scope.testSex;
    }, function (errorResponse) {

    })

}]);

