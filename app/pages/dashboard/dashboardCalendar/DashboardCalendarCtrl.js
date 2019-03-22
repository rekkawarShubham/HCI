
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig, $http) {

    var loc = ["library", "auditorium"];
    var start_time, end_time, s_date, s_hours, s_minutes, s_seconds, formattedstartTime;
    var e_date, e_hours, e_minutes, e_seconds, formattedendTime;
    var finalstartdate, finalenddate;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $http({
      method: 'post',
      url: 'http://127.0.0.1:8010/api/calender_details',
      data: {
        loc: loc[0]
      }
    })
      .then(function successCallback(response) {
        console.log(response.data.result);
        if (response.data.result == 200) {
          console.log("Details Fetched");
          start_time = response.data.start_time.seconds;
          s_date = new Date(start_time * 1000);
          s_hours = s_date.getHours();
          s_minutes = "0" + s_date.getMinutes();
          s_seconds = "0" + s_date.getSeconds();
          formattedstartTime = s_hours + ':' + s_minutes.substr(-2) + ':' + s_seconds.substr(-2);
          console.log(formattedstartTime, s_date);
          finalstartdate = s_date.getFullYear().toString() + '-' + s_date.getMonth().toString() + '-' + s_date.getDate().toString();
          localStorage.setItem('mydate1',finalstartdate);
          console.log(finalstartdate.toString());
          
          end_time = response.data.end_time.seconds;
          e_date = new Date(end_time * 1000);
          e_hours = e_date.getHours();
          e_minutes = "0" + e_date.getMinutes();
          e_seconds = "0" + e_date.getSeconds();
          var formattedendTime = e_hours + ':' + e_minutes.substr(-2) + ':' + e_seconds.substr(-2);
          console.log(formattedendTime, e_date);
          finalenddate = e_date.getFullYear().toString() + '-' + e_date.getMonth().toString() + '-' + e_date.getDate().toString();
          console.log(finalenddate);
          localStorage.setItem('mydate2',finalenddate);
        }
        else if (response.data.result == 404) {
          console.log("UnsuccessFull");
        }
        else {
          toastr.error("Unable to Fetch Data");
        }

      });



    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-10-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Library',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: localStorage.getItem('mydate1'),
          end: localStorage.getItem('mydate2'),
          color: dashboardColors.blueStone
        },
        {
          title: 'Auditorium',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Seminar Hall',
          start: '2016-04-01T07:00:00',
          end: '2016-04-01T10:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();