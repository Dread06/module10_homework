let b = !0

switch (typeof b) {
    
  case 'number':
      console.log('X - число');
      break;
    
  case 'string':
    console.log('X - Строка');
    break;
  
  case 'boolean':
    console.log('X - логическое');
    break;
    
  default:    
    console.log('X - undefined');
    
}    