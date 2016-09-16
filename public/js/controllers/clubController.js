var app = angular.module('Afca');
app.controller("ClubController", function () {
    var ctrl = this;

    ctrl.showClubModal = function($event){
       var image = $($event.currentTarget).children("img").attr("src");
        ctrl.currentViewClub = image;
        $('#ClubModal').modal({blurring: true}).modal({
            onVisible: function () {
                $("#ClubModal").modal("refresh");
            }
        }).modal('show');
    }
});