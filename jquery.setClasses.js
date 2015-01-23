/*!
*
* Copyright (c) 2014 Yuki Sugitani
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* @author: Yuki Sugitani (https://github.com/osgworks/jquery.setClasses.js)
* @version: 1.0.0
*/
;(function($) {
	var pluginName = 'setClasses',
		defaults = {
			target : '.setTarget',
			firstClass : 'first',
			lastClass : 'last'
		};

	function setClasses(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	setClasses.prototype.init = function() {
		var that = this,
			$target = $(that.element).find(that.options.target);
			
		$target.each(function(index) {
			var item = $(this);

			if(index === 0) {
				item.addClass(that.options.firstClass);
			}　else if(index === $target.length-1) {
				item.addClass(that.options.lastClass);
			}
		});
	};

	$.fn[pluginName] = function (options) {
		return this.each(function() {
			new setClasses(this, options);
		});
	};
})(jQuery);