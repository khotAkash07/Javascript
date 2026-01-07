public class FindTriplet{
	public static void main(String [] args){
		
		int [] arr = {12,3,4,1,6,9};
		int target = 24;
		
		int sum = 0;
		
		for(int i =0; i<arr.length; i++){
			for(int j =i+1; j<arr.length; j++){
				for(int k =j+1; k<arr.length; k++){
					
					if((arr[i]+arr[j]+arr[k])==target)
						System.out.println(arr[i]+" "+arr[j]+" "+arr[k]);
				}
			}
		}
	}
}