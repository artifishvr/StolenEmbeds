import { IttyRouter, html } from 'itty-router'
const router = IttyRouter()
const fallbackvideo = "https://files.arti.lol/blueberry-NhVxub8W3eof.mp4"
const fallbackimage = "https://files.arti.lol/blank-FqJFgYnI3HSl.png"

router.get('/:videourl+?', ({ params }) => {
	const page = `
  	<!DOCTYPE html>
  	<html>
  	<head>
    	  <title>stolen embeds</title>
    	  <meta name="robots" content="noindex">
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
    	  </style>
  	</head>
  	<body>
   	   <a href="${params.videourl || fallbackvideo}">link to embedded video</a>
    	  <br>
    	  <video controls width="300" height="300">
    	      <source src="${fallbackvideo}" type="video/mp4">
    	  </video>
    	  <h2>embed method from stolen.shoes</h2>
		  <h4>we do not host any of the content embedded or redirected through this site. please take issue with the content hoster.</h4>
  	</body>
  	</html>
  	`
	return html(page)
})

export default { ...router }