import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	
	this.resource('abouts',function()
	{
	this.route('about');
	this.route('whatwedo');
	this.route('whoweserve');
	this.route('howwedoit');
	});
	this.resource('services',function(){
	this.route('service');
	this.route('ourapproach');
	});
	this.route('frontend');
	this.route('jsframe');
	this.route('test');
	this.route('tool');
	this.route('database');
	this.route('collaboration');
	//this.route('index');
	this.route('career');
	this.route('portfolio');
	this.route('blog');
	this.route('contactus');
});


export default Router;
