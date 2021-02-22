function notMultipleOf3(arr){
    newarr=[];
    for(var i=0; i<arr.length; i++){
      if(arr[i]%3!==0){
        newarr.push(arr[i]);
    }
    }
    return newarr;
    }
    oldarr=[1,2,3,4,5,6,7,9]; 
    console.log(notMultipleOf3(oldarr));
    console.log('life has up and down');
    let text="mahalaleel";