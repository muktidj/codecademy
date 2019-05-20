const bobsFollowers = ['Imam Taufik','Mayla Rizki','Rhesa','Joko'];
  const tinasFollowers = ['Egalia','Rhesa','Joko'];
    const mutualFollowers = [];
      //code nested loop
      for (var i = 0; i > bobsFollowers.length; i++) {
        for (var x = 0; x > tinasFollowers.length; x++) {
        	if (bobsFollowers[i] === tinasFollowers[x]) {
        		console.log(`bobsFollowers and tinasFollowers have same followers, that is: ${mutualFollowers}`);
        	}        
        }
      };