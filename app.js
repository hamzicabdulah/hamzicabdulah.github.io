//Listing UI-Bootstrap (for mobile view navbar collapse button) and Angular Scroll library smooth scroll (for navbar links) as dependencies
var app = angular.module("portfolio", ["ui.bootstrap", 'duScroll']);

app.controller("portfolioCtrl", function ($scope) {
  //Variable to handle navigation bar collapse for mobile devices
  $scope.navbarCollapsed = true;
  //Object for handling modal content
  $scope.modalsObject = {
    'ticTacToe': false,
    'simon': false,
    'pomodoro': false,
    'calculator': false,
    'quotes': false,
    'stopwatch': false
  };
  //Function to display modal on project image click
  $scope.openModal = function (name) {
    //Changing the value of an object's key to true displays description of that specific project key in the modal
    $scope.modalsObject[name] = true;
    document.querySelector('.modal-div').className += ' modal-visible';
    document.querySelector('.page-cover').className += ' page-cover-visible';
  }
  $scope.closeModal = function () {
    //Remove any content from the modal and hide modal div
    for (var key in $scope.modalsObject) {
      $scope.modalsObject[key] = false;
    }
    document.querySelector('.modal-div').className = 'modal-div';
    document.querySelector('.page-cover').className = 'page-cover';
  }

  window.addEventListener('scroll', function (e) {
    //Services content appears transitionally on scroll down for all devices
    if (window.pageYOffset > 230) {
      document.querySelector('.servicesInner').className += ' servicesInnerVisible';
    } else {
      document.querySelector('.servicesInner').className = 'servicesInner';
    }
    //Navigation bar dark blue background appears on scroll down for all but mobile view devices
    if (window.pageYOffset > 300) {
      document.querySelector('.navbar-default').className += ' navbar-bg';
    } else {
      document.querySelector('.navbar-default').className = 'navbar navbar-default navbar-fixed-top';
    }
  });
});
//Function to make creating directives easier. The ... keyword is the rest parameter which stores any additional arguments in a variable (techs variable in this case)
function getTemplate (name, description, link, ...techs) {
  //Create h2 headers for any additional arguments passed to the function (technologies used for project)
  var headers = '';
  for (var i = 0; i < techs.length; i++) {
    headers += '<h4>' + techs[i] + '</h4>';
  }
  //Every project description (displayed in modal) contains a title, short description, technologies used and a hyperlink for visiting project page
  return '<div class="row"><h2 class="col-xs-10 col-xs-push-1">' + name + '</h2><i class="fa fa-times fa-2x col-xs-1" ng-click="closeModal()"></i><p class="col-xs-12">' + description + '</p><div class="col-xs-12 technologies"><h4>HTML5/CSS3</h4><h4>JavaScript</h4>' + headers + '</div><a class="col-xs-4 col-xs-push-4 col-md-2 col-md-push-5 btn-primary" target="_blank" href="' + link + '">Go to page</a></div>';
}
//Short descriptions of each project to be passed as arguments to the getTemplate function
var ticTacToeDesc = 'Simple Tic Tac Toe game with single player and multiplayer mode, and three difficulties.',
simonDesc = 'Simon Says game with strict and spinning mode to make it more challenging.',
quotesDesc = 'Random Quote Generator to keep yourself motivated throughout the day.',
pomodoroDesc = 'Pomodoro Timer to make your working/studying sessions more efficient.',
calculatorDesc = 'Simple calculator to help make your basic mathematics problems easier.',
stopwatchDesc = 'Stopwatch app for Android, that plays a sound on every second passed to help you keep track of the time while not looking at your phone.';
//Directives for the description of each of the projects, displayed in the modal appropriately
app.directive('ticTacToe', function () {
  return {
    template: getTemplate('Tic Tac Toe', ticTacToeDesc, 'http://hamzicabdulah.github.io/tic_tac_toe', 'AngularJS')
  };
});
app.directive('simon', function () {
  return {
    template: getTemplate('Simon Says Game', simonDesc, 'http://hamzicabdulah.github.io/simon_game', 'jQuery')
  };
});
app.directive('quotes', function () {
  return {
    template: getTemplate('Random Quote Generator', quotesDesc, 'http://s.codepen.io/abdulahhamzic/debug/qNpoPX', 'Bootstrap', 'jQuery')
  };
});
app.directive('pomodoro', function () {
  return {
    template: getTemplate('Pomodoro Timer', pomodoroDesc, 'http://hamzicabdulah.github.io/pomodoro_timer', 'Bootstrap', 'AngularJS')
  };
});
app.directive('calculator', function () {
  return {
    template: getTemplate('Calculator', calculatorDesc, 'http://hamzicabdulah.github.io/js_calculator', 'Bootstrap', 'AngularJS')
  };
});
app.directive('stopwatch', function () {
  return {
    template: getTemplate('Stopwatch', stopwatchDesc, 'http://www.droidbin.com/p1b3ie213i1lo8c8s1hdh19q51ks93', 'AngularJS', 'Ionic')
  };
});
