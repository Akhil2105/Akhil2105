
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map()
       for(let i =0 ; i < nums.length ;i++){
         const tempComp = target - nums[i];
         if(hashmap.has(tempComp)){
           return[hashmap.get(tempComp), i];
         }else{
           hashmap.set(nums[i],i);
         }
       }
    }
   