const refs = {
  text: document.querySelector('.initial-text'),
  findBtn: document.querySelector('.find-button'),
  result: document.querySelector('.result'),
};

refs.findBtn.addEventListener('click', clickHandler);

function clickHandler() {
  const initialArray = refs.text.value.replaceAll('\n', ' ').split(' ');

  const uniqueFristLettersInWords = initialArray.reduce((acc, word) => {
    const lettersArray = word.split('').filter(isLetter);

    if (lettersArray[0]) {
      const filteredAllUniqueLetters = filterUniqueLetters(lettersArray);

      acc.push(filteredAllUniqueLetters[0]);
    }

    return acc;
  }, []);

  const filteredUniqueFirstLetters = filterUniqueLetters(uniqueFristLettersInWords);

  refs.result.innerHTML = filteredUniqueFirstLetters[0];

  console.log('initialArray: ', initialArray);
  console.log('uniqueFristLettersInWords: ', uniqueFristLettersInWords);
  console.log('filteredUniqueFirstLetters: ', filteredUniqueFirstLetters);
  console.log('result: ', filteredUniqueFirstLetters[0]);
}

function isLetter(letter) {
  return letter.toLowerCase() !== letter.toUpperCase();
}

const filterUniqueLetters = array => {
  const lettersCount = array.reduce((acc, letter) => {
    if (acc.hasOwnProperty(letter)) {
      acc[letter] += 1;
    } else {
      acc[letter] = 1;
    }

    return acc;
  }, {});

  const uniqueLetters = Object.keys(lettersCount).reduce((acc, letter) => {
    if (lettersCount[letter] !== 1) {
      return acc;
    }
    acc.push(letter);

    return acc;
  }, []);

  return uniqueLetters;
};
