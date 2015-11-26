console.log("ready to go");

var endpoint = "https://api.instagram.com/v1/tags/"
var hashtag = "christmas"
var client_id = "%20f5e6d7edf7cf4376a2aef55e9e761464"

var URL = endpoint + hashtag + "/media/recent?client_id=" + client_id

var hashtags = {} // we'll keep a count of hashtags


//var martinperssson = "https://api.instagram.com/v1/tags/martinperssson/media/recent?client_id=%20f5e6d7edf7cf4376a2aef55e9e761464";

$.ajax(
{
    dataType: "jsonp",
    url: URL,
    success: handleData
})

function handleData( json )
{
//    console.log(json)

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
                    console.log(tag + ' is blacklisted')
                }
                else
                {
                    if (hashtags[tag] == undefined) hashtags[tag] = 1 // if it doesn't exist, set it to 1
                    else hashtags[tag] += 1 // otherwise increment it by one
                }
            })
        }

        // console.log(picture)

        var imageURL = picture.images.standard_resolution.url
        // console.log(imageURL)  

        var img = '<img src="' + imageURL + '">'

        $('body').append(img)

        counter ++
    }
    
    
    console.log(hashtags)
    
}

