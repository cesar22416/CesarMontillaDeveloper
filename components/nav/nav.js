document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.nav-link');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            // Add 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});
