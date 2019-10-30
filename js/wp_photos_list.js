/**
 * 
 * @authors Nat Liu (natcube@gmail.com)
 * @date    2015-05-25 09:45:03
 * @version 2015-05-25 09:45:03
 */

 (function($){
 	$.fn.photoslist = function(options){

 		var defaults = {

 			width:null,
 			height:null,
 			column:null,
 			margin:null
 		};

 		var settings = $.extend(true,{}, defaults, options);

 		return this.each(function() {
 			
 			var _this = this,
 				config = $.parseJSON($(_this).attr("data-photoslist-config")),
 				setting = $.extend(true, {}, settings, config),
 				$parent = $(this).parent();
 			
 			setting['ratio'] = setting.width/setting.height;

 			var $photos = $(".photo_item", _this);

			$photos.css({
 				width: setting.width,
 				marginRight: setting.margin
 			}).hover(function() {
				$(this).addClass('photo_hover');
			}, function() {
				$(this).removeClass('photo_hover');
			}).find(".photo_image a").css({
				width: setting.width,
				height: setting.height
			});

 			var photoWidth = $photos.eq(0).outerWidth(),
 				photoHeight = $photos.eq(0).outerHeight(),
 				photoMbtm = parseInt($photos.eq(0).css("margin-bottom")),
 				wrapWidth = (photoWidth + parseInt(setting.margin)) * setting.column,
 				wrapHeight = (photoHeight + photoMbtm)*Math.ceil($photos.length/setting.column);
 			$(_this).css("width", wrapWidth - parseInt(setting.margin)).
 			find(".photo_wrap").css({"width":wrapWidth,"height":wrapHeight});
 		});
 		
 	}

 	$(function(){

 		$("[data-photoslist-config]").photoslist();
 	});
 })(window.jQuery||window.Zepto)