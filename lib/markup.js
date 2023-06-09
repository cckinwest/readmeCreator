function Markup() {
  this.sectionMarkup = function (type, title, content) {
    var hash = "";

    for (var i = 0; i < type; i++) {
      hash += "#";
    }

    return `${hash} ${title}\n ${content}\n\n`;
  };

  this.contentTableMarkup = function (sectionTitles) {
    var table = "";

    for (const sectionTitle of sectionTitles) {
      table += `- [${sectionTitle}](#${sectionTitle})\n`;
    }

    return table + "\n";
  };

  this.imageMarkup = function (imgURL, description) {
    return `![${description}](${imgURL})`;
  };

  this.urlMarkup = function (url, description) {
    return `[${description}](${url})`;
  };

  this.emailMarkup = function (email, description) {
    return `[${description}](mailto:${email})`;
  };
}

module.exports = Markup;
