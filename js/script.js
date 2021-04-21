var users = [
    {
        name: 'Ajoa',
        gender: 'F',
        hobby: 'pets',
        Age: 21 ,
        picture: 'fm1.png'        
    },
    {
        name: 'Fati',
        gender: 'F',
        hobby: 'pets',
        Age: 25 ,
        picture: 'fm2.png'
    },
    {
        name: 'Kwabena',
        gender: 'M',
        hobby: 'music',
        Age: 30 ,
        picture: 'm1.png'
    },
    {
        name: 'Komla',
        gender: 'M',
        hobby: 'sports',
        Age: 40 ,
        picture: 'm2.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        Age: 18 ,
        picture: 'fm3.png'
    },
    {
        name: 'Lina',
        gender: 'F',
        hobby: 'shopping',
        Age: 29 ,
        picture: 'fm4.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        Age: 40 ,
        picture: 'm3.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //age field
        var maxField= document.getElementById('Max');
        var Ma = maxField.value;
        var minField= document.getElementById('Min');
        var Mi = minField.value;
        for(var i = 0; i < usersLength; i++) {
        Ma >= users[i].Age  || Mi >= users[i].Age ;} 
        
        
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby  
                if (hobby == '' || hobby == users[i].hobby) {
                //check Maxage
                  if ( Ma=='' || typeof Ma== 'number'){ 
                    //check Minage
                      if (Mi=='' || typeof Mi== 'number') { 
                            resultsHtml += '<div class="person-row">\
                                   <img src="images/' + users[i].picture + '" />\
                                   <div class="person-info">\
                                   <div>' + users[i].name + '</div>\
                                   <div>' +  users[i].Age + '</div>\
                                   <div>' + users[i].hobby + '</div></div>\
                                    <button>Add as friend</button></div>';
                    }
                }
            
            
                  
                }
            }
        
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});