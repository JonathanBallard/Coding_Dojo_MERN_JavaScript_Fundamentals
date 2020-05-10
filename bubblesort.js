
let array = [9,5,7,3,4,2,8,1,6];

function bubbleSort(arr,end){
    if(end > 0){
        let i = 0;
        while(i < end - 1){
            // if left > right, swap
            if(arr[i] > arr[i + 1]){
                swap(arr,i)
            }
            i++;
        }
        return bubbleSort(arr, end - 1);
    }
    return 'done';

}



function swap(arr,i){
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
}


bubbleSort(array, array.length);
console.log(array);







