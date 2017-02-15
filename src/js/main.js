Zepto(function ($) {
  var tableOfContents = $("#table-of-contents");
  var tableList = $("<ol />");

  $(".toc-element").each(function (index) {
    var _self = $(this)
    var hash = "#/" + _self.closest("section").index();
    if (_self.text()) {
      tableList.append([
        "<li>",
        //    '<a href="' + hash + '">',
        _self.text(),
        //'</a>',
        "</li>"
      ].join(""));
    }
  });

  tableOfContents.html(tableList);
});