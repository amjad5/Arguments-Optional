
function addTogether(x) {
	
	if(arguments.length > 1)
	
	{
		console.log(2);
		if(arguments[0] % 1 !== 0 || arguments[1] % 1 !== 0 )
		{
			return undefined;
		}
		
		 if(arguments[0].constructor === String)
		{
			return undefined;
		}
		
		if(arguments[1].constructor === String)
		{
			return undefined;
		}
		
		return arguments[0] + arguments[1];
	}
	else{
		
		if(x % 1 !== 0 || x instanceof String)
		{
			return undefined;
		}
		
		return function(y){
			if(y % 1 !== 0 || y instanceof String || Array.isArray(y) === true)
			{
				return undefined;
			}
			console.log(y);
			return x + y;
		};
	}
	return undefined;
  
}
