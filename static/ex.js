
		var onClickOneHandler = function() {

			//get value of search bar
			var searcbarVal = $('#search-bar').val();

			//set value of serach bar
			$('#search-bar').val("");

			app.loadTweets();
		};

		var onClickTwoHandler = function() {
			var tweetsArray = [
				{
					'text': 'tweeeewrewt',
					'created_at': 'August 25, 2012'
				},

				{
					'text': 'tweeeaaaaat',
					'created_at': 'August 25, 2012'
				},
				{
					'text': 'aaasllosl',
					'created_at': 'August 25, 2012'
				}
			];
			app.tweets.add(tweetsArray);
		};

		//$('.btn').click(onClickHandler);
		$('#button-one').click(onClickOneHandler);
		$('#button-two').click(onClickTwoHandler);