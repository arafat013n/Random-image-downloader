const downloadBtn = document.getElementById("downloadBtn");


downloadBtn.addEventListener("click", downloadFile);


function downloadFile() {
   // Get the value of the input field
   let url = "https://source.unsplash.com/random/500x500";
   // Use Axios to download the file
   axios({
      url: url,
      method: 'GET',
      responseType: 'blob',
   }).then((response) => {
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.setAttribute('download', 'image.jpg'); // set the file name
      document.body.appendChild(link);
      link.click();
   }).catch((error) => {
      console.log(error);
   });
}