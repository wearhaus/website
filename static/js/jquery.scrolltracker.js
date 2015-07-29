(function ( $ ) {

  $.scrolltracker = function( el, options ) {
    $(window).on('DOMContentLoaded load resize scroll', function(){
      //set default options
      var settings = $.extend({
        // These are the defaults.
        direction: "vertical"
        //you can override this with "horizontal" or "both"
      }, options );
          
      var locateVert = function(rect){
        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        ) return 'onscreen';
        else if(
          rect.top >= (window.innerHeight || document.documentElement.clientHeight) || 
          rect.bottom <= 0
        ) return 'offscreen';
        else if(
          rect.top < 0 && 
          rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
        ) return 'overflowing';
        else if(
          rect.top < 0 &&
          rect.bottom < (window.innerHeight / 2)
        ) return 'onfromtop';
        else if(
          rect.top >= (window.innerHeight / 3) &&
          rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
        ) return 'onfrombottom';
        else if(
          rect.top < (window.innerHeight / 3) &&
          rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
        ) return 'onfrombottomhalf';
        else if(
          rect.top < 0 &&
          rect.bottom >= (window.innerHeight / 2)
        ) return 'onfromtophalf';
      }

      $(el).each(function(){
        var $this = $(this);
        
        //pull the element from the jQuery object, get its bounding rectangle
        var rect = $this[0].getBoundingClientRect();
        
        if(settings.direction == "vertical" || settings.direction == "both"){
          var screenstatus = locateVert(rect);
          if (screenstatus == 'onscreen') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('onscreen_vert_left');
            }
            else $this.addClass('onscreen_vert_right');
          } 
          else {
              if ($this.hasClass('tab-text-left')) {
                $this.removeClass('onscreen_vert_left')
              }
              else $this.removeClass('onscreen_vert_right');
          }

          if (screenstatus == 'offscreen') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('offscreen_vert_left');
            }
            else $this.addClass('offscreen_vert_right');
          } 
          else {
              if ($this.hasClass('tab-text-left')) {
                $this.removeClass('offscreen_vert_left');
              }
              else $this.removeClass('offscreen_vert_right');
          }

          if (screenstatus == 'overflowing') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('overflowing_vert_left');
            }
            else $this.addClass('overflowing_vert_right');
          } 
          else {
            if ($this.hasClass('tab-text-left')) {
              $this.removeClass('overflowing_vert_left');
            }
            else $this.removeClass('overflowing_vert_right');
          }

          if (screenstatus == 'onfromtop') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('onfromtop_left');
            }
            else $this.addClass('onfromtop_right');
          } 
          else {
            if ($this.hasClass('tab-text-left')) {
              $this.removeClass('onfromtop_left');
            }
            else $this.removeClass('onfromtop_right');
          }

          if (screenstatus == 'onfrombottom') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('onfrombottom_left');
            }
            else $this.addClass('onfrombottom_right');
          } 
          else {
            if ($this.hasClass('tab-text-left')) {
              $this.removeClass('onfrombottom_left');
            }
            else $this.removeClass('onfrombottom_right');
          }

          if (screenstatus == 'onfromtophalf') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('onfromtophalf_left');
            }
            else $this.addClass('onfromtophalf_right');
          } 
          else {
            if ($this.hasClass('tab-text-left')) {
              $this.removeClass('onfromtophalf_left');
            }
            else $this.removeClass('onfromtophalf_right');
          }

          if (screenstatus == 'onfrombottomhalf') {
            if ($this.hasClass('tab-text-left')) {
              $this.addClass('onfrombottomhalf_left');
            }
            else $this.addClass('onfrombottomhalf_right');
          } 
          else {
            if ($this.hasClass('tab-text-left')) {
              $this.removeClass('onfrombottomhalf_left');
            }
            else $this.removeClass('onfrombottomhalf_right');
          }
        }
      }); 
    });
  };
 
}( jQuery ));