# bubble sort
#two for loops pointing start,start+1
#compare two elements and if first<second swap
#return original array
#use recursion to avoid nested arrays

let arr = [10,8,7,6,5,4,3,2,1]
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){}
    if(arr[i]>arr[j]){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}
#recursiveapproach
  for(let i=0;i<arr.length;i++){
    
  }
