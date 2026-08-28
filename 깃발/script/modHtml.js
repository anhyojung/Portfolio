let sections = document.querySelectorAll('.section');

sections.forEach((section) => {
  let bgR = document.createElement('div');
  bgR.className = 'section__bg section__bg--right';
  section.prepend(bgR);
  let bgL = document.createElement('div');
  bgL.className = 'section__bg section__bg--left';
  section.prepend(bgL);
});

let prevClassList;
sections.forEach((section) => {
  let currClassList = section.classList;
  if (
    currClassList.contains('section--type-text') &&
    !prevClassList?.contains('section--type-text')
  ) {
    currClassList.add('text-head');
  } else if (
    !currClassList.contains('section--type-text') &&
    prevClassList?.contains('section--type-text')
  ) {
    prevClassList?.add('text-tail');
  }
  prevClassList = currClassList;
});
