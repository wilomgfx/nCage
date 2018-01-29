(function() {
	//nCage 
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jason_Momoa_Supercon_2014.jpg/170px-Jason_Momoa_Supercon_2014.jpg',
			'http://cdn.skim.gs/image/upload/v1492183800/Jason-Momoa-short-hair-2_cr3gjw.jpg',
			'https://media1.popsugar-assets.com/files/thumbor/kaxBIyNB-NI8Q8c0q4k8kSTnip0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/04/27/022/n/1922398/3256f55c_edit_img_image_41010616_1461527700/i/Shirtless-Jason-Momoa-Pictures.png',
			'https://img.cinemablend.com/filter:scale/quill/a/e/3/d/f/9/ae3df913cf2a1467201e88b72383ff342b009757.jpg?mw=600',
			'http://www.jetss.com/wp-content/uploads/2017/07/1178.jpg',
			'https://i1.wp.com/www.usmagazine.com/wp-content/uploads/jason-momoa-d3101cf3-e95d-4276-8b1d-9a2804a8d997.jpg?crop=86px%2C0px%2C1175px%2C659px&resize=1600%2C900&ssl=1',
			'http://cdn.bloody-disgusting.com/wp-content/uploads/2017/11/Jason-Momoa.jpg',
			'http://s3.amazonaws.com/digitaltrends-uploads-prod/2014/06/jason-momoa-conan.jpg',
			'http://cdn.collider.com/wp-content/uploads/jason-momoa.jpg',
			'http://cimg.tvgcdn.net/i/2015/02/20/fb3f849e-1824-4c99-982e-1c77f3c3b8d4/ed7e74678609a786d0789b22efd5a2b9/150220-news-jason-momoa.jpg',
			'https://www.thesun.co.uk/wp-content/uploads/2017/01/nintchdbpict000222782996.jpg?strip=all&w=639',
			'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/Jason-Momoa.jpg',
			'http://www2.pictures.zimbio.com/bg/Jason+Momoa+Jason+Momoa+Heads+Jimmy+Kimmel+7agOZ99tBJHl.jpg',
			'http://www.kansascity.com/entertainment/ent-columns-blogs/stargazing/j3o2fr/picture186948703/alternates/LANDSCAPE_1140/jason%20momoa%20kansas%20city%20game%20of%20thrones%20justice%20league',
			'https://img.etimg.com/thumb/msid-61069621,width-643,imgsize-36735,resizemode-4/jason-momoa-apologises-for-six-year-old-game-of-thrones-rape-joke.jpg',
			'https://www.usmagazine.com/wp-content/uploads/2017/10/jason-momoa.jpg',
			'https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Jason-Momoa-530195.jpg',
			'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/Jason-Momoa-GettyImages-631856082-920x584.jpg',
			'https://pmcdeadline2.files.wordpress.com/2017/10/aquaman.jpg?w=446&h=299&crop=1',
			'https://pmcvariety.files.wordpress.com/2017/03/jason-momoa.jpg?w=700&h=393&crop=1',
			'https://media.allure.com/photos/59dfa1d0c8f1da0e3e0d6301/master/pass/jason%20momoa.jpg',
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();
 
 
