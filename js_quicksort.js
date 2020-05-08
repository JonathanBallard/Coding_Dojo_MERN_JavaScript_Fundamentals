

/*

Quicksort From:

https://www.guru99.com/quicksort-in-javascript.html

partition based on random pivot
partition to the left of initial pivot index
new pivot = prev. pivot - 1
partition to the left of new pivot index until at index 0
partition to the right of initial pivot index
partition to the right of new pivot index until at index arr.length

*/






function partition(arr, l, r) {
    let pivot   = arr[Math.floor((r+l) / 2)];
    let i = l;
    let j = r;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}
// newArr = [1,8,7,9,3,6,4,5,2,10];
newArr = [1,8,7,9,35,6,4,5,21];


// partition(newArr)



// function quickSort(arr, start=0, end=arr.length){
function quickSort(arr, l, r) {
    let pivotOld;
    if (arr.length > 1) {
        pivotOld = partition(arr, l, r);
        if (l < pivotOld - 1) {
            quickSort(arr, l, pivotOld - 1);
        }
        if (pivotOld < r) {
            quickSort(arr, pivotOld, r);
        }
    }
    return arr;
}

// quickSort(newArr);
let thisArr = quickSort(newArr, 0, newArr.length - 1);
console.log('QUICKSORT(NEWARR)');
console.log(thisArr);
console.log('NEWARR')
console.log(newArr)







