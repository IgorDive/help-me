module.exports = function count(s, pairs) {
  let n = 0;
  let valueMassive = [];
  let sArr = s.split('').map( elem => +elem );

  if ( pairs.some( arr => arr[1] > 30 ) ) return;
  n = pairs.map( (arr) => Math.pow( arr[0], arr[1] ) ).reduce( (prevValue, item) => prevValue * item );
  if ( n > 50000 ) return; 
  
  for ( let i = 0; i <= n; i++ ) {
    for ( let j = 0; j < sArr.length; j++ ) {
      if ( sArr[j] && !checkGreatestComDivIsNotOne( i + j ) && (i + j) ) {
        addValueToMassive(i);
      };
      if ( !sArr[j] && checkGreatestComDivIsNotOne( i + j ) && (i + j) ) {
        addValueToMassive(i);
      };
    };
  };
  
  function checkGreatestComDivIsNotOne( sum ) {
   
    for ( let l = 0; l < pairs.length; l++ ) {
      if ( !(sum % pairs[l][0]) ) return true; 
    }
    
    return false;
  };

  function addValueToMassive(i) {
    if ( !valueMassive.some( value => i === value ) ) {
      valueMassive.push( i );
    };
  };

  return valueMassive.length % 1000000007;
};