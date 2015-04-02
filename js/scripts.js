$(document).ready(function() {

  //call datepicker
  $('body').on('click', '.datetimepicker', function() {
      $(this).not('.hasDateTimePicker').datetimepicker({changeMonth: true,changeYear: true,dateFormat: "yy-mm-dd",timeFormat: 'HH:mm:00',yearRange: "1900:+10",showOn:'focus'}).focus();
  });

  //update date with an id of from into an id of to
  $('#from').change(function () {
      var d = $('#from').val();
      d = new Date(d);

      var month = ('0' + (d.getMonth()+1)).slice(-2);
      var year = d.getFullYear();
      var day = ('0'+d.getDate()).slice(-2);
      
      var hour = d.getHours()+1;
      var min = ('0'+d.getMinutes()).slice(-2);
      var sec = ('0'+d.getMilliseconds()).slice(-2);
      
      newdate = year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
      $('#to').val(newdate);
  });

});