/* GNB */
$('#metismenu').metisMenu();

/* Scrollbar */
$('.jquery_scrollbar').scrollbar();

/* Datepicker */
$('.datepicker_input').datepicker({
  language: 'ko',
  autoclose: true,
});

/* Tooltip */
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

/* popover */
const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'focus',
    offset: [38, -40],
  });
});
