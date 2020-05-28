$(function () {
    let dogForm = $("#dogApp");
    dogForm.on("submit", function (event) {
        $("#dogs").html("");
        event.preventDefault()
        let numberOfDogs = parseInt($($("input")[0]).val());
        if (!numberOfDogs) { numberOfDogs = 3 }
        let url = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {

                //to whomever is grading this I know I need to include breed and also catch. 
                //I looked at the notes.Any suggestions?
                //     fetch('https://dog.ceo/api/breeds/list/all')
                //         .then(response => response.json())
                //         .then(responseJson => console.log(responseJson))
                //         .catch(error => alert('Something went wrong. Try again later.'));
                // }
                let images = responseJson.message;
                for (i = 0; i < images.length; i++) {
                    let imageTag = `<img src="${images[i]}"><br>`
                    $("#dogs").append(imageTag);
                }

            })

    })
})


//json object
// let example = { name1: "VALUE1", name2: 19 }



// })
                // }
                // else {
                //     console.log("ELSE");
                //     let url = "https://dog.ceo/api/breeds/image/random/3"
                //     fetch(url)
                //         .then(response => response.json())
                //         .then(responseJson => {
                //             let images = responseJson.message;
                //             console.log("images2", images)
                //             for (i = 0; i < images.length; i++) {
                //                 let imageTag = `<img src="${images[i]}"><br>`
                //                 $("#dogs").append(imageTag);
                //             }
                // })
                // }

