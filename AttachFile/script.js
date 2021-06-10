window.onload = () => {
    const inputFile = document.getElementById('attach-file');

    inputFile.addEventListener('change', (event) => {
        const file = inputFile.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
            const root = document.getElementById('root');
            const image = document.createElement('img');
            image.src = event.target.result;
            root.appendChild(image)
        }
    })
    console.log('inputFile', inputFile);
}