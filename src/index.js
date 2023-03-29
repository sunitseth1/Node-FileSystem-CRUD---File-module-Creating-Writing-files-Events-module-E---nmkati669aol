const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	myFileWriter.write("Hi, JournalDEV Users. ");
	myFileWriter.write("Thank You.");
	myFileWriter.end();

}
}

const myFileReader = async (fileName) => {
	console.log(myFileReader.toString());
	
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	console.log('myFileUpdater')
	
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	console.log(myFileDeleter);
	
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
