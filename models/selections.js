function selections(){

    const address = "https://frontend-take-home.fetchrewards.com/form"

    fetch(address)
    .then((apiResponse) => {
      return apiResponse.json()
      .then((jsonData) => {
        console.log(jsonData)
    })})
    
}

