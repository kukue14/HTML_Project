function contentDown() {
    document.getElementById('contentDown').innerHTML = 
}


    // Get the select element
    const fileSelect = document.getElementById('fileSelect');

    // Add an event listener for when an option is selected
    fileSelect.addEventListener('change', function() {
      // Get the selected value
      const selectedValue = fileSelect.value;

      // Open the selected file if a value is selected
      if (selectedValue) {
        // You would typically use AJAX to fetch and display the file content
        // For simplicity, let's just show an alert here
        alert(`Opening ${selectedValue}`);
      }
    });
 