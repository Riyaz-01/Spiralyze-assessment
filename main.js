// NAVBAR
const btn = document.querySelector('.nav-opener');
const navbar = document.querySelector('#nav-items');
btn.addEventListener('click', () => {
	const height = '165px';
	if (navbar.style.maxHeight === height) {
		navbar.style.maxHeight = '0';
	} else {
		navbar.style.maxHeight = height;
	}
});

// COUNTRY LIST
let country_list = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antigua &amp; Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bosnia &amp; Herzegovina',
	'Botswana',
	'Brazil',
	'British Virgin Islands',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Cape Verde',
	'Cayman Islands',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Congo',
	'Cook Islands',
	'Costa Rica',
	'Cote D Ivoire',
	'Croatia',
	'Cruise Ship',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'French Polynesia',
	'French West Indies',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guam',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Isle of Man',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kuwait',
	'Kyrgyz Republic',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macau',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Namibia',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palestine',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Reunion',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Pierre &amp; Miquelon',
	'Samoa',
	'San Marino',
	'Satellite',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'South Africa',
	'South Korea',
	'Spain',
	'Sri Lanka',
	'St Kitts &amp; Nevis',
	'St Lucia',
	'St Vincent',
	'St. Lucia',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	"Timor L'Este",
	'Togo',
	'Tonga',
	'Trinidad &amp; Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks &amp; Caicos',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'Uruguay',
	'Uzbekistan',
	'Venezuela',
	'Vietnam',
	'Virgin Islands (US)',
	'Yemen',
	'Zambia',
	'Zimbabwe',
];
var select = document.getElementById('country');
for (var i = 0; i < country_list.length; i++) {
	var opt = country_list[i];
	var el = document.createElement('option');
	el.textContent = opt;
	el.value = opt;
	select.appendChild(el);
}

// FORM
window.addEventListener('load', function () {
	// Clear all input values in forms
	let formInputs = Array.prototype.slice.call(
		document.querySelectorAll('.form input')
	);
	const select = document.querySelector('.drop-row select');
	formInputs.forEach(function (input) {
		input.value = '';
	});

	// Add focusout event listeners to all form inputs
	formInputs.push(select);
	formInputs.forEach(function (input) {
		input.addEventListener('focusout', function () {
			if (this.value !== '') {
				this.classList.add('focus');
			} else {
				this.classList.remove('focus');
			}
		});
		input.addEventListener('focusin', function () {
			formInputs.forEach((input) => {
				input.parentElement.classList.remove('empty');
			});
		});
	});
});

function validate() {
	let errorFlag = false;
	// Get all input elements with class 'inp' inside elements with class 'inp-box'
	const inputs = document.querySelectorAll('.inp-box .inp');

	inputs.forEach(function (input) {
		input.parentElement.classList.remove('empty');
	});

	inputs.forEach(function (input) {
		if (!input.value && !errorFlag) {
			input.parentElement.classList.add('empty');
			errorFlag = true;
		} else {
			input.parentElement.classList.remove('empty');
		}
	});

	// Get the select element inside element with class 'drop-row'
	const select = document.querySelector('.drop-row select');

	if (select.value === '' && !errorFlag) {
		document.querySelector('.drop-row').classList.add('empty');
		errorFlag = true;
	} else {
		document.querySelector('.drop-row').classList.remove('empty');
	}

	if (!errorFlag) {
		document.location = 'thanks.html';
	}
}

// CAROUSEL
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let items = document.querySelectorAll('.carousel-item');
let itemsContainer = document.querySelector('.carousel-items');
let dots = document.querySelectorAll('.dot');
let totalitems = items.length;
let itemPosition = 0;

// Event Listeners
next.addEventListener('click', nextitem);
prev.addEventListener('click', previtem);
itemsContainer.addEventListener('scroll', updateDot);

// Update Position
function updatePosition() {
	//   Images
	itemsContainer.scrollTo(window.innerWidth * itemPosition, 0);

	//   Dots
	for (let dot of dots) {
		dot.className = dot.className.replace(' active', '');
	}
	dots[itemPosition].classList.add('active');
}

let dotUpdateTimeout = null;

function updateDot() {
	if (dotUpdateTimeout) {
		clearTimeout(dotUpdateTimeout);
	}
	dotUpdateTimeout = setTimeout(() => {
		const scrollLeft = itemsContainer.scrollLeft;
		const width = window.innerWidth;
		let newPosition = Math.round(scrollLeft / width);

		// Clamp to valid range
		if (newPosition < 0) newPosition = 0;
		if (newPosition >= totalitems) newPosition = totalitems - 1;

		if (itemPosition !== newPosition) {
			itemPosition = newPosition;
			updatePosition();
		}
	}, 50);
}

// Next item
function nextitem() {
	if (itemPosition === totalitems - 1) {
		itemPosition = 0;
	} else {
		itemPosition++;
	}
	updatePosition();
}
//Previous Image
function previtem() {
	if (itemPosition === 0) {
		itemPosition = totalitems - 1;
	} else {
		itemPosition--;
	}
	updatePosition();
}

// Dot Position
dots.forEach((dot, dotPosition) => {
	dot.addEventListener('click', () => {
		itemPosition = dotPosition;
		updatePosition(dotPosition);
	});
});

// VIDEO
function playPause() {
	var video = document.querySelector('#myVideo');
	var playButton = document.querySelector('.play-wrapper');

	if (video.paused) {
		video.play();
		playButton.classList.add('playing');
	} else {
		video.pause();
		playButton.classList.remove('playing');
	}
}
