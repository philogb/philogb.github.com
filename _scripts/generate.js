// Read the file and print its contents.
var fs = require('fs'),
    filename = '_scripts/talks.csv',
    out = 'talks.html';

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }
  var rows = data.split('\n');
  rows.shift();
  var html = rows.map(function(row) {
    row = row.split('\t');
    var title = row[0],
        event = row[1],
        type = row[2],
        city = row[3],
        date = row[4],
        slidesUrl = row[5],
        slidesEmbed = row[6],
        videoUrl = row[7],
        videoEmbed = row[8],
        html = '<li>' +
          '<time>' + date + '</time> ' +
          (slidesUrl ? '<a href=\'' + slidesUrl + '\'>' + title + '</a>' : title) +
          ' - ' + event + (city ? ' at ' + city : '') +
          (videoUrl ? ' <a href=\'' + videoUrl + '\'>(video)</a>' : '') +
          '</li>\n';
    return html;
  });

  fs.writeFile(out, html.join(''), function(err) {
    if (err) {
      throw err;
    }
  });
});
