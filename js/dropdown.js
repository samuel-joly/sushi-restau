function drop() {
	var aList = document.querySelector('#aList');
	var ul = document.querySelector('#aList ul');
	var container = document.getElementById('container');
	var footer = document.querySelector('footer');
	console.log(footer);
	
	if (ul.classList.contains('fullScreen')){

		
		aList.classList.add('grid-item--height2');
		aList.classList.remove('grid-item--height--max');
		
		ul.classList.remove('fullScreen');
		ul.classList.add('dropDownMenu');
		
		container.style.top='290px';
		footer.style.top = '270px';
		
		console.log('dropped');
	}
	else {
		aList.classList.remove('grid-item--height2');
		aList.classList.add('grid-item--height--max');
	
		ul.classList.add('fullScreen');
		ul.classList.remove('dropDownMenu');
		
		container.style.top='0px';
		footer.style.top = '0px';
		console.log('up');
	}
}