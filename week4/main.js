var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://leressa-b.github.io/F28WP/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
