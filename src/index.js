import { IttyRouter, html } from 'itty-router';
const router = IttyRouter();

const fallbackvideo = 'https://rizz.zip/blueberry-NhVxub8W3eof.mp4';
const fallbackimage = 'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg';

router.get('/:videourl+?', ({ params, query }) => {
	if (query) {
		let first = true;
		for (const [key, value] of Object.entries(query)) {
			if (first) {
				first = false;
				params.videourl += `?${key}=${value}`;
				continue;
			}
			params.videourl += `&${key}=${value}`;
		}
	}
	return html(`
  	<!DOCTYPE html>
  	<html>
  	<head>
    	  <title>stolen embeds</title>
    	  <meta property="og:image" content="${fallbackimage}">
    	  <meta property="og:type" content="video.other">
    	  <meta property="og:video:url" content="${params.videourl || fallbackvideo}">
    	  <meta property="og:video:width" content="1280">
    	  <meta property="og:video:height" content="720">
		  <style>
        	  body {
        	      background-color: #171717;
    	          color: #fff;
				  font-family: sans-serif;
    	      }
			  a {
				  color: #7dd3fc;
			}
    	  </style>
  	</head>
  	<body>
	${
		params.videourl
			? `<a href="${params.videourl}">link to embedded video</a><br>
		<video controls width="640" height="360">
    	    <source src="${params.videourl}" type="video/mp4">
    	</video>`
			: `<h3><a href="https://github.com/artifishvr/StolenEmbeds">artifishvr/StolenEmbeds</a></h3>
		<video controls width="300" height="300">
    	    <source src="${fallbackvideo}" type="video/mp4">
    	</video>`
	}
    	  <br>

    	  <h2>embed method from stolen.shoes</h2>
		  <h4>we do not host any of the content embedded or redirected through this site. please take issue with the content hoster.</h4>
  	</body>
  	</html>
  	`);
});

export default { ...router };
