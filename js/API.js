function API(url,method, callback,data){
  $.ajax({
    url :url ,
    type :method ,
    dataType : "json",
    data: data,
    contentType : "application/json; charset=utf-8",
    success :  callback
  });
}
