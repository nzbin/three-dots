// copy to clickboard
function copyToClipboard(textToCopy) {
  var clipboard = navigator.clipboard;
	if (clipboard && window.isSecureContext) {
		// secure
		return clipboard.writeText(textToCopy);
	} else {
		// non-secure Compatible with writing
		const textArea = document.createElement('textarea');
		textArea.value = textToCopy;
		textArea.style.position = 'absolute';
		textArea.style.opacity = '0';
		textArea.style.right = '999999px';
    textArea.style.width="0";
    textArea.style.height="0";
		document.body.appendChild(textArea);
		textArea.select();
		return new Promise((res, rej) => {
			document.execCommand('copy') ? res() : rej();
			textArea.remove();
		});
	}
}
// add copy button
window.onload = function(){
  var snippet = document.querySelectorAll('.snippet');
  var length = snippet.length;
  var attributeName = 'data-title';
  for(var i =0; i<length; i++) {
    if(snippet[i].getAttribute(attributeName)){
      var copyArea = document.createElement('span');
      copyArea.className = "copy";
      copyArea.innerText = "Copy";
      snippet[i].onclick = function(){
        copyToClipboard(this.getAttribute(attributeName).split('.')[1])
      };
      snippet[i].appendChild(copyArea);
    }
  }
}