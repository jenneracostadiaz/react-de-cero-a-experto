namespace Validations {
	export const validateText = (text: string): boolean => {
		return text.length > 3 ? true : false;
	};

	const validateDate = (myDate: Date): boolean => {
		return isNaN(myDate.getTime()) ? false : true;
	};
}

console.log(Validations.validateText('Hola'));
