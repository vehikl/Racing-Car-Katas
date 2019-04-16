class UnicodeFileToHtmlTextConverter {
	constructor(fileBlob) {
		this._fileBlob = fileBlob;
	}

	convertToHtml() {
		var fileReader = new FileReader();
		var text;
		fileReader.onload = function (evt) {
			text = evt.target.result;
		};
		fileReader.readAsText(this._fileBlob);

		var htmlLines = this._basicHtmlEncode(text);
		return htmlLines;
	}

	_basicHtmlEncode(source) {
		var stashNextCharacterAndAdvanceThePointer = function () {
			var c = source.charAt(i);
			i += 1;
			return c;
		};

		var addANewLine = function () {
			convertedLine = convertedLine.join('');
			result.push(convertedLine);
			convertedLine = [];
		};

		var pushACharacterToTheOutput = function () {
			convertedLine.push(characterToConvert);
		};

		var i = 0;
		var result = [];
		var convertedLine = [];
		var characterToConvert = stashNextCharacterAndAdvanceThePointer();
		while (i <= source.length) {
			switch (characterToConvert) {
				case '<':
					convertedLine.push('&lt;');
					break;
				case '>':
					convertedLine.push('&gt;');
					break;
				case '&':
					convertedLine.push('&amp;');
					break;
				case '\n':
					addANewLine();
					break;
				default:
					pushACharacterToTheOutput();
		}

			characterToConvert = stashNextCharacterAndAdvanceThePointer();
	}

	addANewLine();
		result = result.join('<br />');
		return result;
	}
}

module.exports = UnicodeFileToHtmlTextConverter;
