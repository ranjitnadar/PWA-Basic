if('serviceWorker' in navigator){
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('./serviceWorker.js')
			.then(function(){
				console.log('SW Registered....');
			}).catch(function(err){
				console.log(err);
			})
	})
}else{
	console.log('no service worker');
}