/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];

    const closeKeyOpenValMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);

        if(char in closeKeyOpenValMap){
            if(stack.length === 0) return false;
        }

        // char is the key in this map object
        const correctOpeningTag = closeKeyOpenValMap[char];
        if(stack.pop() !== correctOpeningTag){
            return false;
        } else {
            // here only push opening tag into stack, as if char = closing bracket, the stack.pop() === correctOpeningTag, it will return true.
            stack.push(char)
        }
    }
    return stack.length === 0;
};
