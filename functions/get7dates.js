

module.exports =  function get_7dates(n=0){
    var date = new Date() 
    date.setDate(date.getDate() + n);
    const day_ = date.toDateString().slice(0,3)
    const date_ = date.toDateString().slice(8,10)
    
    return `${day_},${date_}`

     

}