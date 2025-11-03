function stringChop(str, size) {
  // Check for null or empty string as per acceptance criteria
  if (!str || str.length === 0) {
    return [];
  }

  const chunkSize = parseInt(size, 10);
  // Ensure chunkSize is a positive integer before proceeding
  if (isNaN(chunkSize) || chunkSize <= 0) {
      // Returning an empty array or the whole string could be valid error handling, 
      // but typically we stop if the size is invalid. Returning [] is safe here.
      return []; 
  }

  const result = [];
  let i = 0;

  // Iterate through the string, incrementing the index by the chunk size
  while (i < str.length) {
    // String.slice(start, end) is used to extract the chunk. 
    // It handles the end of the string gracefully, returning a shorter chunk if necessary.
    result.push(str.slice(i, i + chunkSize));
    
    // Advance the index
    i += chunkSize;
  }
  
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
// The function execution below assumes the prompts return valid strings/numbers.
// For robustness, an extra parse is included inside the function.
alert(stringChop(str, size));
