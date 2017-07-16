chrome.extension.sendMessage({}, (response) => {
	let readyStateCheckInterval = setInterval(() => {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			document.body.innerHTML = document.body.innerHTML.replace(/millennial(s?)/gi, "kids these days");
		}
	}, 10);
});
