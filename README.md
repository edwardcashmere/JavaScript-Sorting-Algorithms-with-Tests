# JavaScript-Sorting-Algorithms-with-Tests
This is a compilation of a few sorting Algorithms .
Compilation of different sorting Algorithms
and tests using Jest for their viabilility.


# Slower Algorithms Time Complexity O(n^2) but the space complexity is O(1)
We have the slower algorithms selection sort,bubble sort and insertion sort typically all have quadratic  
runtimes when sorting data so as the dataset set increases the perfomance speed will suffer .



#Faster Sorting Algorithms
In this group we have but to Radix, Merge and quick sort but to name a few , their runtimes are better as compare to the previous three , they are well suited to handle large amounts of data .Their time complexity worst case scenario is O(n)  at best O(1) . The trade off however is the space complexity is also O(n)
 this is because as the algorithm  is sorting the dataset it is storing data at various levels while sorting, but the Payoff is is much better since most peple prefer to pay more money for space and as long as the algorithm is optimized for performance that is looking at speed at least.
 Merge sort and Quick sort constanty do comparisons though differently .
 
 #Radix Sort
 Radix sorting Algorithm takes advantage of particular special charactristic of numbers of Integers,e.g ...
 
 
 #Merge Sort
 
 Merge sort takes advantage of the fact that a single number in an array is already sorted .
 Merge  algorithm takes an array and splits it into continuously until the smaller sub-arrays have only one elements in them ,then it merges the 
 sub-arrays recursively making comparisons making sure the merged array is always sorted when merging the sub-arrays.
 the Big O of slicing the array, and making the comparisons is log n and n respectively which give this Algorithm a Big O of nlogn
 
 
 
 #Quick Sort
 
 
 
 
 #Linear search
 
 Generally slow and scalable, this is because when searching for an item comparisons have to be made with all the elements to establish 
 a match especially if the element we are looking for is the last element(worst case scenario);The time complexity O(n) 
 
 
 
 #Binary Search
 
 This searching Algorithm is much better since after every iteration if the elment is not found have the data is eliminated from the range of possible values until the elemnent is found . This gives the algorithm a time complexity of log n
