const makeUpperCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1, word.length);
};

export const makeLabel = (word) => {
  let label;
  const matchedCamelCase = word.match(/[A-Z][a-z]+/g);
  if(!matchedCamelCase)  {
    label = makeUpperCase(word);
  } else {
    const [firstWord] = word.split(/(?=[A-Z])/);
    label = `${makeUpperCase(firstWord)} ${matchedCamelCase.join(' ')}`;
  }
  return label;
};

export const sortArray = arr => {
  return arr.sort((a, b) => {
    const caseInsensitiveA = a.toLowerCase();
    const caseInsensitiveB = b.toLowerCase();
    if(caseInsensitiveA < caseInsensitiveB) return -1;
    if(caseInsensitiveA > caseInsensitiveB) return 1;
    return 0; 
  });
};

export const perPage = 20;
