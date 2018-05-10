const wiki = require('node-wikipedia');

wiki.page.data('Tracy Morgan', {content: true}, (response) => {
  console.log(JSON.stringify(response));
});

// regex to capture dates
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthRegex = '(?:' + months.join('|') + ')';

const dateRegex = new RegExp('\.\s?((?:[^.])*(?:on|in)\s(' + monthsRegex + '\s\d*(?:,\s\d*)?)\s?(?:[^.])*).', 'gi');
