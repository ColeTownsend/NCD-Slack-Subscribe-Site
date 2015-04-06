// You can as well pass different parameters on each call
var mailChimp = new MailChimp( /* apiKey, { version: '2.0' } */ );

mailChimp.call( 'campaigns', 'list', {
        start: 0,
        limit: 99
    },
    // Callback beauty in action
    function ( error, result ) {
        if ( error ) {
            console.error( '[MailChimp][Campaigns][List] Error: %o', error );
        } else {
            // Do something with your data!
            console.info( '[MailChimp][Campaigns][List]: %o', result );
        }
    }
);
