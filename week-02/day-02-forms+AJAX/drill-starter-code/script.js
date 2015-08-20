
$(document).ready(function(){
    
    function buildGitHubLink(student){
        var link = "<a href='https://github.com/" +
            student.github_username + "'>" +
            student.first_name + " " +
            student.last_name + "</a>";
        return link;
    }

    function renderGitHubLinks(studentArray){
        var output = '';
        studentArray.forEach(function(elm){
            output += buildGitHubLink(elm) + '<br/>';
        })
        return output;
    }  
    
    $('body').append('<br/>' + renderGitHubLinks(data.students));
});

function letterCount(word){
    word = word.toLowerCase();
    var countObj = {};
    for(i=0;i <word.length; i++){
    if(!(word[i] in countObj)){
        countObj[word[i]]=1;
       }else{
        countObj[word[i]]++;
       }
    }      
    console.log(countObj); 
}

function merge(arr1, arr2){
    return arr1.concat(arr2).sort();
}

function stringObjectConvert(inString){
    var pairs = inString.split('&');
    var outObj = {};
    pairs.forEach(function(el){
        var keyValSet = el.split('=');
        outObj[keyValSet[0]] = keyValSet[1];
    });
               return outObj;
}

