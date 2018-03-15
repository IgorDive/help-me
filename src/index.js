module.exports = function count(s, pairs) {
  let n = 0;
  let valueMassive = [];

  if ( pairs.some( arr => arr[1] > 30 ) ) return;
  n = pairs.map( (arr) => Math.pow( arr[0], arr[1] ) ).reduce( (prevValue, item) => prevValue * item );
  if ( n > 50000 ) return; 

  for ( let i = 1; i <= n; i++ ) {
    for ( let j = 0; j < s.length; j++ ) {
      if ( s[j] && !checkGreatestComDivIsNotOne( i + j ) ) {
        addValueToMassive(i);
      };
      if ( !s[j] && checkGreatestComDivIsNotOne( i + j ) ) {
        addValueToMassive(i);
      };
    };
  };
  
  function checkGreatestComDivIsNotOne( sum ) {
    for ( l = 0; l < pairs.length; l++ ) {
      if ( sum / pairs[l][0] < 2 ) continue;
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