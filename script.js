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
(function() {
            // List of allowed domains
            const allowedDomains = ['fontsgenerator.com', 'www.fontsgenerator.com'];
            const currentDomain = window.location.hostname;

            // Check if the current domain is in the allowed list
            if (!allowedDomains.includes(currentDomain)) {
                console.warn('Access denied: Unauthorized domain');
                return;
            }

            // Optional: Anti-debugging measures
            document.addEventListener('contextmenu', (e) => e.preventDefault()); // Disable right-click
            document.addEventListener('keydown', (e) => {
                if (e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                    (e.ctrlKey && e.shiftKey && e.key === 'J') || 
                    (e.ctrlKey && e.key === 'U')) {
                    e.preventDefault(); // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, and Ctrl+U
                }
            });

            // Show the protected content if the domain is authorized
            const content = document.getElementById('fresh');
            if (content) {
                content.style.display = 'block';
            }
        })();
      </script>

    
<script>
    var _0x145d = [
        '.fancytext', 'trim', 'click', '" readonly="readonly">', 'html', '"><i class="fa-regular fa-clone fa-lg" style=""></i></span>',
        'split', '<i class="fa-solid fa-spinner fa-spin"></i> Loading ...', '" id="copy_', 'keyup', '#result',
        '<span class="enabled-input-button copybutton" onclick="triggerAnimation(this)" style="cursor:pointer;" data-clipboard-action="copy" data-clipboard-target="#copy_',
        'append', '<i class="fa-solid fa-spinner"></i> Load More', 'val', '.loadmore', '#copy_',
        'Freaky Fonts', '</div>', '<div class="font-container" style="margin-top:9px;">',
        '<input type="text" style="text-align: center;" class="disabled-input demo" value="', 'each'
    ];

    (function (_0x33b3a1, _0x145d4e) {
        var _0x55849f = function (_0x27949e) {
            while (--_0x27949e) {
                _0x33b3a1.push(_0x33b3a1.shift());
            }
        };
        _0x55849f(++_0x145d4e);
    }(_0x145d, 317));

    var _0x5584 = function (_0x33b3a1, _0x145d4e) {
        _0x33b3a1 = _0x33b3a1 - 0x0;
        var _0x55849f = _0x145d[_0x33b3a1];
        return _0x55849f;
    };

    $(function () {
        // For the fancy text input field
        $(_0x5584('0xd'))[_0x5584('0x0')](function () {
            $('.fancytext')[_0x5584('0x5')]($(this).val());
            $.trim($(this)[_0x5584('0x5')]()) !== ''
                ? _0x16e353($(this)[_0x5584('0x5')]())
                : _0x16e353(_0x5584('0x8'));
        });

        var _0x335118 = 89;

        // Function to handle the fancy text processing
        function _0x16e353(_0x2c811a) {
            var _0x2663ae = '',
                _0x178821 = forward(_0x2c811a),
                _0x1a87c9 = _0x178821[_0x5584('0x13')]('\n\n'),
                _0x45fe25 = 1;

            $[_0x5584('0xc')](_0x1a87c9, function (_0x182fb4, _0x4e6741) {
                $(_0x5584('0x7') + _0x182fb4)[_0x5584('0x5')](_0x4e6741);
                _0x45fe25++;
            });

            for (var k = 89; k <= _0x335118; k++) {
                $(_0x5584('0x7') + k)[_0x5584('0x5')](crazyWithFlourishOrSymbols(_0x2c811a));
            }
        }

        // Button click event for loading more content
        $(_0x5584('0x6'))[_0x5584('0xf')](function () {
            var _0x1b6c2c = $(this);

            // Start loading animation
            _0x1b6c2c.html(_0x5584('0x14'));

            // Prevent output until loading completes (5 seconds delay)
            setTimeout(function () {
                var _0x2bc04d = $.trim($(_0x5584('0xd')).val());
                if (_0x2bc04d === '') _0x2bc04d = _0x5584('0x8');

                for (var _0x380798 = 1; _0x380798 <= 10; _0x380798++) {
                    var spanTitle = `<span class="font-title">Font Style ${_0x335118}</span>`;
                    var _0x3e0a13 = spanTitle + _0x5584('0xa') + _0x5584('0xb')
                        + crazyWithFlourishOrSymbols(_0x2bc04d)
                        + _0x5584('0x15') + _0x335118
                        + _0x5584('0x10') + '<div class="input-group-append">'
                        + _0x5584('0x2') + _0x335118
                        + _0x5584('0x12') + _0x5584('0x9')
                        + _0x5584('0x9');

                    _0x335118++;
                    $(_0x5584('0x1'))[_0x5584('0x3')](_0x3e0a13);
                }

                // Append a new span with class yyy inside all font-container divs
                $('.font-container').each(function () {
                    $(this).append('<span class="copy-success">✔ Copied!</span>');
                });

                // Reset button text after loading
                _0x1b6c2c.html('<i class="fa-solid fa-spinner"></i> Load More');
            }, 2000); // Changed delay to 5000ms (5 seconds)
        });
    });
</script>
<script>
var _0x3f28=['error','success','html','<i style="" class="fa-regular fa-clone fa-lg"></i>','.copybutton','<i class="fa-regular fa-paste fa-lg text-success" style=""></i>','click'];(function(_0x2fb8d5,_0x3f28f3){var _0x4b6145=function(_0x4a2bae){while(--_0x4a2bae){_0x2fb8d5['push'](_0x2fb8d5['shift']());}};_0x4b6145(++_0x3f28f3);}(_0x3f28,0x12c));var _0x4b61=function(_0x2fb8d5,_0x3f28f3){_0x2fb8d5=_0x2fb8d5-0x0;var _0x4b6145=_0x3f28[_0x2fb8d5];return _0x4b6145;};$(function(){$('body')['on'](_0x4b61('0x0'),_0x4b61('0x5'),function(){$(_0x4b61('0x5'))[_0x4b61('0x3')](_0x4b61('0x4')),$(this)[_0x4b61('0x3')](_0x4b61('0x6'));});});var clipboard=new ClipboardJS(_0x4b61('0x5'));clipboard['on'](_0x4b61('0x2'),function(_0x3409c3){}),clipboard['on'](_0x4b61('0x1'),function(_0x40217b){});
</script>
