var gith = require('gith').create( 9001 );

// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

gith({
    repo: 'Hoegie/skberlaarnas'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            console.log("master github changed");
            execFile('/volume1/web/nodeprojects/gitHub/skberlaarnas/skberlaarhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete' );
            });
    }
});