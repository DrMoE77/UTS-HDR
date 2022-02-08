var config = {
    apiKey: "AIzaSyBG0txD6KJ2862ruVUg-BDLz_NZl-yLVC8",
  authDomain: "healthcare-communications.firebaseapp.com",
  databaseURL: "https://healthcare-communications-default-rtdb.firebaseio.com",
  projectId: "healthcare-communications",
  storageBucket: "healthcare-communications.appspot.com",
  };
  
  // Initialize your Firebase app
  firebase.initializeApp(config);
  
  
  $(function(){
    //make a variable to keep track of data coming from firebase
    var data= [];
    
    //create new connection to firebase
      var ref= new Firebase('https://healthcare-communications-default-rtdb.firebaseio.com');
    
  
    //listen to data updates from firebase
      ref.on("value", function (snapshot){
      console.log(snapshot.val());
     //when the data updates at firebase, put it in the data variable
      data= snapshot.val();
    })
  //Entire Form (handler)
  $('#newActivity').submit(function(event) {
    
    var $form = $(this);
    console.log("Submit to Firebase");
    
    //disable submit button
    $form.find("#saveForm").prop('disabled', true);
    
    //get values to send to Firebase
    var one = $('#quesTionone').val();
    console.log(one);
    
    var two = $('#quesTiontwo').val();
    console.log(two);
    
    var three = $('#quesTionthree').val();
    console.log(three);

    var four = $('#quesTionfour').val();
    console.log(four);

    var five = $('#quesTionfive').val();
    console.log(five);
    
    
    //take the values from the form, and put them in an object
    var newActivity= {
      "interactions":one,
      "interventions": two,
      "hmr": three,
      "reports length": four,
      "relation ship history": five
    }
    //put new object in data array
    data.push(newActivity);
    console.log(data);
    
      //send the new data to Firebase
          ref.set(data, function(err){
        if(err){
          alert("Data no go");
        }
      });
  
      return false;
    })
  })