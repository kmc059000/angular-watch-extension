(function() {
    var port = chrome.runtime.connect({name: "angular-watches"});

    setInterval(function () {
        var watches = getWatches();
        var count = watches.count;

        //window.postMessage({ type: "angular-watches", watches: count }, '*');
        port.postMessage({type: "angular-watches", watches: count});
    }, 100);


    function getWatches() {
        return {
            count: 123
        };
        //var root = $(document.getElementsByTagName('html'));
        //var watchers = [];
        //var attributes = [];
        //var attributes_with_values = [];
        //var elements = [];
        //var elements_per_attr = [];
        //var scopes = [];
        //
        //function include(arr, obj) {
        //    return (arr.indexOf(obj) != -1);
        //}
        //
        //function is_not_duplicate(arr, obj) {
        //    if (typeof arr == "undefined") {
        //        return true;
        //    } else {
        //        if (include(arr, obj)) {
        //            return false;
        //        } else {
        //            return true;
        //        }
        //    }
        //}
        //
        //var f = function (element) {
        //    if (element.data().hasOwnProperty('$scope')) {
        //        if (typeof scopes[element.data().$scope.$id] == "undefined") {
        //            scopes[element.data().$scope.$id] = true;
        //            angular.forEach(element.data().$scope.$$watchers, function (watcher) {
        //                watchers.push(watcher);
        //                for (index = 0; index < element[0]['attributes'].length; ++index) {
        //                    if (is_not_duplicate(elements_per_attr[element[0]['attributes'][index].nodeName], element.data().$scope.$id)) {
        //                        if (typeof elements[element[0]['attributes'][index].nodeName] == "undefined") {
        //                            elements[element[0]['attributes'][index].nodeName] = [];
        //                        }
        //                        elements[element[0]['attributes'][index].nodeName].push({
        //                            element: "(Scope " + element.data().$scope.$id + "): " + element[0].outerHTML,
        //                            element_obj: element[0],
        //                            element_data: element.data(),
        //                            relevant_watcher: watcher,
        //                            current_value: watcher.last
        //                        });
        //                        if (typeof elements_per_attr[element[0]['attributes'][index].nodeName] == "undefined") {
        //                            elements_per_attr[element[0]['attributes'][index].nodeName] = [];
        //                        }
        //                        elements_per_attr[element[0]['attributes'][index].nodeName].push(element.data().$scope.$id);
        //                    }
        //                }
        //            });
        //        }
        //    }
        //    angular.forEach(element.children(), function (childElement) {
        //        f($(childElement));
        //    });
        //};
        //f(root);
        //console.log("####################");
        //console.log("Analysing Watchers");
        //console.log("####################");
        //console.log(" ");
        //console.log("Watchers:");
        //console.log(watchers.length);
        //console.log("----------------------------------------------");
        //console.log("Watched Elements grouped by attribute");
        //console.log(elements);
        //
        //return watchers.length;
    }
})();