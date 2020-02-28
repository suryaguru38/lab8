function initMap() {
	// add your code here
	
		// add your code here
		L.mapquest.key = 'x1G9xL8gkqjqj9UwXQxXp0MyBboGfKhx';
	
		var map = L.mapquest.map('map', {
			center: [32.878713, -117.236202],
			layers: L.mapquest.tileLayer('map'),
			zoom: 12,
			zoomControl: false
		});
	
		L.marker([32.878713, -117.236202]).addTo(map);
	}