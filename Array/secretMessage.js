let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
let removeArrayLastSecretMessage = secretMessage.pop();
console.log(secretMessage.length);
console.log(secretMessage.push('Program'));
console.log(secretMessage);
console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
console.log(secretMessage);
console.log(secretMessage.shift());
console.log(secretMessage);
console.log(secretMessage.unshift('Programming'));
console.log(secretMessage);