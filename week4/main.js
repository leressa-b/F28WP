var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://leressa-b.github.io/F28WP/week4/cities1.json');
ourRequest.onload = function() {
var ourData = ourRequest.responseText;
onsole.log(ourData[0]);
};
ourRequest.send();
