$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > $('#FAQ').offset().top) {
        $('.section.header').removeClass('off');
    }
    else {
        $('.section.header').addClass('off');
    }
});

function slideCards(cards, active) {
	$.each(cards, function(index, value) {
		if (value) {
			$('#card' + (index + 2)).addClass('moved');
		}
		else {
			$('#card' + (index + 2)).removeClass('moved');
		}
		if ((index + 1) == active) {
			$('#card' + (index + 1)).addClass('active');
		}
		else {
			$('#card' + (index + 1)).removeClass('active');
		}
	});
};

$(document).ready(function() {
	$('#card1').click(function() {
		slideCards([false, false, false, false, false, false, false, false, false, false, false], 1);
	})
	$('#card2').click(function() {
		slideCards([true, false, false, false, false, false, false, false, false, false, false], 2);
	})
	$('#card3').click(function() {
		slideCards([true, true, false, false, false, false, false, false, false, false, false], 3);
	})
	$('#card4').click(function() {
		slideCards([true, true, true, false, false, false, false, false, false, false, false], 4);
	})
	$('#card5').click(function() {
		slideCards([true, true, true, true, false, false, false, false, false, false, false], 5);
	})
	$('#card6').click(function() {
		slideCards([true, true, true, true, true, false, false, false, false, false, false], 6);
	})
	$('#card7').click(function() {
		slideCards([true, true, true, true, true, true, false, false, false, false, false], 7);
	})
	$('#card8').click(function() {
		slideCards([true, true, true, true, true, true, true, false, false, false, false], 8);
	});
	// $('#card9').click(function() {
	// 	slideCards([true, true, true, true, true, true, true, true, false, false, false]);
	// })
	// $('#card10').click(function() {
	// 	slideCards([true, true, true, true, true, true, true, true, true, false, false]);
	// })
	// $('#card11').click(function() {
	// 	slideCards([true, true, true, true, true, true, true, true, true, true, false]);
	// })
	// $('#card12').click(function() {
	// 	slideCards([true, true, true, true, true, true, true, true, true, true, true]);
	// });

	$('.sandwichbar').click(function() {
		$('.section.header').addClass('on');
	});

	$('.section.header span.x').click(function() {
		$('.section.header').removeClass('on');
	});

	$('span.credits').click(function() {
		$('p.contributors').slideToggle(500);
	});

    $('.section.header a, #Home a').click(function () {
        var href = $(this).attr('href').toString();
        var top = $(href).offset();
        $('html, body').animate({
            scrollTop: (top.top + 5)
        }, 2000);
		$('.section.header').removeClass('on');
    });

    $('#nextsection').click(function() {
    	$('html, body').animate({
    		scrollTop: ($('#FAQ').offset().top + 5)
    	}, 1000);
    });

    $("#internButtonForm").click(function() {
        $('#internBox').addClass('on');
		// e.preventDefault();
    });

    $('#internBox span.x').click(function() {
    	$('#internBox').removeClass('on');
    });

	$("#employeeButtonForm").click(function() {
		$("#employeeBox").addClass('on');
		// e.preventDefault();
	});

    $('#employeeBox span.x').click(function() {
    	$('#employeeBox').removeClass('on');
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