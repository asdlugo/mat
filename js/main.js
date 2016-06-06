$(document).ready(function(){
/*
 *Toogle Wrapper
 */
  $("span#menu-toggle").on('click',function(e) {
    e.preventDefault();
    $("div#wrapper").toggleClass("toggled");
  });
/*
 *Carrusel de Videos
 */
  $.getJSON( "http://192.168.2.203/sitio/web/app_dev.php/api/videos/all", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      if (key==key){
        items.push("<li><video controls src=../../sitio/web/imagenes/"+val.ruta+"></video></li>");
      }
    });
    $( "<ul/>", {
      html: items.join( "" )
    }).appendTo("div#coverflow");
    var coverflow = $("#coverflow").flipster();
  });

  $.getJSON( "http://192.168.2.203/sitio/web/app_dev.php/api/banners/0", function( data ) {
    var item =[];
    $.each(data, function( key, val ){
    console.log(val);
    $("header.menu").css('background-image', 'url(http://192.168.2.203/sitio/web/imagenes/'+ val.ruta_banner+')')
      
    })
  });
});



/**
 * Main AngularJS Web Application
 */
var app = angular.module('matApp', ['ngRoute', 'ngDialog']);

/**
 * Modal box
 */
app.directive('sidebar', function(ngDialog) {
  return {
    restrict: 'E',
    templateUrl: './templates/sidebar.html',
    replace: true,
    link: function ($scope) {
      $scope.openDialog = function(plantilla) {
        ngDialog.openConfirm({
          className: 'ngdialog-theme-plain custom-width',
          template: './partials/'+plantilla+'.html',
          scope: $scope,
      });
      }
    }
  }
});

app.directive('content', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/content.html',

  }
});
 app.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/footer.html',

  }
});

app.directive('carrusel', function() {
  return {
    restrict: 'E',
    templateUrl: './partials/carrusel.html',

  }
});











































































/**
 * Configure the Routes
 */
//app.config(['$routeProvider', function ($routeProvider) {
  //$routeProvider
    // Home
    //.when("/", {templateUrl: "templates/sidebar.html", controller: "PageCtrl"})
    // Pages
    //.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    //.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    //.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    //.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    //.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
   // .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    //.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    //.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
//}]);

/**
 * Controls the Blog
 */
//app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
//  console.log("Blog Controller reporting for duty.");
//});

/**
 * Controls all other Pages
 */
//app.controller('PageCtrl', function (/* $scope, $location, $http */) {
 // console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  //$('.carousel').carousel({
   // interval: 5000
  //});

  // Activates Tooltips for Social Links
 // $('.tooltip-social').tooltip({
  //  selector: "a[data-toggle=tooltip]"
 // })
//});