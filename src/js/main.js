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

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  // Display controls in the bottom right corner
  controls: true,

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  slideNumber: true,

  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: true,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: true,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Enable slide navigation via mouse wheel
  mouseWheel: true,

  // Hides the address bar on mobile devices
  hideAddressBar: true,

  // Opens links in an iframe preview overlay
  previewLinks: false,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed: 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // Parallax background image
  parallaxBackgroundImage: 'img/background.jpeg', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // Parallax background size
  parallaxBackgroundSize: '1920px 1281px', // CSS syntax, e.g. "2100px 900px"

  // Amount to move parallax background (horizontal and vertical) on slide change
  // Number, e.g. 100
  parallaxBackgroundHorizontal: '',
  parallaxBackgroundVertical: '',

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 1280,
  height: 720,

  // Factor of the display size that should remain empty around the content
  margin: 0.05,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5,

  // Ctrl + Mouse-Click ==> Zoom in
  zoomKey: 'ctrl',

  // Optional reveal.js plugins
  dependencies: [
    {
      src: 'assets/reveal.js/lib/js/classList.js', condition: function () {
        return !document.body.classList;
      }
    },
    {
      src: 'assets/reveal.js/plugin/markdown/marked.js', condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: 'assets/reveal.js/plugin/markdown/markdown.js', condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: 'assets/reveal.js/plugin/highlight/highlight.js', async: true, condition: function () {
        return true;
      }, callback: function () {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: 'assets/reveal.js/plugin/zoom-js/zoom.js',
      async: true
    },
    {
      src: 'assets/reveal.js/plugin/notes/notes.js',
      async: true
    }
  ]
});