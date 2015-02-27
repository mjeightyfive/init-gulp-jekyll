'use strict';

;(function(document, InitWebapp, Spinner, undefined) {

    InitWebapp.spinner = (function() {

        function Loader(target) {
            this.target = target;
            this.spinner = new Spinner();
        }

        Loader.prototype.show = function() {
            this.spinner.spin(document.getElementById(this.target));
        };

        Loader.prototype.hide = function() {
            this.spinner.stop();
        };

        return Loader;
    }());

    InitWebapp.data = (function() {

        function get(url, callback) {

            $.ajax({
                url: url,
                success: function(data) {
                    callback(data);
                },
                error: function() {
                    console.log('#fail');
                }
            });
        }

        return {
            get: get
        };

    }());

})(document, window.InitWebapp = window.InitWebapp || {}, Spinner);

(function(InitWebapp, $, undefined) {

    var spinner1 = new InitWebapp.spinner('data1');
    spinner1.show();

    var url = 'https://picasaweb.google.com/data/feed/api/user/109473512611685902219/albumid/6088747622481515025?alt=json';

    InitWebapp.data.get(url, function(data) {

        var url = data.feed.entry[0].media$group.media$content[0].url;
        $('#data1').html('<img class="pure-img" src="' + url + '" />');
        spinner1.hide();
    });
}(window.InitWebapp, $));
