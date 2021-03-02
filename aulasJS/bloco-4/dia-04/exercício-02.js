let verificaPalindrome = false;

function Palindromo(palavra) {
	let palavraContrario = '';
  for (let index = palavra.length -1; index >= 0; index -= 1) {
		palavraContrario = palavraContrario + palavra[index];	
	}
	if (palavra === palavraContrario) {
		verificaPalindrome = true
	} 
	return verificaPalindrome;
}
console.log (Palindromo('aba'));
