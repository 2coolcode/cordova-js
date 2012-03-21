describe("network", function () {
    var network,
        exec = require('cordova/exec');
       
//    it("should fire exec on first-run", function() {
//        exec.reset();
//
          network = require('cordova/plugin/network');
//
//        expect(exec).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function), "Network Status", "getConnectionInfo", []);
//    });

    //TODO:  pjm - I just commented out this test since it's completely bogus.
    //       The TODO comment below pre-dates this particular TODO, and is 
    //       I assume referring to the test above which I've just commented out.
    //       Within a normal Cordova library, the network plugin will first
    //       get touched when the "globals" are set up in the builder.  As such,
    //       the test above would normally NEVER invoke the specified exec()
    //       call for the first time.  This test previously passed, but only
    //       because the test suite was loading it's own flavor of cordova
    //       bundled modules, instead of a real one.
    
    //TODO: There is a lot of code executed on the first require call to this plugin
    //      we should refactor or find a good way to call and test this code.
    //      
    //      since exec is a spy we can scrounge the list of calls to find it, but I would
    //      rather refactor to have something a little cleaner (maybe move this code into the init
    //      routine for the platform)

    it("can get the network info", function () {
        var success = jasmine.createSpy(),
            error = jasmine.createSpy();

        network.getInfo(success, error);
        expect(exec).toHaveBeenCalledWith(success, error, "Network Status", "getConnectionInfo", []);
    });
});
