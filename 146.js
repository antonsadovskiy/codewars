function solution(nums){
    if (nums === null){
      return []
    }
    else if (nums.length == 0){
      return []
    }
    
    else {
      let temp
      for (let i = 0; i < nums.length - 1; i++){
        for (let j = 0; j < nums.length - i - 1; j++){
          if (nums[j] > nums[j + 1]){
            temp = nums[j]
            nums[j] = nums[j+1]
            nums[j+1] = temp
          }
        }
      }
      return nums
    }
    
  }