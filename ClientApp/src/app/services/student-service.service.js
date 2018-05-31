"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this.myAppUrl + 'Group/')
            .map(function (response) { return response; })
            .catch(this.errorHandler);
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this._http.get(this.myAppUrl + "Group/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeService.prototype.saveEmployee = function (group) {
        return this._http.post(this.myAppUrl + 'Group/Create', group)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeService.prototype.updateEmployee = function (group) {
        return this._http.put(this.myAppUrl + 'Group/Edit', group)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this._http.delete(this.myAppUrl + "Group/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    EmployeeService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=group-service.service.js.map