function chooseTarget(targets) {
	if (targets['top'] != undefined)
		return targets['top'];

	if (targets['middle'] != undefined)
		return targets['top'];

	if (targets['middle_right'] != undefined)
		return targets['middle_right'];

	return undefined;
}

function normalizeValues(target, resolution) {
	// Create range of 0 to 1
	var normalized_x = target[0] / resolution[0];
	var normalized_y = target[1] / resolution[1];

	// Expand to 2 and shift down to -1.
	normalized_x = (normalized_x * 2) - 1;
	normalized_y = (normalized_y * 2) - 1;

	// Return values from ranges of -1 to 1
	return [normalized_x, normalized_y];
}

function respond(res, targets) {
	var response = '<style>body { background: #0B2799; color: yellow; } </style>' +

	'<p>Brandon is awesome</p>';

	if (targets['top'] != undefined)
		response = response + 'top: ' + targets['top'][0] + ', ' + targets['top'][1] + '<br />';

	if (targets['middle'] != undefined)
		response = response + 'middle: ' + targets['middle'][0] + ', ' + targets['middle'][1] + '<br />';

	if (targets['middle_right'] != undefined)
		response = response + 'middle: ' + targets['middle_right'][0] + ', ' + targets['middle_right'][1] + '<br />';

	if (targets['bottom'] != undefined)
		response = response + 'bottom: ' + targets['bottom'][0] + ', ' + targets['bottom'][1] + '<br />';

	res.end(response);
}