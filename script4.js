
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
