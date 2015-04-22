'use strict';

/*global xml2json:false*/

/**
 * @ngdoc service
 * @name giantSteps2App.uploadService
 * @description
 * # uploadService
 * Factory in the giantSteps2App.
 */
angular.module('giantSteps2App').factory('uploadService', function ($http, $q, $upload) {

  
  var s3 = {

    url: 'https://s3.amazonaws.com/giant-steps-assets/',
    
    // ------------------------------------------------
    // Policy generator
    //
    
    getPolicy: function(file){
      var deferred = $q.defer();

      // ------------------------------------------------
      // Get signature
      //
      
      $http.get('http://localhost:5000/api/uploads/policy?mimeType=' + file.type).success(function(response){
        var s3Params = response;
        deferred.resolve(s3Params);
      
      }).error(function(err){
        deferred.reject(err);
      });

      return deferred.promise;
    },

    // ------------------------------------------------
    // Upload function
    //

    upload: function(file, awsParams){
      var deferred = $q.defer();
      var self = this;

      console.log(file.name);

      $upload.upload({
        url: self.url,
        method: 'POST',
        transformRequest: function(data, headersGetter){

          //headers change here
          var headers = headersGetter();
          delete headers['Authorization'];
          return data;
        },

        fields: {
          key: 'images/' + file.name,
          acl: 'public-read',
          'Content-Type': file.type,
          AWSAccessKeyId: awsParams.AWSAccessKeyId,
          policy: awsParams.s3Policy,
          signature: awsParams.s3Signature,
          'success_action_status': 201
        },

        file: file



      }).success(function(response){
        

        // ------------------------------------------------
        // convert xml to json
        //
        var jsonResponse = xml2json.parser(response);
        
        
        deferred.resolve(jsonResponse);



      }).error(function(err){
        console.log(err);
        deferred.reject(err);
      });

      return deferred.promise;

    }
    
  };




  // -------------------------------------------------
  //
  // API Returns
  // 
  // -------------------------------------------------
  
  return {
    getPolicy: function (file) {
      return s3.getPolicy(file);
    },
    upload: function(file, awsParams){
      return s3.upload(file, awsParams);
    }
  };
});
