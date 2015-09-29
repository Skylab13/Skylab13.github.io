function openItem( $item ) {
				$item.find( 'img[src*="-grey"]' ).stop().fadeTo( 1500, 0 );
				$item.addClass( 'selected' );
				$item.stop().animate({
					height: 400
				});
				$('#panel-1').css( 'backgroundColor', $item.css( 'backgroundColor' ) );
			}

			$(function() {
				$('#carousel').carouFredSel({
					circular: false,
					infinite: false,
					width: '100%',
					height: 430,
					items: 3,
					auto: false,
					prev: '#prev',
					next: '#next',
					scroll: {
						items: 1,
						duration: 1000,
						easing: 'quadratic',
						onBefore: function( data ) {
							data.items.old.find( 'img[src*="-grey"]' ).stop().fadeTo( 500, 1 );
							data.items.old.removeClass( 'selected' );
							data.items.old.stop().animate({
								height: 400
							});
							$('#panel-1').css( 'backgroundColor', '#ddd' );
						},
						onAfter: function( data ) {
							openItem( data.items.visible.eq( 1 ) );
						}
					},
					onCreate: function( data ) {
						openItem( data.items.eq( 1 ) );
					}
				});
			});