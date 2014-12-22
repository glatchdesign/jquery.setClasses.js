;(function($) {
	var pluginName = 'setClasses',
		defaults = {
			target : 'setTarget',
			firstClass : 'first',
			lastClass : 'last'
		};

	function SetClasses(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	SetClasses.prototype.init = function() {
		var self = this,
			$target = $(self.element).find(self.options.target);

		$target.each(function(index) {
			var item = $(this);
			
			if(index === 0) {
				item.addClass(self.options.firstClass);
			}　else if(index === $target.length-1) {
				item.addClass(self.options.lastClass);
			}
		});
	};

	$.fn[pluginName] = function (options) {
		return this.each(function() {
			new SetClasses(this, options);
		});
	};
})(jQuery);