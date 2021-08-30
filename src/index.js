module.exports = function check(str, bracketsConfig) {
	const openBrackets = ["(", "[", "{", "1", "3", "5"],
		closBrackets = [")", "]", "}", "2", "4", "6"],
		stack = [];

	for (let i = 0; i < str.length; i++) {
		if (openBrackets.indexOf(str[i]) != -1) {
			stack.push(str[i]);
		} else {
			if (closBrackets.indexOf(str[i]) != -1 && stack.length != 0) {
				if (
					openBrackets.indexOf(stack[stack.length - 1]) ==
					closBrackets.indexOf(str[i])
				) {
					stack.pop();
				}
			} else {
				str[i] == stack[stack.length - 1]
					? stack.pop()
					: stack.push(str[i]);
			}
		}
	}

	return stack.length == 0 ? true : false;
};
