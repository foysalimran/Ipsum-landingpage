/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
 function simulateClick(elem) {
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	var canceled = !elem.dispatchEvent(evt);
};

function prepareTabs(triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        tabTrigger.show()
        var sibling = this.parentNode.parentNode.firstChild;
        while (sibling) {
            if (sibling.tagName !== undefined) 
            {
                sibling.classList.remove('active');
            }
            sibling = sibling.nextSibling;
        }
        this.parentNode.classList.add('active');
    })
}

var triggerTabListTest = [].slice.call(document.querySelectorAll("#myTab a"));
triggerTabListTest.forEach(function (triggerEl) {
  prepareTabs(triggerEl);
});
