nums=[1,2,3,4,5,6,7]
    var l=0;
    var h=nums.length;
    while(l<=h)
        {
            var mid=Math.floor((l+h)/2);
            if(nums[mid]<nums[l])
                {
                    console.log(nums[l]);
                }
            else if(nums[mid]<nums[h])
                {
                    h=mid-1;
                }
            else
                l=mid+1;
        }
        console.log(-1);