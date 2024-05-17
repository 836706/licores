document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		locale: 'es',
		headerToolbar: {
			left: 'prev,today,next',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},
		buttonText: {
			today: 'Hoy',
			month: 'Mes',
			week: 'Semana',
			day: 'Día',
		},
		allDayText: 'Horas',
		editable: true,
		selectable: true,
		select: function(info) {
			document.getElementById("customPrompt").style.display = "block";
			document.getElementById("submitButton").addEventListener("click", function() {
				var title = document.getElementById("eventInput").value.trim();
				if (title) {
					calendar.addEvent({
						title: title,
						start: info.start,
						end: info.end,
						allDay: info.allDay
					});
					document.getElementById("customPrompt").style.display = "none";
				}
			});
			document.getElementsByClassName("close")[0].addEventListener("click", function() {
				document.getElementById("customPrompt").style.display = "none";
			});
		},
		eventClick: function(info) {
			if (confirm("¿Estás seguro de que deseas eliminar este evento?")) {
				info.event.remove();
			}
		}
	});
	calendar.render();
});