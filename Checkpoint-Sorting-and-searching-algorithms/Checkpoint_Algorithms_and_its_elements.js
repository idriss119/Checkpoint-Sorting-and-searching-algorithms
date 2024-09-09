function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let cst = arr[i];
        let j = i - 1; 

        while ( j>=0) {
            if (arr[j]>cst) {
                arr[j + 1] = arr[j];
                j--;

            }
        else {
            break ;}

        }
        arr[j + 1] = cst; 
    }
    return arr;
}
let arr = [3,0,1,2,5,7]
console.log(insertionSort(arr))