 function calculate (expression) {
    const tokens = expression.trim().split(/\s+/); // Split the expression by spaces
    const stack = [];
    
    // Traverse from right to left
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
      
      if (!isNaN(token)) {
        // If the token is a number, push it onto the stack
        stack.push(parseFloat(token));
      } else {
        // The token is an operator, pop the necessary operands
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        let result;
        
        switch (token) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
          default:
            throw new Error(`Unsupported operator: ${token}`);
        }
        
        // Push the result back onto the stack
        stack.push(result);
      }
    }
    
    // The final result should be the only item in the stack
    return stack.pop();
  };
  