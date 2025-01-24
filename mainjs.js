<script>
function triggerAnimation(button) {
    // Copy the text to clipboard
    const input = button.previousElementSibling; // Get the input field
     // Select the text in the input
    document.execCommand('copy'); // Copy the selected text to clipboard

    // Trigger the animation
    const container = button.closest('.font-container');
    container.classList.add('show-success');
    setTimeout(() => {
        container.classList.remove('show-success');
    }, 2000); // Reset after 2 seconds
}



 document.querySelectorAll('.faq-question').forEach((button) => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;

                // Close other FAQs
                document.querySelectorAll('.faq-item').forEach((item) => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });

                // Toggle current FAQ
                faqItem.classList.toggle('active');
            });
        });
  
       document.getElementById("myRange").addEventListener("input", function() {
       var ele = document.getElementsByClassName('demo');
       for (var i = 0; i < ele.length; i++ ) { ele[i].style.fontSize = this.value + "px"; }});
            var slider = document.getElementById("myRange");
var output = document.getElementById("copy_1");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
    const navbarToggler = document.querySelector('.navbar-toggler');
    const body = document.body;

    navbarToggler.addEventListener('click', function() {
      if (navbarToggler.classList.contains('collapsed')) {
        body.style.marginTop = '85px';
document.querySelector(".custom-text").style.position = 'sticky';
document.querySelector(".custom-text").style.transition = 'all 0.3s ease-in-out';
document.querySelector(".custom-text").style.top = '75px'; // Smaller margin when navbar is collapsed
      } else {
        body.style.marginTop = '240px'; // Larger margin when navbar is expanded
        document.querySelector(".custom-text").style.position = 'sticky';
document.querySelector(".custom-text").style.top = '240px';
      }
    });
</script>
