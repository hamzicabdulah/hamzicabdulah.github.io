//Listing UI-Bootstrap (for mobile view navbar collapse button) and Angular Scroll library smooth scroll (for navbar links) as dependencies
var app = angular.module("portfolio", ["ui.bootstrap", 'duScroll']);

app.controller("portfolioCtrl", function ($scope) {
  //Variable to handle navigation bar collapse for mobile devices
  $scope.navbarCollapsed = true;
  //Object for handling modal content
  $scope.modalsObject = {
    'barsOnBars': false,
    'pollo': false,
    'recipeBox': false,
    'gameOfLife': false,
    'picThirst': false,
    'ticTacToe': false,
    'simon': false,
    'heatMap': false,
    'fccLeaderboard': false,
    'scatterplot': false,
    'pomodoro': false,
    'markdown': false,
    'calculator': false,
    'barChart': false,
    'quotes': false
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
      document.querySelector('.services-inner').className += ' services-inner-visible';
    } else {
      document.querySelector('.services-inner').className = 'services-inner';
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
  return function() {
    return {
      template: '<div class="row"><h2 class="col-xs-10 col-xs-push-1">' 
      + name + '</h2><i class="fa fa-times fa-2x col-xs-1" ng-click="closeModal()"></i><p class="col-xs-12">' 
      + description + '</p><div class="col-xs-12 technologies"><h4>HTML5/CSS3</h4><h4>JavaScript</h4>' 
      + headers + '</div><a class="col-xs-4 col-xs-push-4 col-md-2 col-md-push-5 btn-primary" target="_blank" href="' 
      + link + '">Go to page</a></div>'
    }
  }
}
//Short descriptions of each project to be passed as arguments to the getTemplate function
var barsOnBarsDesc = 'Nightlife coordination app that makes use of Yelp\'s API.',
polloDesc = 'Voting app that lets you vote on polls, add options to existing polls and add your own custom polls.',
recipeBoxDesc = 'Recipe box application where you can keep track of your favorite recipes.',
gameOfLifeDesc = 'My implementation of John Conway\'s famous Game of Life, with 3 different modes and speeds.',
picThirstDesc = 'Pinterest clone which allows you to add your own pictures and like other users\' pictures.',
ticTacToeDesc = 'Simple Tic Tac Toe game with single player and multiplayer mode, and three difficulties.',
simonDesc = 'Simon Says game with strict and spinning mode to make it more challenging.',
heatMapDesc = 'Heat Map data visualization of Global Land-Surface Temperature (1753 - 2015).',
fccLeaderboardDesc = 'Leaderboard for the FCC campers with the most points on a monthly and all-time basis.',
scatterplotDesc = 'Scatterplot Graph visualization of Doping In Professional Bicycle Racing.',
pomodoroDesc = 'Pomodoro Timer to make your working/studying sessions more efficient.',
markdownDesc = 'An application where you can easily edit and see your markdown text live.',
calculatorDesc = 'Simple calculator to help make your basic mathematics problems easier.';
barChartDesc = 'Bar chart representation of Gross Domestic Product in the USA over the course of 68 years.';
quotesDesc = 'Random Quote Generator to keep yourself motivated throughout the day.',
//Directives for the description of each of the projects, displayed in the modal appropriately
app.directive('barsOnBars', getTemplate('Bars On Bars', barsOnBarsDesc, 'https://bars-on-bars.herokuapp.com', 'AngularJS', 'Node/Express/MongoDB'));
app.directive('pollo', getTemplate('Pollo', polloDesc, 'https://pollo-voting-app.herokuapp.com', 'React', 'Node/Express/MongoDB'));
app.directive('recipeBox', getTemplate('Recipe Box', recipeBoxDesc, 'https://hamzicabdulah.github.io/recipe_box', 'React', 'Sass'));
app.directive('gameOfLife', getTemplate('Game Of Life', gameOfLifeDesc, 'https://hamzicabdulah.github.io/game-of-life', 'React'));
app.directive('picThirst', getTemplate('Pic Thirst', picThirstDesc, 'https://pic-thirst.herokuapp.com', 'Node/Express/MongoDB'));
app.directive('ticTacToe', getTemplate('Tic Tac Toe', ticTacToeDesc, 'https://hamzicabdulah.github.io/tic_tac_toe', 'AngularJS'));
app.directive('simon', getTemplate('Simon Says Game', simonDesc, 'https://hamzicabdulah.github.io/simon_game', 'jQuery'));
app.directive('heatMap', getTemplate('Heat Map', heatMapDesc, 'https://hamzicabdulah.github.io/heat-map', 'D3.js'));
app.directive('fccLeaderboard', getTemplate('FCC Leaderboard', fccLeaderboardDesc, 'https://hamzicabdulah.github.io/fcc-leaderboard', 'React', 'Sass'));
app.directive('scatterplot', getTemplate('Scatterplot Graph', scatterplotDesc, 'https://hamzicabdulah.github.io/scatterplot-graph', 'D3.js'));
app.directive('pomodoro', getTemplate('Pomodoro Timer', pomodoroDesc, 'https://hamzicabdulah.github.io/pomodoro_timer', 'Bootstrap', 'AngularJS'));
app.directive('markdown', getTemplate('Markdown Previewer', markdownDesc, 'https://hamzicabdulah.github.io/markdown-previewer', 'React', 'Sass'));
app.directive('calculator', getTemplate('Calculator', calculatorDesc, 'https://hamzicabdulah.github.io/js_calculator', 'Bootstrap', 'AngularJS'));
app.directive('barChart', getTemplate('Bar Chart', barChartDesc, 'https://hamzicabdulah.github.io/bar-chart', 'D3.js'));
app.directive('quotes', getTemplate('Random Quote Generator', quotesDesc, 'https://s.codepen.io/abdulahhamzic/debug/qNpoPX', 'Bootstrap', 'jQuery'));