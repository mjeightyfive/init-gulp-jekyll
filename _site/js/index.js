require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvX2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbjsoZnVuY3Rpb24oZG9jdW1lbnQsIEluaXRXZWJhcHAsIFNwaW5uZXIsIHVuZGVmaW5lZCkge1xuXG4gICAgSW5pdFdlYmFwcC5zcGlubmVyID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIExvYWRlcih0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvYWRlci5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNwaW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YXJnZXQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBMb2FkZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zdG9wKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIExvYWRlcjtcbiAgICB9KCkpO1xuXG4gICAgSW5pdFdlYmFwcC5kYXRhID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldCh1cmwsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNmYWlsJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0OiBnZXRcbiAgICAgICAgfTtcblxuICAgIH0oKSk7XG5cbn0pKGRvY3VtZW50LCB3aW5kb3cuSW5pdFdlYmFwcCA9IHdpbmRvdy5Jbml0V2ViYXBwIHx8IHt9LCBTcGlubmVyKTtcblxuKGZ1bmN0aW9uKEluaXRXZWJhcHAsICQsIHVuZGVmaW5lZCkge1xuXG4gICAgdmFyIHNwaW5uZXIxID0gbmV3IEluaXRXZWJhcHAuc3Bpbm5lcignZGF0YTEnKTtcbiAgICBzcGlubmVyMS5zaG93KCk7XG5cbiAgICB2YXIgdXJsID0gJ2h0dHBzOi8vcGljYXNhd2ViLmdvb2dsZS5jb20vZGF0YS9mZWVkL2FwaS91c2VyLzEwOTQ3MzUxMjYxMTY4NTkwMjIxOS9hbGJ1bWlkLzYwODg3NDc2MjI0ODE1MTUwMjU/YWx0PWpzb24nO1xuXG4gICAgSW5pdFdlYmFwcC5kYXRhLmdldCh1cmwsIGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgICB2YXIgdXJsID0gZGF0YS5mZWVkLmVudHJ5WzBdLm1lZGlhJGdyb3VwLm1lZGlhJGNvbnRlbnRbMF0udXJsO1xuICAgICAgICAkKCcjZGF0YTEnKS5odG1sKCc8aW1nIGNsYXNzPVwicHVyZS1pbWdcIiBzcmM9XCInICsgdXJsICsgJ1wiIC8+Jyk7XG4gICAgICAgIHNwaW5uZXIxLmhpZGUoKTtcbiAgICB9KTtcbn0od2luZG93LkluaXRXZWJhcHAsICQpKTtcbiJdfQ==
