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

  $.getJSON( "http://localhost/sitio/web/app_dev.php/api/videos/all", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      if (key===0){
        items.push("<iframe class=embed-responsive-item src=" + val.descripcion + "></iframe>");
      }
    });
    $( "<div />", {
        'class' : 'embed-responsive embed-responsive-16by9',
        html: items.join( "" )
    }).appendTo("div.video");
  });
 */
 /*
  *traer Banner
  */
  $.getJSON( "http://noticias.agriculturaproductiva.gob.ve/app_dev.php/api/banners/0", function( data ) {
      var item = [];
    $.each(data, function( key , val ){
    $("header.menu").css('background-image', 'url(http://noticias.agriculturaproductiva.gob.ve/imagenes/'+ val.ruta_banner+')');
    });
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

app.directive('video', function() {
  return {
    restrict: 'E',
    templateUrl: './partials/video.html',

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