const getSleepHours = day => {
    switch(day) {
      case 'monday':
                  return 8
                  break;
        
      case 'tuesday':
                  return 7
                  break;
        
      case 'wednesday':
                 return 6
                 break;
      
      case 'thursday':
                return 5
                break;
       
      case "friday":
                return 4
                break;
      case "saturday":
                return 4
                break;
        
      case "sunday":
                return 10
                break;
        
       default:
        return 'eror!';
     }
    };
    
    const getActualSleepHours = () => 
          getSleepHours('monday') +
          getSleepHours('tuesday') +
          getSleepHours('wednesday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday');
      
    console.log(getSleepHours('saturday'));
    console.log(getActualSleepHours());
      
    const getIdealSleepHours = () => {
      let idealHours = 7;
      return idealHours * 7;
    };
    
      const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
    
      if (actualSleepHours === idealSleepHours) {
              console.log('Kamu Tidur Cukup');
              } else if (actualSleepHours > idealSleepHours) {
              console.log('Tidur Kamu Kebanyakan' + (actualSleepHours - idealSleepHours) + ' more hours of sleep this week');
              } else if (actualSleepHours < idealSleepHours) {
              console.log('Tidur kamu kurang, jangan begadang melulu ' + (actualSleepHours - idealSleepHours) + ' hours less than you should have this week');
              } else {
              console.log('Eror, check your code')
              }
    };
    
    calculateSleepDebt();
    
    
    
    