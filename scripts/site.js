$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > $('#firstsection').offset().top) {
        $('.section.header').removeClass('off');
    }
    else {
        $('.section.header').addClass('off');
    }
});

function slideCards(cards) {
	$.each(cards, function(index, value) {
		if (value) {
			$('#card' + (index + 2)).addClass('moved');
		}
		else {
			$('#card' + (index + 2)).removeClass('moved');
		}
	});
};

$(document).ready(function() {
	$('#card1').click(function() {
		slideCards([false, false, false, false, false]);
	})
	$('#card2').click(function() {
		slideCards([true, false, false, false, false]);
	})
	$('#card3').click(function() {
		slideCards([true, true, false, false, false]);
	})
	$('#card4').click(function() {
		slideCards([true, true, true, false, false]);
	})
	$('#card5').click(function() {
		slideCards([true, true, true, true, false]);
	})
	$('#card6').click(function() {
		slideCards([true, true, true, true, true]);
	});

	$('.sandwichbar').click(function() {
		$('.section.header').addClass('on');
	});

	$('span.x').click(function() {
		$('.section.header').removeClass('on');
	});

	$('span.credits').click(function() {
		$('p.contributors').slideToggle(500);
	});
});

function initialize() {
    var styles =
        [
			{
				"stylers": [
					{ "invert_lightness": true }
				]
			},{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{ "color": "#ffffff" },
					{ "lightness": -25 }
				]
			},{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{ "color": "#000000" }
				]
			},{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{ "color": "#ffffff" },
					{ "lightness": -25 }
				]
			},{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{ "invert_lightness": true },
						{ "visibility": "off" }
				]
			},{
				"featureType": "water",
				"stylers": [
					{ "color": "#535353" }
				]
			},{
				"featureType": "poi",
				"stylers": [
					{ "visibility": "off" }
				]
			},{
				"featureType": "transit",
				"stylers": [
					{ "visibility": "off" }
				]
			}
		]

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    var mapOptions = {
        zoom: 17,
        zoomControl: false,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        scrollwheel: false,
        draggable: false,
        center: new google.maps.LatLng(38.257404, -85.757145),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var image = 'content/images/humana-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(38.2563842,-85.7574939),
        map: map,
        icon: image
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}


google.maps.event.addDomListener(window, 'load', initialize);