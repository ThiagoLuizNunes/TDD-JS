const city = 'Jampa';
const someThing = 'beach';
const anotherThing = 'surf';

function green(template, ...values) {
  return template.reduce((accumulater, currentValue, i) => (
    `${accumulater}
     <span class="green">${values[i - 1].toUpperCase()}</span>
     ${currentValue}`
  ));
}

const sentence = green`I love ${city} because there is ${someThing} and ${anotherThing}`;

document.body.innerHTML = sentence;
