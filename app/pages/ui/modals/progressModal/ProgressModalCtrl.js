/**
 * Created by n.poltoratsky
 * on 24.06.2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ui.modals')
        .controller('ProgressModalCtrl', ProgressModalCtrl);

    function ProgressModalCtrl($timeout, baProgressModal) {

        baProgressModal.setProgress(0);

        (function changeValue() {
            if (baProgressModal.getProgress() >= 100) {
                baProgressModal.close();
            } else {
                baProgressModal.setProgress(baProgressModal.getProgress() + 50);
                $timeout(changeValue, 300);
            }
            window.location.href="http://localhost:3000/#/AdmissionProcess";
        })();
    }

})();
