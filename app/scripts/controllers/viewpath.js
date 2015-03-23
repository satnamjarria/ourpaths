'use strict';

/**
 * @ngdoc function
 * @name outpathsApp.controller:ViewpathCtrl
 * @description
 * # ViewpathCtrl
 * Controller of the outpathsApp
 */
angular.module('outpathsApp')
  .controller('ViewpathCtrl', function ($scope, $rootScope) {
    $scope.status = {
      basicInfoOpen: true,
      familyInfoOpen: true,
      joyOpen:true,
      commentsOpen:false,
      pathOpen:true
    };
    $rootScope.bodyClass = 'view-page';
    $scope.sideBarToggle = true;
    $scope.responseJson = {
      firstName: 'Alan',
      lastName: 'Gram',
      years: '1951-2004',
      quote:'I hear and forget. I see and I remember. I do and I understand.',
      personal_info:{
        dob:'12/30/51',
        place_birth:'Seattle, Washington',
        dod:'2/18/14',
        place_death:'Seattle, Washington'
      },
      lifePath:{
        title:'Alan lived for adventure the great out doors was his home.',
        desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. ',
        education:[
          {
            name:'Saint Marry High School',
            dates:'1980 - 1985'
          }
        ],
        community:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
        military:{
          branch:'Navy Seal',
          rank:'Captain',
          tours:3,
          honors:'Purple Heart',
          dates:'1991 - 2000'
        },
        career:{
          title:'Mechanical Engineer, Software Engineer, CEO',
          dates:'1991 - 2014'
        }
      },
      family:[
        {
          imgUrl:'../images/elizabeth.jpg',
          fullName:'Debbie Gram',
          relationship:'Wife'
        },
        {
          imgUrl:'../images/dave-father.jpg',
          fullName:'Dave Gram',
          relationship:'Father'
        },
        {
          imgUrl:'../images/vanessa.jpg',
          fullName:'Vanessa Gram',
          relationship:'Daughter'
        },
        {
          imgUrl:'../images/greg.jpg',
          fullName:'Greg Gram',
          relationship:'Son'
        },
        {
          imgUrl:'../images/anie.jpg',
          fullName:'Anie Gram',
          relationship:'Mother'
        },
        {
          imgUrl:'../images/andrea.jpg',
          fullName:'Andrea Gram',
          relationship:'Daughter'
        }
      ],
      joy:{
        cover:{
          imgUrl:'../images/beleze.jpg',
          desc:'Fly Fishing'
        },
        thumbs:[
          {
            imgUrl:'../images/fishing.jpg',
            fullName:'Fly Fishing'
          },
          {
            imgUrl:'../images/stephcurry.jpg',
            fullName:'Golden State Warriors'
          },
          {
            imgUrl:'../images/rockclimbing.jpg',
            fullName:'Rock Climbing'
          },
          {
            imgUrl:'../images/skydiving.jpg',
            fullName:'Sky Diving'
          },
          {
            imgUrl:'../images/yosemite.jpg',
            fullName:'Yosemite'
          },
          {
            imgUrl:'../images/belizethumb.jpg',
            fullName:'Belize'
          },
        ]
      }
    };
    $scope.toggleSidebar = function(){
      $scope.sideBarToggle = !$scope.sideBarToggle;
    };
  });
