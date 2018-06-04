(function(){
    $(document).ready(main);

    function main()
    {
        var background = document.getElementById('image-background');
        console.log('background image size is ' + $('#image-background').width() + 'x' + $('#image-background').height());
        
        $('#top-bar').css('width', $(window).width() + 'px');
        $('html').css('width', $(window).width());
        $('cert-area-background').css('width', $(window).width() + 'px');

        if ($(window).width() < 809)
           {
                $('#edgeTitle-Two').text('local');
                $('#edgeTitle-Two').css('height', '100px');
                console.log('width was detected at ' + $(window).width() + 'px which is less than 809px');
           }
           else
           {
                
           }
        
                
        $(window).resize(function(){
            console.log('background image size is ' + $('#image-background').width() + 'x' + $('#image-background').height());
            // $('#image-background').css('width', $(window).width());
            // $('#image-background').css('height', $(window).height());

            $('#top-bar').css('width', $(window).width() + 'px');
            $('cert-area-background').css('width', $(window).width() + 'px');
            $('html').css('width', $(window).width());

           if ($(window).width() < 809)
           {
                $('#edgeTitle-Two').text('local');
                $('#edgeTitle-Two').css('height', '100px');
                console.log('width was detected at ' + $(window).width() + 'px which is less than 809px');
           }
           else
           {

           }
        });
    }
})();