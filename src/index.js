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
    	  <meta property="theme-color" content="#C74600">
    	  <style>
        	  body {
        	      background-color: #000000;
    	          color: #ffffff;
    	      }
    	  </style>
  	</head>
  	<body>
   	   <a href="${params.videourl || fallbackvideo}">link to embedded video</a>
    	  <br>
    	  <video controls>
    	      <source src="${fallbackvideo}" type="video/mp4">
    	  </video>
    	  <h1>embed method from stolen.shoes</h1>
  	</body>
  	</html>
  	`
	return html(page)
})

export default router