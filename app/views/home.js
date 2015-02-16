import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function(){
		Ember.$('.slider').glide({
			 autoplay: 3500,
   			 hoverpause: true, // set to false for nonstop rotate
   			 arrowRightText: '&rarr;',
   			 arrowLeftText: '&larr;'
		});
		}
	});



