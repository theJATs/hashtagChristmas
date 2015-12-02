console.log("ready to go");

var endpoint = "https://api.instagram.com/v1/tags/"
var hashtag = "christmas"
var client_id = "%20f5e6d7edf7cf4376a2aef55e9e761464"

var instagramUrl = endpoint + hashtag + "/media/recent?client_id=" + client_id

var hashtags = {} // we'll keep a count of hashtags

var howManyInstagramCalls = 20
var currentInstagramCallCounter = 0

// RUN IT!

getNextBatchOfPictures()

// FUNCTIONS

function getNextBatchOfPictures()
{
    if (currentInstagramCallCounter < howManyInstagramCalls)
    {
        console.log('calling Instagram ' + currentInstagramCallCounter)
        getInstagramMediaByUrl(instagramUrl, gotPictures)
        currentInstagramCallCounter += 1
    }
    else
    {
        console.log("we're done with Instagram, now let's analyse the data")
        // remove all the tags that have less than X occurrences
        
        console.log(hashtags)
        
        // from http://stackoverflow.com/a/1069840
        var commonTags = []
        for (var tag in hashtags) commonTags.push( {tag:tag, count:hashtags[tag]} )
        commonTags.sort(function(a, b) {return b.count - a.count})
        
//        console.log(commonTags) 
        
        
        var relatedHashtags,
            newUrl
        
        for (var i=1; i<21; i++)
        {
            console.log(commonTags[i].tag)
            
//            var elem = document.createElement("img");
//            elem.src = commonTags[7].tag;            
//            document.getElementById("cont1").appendChild(elem);
//            var relatedHashtags = document.getElementById("xmasText")
//            relatedHashtags.textContent = commonTags[0].tag

//            hashtag to 4 balls 
            relatedHashtags = document.getElementById("text2-1")
            relatedHashtags.textContent = commonTags[1].tag
            newUrl = endpoint + commonTags[1].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-1')
            })
            
            
            relatedHashtags = document.getElementById("text2-2")
            relatedHashtags.textContent = commonTags[2].tag
            newUrl = endpoint + commonTags[2].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-2')
            })
            
            
            relatedHashtags = document.getElementById("text2-3")
            relatedHashtags.textContent = commonTags[3].tag
            newUrl = endpoint + commonTags[3].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-3')
            })
            
            relatedHashtags = document.getElementById("text2-4")
            relatedHashtags.textContent = commonTags[4].tag
            newUrl = endpoint + commonTags[4].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-4')
            })
            
//            hashtag to 16 balls  
            
//            top left!
            
            relatedHashtags = document.getElementById("text2-1-1")
            relatedHashtags.textContent = commonTags[5].tag
            newUrl = endpoint + commonTags[5].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-1-1')
            })
            
            relatedHashtags = document.getElementById("text2-1-2")
            relatedHashtags.textContent = commonTags[6].tag
            newUrl = endpoint + commonTags[6].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-1-2')
            })
            
            relatedHashtags = document.getElementById("text2-1-3")
            relatedHashtags.textContent = commonTags[7].tag
            newUrl = endpoint + commonTags[7].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-1-3')
            })
            
            relatedHashtags = document.getElementById("text2-1-4")
            relatedHashtags.textContent = commonTags[8].tag
            newUrl = endpoint + commonTags[8].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-1-4')
            })
            
//            Top right
            
            relatedHashtags = document.getElementById("text2-2-1")
            relatedHashtags.textContent = commonTags[9].tag
            newUrl = endpoint + commonTags[9].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-2-1')
            })
            
            relatedHashtags = document.getElementById("text2-2-2")
            relatedHashtags.textContent = commonTags[10].tag
            newUrl = endpoint + commonTags[10].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-2-2')
            })
            
            relatedHashtags = document.getElementById("text2-2-3")
            relatedHashtags.textContent = commonTags[11].tag
            newUrl = endpoint + commonTags[11].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-2-3')
            })
            
            relatedHashtags = document.getElementById("text2-2-4")
            relatedHashtags.textContent = commonTags[12].tag
            newUrl = endpoint + commonTags[12].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-2-4')
            })
            
//            Bottom left
            
            relatedHashtags = document.getElementById("text2-3-1")
            relatedHashtags.textContent = commonTags[13].tag
            newUrl = endpoint + commonTags[13].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-3-1')
            })
            
            relatedHashtags = document.getElementById("text2-3-2")
            relatedHashtags.textContent = commonTags[14].tag
            newUrl = endpoint + commonTags[14].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-3-2')
            })
            
            relatedHashtags = document.getElementById("text2-3-3")
            relatedHashtags.textContent = commonTags[15].tag
            newUrl = endpoint + commonTags[15].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-3-3')
            })
            
            relatedHashtags = document.getElementById("text2-3-4")
            relatedHashtags.textContent = commonTags[16].tag
            newUrl = endpoint + commonTags[16].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-3-4')
            })
            
//            Bottom right
            
            relatedHashtags = document.getElementById("text2-4-1")
            relatedHashtags.textContent = commonTags[17].tag
            newUrl = endpoint + commonTags[17].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-4-1')
            })
            
            relatedHashtags = document.getElementById("text2-4-2")
            relatedHashtags.textContent = commonTags[18].tag
            newUrl = endpoint + commonTags[18].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-4-2')
            })
            
            relatedHashtags = document.getElementById("text2-4-3")
            relatedHashtags.textContent = commonTags[19].tag
            newUrl = endpoint + commonTags[19].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-4-3')
            })
            
            relatedHashtags = document.getElementById("text2-4-4")
            relatedHashtags.textContent = commonTags[20].tag
            newUrl = endpoint + commonTags[20].tag + "/media/recent?client_id=" + client_id 
            getInstagramMediaByUrl(newUrl, function(json)
            {
                displayFirstPicture(json, '#cont2-4-4')
            })
        }
    }
}

function getInstagramMediaByUrl(instagramUrl, callbackFunction)
{
    $.ajax(
    {
        dataType: "jsonp",
        url: instagramUrl,
        success: callbackFunction
    })
}

function gotPictures( json )
{
    // console.log(json)

    var pictures = json.data
    
    /*pictures.forEach(function(picture)
    {
        // put the same code that we have in while..
    })*/
    
    var total = pictures.length
    var counter = 0;
    while (counter < total)
    {
        // console.log(counter)

        var picture = pictures[counter]
        
        if (picture.tags && picture.tags.length > 0)
        {
            picture.tags.forEach(function(tag)
            {
                if (_(blacklistedHashtags).contains(tag)) 
                {
                    // console.log(tag + ' is blacklisted')
                }
                else
                {
                    if (hashtags[tag] == undefined) hashtags[tag] = 1 // if it doesn't exist, set it to 1
                    else hashtags[tag] += 1 // otherwise increment it by one
                }
            })
        }

//        document.getElementById("cont")
        counter ++
    }
    
    
    // FIRST IMAGE
    
    var imageURL = pictures[0].images.standard_resolution.url
    // console.log(imageURL)  
    var img = '<img src="' + imageURL + '">'
    $('#cont').append(img)
    
    //    console.log(hashtags)
    
    instagramUrl = json.pagination.next_url 
    getNextBatchOfPictures()
}

function displayFirstPicture( json, id )
{
     console.log('displayFirstPicture ' + id)

    var pictures = json.data
    
    // FIRST IMAGE
    var imageURL = pictures[0].images.standard_resolution.url
    // console.log(imageURL)  
    var img = '<img src="' + imageURL + '">'
    $(id).append(img)
}

