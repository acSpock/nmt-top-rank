angular.module('nmtApp.filters', []);
angular.module('nmtApp.services', []);
angular.module('nmtApp.directives', []);
angular.module('nmtApp.controllers', []);
angular.module('nmtApp', [
	'nmtApp.filters',
	'nmtApp.services',
	'nmtApp.directives',
	'nmtApp.controllers',
	'ngAnimate',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	'restangular'
]);